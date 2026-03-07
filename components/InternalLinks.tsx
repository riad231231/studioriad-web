"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, BookOpen, ChevronRight } from "lucide-react";
import { departementsIDF } from "@/lib/departements-idf";
import { blogPosts } from "@/lib/blog-data";

export function InternalLinks() {
    // Get the last 3 blog posts
    const latestPosts = blogPosts.slice(0, 3);

    return (
        <section className="py-24 bg-cream/50">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Zones d'intervention */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                                <MapPin size={20} />
                            </div>
                            <h2 className="text-3xl font-serif text-charcoal">Nos Zones d&apos;Intervention</h2>
                        </div>
                        <p className="text-charcoal/70 mb-8 max-w-lg">
                            Basés à Vitry-sur-Seine, nous nous déplaçons dans toute l&apos;Île-de-France pour capturer vos plus beaux moments.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {departementsIDF.map((dept) => (
                                <Link
                                    key={dept.slug}
                                    href={`/mariage/${dept.slug}`}
                                    className="px-4 py-2 bg-white border border-charcoal/5 rounded-lg text-sm text-charcoal/80 hover:border-gold hover:text-gold transition-all duration-300 text-center shadow-sm"
                                >
                                    {dept.name} ({dept.number})
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Blog / Journal */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                                <BookOpen size={20} />
                            </div>
                            <h2 className="text-3xl font-serif text-charcoal">Le Journal</h2>
                        </div>
                        <p className="text-charcoal/70 mb-8 max-w-lg">
                            Inspirations, conseils d&apos;organisation et reportages de mariage pour vous accompagner dans vos préparatifs.
                        </p>
                        <div className="space-y-4">
                            {latestPosts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group flex items-center justify-between p-4 bg-white border border-charcoal/5 rounded-xl hover:border-gold transition-all duration-300 shadow-sm"
                                >
                                    <span className="text-charcoal/90 font-medium group-hover:text-gold transition-colors pr-4">
                                        {post.title}
                                    </span>
                                    <ChevronRight size={18} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            ))}
                            <Link
                                href="/blog"
                                className="inline-flex items-center text-gold text-sm uppercase tracking-widest font-semibold mt-4 hover:translate-x-1 transition-transform"
                            >
                                Voir tous les articles <ChevronRight size={16} className="ml-1" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
