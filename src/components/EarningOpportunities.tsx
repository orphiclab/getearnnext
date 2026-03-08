"use client";

import { motion } from "framer-motion";
import { PlaySquare, UserCheck, Heart, MessageCircle, Share2, ArrowRight } from "lucide-react";

export default function EarningOpportunities() {
    const opportunities = [
        {
            title: "Watching Videos",
            reward: "Up to $5/hour",
            icon: <PlaySquare className="w-5 h-5 text-vertex-green" />,
            delay: 0.1,
        },
        {
            title: "Following Accounts",
            reward: "$0.10 - $0.50/follow",
            icon: <UserCheck className="w-5 h-5 text-vertex-green" />,
            delay: 0.2,
        },
        {
            title: "Liking Posts",
            reward: "$0.05 - $0.20/like",
            icon: <Heart className="w-5 h-5 text-vertex-green" />,
            delay: 0.3,
        },
        {
            title: "Commenting",
            reward: "$0.20 - $1.00/comment",
            icon: <MessageCircle className="w-5 h-5 text-vertex-green" />,
            delay: 0.4,
        },
        {
            title: "Engaging with Brands",
            reward: "Bonus Rewards",
            icon: <Share2 className="w-5 h-5 text-vertex-green" />,
            delay: 0.5,
        },
    ];

    return (
        <section id="earnings" className="py-32 relative bg-background border-t border-surfaceBorder cursor-default overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-vertex-green/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex items-center gap-4 mb-6 relative z-10"
                        >
                            <div className="h-px bg-vertex-green/40 flex-1 max-w-[40px]" />
                            <span className="text-sm font-medium tracking-widest uppercase text-vertex-green">Opportunities</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1] relative z-10"
                        >
                            Multiple ways to <br />
                            <span className="font-serif italic font-normal text-gradient-green">grow your income</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.1 }}
                            className="text-white/50 text-xl mb-12 leading-relaxed max-w-lg relative z-10"
                        >
                            Diversify your earnings by choosing the tasks you enjoy most. Whether you prefer discovering new creators through videos or supporting brands with genuine engagement.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.2 }}
                            className="relative z-10"
                        >
                            <button className="flex items-center gap-2 text-white font-medium hover:text-vertex-green transition-colors group">
                                <span className="border-b border-white/30 group-hover:border-vertex-green/50 pb-1 transition-colors">See All Available Tasks</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {opportunities.map((opp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: opp.delay, ease: [0.16, 1, 0.3, 1], duration: 0.8 }}
                                    className={`glass-card p-6 flex items-center justify-between rounded-[24px] group ${index === opportunities.length - 1 ? 'sm:col-span-2' : ''}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full border border-vertex-green/20 bg-vertex-green/5 flex items-center justify-center group-hover:bg-vertex-green/10 group-hover:scale-110 transition-all duration-300">
                                            {opp.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1 group-hover:text-white/90 transition-colors">
                                                {opp.title}
                                            </h3>
                                            <p className="text-sm text-vertex-green/80 font-medium">
                                                {opp.reward}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
