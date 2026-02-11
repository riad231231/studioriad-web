"use client";

import useEmblaCarousel from "embla-carousel-react";

import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

// Video Links:
// 1. https://youtu.be/ktWnMYvNVQ8?si=Szy8ep-bEvma8Yrx
// 2. https://youtu.be/r-_AcWZ-wbU?si=cWRQaSBcPQNnDYOY
// 3. https://youtu.be/qYfVIjUplW4
// 4. https://youtu.be/7RQhilsjR94

const videos = [
    {
        id: "ktWnMYvNVQ8",
        title: "Sarah & Thomas",
        subtitle: "Mariage au Château de Baronville",
        thumbnail: "https://img.youtube.com/vi/ktWnMYvNVQ8/maxresdefault.jpg"
    },
    {
        id: "r-_AcWZ-wbU",
        title: "Léa & Julien",
        subtitle: "Cérémonie Civile à Paris",
        thumbnail: "https://img.youtube.com/vi/r-_AcWZ-wbU/maxresdefault.jpg"
    },
    {
        id: "qYfVIjUplW4",
        title: "Élégance Orientale",
        subtitle: "Trois jours de festivités",
        thumbnail: "https://img.youtube.com/vi/qYfVIjUplW4/maxresdefault.jpg"
    },
    {
        id: "7RQhilsjR94",
        title: "Paris Love Story",
        subtitle: "Séance Couple - Tour Eiffel",
        thumbnail: "https://img.youtube.com/vi/7RQhilsjR94/maxresdefault.jpg"
    }
];

// Real images from "cine small" folder
const cineImages = [
    "/cine-small/cine00001.jpg", "/cine-small/cine00002.jpg", "/cine-small/cine00003.jpg", "/cine-small/cine00004.jpg",
    "/cine-small/cine00005.jpg", "/cine-small/cine00006.jpg", "/cine-small/cine00007.jpg", "/cine-small/cine00008.jpg",
    "/cine-small/cine00009.jpg", "/cine-small/cine00010.jpg", "/cine-small/cine00011.jpg", "/cine-small/cine00012.jpg",
    "/cine-small/cine00013.jpg", "/cine-small/cine00014.jpg", "/cine-small/cine00015.jpg", "/cine-small/cine00016.jpg",
    "/cine-small/cine00017.jpg", "/cine-small/cine00018.jpg", "/cine-small/cine00019.jpg", "/cine-small/cine00020.jpg"
];

export function Videos() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <section className="py-24 bg-gray-50 text-charcoal relative overflow-hidden" id="films">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <span className="text-gold uppercase tracking-[0.2em] text-sm">Cinematography</span>
                    <h2 className="text-4xl md:text-5xl font-serif mt-4 text-charcoal">Nos Films</h2>
                    <p className="mt-4 text-charcoal/60 font-serif italic max-w-2xl mx-auto">
                        Chaque mariage est une histoire unique. Nous capturons l'émotion, les regards et l'atmosphère pour créer un film intemporel.
                    </p>
                </motion.div>

                {/* Video Grid - 4 Columns for smaller thumbnails */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-24">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedVideo(video.id)}
                        >
                            {/* Thumbnail Container */}
                            <div className="relative aspect-video overflow-hidden rounded-md bg-gray-200 shadow-sm border border-black/5 hover:border-gold/30 transition-all duration-300">
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

                                {/* Play Button Overlay - Smaller */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm bg-white/20 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 shadow-lg">
                                        <Play fill="white" className="ml-1 text-white w-5 h-5" />
                                    </div>
                                </div>
                            </div>

                            {/* Text Info - Smaller */}
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-serif text-charcoal group-hover:text-gold transition-colors duration-300">
                                    {video.title}
                                </h3>
                                <p className="text-[10px] uppercase tracking-widest text-charcoal/50 mt-1 group-hover:text-charcoal/80 transition-colors">
                                    {video.subtitle}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Captures Cinema Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-gold uppercase tracking-[0.2em] text-sm">Galerie</span>
                    <h2 className="text-3xl md:text-4xl font-serif mt-3 text-charcoal">Captures Cinéma</h2>
                </motion.div>

                <CinemaStills />
            </div>

            {/* Video Lightbox */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setSelectedVideo(null)}
                    >
                        {/* Close Button */}
                        <button className="absolute top-6 right-6 text-white/50 hover:text-white hover:scale-110 transition-all z-[110]">
                            <X size={48} strokeWidth={1} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="w-full max-w-7xl aspect-video relative bg-black shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1&vq=hd1080`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}



function CinemaStills() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", containScroll: "trimSnaps" });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback((api: any) => {
        setSelectedIndex(api.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect(emblaApi);
        emblaApi.on("select", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <div className="relative group max-w-5xl mx-auto px-4">
            <div className="overflow-hidden rounded-lg shadow-2xl bg-black aspect-[16/9]" ref={emblaRef}>
                <div className="flex touch-pan-y">
                    {cineImages.map((src, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 relative aspect-[16/9]">
                            <Image
                                src={src}
                                alt={`Capture cinema ${index + 1}`}
                                fill
                                className="object-contain"
                                quality={100}
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows (Instagram Style - On Hover) */}
            <button
                onClick={scrollPrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-black transition-all z-10 opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-black transition-all z-10 opacity-0 group-hover:opacity-100"
            >
                <ChevronRight size={20} />
            </button>

            {/* Pagination Dots (Instagram Style) */}
            <div className="flex justify-center gap-1.5 mt-4">
                {cineImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={`transition-all duration-300 rounded-full ${index === selectedIndex
                            ? "w-2 h-2 bg-charcoal"
                            : "w-1.5 h-1.5 bg-charcoal/20 hover:bg-gold/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <div className="text-center mt-2 font-serif italic text-charcoal/40 text-sm">
                Capture {selectedIndex + 1} sur {cineImages.length}
            </div>
        </div>
    );
}
