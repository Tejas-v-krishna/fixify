"use client";

import { motion } from "framer-motion";
import { Lock, Shield, PenTool } from "lucide-react";

const TRUST_CARDS = [
    {
        title: "Your data stays yours.",
        body: "We guide you through 'Repair Mode' protocols. Our labs are monitored, and technicians are bound by strict data privacy NDAs.",
        icon: Lock
    },
    {
        title: "Covered from A to B.",
        body: "Every item is insured during transit. If anything happens while it's with us, we cover the cost.",
        icon: Shield
    },
    {
        title: "Repairs that last.",
        body: "We don't do temporary fixes. Every repair comes with a 6-month service warranty. If the issue returns, we fix it for free.",
        icon: PenTool
    }
];

export function Trust() {
    return (
        <section className="py-24 bg-background transition-colors duration-500 relative border-t border-border dark:border-white/5">
            {/* Background Mesh (Dark Mode Only) */}
            <div className="absolute inset-0 z-0 opacity-0 dark:opacity-20 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#818CF8]/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2DD4BF]/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground dark:text-white mb-6">
                        Your peace of mind is <span className="text-[#2DD4BF]">our protocol.</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {TRUST_CARDS.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-card dark:bg-white/5 border border-border dark:border-white/10 rounded-2xl p-8 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors duration-300 group shadow-sm dark:shadow-none"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#2DD4BF]/10 flex items-center justify-center text-[#2DD4BF] mb-6 group-hover:scale-110 transition-transform duration-300">
                                <card.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground dark:text-white mb-3">{card.title}</h3>
                            <p className="text-muted-foreground dark:text-[#A0A0C0] text-sm leading-relaxed">
                                {card.body}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
