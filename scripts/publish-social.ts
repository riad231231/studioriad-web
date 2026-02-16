import fs from 'fs';
import path from 'path';
import 'dotenv/config';
import FormData from 'form-data';

// Basic frontmatter parser for our simple template
function parsePost(content: string) {
    const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return { meta: {}, body: content };

    const metaString = match[1];
    const body = match[2].trim();

    const meta: Record<string, any> = {};
    metaString.split('\n').forEach(line => {
        const parts = line.split(':');
        if (parts.length < 2) return;

        const key = parts[0].trim();
        let value: any = parts.slice(1).join(':').trim();

        // Remove quotes
        if (value.startsWith('"') && value.endsWith('"')) {
            value = value.slice(1, -1);
        }

        // Parse array
        if (value.startsWith('[') && value.endsWith(']')) {
            value = value.slice(1, -1).split(',').map((s: string) => s.trim().replace(/^"|"$/g, ''));
        }

        meta[key] = value;
    });

    return { meta, body };
}

// Function to upload image to ImgBB
async function uploadToImgBB(imagePath: string): Promise<string> {
    const apiKey = process.env.IMGBB_API_KEY;
    if (!apiKey) {
        throw new Error("IMGBB_API_KEY is missing in .env");
    }

    // Remove leading slash if it's there erroneously for local paths or check if it's an absolute path
    // If the user provided a path relative to project root like "public/images/foo.jpg" or "/public/..."
    let cleanPath = imagePath;
    if (cleanPath.startsWith('/') && !fs.existsSync(cleanPath)) {
        // Try relative to cwd
        cleanPath = cleanPath.substring(1);
    }

    const fullPath = path.isAbsolute(cleanPath) ? cleanPath : path.resolve(process.cwd(), cleanPath);

    if (!fs.existsSync(fullPath)) {
        throw new Error(`Image file not found at: ${fullPath}`);
    }

    const imageBuffer = fs.readFileSync(fullPath);
    const base64Image = imageBuffer.toString('base64');

    // Use URLSearchParams for x-www-form-urlencoded
    const params = new URLSearchParams();
    params.append('image', base64Image);

    try {
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
            method: 'POST',
            body: params
        });

        const data = await response.json();
        if (!data.success) {
            throw new Error(`ImgBB Error: ${data.error?.message || 'Unknown error'}`);
        }

        return data.data.url;
    } catch (error) {
        throw new Error(`Failed to upload to ImgBB: ${error}`);
    }
}

async function main() {
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;

    if (!webhookUrl) {
        console.error("❌ ERREUR: La variable MAKE_WEBHOOK_URL est manquante dans le fichier .env");
        process.exit(1);
    }

    const draftsDir = path.join(process.cwd(), 'social', 'drafts');
    const publishedDir = path.join(process.cwd(), 'social', 'published');

    if (!fs.existsSync(draftsDir)) fs.mkdirSync(draftsDir, { recursive: true });
    if (!fs.existsSync(publishedDir)) fs.mkdirSync(publishedDir, { recursive: true });

    const files = fs.readdirSync(draftsDir).filter(f => f.endsWith('.md'));

    if (files.length === 0) {
        console.log("📭 Aucun brouillon trouvé dans social/drafts/");
        return;
    }

    console.log(`🚀 ${files.length} post(s) trouvé(s) à publier...`);

    for (const file of files) {
        const filePath = path.join(draftsDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const { meta, body } = parsePost(content);

        console.log(`📤 Traitement de: ${file} (${meta.title || 'Sans titre'})...`);

        let finalImageUrl = meta.image;

        // Check if image is local and needs upload
        if (meta.image && !meta.image.startsWith('http')) {
            console.log(`   📸 Image locale détectée (${meta.image}). Upload vers ImgBB en cours...`);
            try {
                finalImageUrl = await uploadToImgBB(meta.image);
                console.log(`   ✅ Image uploadée : ${finalImageUrl}`);
            } catch (error) {
                console.error(`   ❌ Erreur upload image:`, error);
                console.error(`   ⚠️ Le post sera envoyé sans image valide.`);
            }
        }

        // Prepare payload for Make/Zapier
        const payload = {
            ...meta,
            image: finalImageUrl,
            caption: body,
            filename: file,
            timestamp: new Date().toISOString()
        };

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status} ${response.statusText}`);
            }

            console.log(`✅ Post envoyé avec succès !`);
            fs.renameSync(filePath, path.join(publishedDir, file));

        } catch (error) {
            console.error(`❌ Échec de l'envoi pour ${file}:`, error);
        }
    }
}

main().catch(console.error);
