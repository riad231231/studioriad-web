"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryImages = [
    "/stills/portrait-mariee-paris.jpg",
    "/stills/photographe-mariage-paris-01.jpg",
    "/stills/cocktail-mariage-paris.jpg",
    "/stills/reception-mariage-ile-de-france.jpg",
    "/stills/details-mariage-luxe.jpg",
    "/stills/mariage-maghrebin-paris.jpg",
    "/stills/ceremonie-laique-ile-de-france.jpg",
    "/stills/entree-des-maries-paris.jpg",
    "/stills/preparatifs-mariage-paris-01.jpg",
    "/stills/session-couple-paris-01.jpg",
    "/stills/soiree-mariage-region-parisienne.jpg",
    "/stills/emotion-mariage-paris.jpg",
    "/stills/mariage-luxe-ile-de-france-01.jpg",
    "/stills/reportage-mariage-region-parisienne-01.jpg",
    "/stills/mariage-ile-de-france-01.jpg",
];

interface GalleryProps {
    images?: string[];
    title?: string;
    subtitle?: string;
    id?: string;
}

export function Gallery({
    images = galleryImages,
    title = "Moments Précieux",
    subtitle = "Portfolio",
    id = "photos"
}: GalleryProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        dragFree: true, // Allow smooth free scrolling like the reference
        containScroll: "trimSnaps"
    });
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);

    const onSelect = useCallback((api: any) => {
        setSelectedIndex(api.selectedScrollSnap());
    }, []);

    const onScroll = useCallback((api: any) => {
        const progress = Math.max(0, Math.min(1, api.scrollProgress()));
        setScrollProgress(progress * 100);
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        onScroll(emblaApi);

        emblaApi.on("select", onSelect);
        emblaApi.on("scroll", onScroll);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("reInit", onScroll);

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("scroll", onScroll);
            emblaApi.off("reInit", onSelect);
            emblaApi.off("reInit", onScroll);
        };
    }, [emblaApi, onSelect, onScroll]);

    return (
        <section id={id} className="py-24 bg-white text-charcoal overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 mb-8 relative flex items-end justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="text-gold uppercase tracking-[0.2em] text-sm">{subtitle}</span>
                    <h2 className="text-4xl md:text-5xl font-serif mt-2">{title}</h2>
                </motion.div>

                <div className="hidden md:block absolute right-8 bottom-1 font-serif italic text-gold/80 text-lg">
                    Photo {selectedIndex + 1} sur {images.length}
                </div>
            </div>

            {/* Carousel */}
            <div className="w-full relative group">
                <div className="overflow-visible" ref={emblaRef}>
                    <div className="flex touch-pan-y pl-4 md:pl-8 gap-4">
                        {images.map((src, index) => (
                            <div key={index} className="flex-[0_0_auto] min-w-0">
                                <motion.div
                                    whileHover={{ opacity: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative h-[35vh] md:h-[50vh] cursor-pointer overflow-hidden group"
                                    onClick={() => setLightboxImage(src)}
                                >
                                    {/* Using regular img tag for natural aspect ratio responsiveness */}
                                    <img
                                        src={src}
                                        alt={`Gallery image ${index + 1}`}
                                        className="h-full w-auto object-contain max-w-none shadow-sm"
                                        draggable={false}
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex items-center gap-2 text-xs uppercase tracking-wider backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full">
                                        <Play size={12} fill="currentColor" />
                                        Agrandir
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={() => emblaApi?.scrollPrev()}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-charcoal hover:scale-110 transition-all z-10 opacity-0 group-hover:opacity-100"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={() => emblaApi?.scrollNext()}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-charcoal hover:scale-110 transition-all z-10 opacity-0 group-hover:opacity-100"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Progress Bar & Indicators */}
            <div className="container mx-auto px-4 md:px-8 mt-12">
                <div className="flex flex-col items-center gap-6">
                    {/* Dots / Bars */}
                    <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-2 no-scrollbar">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => emblaApi?.scrollTo(index)}
                                className={cn(
                                    "h-1 rounded-full transition-all duration-300 flex-shrink-0",
                                    index === selectedIndex ? "w-8 bg-gold" : "w-1 bg-charcoal/20 hover:bg-gold/50"
                                )}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Mobile Counter */}
                    <div className="md:hidden font-serif italic text-gold/80">
                        {selectedIndex + 1} / {images.length}
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-pointer"
                        onClick={() => setLightboxImage(null)}
                    >
                        <button className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
                            <X size={48} strokeWidth={1} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl max-h-[90vh] aspect-[3/4] md:aspect-[3/2]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={lightboxImage}
                                alt="Enlarged view"
                                fill
                                className="object-contain"
                                quality={100}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
