"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Sparkles, Wind } from "lucide-react";

export function Hygiene() {
    return (
        <section className="py-24 bg-zinc-50 dark:bg-[#001219] relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center justify-center p-2 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                        <Sparkles className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Hygiene Protocol</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6">
                        Restored. And 100% Sanitized.
                    </h2>
                    <p className="text-xl text-muted-foreground dark:text-[#A0A0C0] max-w-2xl mx-auto">
                        We don't just fix the mechanism; we protect your health. Every item undergoes a 3-step sterilization process before delivery.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent z-0" />

                    {[
                        {
                            step: "01",
                            title: "UV-C Chamber",
                            desc: "Electronics and hard surfaces are blasted with hospital-grade UV light to eliminate bacteria.",
                            icon: Sparkles
                        },
                        {
                            step: "02",
                            title: "Ozone Treatment",
                            desc: "Shoes and bags go through Ozone treatment to neutralize odors and mold.",
                            icon: Wind
                        },
                        {
                            step: "03",
                            title: "Vacuum Seal",
                            desc: "Your item is vacuum-sealed immediately after cleaning to ensure it reaches you contaminant-free.",
                            icon: ShieldCheck
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center bg-card dark:bg-[#0F0E17] p-8 rounded-3xl border border-border dark:border-white/10 shadow-lg"
                        >
                            <div className="w-24 h-24 rounded-full bg-background dark:bg-[#1E1B4B] border-4 border-card dark:border-[#0F0E17] flex items-center justify-center mb-6 shadow-md relative">
                                <item.icon className="w-10 h-10 text-blue-500" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#2DD4BF] text-[#0F0E17] font-bold flex items-center justify-center text-sm shadow-sm">
                                    {item.step}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground dark:text-white mb-4">{item.title}</h3>
                            <p className="text-muted-foreground dark:text-[#A0A0C0] leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
