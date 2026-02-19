"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";

const navLinks = [
    { name: "Photos", href: "/#photos" },
    { name: "Vidéos", href: "/#films" },
    { name: "À propos", href: "/#about" },
    { name: "Tarifs", href: "/#services" },
    { name: "Photobooth", href: "/photobooth" },
    { name: "Journal", href: "/blog" },
    { name: "Photos Identité", href: "/photos-identite" },
    { name: "Contact", href: "/#contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const lenis = useLenis();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // Only intercept for smooth scroll if we are on the homepage AND targeting an anchor or top
        const isHomePage = pathname === "/";
        const isAnchor = href.startsWith("/#");
        const isHomeTop = href === "/";

        if (isHomePage && (isAnchor || isHomeTop)) {
            e.preventDefault();
            if (isHomeTop) {
                lenis?.scrollTo(0);
            } else if (isAnchor) {
                const id = href.replace("/", ""); // Remove the leading slash to get "#id"
                const element = document.querySelector(id);
                if (element) {
                    lenis?.scrollTo(element as HTMLElement);
                }
            }
        }
        // Otherwise (e.g. going to /blog, or coming from /blog to /#photos), let Next.js Link handle navigation
    };

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
                scrolled && !mobileMenuOpen ? "bg-cream/90 backdrop-blur-md border-b border-gold/20 py-4" : "bg-transparent py-6"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link
                    href="/"
                    onClick={(e) => {
                        handleLinkClick(e, "/");
                        setMobileMenuOpen(false);
                    }}
                    className={cn(
                        "text-2xl md:text-3xl font-serif tracking-widest uppercase hover:text-gold transition-colors relative z-50",
                        scrolled || mobileMenuOpen || pathname !== "/" ? "text-charcoal" : "text-white"
                    )}
                >
                    Studioriad
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className={cn(
                                "text-sm uppercase tracking-widest hover:text-gold transition-colors font-medium",
                                scrolled || pathname !== "/" ? "text-charcoal/80" : "text-white/90"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden relative z-50">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={cn("hover:text-gold transition-colors", scrolled || mobileMenuOpen || pathname !== "/" ? "text-charcoal" : "text-white")}
                    >
                        <span className="sr-only">Menu</span>
                        {mobileMenuOpen ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    handleLinkClick(e, link.href);
                                    setMobileMenuOpen(false);
                                }}
                                className="text-2xl font-serif text-charcoal hover:text-gold transition-colors tracking-widest uppercase"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
