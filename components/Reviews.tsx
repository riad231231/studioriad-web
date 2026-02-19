"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
    {
        author: "Kilimba - Mad Y (MYO)",
        stars: 5,
        date: "il y a un mois",
        text: "Trop ! Fort . Merci pour les photos et la vidéo de Mariage de ma nièce tout ce travail est juste magnifiques et abouti . . . ."
    },
    {
        author: "Joyce Yougye",
        stars: 5,
        date: "il y a 3 mois",
        text: "Riad a longtemps fait les photos d’identité de mes enfants. Et lors d’un rendez vous nous avons appris qu'il faisait aussi les mariages. Merci à Riad pour les souvenirs de nos mariages. Les photos sont incroyable le film du mariage aussi."
    },
    {
        author: "Leila B",
        stars: 5,
        date: "il y a 5 mois",
        text: "Riad a réalisé la vidéo et les photos de notre mariage. C’était tout simplement parfait ! Je recommande vivement, il est plein d’inspiration. Merci encore et à très vite pour le reste de nos évènements"
    },
    {
        author: "Corinne ALBERT",
        stars: 5,
        date: "il y a un an",
        text: "Un photographe de talent très professionnel et sympathique et à l'écoute de ses clients."
    },
    {
        author: "Sabrina B-Gacem",
        stars: 5,
        date: "il y a un an",
        text: "Un grand merci à Riad qui a rendu notre mariage incroyable. Un photographe qui sait vous mettre à l'aise pour deux grands timides comme nous. Je le recommande x 1000."
    },
    {
        author: "juliette cqt",
        stars: 5,
        date: "il y a 2 ans",
        text: "Un grand merci à Riad qui est un photographe vraiment talentueux et surtout qui fait preuve de beaucoup de créativité. Cela change des photos de mariage « standards » que l’on retrouve habituellement!"
    }
];

export function Reviews() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);


    return (
        <section className="py-24 bg-cream text-charcoal overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-gold uppercase tracking-[0.2em] text-sm">Témoignages</span>
                    <h2 className="text-3xl md:text-5xl font-serif mt-4 text-charcoal">Ils nous ont fait confiance</h2>
                </motion.div>

                <div className="relative group max-w-7xl mx-auto">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-6">
                            {reviews.map((review, index) => (
                                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6">
                                    <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-center text-center border border-gold/10">
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} className={i < review.stars ? "fill-gold text-gold" : "text-gray-300"} />
                                            ))}
                                        </div>
                                        <p className="text-charcoal/80 font-serif italic mb-6 leading-relaxed text-sm md:text-base">
                                            &ldquo;{review.text}&rdquo;
                                        </p>
                                        <div className="mt-auto">
                                            <h4 className="font-medium text-charcoal uppercase tracking-widest text-xs mb-1">{review.author}</h4>
                                            <span className="text-xs text-charcoal/40">{review.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={scrollPrev}
                        className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-charcoal hover:text-gold transition-colors z-10 disabled:opacity-50"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-charcoal hover:text-gold transition-colors z-10 disabled:opacity-50"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mt-16 pt-8 border-t border-gold/10"
                >
                    {/* Google Badge */}
                    <div className="flex flex-col items-center gap-2 group cursor-pointer">
                        <div className="flex items-center gap-2">
                            <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span className="font-serif text-xl text-charcoal">Google</span>
                        </div>
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} className="fill-[#FBBC05] text-[#FBBC05]" />
                            ))}
                        </div>
                        <span className="text-xs text-charcoal/60 uppercase tracking-widest mt-1 group-hover:text-gold transition-colors">4.9/5.0 - Excellent</span>
                    </div>

                    {/* Mariage.net Badge */}
                    <div className="flex flex-col items-center gap-2 group cursor-pointer">
                        <div className="flex items-center gap-2">
                            <svg viewBox="0 0 100 100" className="w-6 h-6 text-[#F94544] fill-current" aria-hidden="true">
                                <path d="M50 90.2l-3.6-3.7C20.6 69.1 5 53 5 33.6 5 18.1 16.5 5.5 31.2 5.5c8.6 0 16.2 4.4 20.8 11.2C56.6 9.9 64.2 5.5 72.8 5.5 87.5 5.5 99 18.1 99 33.6c0 19.4-15.6 35.5-41.4 52.9L50 90.2z" />
                            </svg>
                            <span className="font-serif text-xl text-charcoal">Mariage.net</span>
                        </div>
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} className="fill-[#FBBC05] text-[#FBBC05]" />
                            ))}
                        </div>
                        <span className="text-xs text-charcoal/60 uppercase tracking-widest mt-1 group-hover:text-red-500 transition-colors">5.0/5.0 - Excellent</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
