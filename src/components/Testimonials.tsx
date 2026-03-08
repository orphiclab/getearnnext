"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            title: "Student",
            content: "I earn extra money every day just by scrolling social media. It pays for my coffee and streaming subscriptions! The platform is incredibly intuitive.",
            initials: "SJ",
        },
        {
            name: "Michael Chen",
            title: "Freelancer",
            content: "Super easy tasks and fast payouts. The platform is so intuitive, I started earning within 5 minutes of signing up. Highly recommended for side income.",
            initials: "MC",
        },
        {
            name: "Jessica Albario",
            title: "Stay-at-home Mom",
            content: "Perfect side income platform. I can do tasks while the kids are napping. The transparent earning system gives me peace of mind.",
            initials: "JA",
        },
    ];

    return (
        <section className="py-32 relative bg-background border-t border-surfaceBorder cursor-default overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <span className="text-sm font-medium tracking-widest uppercase text-vertex-green">Testimonials</span>
                        <div className="h-px bg-vertex-green/40 flex-1 min-w-[40px]" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl"
                    >
                        Loved by <span className="font-serif italic font-normal text-gradient-green">thousands</span> of users worldwide
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.15, ease: [0.16, 1, 0.3, 1], duration: 0.8 }}
                            className="glass p-10 rounded-[32px] border border-white/5 bg-white/[0.02] flex flex-col relative group hover:bg-white/[0.04] hover:border-vertex-green/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.05)]"
                        >
                            <div className="text-4xl font-serif text-white/10 mb-6 leading-none group-hover:text-vertex-green/40 transition-colors duration-300">
                                "
                            </div>

                            <p className="text-white/70 text-lg mb-12 leading-relaxed flex-1 group-hover:text-white/90 transition-colors duration-300">
                                {testimonial.content}
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full border border-vertex-green/20 bg-vertex-green/5 flex items-center justify-center text-vertex-green font-serif text-sm">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                                    <p className="text-white/40 text-sm">{testimonial.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
