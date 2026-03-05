import type { Metadata } from 'next';
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/lib/blog-data";
import { BlogContent } from "./BlogContent";

export const metadata: Metadata = {
    title: "Le Journal : Inspirations & Conseils de votre Photographe Mariage à Paris",
    description: "Découvrez nos reportages de mariage, conseils d'organisation et inspirations pour votre événement en Île-de-France. Par Studioriad.",
};

export default function BlogIndex() {
    return (
        <main className="min-h-screen bg-cream selection:bg-gold selection:text-white">
            <BlogContent posts={blogPosts} />
            <Footer />
        </main>
    );
}
