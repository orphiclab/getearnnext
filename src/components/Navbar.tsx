"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "#features" },
        { name: "Work", href: "#how-it-works" },
        { name: "Pricing", href: "#earnings" },
    ];

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <div
                className={`pointer-events-auto transition-all duration-500 w-full max-w-4xl rounded-full px-6 py-4 flex items-center justify-between ${isScrolled ? "glass-nav" : "bg-transparent"
                    }`}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-[8px] overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(74,222,128,0.5)]">
                        <img src="/logo.png" alt="Get Earn Next Logo" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold text-lg tracking-tight text-white group-hover:text-white/80 transition-colors">
                        Get Earn
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button className="bg-white text-background px-6 py-2.5 rounded-full font-semibold text-sm hover:scale-105 active:scale-95 transition-all hover:bg-vertex-green hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]">
                        Start Growing <span className="ml-1">→</span>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white/80 hover:text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -20, height: 0 }}
                        className="md:hidden absolute top-[80px] left-4 right-4 bg-background/95 backdrop-blur-md border border-surfaceBorder rounded-3xl overflow-hidden pointer-events-auto shadow-2xl"
                    >
                        <div className="px-4 py-6 space-y-4 flex flex-col">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block px-3 py-2 rounded-xl text-base font-medium text-white/70 hover:text-vertex-green hover:bg-white/5 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 px-3 w-full border-t border-surfaceBorder">
                                <button className="w-full bg-white text-background px-6 py-3 rounded-full font-semibold hover:bg-vertex-green hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all">
                                    Start Growing →
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
