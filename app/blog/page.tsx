import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/lib/blog-data";
import Link from "next/link";
import Image from "next/image";

export default function BlogIndex() {
    return (
        <main className="min-h-screen bg-cream selection:bg-gold selection:text-white">
            <Navbar />

            <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-gold uppercase tracking-[0.2em] text-sm">Journal</span>
                    <h1 className="text-4xl md:text-6xl font-serif mt-4 text-charcoal">Histoires & Conseils</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {blogPosts.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.slug} className="group cursor-pointer">
                            <div className="relative aspect-[3/2] overflow-hidden mb-6 bg-gray-200">
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                            </div>

                            <div className="space-y-3">
                                <span className="text-xs font-serif italic text-charcoal/60">{post.date}</span>
                                <h2 className="text-2xl font-serif text-charcoal group-hover:text-gold transition-colors duration-300">
                                    {post.title}
                                </h2>
                                <p className="text-charcoal/70 font-sans text-sm leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <span className="inline-block text-xs uppercase tracking-widest text-gold mt-2 border-b border-gold/30 pb-0.5 group-hover:border-gold transition-colors">
                                    Lire l'article
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
