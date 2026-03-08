"use client";

import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-32 relative bg-surface border-y border-surfaceBorder cursor-default overflow-hidden">
            {/* Background glow behind CTA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vertex-green/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Ready to start <br />
                        <span className="font-serif italic font-normal text-gradient-green">earning</span> today?
                    </h2>
                    <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Join thousands of users turning their social media time into income. It takes less than 60 seconds to sign up and start completing tasks.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="btn-shiny w-full sm:w-auto px-10 py-5 rounded-full bg-vertex-green text-background font-semibold text-lg hover:scale-105 transition-all active:scale-95 glow-primary">
                            Create Free Account <span className="ml-1">→</span>
                        </button>
                        <button className="w-full sm:w-auto px-10 py-5 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-vertex-green/10 hover:border-vertex-green hover:text-vertex-green transition-colors">
                            Talk to Sales
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
