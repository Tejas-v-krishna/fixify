"use client";

import { motion } from "framer-motion";
import { X, Check, Store, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const PAIN_POINTS = [
    "Haggling over vague prices.",
    "Taking time off work to visit the shop.",
    "Leaving your device with strangers.",
    "Zero visibility on repair status."
];

const PRO_POINTS = [
    { title: "Transparent Pricing", desc: "Approved by you before we start." },
    { title: "Doorstep Logistics", desc: "We come to you. Always." },
    { title: "Verified Trust", desc: "Background-checked technicians only." },
    { title: "Live Tracking", desc: "Watch your item move from Pickup to Lab to Drop." }
];

export function WhyUs() {
    return (
        <section className="py-24 bg-background transition-colors duration-500 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 dark:from-white dark:to-white/70 mb-6">
                        The old way of repairing was broken. <br />
                        <span className="text-[#2DD4BF]">So we fixed it.</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* The Old Way */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-card dark:bg-white/5 border border-border dark:border-white/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden shadow-sm dark:shadow-none"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Store className="w-24 h-24 text-red-500" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground dark:text-white mb-6 flex items-center gap-2">
                            <span className="p-2 bg-red-500/10 rounded-lg text-red-500"><X className="w-5 h-5" /></span>
                            The Local Shop Struggle
                        </h3>
                        <ul className="space-y-4">
                            {PAIN_POINTS.map((point, i) => (
                                <li key={i} className="flex items-start gap-3 text-red-600/80 dark:text-red-200/70">
                                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* The Fixify Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#2DD4BF]/5 border border-[#2DD4BF]/20 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden shadow-[0_0_50px_rgba(45,212,191,0.05)]"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <ShieldCheck className="w-24 h-24 text-[#2DD4BF]" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground dark:text-white mb-6 flex items-center gap-2">
                            <span className="p-2 bg-[#2DD4BF]/10 rounded-lg text-[#2DD4BF]"><Check className="w-5 h-5" /></span>
                            The Gofex Experience
                        </h3>
                        <ul className="space-y-6">
                            {PRO_POINTS.map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-[#2DD4BF] flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-[#0F0E17]" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-foreground dark:text-white">{point.title}</div>
                                        <div className="text-muted-foreground dark:text-[#A0A0C0] text-sm">{point.desc}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
