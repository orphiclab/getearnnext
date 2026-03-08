"use client";

import { motion } from "framer-motion";
import { UserPlus, PlayCircle, Wallet } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Sign Up",
        description: "Create your free account in seconds and join our growing community of earners.",
        icon: <UserPlus className="w-6 h-6 text-getearnnext-green" />,
    },
    {
        id: "02",
        title: "Complete Tasks",
        description: "Follow pages, like posts, comment, or watch videos on your favorite platforms.",
        icon: <PlayCircle className="w-6 h-6 text-getearnnext-green" />,
    },
    {
        id: "03",
        title: "Earn Rewards",
        description: "Get paid for every completed task directly to your wallet. Fast and secure.",
        icon: <Wallet className="w-6 h-6 text-getearnnext-green" />,
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-32 relative bg-background border-t border-surfaceBorder cursor-default overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-getearnnext-green/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-px bg-getearnnext-green/40 flex-1 max-w-[40px]" />
                        <span className="text-sm font-medium tracking-widest uppercase text-getearnnext-green">Process</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                    >
                        How it <span className="font-serif italic font-normal text-white/80">works</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                        className="text-white/50 text-xl max-w-2xl"
                    >
                        Three simple steps to start earning money from your fingertips today. No complex onboarding required.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.15, ease: [0.16, 1, 0.3, 1], duration: 0.8 }}
                            className="glass-card p-10 rounded-[32px] group relative overflow-hidden"
                        >
                            {/* Subtle hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-getearnnext-green/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-12 h-12 rounded-full border border-getearnnext-green/20 bg-getearnnext-green/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-getearnnext-green/20 transition-all duration-300">
                                        {step.icon}
                                    </div>
                                    <span className="text-4xl font-light text-white/10 group-hover:text-getearnnext-green/30 transition-colors duration-300 font-serif">
                                        {step.id}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-white/50 leading-relaxed text-lg">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
