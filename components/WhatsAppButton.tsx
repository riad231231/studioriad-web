"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
    const phoneNumber = "33615692839";
    const message = encodeURIComponent("Bonjour Riad, je souhaiterais avoir des informations pour mon mariage.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
                duration: 0.5,
                delay: 2, // Appear after 2 seconds
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            className="fixed bottom-6 right-6 z-[100] bg-gold/90 backdrop-blur-md text-white p-4 rounded-full shadow-2xl flex items-center justify-center border border-white/20 hover:bg-gold transition-colors duration-300"
            aria-label="Contactez-nous sur WhatsApp"
        >
            <MessageCircle size={28} />
            <motion.span
                initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                whileHover={{ width: "auto", opacity: 1, marginLeft: 12 }}
                className="overflow-hidden whitespace-nowrap text-sm font-medium hidden md:block"
            >
                Une question ?
            </motion.span>
        </motion.a>
    );
}
