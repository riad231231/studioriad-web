"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.5"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    return (
        <section id="about" className="py-24 bg-cream text-charcoal" ref={containerRef}>
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    style={{ opacity, y }}
                    className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
                >
                    {/* Image Column */}
                    <div className="w-full md:w-5/12 relative aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
                        <Image
                            src="/stills/riad-photographe-mariage-paris.jpg"
                            alt="Riad - Photographe Mariage"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 40vw"
                        />
                    </div>

                    {/* Text Column */}
                    <div className="w-full md:w-7/12 text-left space-y-6">
                        <span className="block text-gold text-xs uppercase tracking-[0.2em] mb-2">
                            À propos
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif leading-tight">
                            "hey ! Je suis Riad.."
                        </h2>
                        <div className="text-lg font-light leading-relaxed text-charcoal/80 space-y-4 text-justify">
                            <p>
                                je suis un photographe de mariages pour événements Privés et Corporate, et vidéaste cinématographique orienté cinéma narratif.
                            </p>
                            <p>
                                Un mariage ou une fête de famille ne se photographie pas, il se ressent. Fort de 25 ans d'expérience, j'anticipe les rires et les larmes pour saisir l'instantané, sans jamais m'imposer.</p>
                            <p> Mon approche d'artiste polyvalent me permet de basculer de la photo à la vidéo avec une seule obsession : raconter votre histoire de manière authentique.</p>


                        </div>
                        <div className="pt-4">
                            {/* <Image
                                src="/signature.png" // Placeholder if needed, or just remove if no signature image
                                alt=""
                                width={150}
                                height={50}
                                className="opacity-0" // Hidden for now as we don't have it, relying on text
                            /> */}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
