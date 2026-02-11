"use client";

import { motion } from "framer-motion";
import { Download, Phone } from "lucide-react";

const services = [
    {
        emoji: "📸",
        title: "Photobooth",
        price: "290€*",
        subtitle: "À Partir De",
        features: [
            "Photomaton de mariage",
            "Bandes de photos illimitées",
            "Partage social instantané",
            "Illustration personnalisée sur bande",
            "Photos couleur ou noir et blanc",
            "Livraison sur clé USB"
        ],
        highlight: false,
    },
    {
        emoji: "🌟",
        title: "Forfait Standard",
        price: "1790€*",
        subtitle: "À Partir De",
        features: [
            "Livre photos format 20x20cm",
            "Film de mariage Full HD 1080 (20mn)",
            "Livraison sur support numérique",
            "1 Photographe / Cameraman",
            "Galerie web privée",
            "(Adapté pour événements < 80 pers.)"
        ],
        highlight: true,
    },
    {
        emoji: "💍",
        title: "Premium",
        price: "2390€*",
        subtitle: "À Partir De",
        features: [
            "Livre photo Prestige 30x30cm",
            "Moyen Métrage Full HD (45mn, Qualité Cinéma)",
            "Livraison sur support numérique",
            "1 Photographe / Cameraman",
            "Prise de vue aérienne (Drone)",
            "Galerie en ligne",
            "Livraison en 5 jours"
        ],
        highlight: false,
    }
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-white text-charcoal overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-gold uppercase tracking-[0.2em] text-sm">Services</span>
                    <h2 className="text-4xl md:text-5xl font-serif mt-4">Tarifs Forfaits</h2>
                    <p className="mt-4 text-charcoal/60 font-serif italic max-w-2xl mx-auto">
                        Des collections sur mesure pour immortaliser votre histoire.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative group p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 
                                ${service.highlight
                                    ? "bg-[#2d2d2d] text-white border-[#2d2d2d]"
                                    : "bg-white text-charcoal border-charcoal/10 hover:border-gold/30"
                                }`}
                        >
                            {/* Emoji Icon */}
                            <div className="text-4xl mb-6">{service.emoji}</div>

                            {/* Title & Price */}
                            <h3 className={`text-2xl font-serif mb-2 ${service.highlight ? "text-gold" : "text-charcoal"}`}>
                                {service.title}
                            </h3>
                            <div className="mb-6">
                                <span className="text-3xl font-bold">{service.price}</span>
                                <span className={`block text-sm uppercase tracking-wider ${service.highlight ? "text-white/60" : "text-charcoal/60"}`}>
                                    {service.subtitle}
                                </span>
                            </div>

                            {/* Decorator Line */}
                            <div className={`w-12 h-[1px] mb-6 ${service.highlight ? "bg-white/20" : "bg-charcoal/20"}`} />

                            {/* Features List */}
                            <ul className="space-y-4 mb-8">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed opacity-90">
                                        <span className="text-gold mt-1">•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Section: Brochure & Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20 flex flex-col items-center gap-8 text-center"
                >
                    {/* Brochure PDF Link */}
                    <a
                        href="/brochure-studioriad.pdf"
                        target="_blank"
                        className="flex items-center gap-2 text-charcoal hover:text-gold transition-colors font-serif italic border-b border-charcoal/20 pb-1 hover:border-gold"
                    >
                        <Download size={18} />
                        Télécharger la brochure complète (PDF)
                    </a>

                    {/* CTA Contact */}
                    <div className="bg-gray-50 px-8 py-6 rounded-full flex flex-col md:flex-row items-center gap-4 md:gap-8 shadow-sm border border-black/5">
                        <span className="text-charcoal/70 uppercase tracking-widest text-xs font-bold">
                            Besoin d'informations complémentaires ?
                        </span>
                        <a
                            href="tel:+33612345678"
                            className="flex items-center gap-2 text-xl font-serif text-charcoal hover:text-gold transition-colors"
                        >
                            <Phone size={20} className="text-gold" />
                            06 15 69 28 39
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
