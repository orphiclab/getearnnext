"use client";

import { motion } from "framer-motion";
import {
    Smartphone,
    Sparkles,
    MapPin,
    Zap,
    ShieldCheck,
    TrendingUp
} from "lucide-react";

export default function Features() {
    const features = [
        {
            title: "Earn while scrolling",
            description: "Monetize your daily social media habit and turn idle screen time into income.",
            icon: <Smartphone className="w-5 h-5" />,
            stat: "Daily",
        },
        {
            title: "No skills required",
            description: "If you know how to use a phone, you can earn. Perfect for beginners.",
            icon: <Sparkles className="w-5 h-5" />,
            stat: "Easy",
        },
        {
            title: "Work from anywhere",
            description: "Whether commuting or waiting in line—your phone is your office.",
            icon: <MapPin className="w-5 h-5" />,
            stat: "Remote",
        },
        {
            title: "Fast payouts",
            description: "Withdraw to your favorite wallets or bank accounts within minutes.",
            icon: <Zap className="w-5 h-5" />,
            stat: "< 5m",
        },
        {
            title: "Secure Platform",
            description: "Your data and earnings are protected with enterprise-grade security.",
            icon: <ShieldCheck className="w-5 h-5" />,
            stat: "Safe",
        },
        {
            title: "Unlimited Potential",
            description: "A continuous flow of new tasks means your earning potential is uncapped.",
            icon: <TrendingUp className="w-5 h-5" />,
            stat: "∞",
        },
    ];

    return (
        <section id="features" className="py-32 relative bg-background border-t border-surfaceBorder cursor-default overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-getearnnext-green/5 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <div className="h-px bg-getearnnext-green/40 flex-1 max-w-[40px]" />
                            <span className="text-sm font-medium tracking-widest uppercase text-getearnnext-green">Features</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight"
                        >
                            Why Choose <br />
                            <span className="font-serif italic font-normal text-white/80">Get Earn Next</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                    >
                        <button className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-getearnnext-green hover:text-black hover:border-getearnnext-green transition-all shadow-lg hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]">
                            View All Features
                        </button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, ease: [0.16, 1, 0.3, 1], duration: 0.8 }}
                            className="glass-card p-8 rounded-[32px] group relative flex flex-col"
                        >
                            <div className="flex justify-between items-start mb-16">
                                <div className="w-10 h-10 rounded-full bg-surfaceBorder border border-white/10 text-white flex items-center justify-center shadow-lg group-hover:bg-getearnnext-green group-hover:text-black group-hover:border-getearnnext-green group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(74,222,128,0.4)]">
                                    {feature.icon}
                                </div>
                                <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/70 group-hover:border-getearnnext-green/30 group-hover:text-getearnnext-green transition-colors duration-300">
                                    {feature.stat}
                                </div>
                            </div>

                            <div className="mt-auto">
                                <h3 className="text-xl font-bold mb-3 text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-white/50 leading-relaxed text-sm group-hover:text-white/70 transition-colors duration-300">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
