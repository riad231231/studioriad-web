"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";
import { cn } from "@/lib/utils";

export function BlogContent({ posts }: { posts: BlogPost[] }) {
    const categories = ["Tous", ...Array.from(new Set(posts.map(p => p.category)))];
    const [activeCategory, setActiveCategory] = useState("Tous");

    const filteredPosts = activeCategory === "Tous"
        ? posts
        : posts.filter(p => p.category === activeCategory);

    // Only show hero post when "Tous" is selected
    const heroPost = activeCategory === "Tous" ? posts[0] : null;
    const gridPosts = activeCategory === "Tous" ? posts.slice(1) : filteredPosts;

    return (
        <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 container mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">Le Journal</h1>
                <p className="text-charcoal/70 text-lg max-w-2xl mx-auto mb-10">
                    Découvrez nos derniers reportages, conseils inédits et inspirations pour organiser votre événement en Île-de-France.
                </p>

                {/* Categories Filter */}
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "px-6 py-2 rounded-full text-xs font-medium uppercase tracking-widest transition-all duration-300",
                                activeCategory === cat
                                    ? "bg-gold text-white shadow-md"
                                    : "bg-white text-charcoal border border-charcoal/10 hover:border-gold hover:text-gold"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Hero Post */}
            {heroPost && (
                <Link href={`/blog/${heroPost.slug}`} className="group block mb-16">
                    <div className="grid md:grid-cols-2 gap-0 items-center bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-charcoal/5">
                        <div className="relative aspect-[4/3] md:aspect-auto md:h-full w-full bg-gray-200 overflow-hidden">
                            <Image
                                src={heroPost.coverImage}
                                alt={heroPost.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                        </div>
                        <div className="p-8 md:p-12 lg:p-16 space-y-4 flex flex-col justify-center h-full">
                            <div className="flex items-center gap-4 text-xs font-serif italic text-charcoal/60">
                                <span>{heroPost.date}</span>
                                <span>•</span>
                                <span className="text-gold not-italic uppercase tracking-widest font-sans font-semibold">{heroPost.category}</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal group-hover:text-gold transition-colors duration-300 leading-tight">
                                {heroPost.title}
                            </h2>
                            <p className="text-charcoal/70 font-sans text-base leading-relaxed line-clamp-4">
                                {heroPost.excerpt}
                            </p>
                            <div className="flex items-center justify-between mt-8 pt-6 border-t border-charcoal/10">
                                <span className="inline-block text-sm uppercase tracking-widest text-gold font-medium">
                                    Lire l'article
                                </span>
                                <span className="flex items-center text-xs text-charcoal/50 font-sans">
                                    <Clock size={16} className="mr-1.5" /> {heroPost.readingTime}
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            )}

            {/* Grid Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gridPosts.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-charcoal/5">
                        <div className="relative aspect-[3/2] overflow-hidden bg-gray-200">
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-charcoal font-semibold shadow-sm">
                                {post.category}
                            </div>
                        </div>

                        <div className="p-6 md:p-8 flex-grow flex flex-col">
                            <span className="text-xs font-serif italic text-charcoal/60 mb-3 block">{post.date}</span>
                            <h3 className="text-xl md:text-2xl font-serif text-charcoal group-hover:text-gold transition-colors duration-300 mb-3 leading-snug">
                                {post.title}
                            </h3>
                            <p className="text-charcoal/70 font-sans text-sm leading-relaxed line-clamp-3 mb-8 flex-grow">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between pt-5 border-t border-charcoal/10 mt-auto">
                                <span className="text-xs uppercase tracking-widest text-gold font-medium">
                                    Lire
                                </span>
                                <span className="flex items-center text-xs text-charcoal/50 font-sans">
                                    <Clock size={14} className="mr-1.5" /> {post.readingTime}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {filteredPosts.length === 0 && (
                <div className="text-center py-24 text-charcoal/60">
                    <p className="text-lg">Aucun article trouvé dans cette catégorie.</p>
                </div>
            )}
        </section>
    );
}
