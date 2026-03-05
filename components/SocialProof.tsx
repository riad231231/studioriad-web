"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell } from "lucide-react";

const notifications = [
    { name: "Sarah & Marc", action: "viennent de réserver", target: "leur reportage 2026", time: "il y a 2h" },
    { name: "Julie", action: "vous conseille", target: "le Photobooth", time: "à l'instant" },
    { name: "Thomas", action: "a téléchargé", target: "le Guide Mariage 2026", time: "il y a 15 min" },
    { name: "Inès & Sofiane", action: "ont validé", target: "leur forfait Premium", time: "hier" },
    { name: "Camille", action: "a réservé", target: "une séance Engagement", time: "il y a 3h" },
];

export function SocialProof() {
    const [currentIdx, setCurrentIdx] = useState(-1);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const showTimeout = setTimeout(() => {
            setCurrentIdx(Math.floor(Math.random() * notifications.length));
            setIsVisible(true);
        }, 10000); // Wait 10s initially

        return () => clearTimeout(showTimeout);
    }, []);

    useEffect(() => {
        if (isVisible) {
            const hideTimeout = setTimeout(() => {
                setIsVisible(false);
            }, 6000); // Stay visible for 6s

            return () => clearTimeout(hideTimeout);
        } else {
            const nextTimeout = setTimeout(() => {
                setCurrentIdx(Math.floor(Math.random() * notifications.length));
                setIsVisible(true);
            }, 30000); // Re-appear after 30s

            return () => clearTimeout(nextTimeout);
        }
    }, [isVisible]);

    if (currentIdx === -1) return null;

    const notif = notifications[currentIdx];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: -50, y: 0 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="fixed bottom-6 left-6 z-[100] bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl flex items-center gap-4 border border-charcoal/5 max-w-[320px]"
                >
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                        <Bell className="text-gold" size={18} />
                    </div>
                    <div>
                        <p className="text-sm text-charcoal leading-tight">
                            <span className="font-bold">{notif.name}</span> {notif.action} <span className="text-gold font-medium">{notif.target}</span>.
                        </p>
                        <span className="text-[10px] text-charcoal/40 uppercase tracking-widest">{notif.time}</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
