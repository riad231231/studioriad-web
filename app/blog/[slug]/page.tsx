import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";

// For static export to work with dynamic routes, we need to generate params at build time
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-cream selection:bg-gold selection:text-white">
            <Navbar />

            <article className="pt-32 pb-24">
                {/* Header */}
                <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center text-charcoal/60 hover:text-gold transition-colors mb-8 text-sm uppercase tracking-widest font-medium">
                        <ChevronLeft size={16} className="mr-1" /> Retour au journal
                    </Link>

                    <span className="block text-gold font-serif italic mb-4">{post.date}</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-12 leading-tight">
                        {post.title}
                    </h1>
                </div>

                {/* Hero Image */}
                <div className="relative w-full aspect-[21/9] md:aspect-[2.5/1] max-w-[1920px] mx-auto mb-16 md:mb-24 bg-gray-200">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content */}
                <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-3xl">
                    <div
                        className="prose prose-lg prose-headings:font-serif prose-headings:text-charcoal prose-headings:font-normal prose-p:text-charcoal/80 prose-p:font-sans prose-p:leading-relaxed prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-li:text-charcoal/80"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </article>

            <Footer />
        </main>
    );
}
