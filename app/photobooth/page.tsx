"use client";

// import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Printer, Share2, MapPin } from "lucide-react";
import { Gallery } from "@/components/Gallery";

const photoboothImages = [
    "/pb-images/location-photobooth-mariage-paris.jpg",
    "/pb-images/borne-selfie-soiree-entreprise-idf.jpg",
    "/pb-images/animation-photo-mariage-94.jpg",
    "/pb-images/photobooth-anniversaire-val-de-marne.jpg",
    "/pb-images/borne-photo-luxe-paris.jpg",
    "/pb-images/photobooth-vitry-sur-seine.jpg",
    "/pb-images/animation-mariage-originale-idf.jpg",
    "/pb-images/photobox-evenementiel-paris.jpg",
    "/pb-images/borne-a-selfie-location-pas-cher.jpg",
    "/pb-images/photobooth-mariage-champetre-idf.jpg",
    "/pb-images/animation-photo-cocktail-entreprise.jpg",
    "/pb-images/location-borne-photo-essonne.jpg",
    "/pb-images/photobooth-mariage-haut-de-gamme.jpg",
    "/pb-images/animation-photo-seminaire-paris.jpg",
];

export default function PhotoboothPage() {
    return (
        <main className="min-h-screen bg-cream selection:bg-gold selection:text-white">
            {/* Navbar is now in global layout */}

            {/* Hero Section */}
            <section className="relative min-h-[75vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden pt-28 md:pt-0">
                <div className="absolute inset-0 bg-cream/85 z-10" />
                <div className="absolute inset-0">
                    <Image
                        src="/pb-images/photobooth-vitry-sur-seine.jpg"
                        alt="Photobooth Nano Banana Pro à Paris"
                        fill
                        className="object-cover opacity-60 grayscale"
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
                            Location de Photobooth à Paris & Île-de-France
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-charcoal mb-6">
                            L'Animation Incontournable <br className="hidden md:block" /> de Votre Événement
                        </h1>
                        <p className="text-charcoal/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-8">
                            Apportez une touche de fun et d'élégance avec notre <strong>Borne à Selfies</strong>.
                            Souvenirs instantanés, qualité professionnelle.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-gold text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-charcoal transition-all duration-300"
                        >
                            Réserver ma date
                        </a>
                    </motion.div>
                </div>
            </section>

            <Gallery
                images={photoboothImages}
                title="Galerie Souvenirs"
                subtitle="Moments Capturés"
                id="gallery"
            />



            {/* Presentation Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-square md:aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden"
                    >
                        {/* Placeholder for Product Image - User to update */}
                        <Image
                            src="/pb-images/borne-selfies.jpg"
                            alt="Borne à Selfies Studioriad"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-6">
                            La Borne à Selfies : <br />
                            <span className="text-gold italic">Petit par la taille, Géant par la qualité</span>
                        </h2>
                        <p className="text-charcoal/70 mb-6 leading-relaxed">
                            Oubliez les cabines photo encombrantes. Notre modèle <strong>Borne à Selfies</strong> est un bijou de technologie, compact et design, qui s'intègre parfaitement dans tous les décors (mariages chics, anniversaires, soirées d'entreprise).
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Qualité Photo DSLR (Reflex Numérique)",
                                "Écran Tactile Intuitif & LED Personnalisables",
                                "Impression Thermique Instantanée (8 sec)",
                                "Partage immédiat par Email & QR Code"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start text-charcoal/80">
                                    <Check className="text-gold mr-3 mt-1 flex-shrink-0" size={18} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-cream">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-4">Tout Inclus, Zéro Stress</h2>
                        <p className="text-charcoal/60 max-w-xl mx-auto">Nous nous occupons de tout pour que vous profitiez de la fête.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <MapPin size={32} />,
                                title: "Livraison & Installation",
                                description: "Nous livrons, installons et récupérons la borne partout à Paris et en Île-de-France. Aucun effort pour vous."
                            },
                            {
                                icon: <Printer size={32} />,
                                title: "Impressions Personnalisées",
                                description: "Vos prénoms, date ou logo sur chaque photo. Un souvenir unique que vos invités garderont précieusement."
                            },
                            {
                                icon: <Share2 size={32} />,
                                title: "Galerie & Clé USB",
                                description: "Récupérez toutes les photos (numériques + impressions) sur clé USB à la fin de l'événement, plus une galerie web privée."
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2, duration: 0.6 }}
                                className="bg-white p-8 text-center hover:shadow-lg transition-shadow duration-300 border border-gold/10"
                            >
                                <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-serif text-charcoal mb-3">{feature.title}</h3>
                                <p className="text-charcoal/70 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA / Contact */}
            <section id="contact" className="py-24 bg-charcoal text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6">Prêt à faire la fête ?</h2>
                    <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                        Les dates partent vite, surtout pour la saison des mariages. Contactez-nous pour vérifier la disponibilité et obtenir un devis personnalisé.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <a
                            href="mailto:contact@studioriad.com"
                            className="bg-gold text-white px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-charcoal transition-colors"
                        >
                            Demander un devis
                        </a>
                        <a
                            href="tel:+33615692839"
                            className="border border-white/30 text-white px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-charcoal transition-colors"
                        >
                            06 15 69 28 39
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
