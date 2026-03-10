import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // Règle générale : tous les robots autorisés
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/api/'],
            },
            // Robots IA OpenAI — accès explicitement accordé
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
            },
            {
                userAgent: 'OAI-SearchBot',
                allow: '/',
            },
            // Robot IA Google (Gemini) — accès explicitement accordé
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            // Robot IA Perplexity — accès explicitement accordé
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            // Robot IA Anthropic (Claude) — accès explicitement accordé
            {
                userAgent: 'ClaudeBot',
                allow: '/',
            },
        ],
        sitemap: 'https://studioriad.com/sitemap.xml',
    }
}
