"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {

    // Simple particle background effect
    const [particles, setParticles] = useState<{ id: number; top: string; left: string; size: number; delay: number }[]>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 flex flex-col items-center justify-center min-h-screen bg-grid-pattern">
            {/* Dynamic Particle Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute bg-white rounded-full opacity-0"
                        style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
                        animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2, 0.8] }}
                        transition={{ duration: 3 + Math.random() * 2, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
                    />
                ))}
            </div>

            {/* Subtle Background Glows (Vertex Green) */}
            <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-getearnnext-green/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-[#34D399]/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-12"
                >
                    <span className="flex h-2 w-2 rounded-full bg-getearnnext-green animate-pulse" />
                    <span className="text-xs font-medium tracking-wider text-white/80 uppercase">
                        Accepting new users for Q2
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tight mb-8 leading-[1.1] text-white"
                >
                    Social time that <br className="hidden md:block" />
                    <span className="font-serif italic font-normal text-gradient-green">actually</span> pays off
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-6 text-xl md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed"
                >
                    Follow, like, comment, and engage with top brands. Turn your daily screen time into a steady stream of income.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <button className="btn-shiny w-full sm:w-auto px-8 py-4 rounded-full bg-getearnnext-green text-background font-semibold text-lg hover:scale-105 transition-all active:scale-95 glow-primary">
                        Start Earning Now <span className="ml-1">→</span>
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:border-getearnnext-green hover:text-getearnnext-green transition-colors">
                        Book a Demo
                    </button>
                </motion.div>
            </div>

            {/* Fade out to black at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
        </section>
    );
}
