"use client";

import type { Metadata } from 'next';
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Video, Heart, MapPin } from "lucide-react";
import Link from "next/link";
import { departementsIDF } from "@/lib/departements-idf";

export default function MariagePage() {
    return (
        <main className="min-h-screen bg-cream selection:bg-gold selection:text-white">

            {/* Hero Section */}
            <section className="relative min-h-[75vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden pt-28 md:pt-0">
                <div className="absolute inset-0 bg-charcoal/40 z-10" />
                <div className="absolute inset-0">
                    <Image
                        src="/images for blog/photographe-cameraman-mariage-maghrebin.jpg"
                        alt="Photographe Mariage Oriental Paris"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-gold uppercase tracking-[0.2em] text-sm md:text-base mb-4 block">
                            Paris & Île-de-France (94)
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight shadow-sm">
                            Photographe & Cameraman <br className="hidden md:block" /> Mariage Oriental
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-8">
                            De la cérémonie du henné à l'ambiance de la salle, nous immortalisons chaque tradition de votre mariage maghrébin (marocain, algérien, tunisien).
                        </p>
                        <a
                            href="/#contact"
                            className="inline-block bg-gold text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-charcoal transition-all duration-300"
                        >
                            Vérifier nos disponibilités
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* SEO Text Section: Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-6">
                            L'Expertise du Mariage Maghrébin à Paris
                        </h2>
                        <p className="text-charcoal/70 text-lg leading-relaxed max-w-3xl mx-auto">
                            Un mariage oriental est unique. Les tenues de la Ziana, l'entrée majestueuse en Amaria, les rythmes envoûtants de la Dakka Marrakchia... En tant que <strong>photographe et vidéaste spécialisés dans le mariage maghrébin à Paris et en Île-de-France</strong>, Studioriad comprend et anticipe ces moments cruciaux pour vous offrir des souvenirs à la hauteur de votre célébration.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 mt-16">
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors duration-300">
                                <Camera className="w-8 h-8 text-gold group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-serif text-charcoal mb-3">Photo-Reportage</h3>
                            <p className="text-charcoal/70 text-sm leading-relaxed">
                                Fini les poses figées : nous privilégions la spontanéité et l'émotion pour capturer la véritable essence de votre couple et de vos invités.
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors duration-300">
                                <Video className="w-8 h-8 text-gold group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-serif text-charcoal mb-3">Film Cinématographique</h3>
                            <p className="text-charcoal/70 text-sm leading-relaxed">
                                Notre cameraman de mariage réalise un film immersif qui retranscrit l'ambiance, les musiques et l'énergie de votre soirée.
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors duration-300">
                                <Heart className="w-8 h-8 text-gold group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-serif text-charcoal mb-3">Un Duo Complice</h3>
                            <p className="text-charcoal/70 text-sm leading-relaxed">
                                Travailler avec une équipe photo et vidéo habituée à collaborer garantit une discrétion totale et une esthétique visuelle cohérente.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Informational SEO Content for internal linking */}
            <section className="py-24 bg-cream overflow-hidden">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-[4/5] md:aspect-auto md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images for blog/details-mariage-oriental.jpg"
                            alt="Détails Mariage Oriental"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-6">
                            Nos Conseils pour votre Mariage
                        </h2>
                        <div className="space-y-6 text-charcoal/80 leading-relaxed text-lg">
                            <p>
                                Pour en savoir plus sur les avantages de choisir une équipe complète, n'hésitez pas à lire notre article dédié : <br />
                                <a href="/blog/photographe-cameraman-mariage-maghrebin" className="text-gold hover:underline font-medium">Choisir le Meilleur Photographe et Cameraman pour un Mariage Maghrébin</a>.
                            </p>
                            <p className="text-sm border-l-4 border-gold/30 pl-4 py-2 italic bg-gold/5">
                                Astuce de pro : Prévoyez toujours un moment privilégié lors de la "Golden Hour" pour réaliser vos portraits de couple avec une lumière douce et romantique.
                            </p>
                            <div className="pt-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <MapPin className="text-gold shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Déplacements</h4>
                                        <p className="text-sm">Nous nous déplaçons dans toute l'Île-de-France (Paris 75, Val-de-Marne 94, Seine-et-Marne 77, Essonne 91, Hauts-de-Seine 92, Seine-Saint-Denis 93, Val-d'Oise 95, Yvelines 78) et dans toute la France sur demande.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local SEO sections */}
            <section className="py-16 bg-white border-t border-gold/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="font-serif text-2xl text-charcoal mb-6">Nos Zones d'Intervention en Île-de-France</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {departementsIDF.map(dept => (
                            <Link key={dept.slug} href={`/mariage/${dept.slug}`} className="px-4 py-2 bg-cream border border-charcoal/5 rounded-full shadow-sm text-sm text-charcoal hover:bg-gold hover:text-white hover:border-gold transition-colors">
                                {dept.name} ({dept.number})
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
