"use client";

import { motion } from "framer-motion";
import { Cpu, Shirt, Settings } from "lucide-react"; // Approximating icons: Microchip -> Cpu, Needle -> Shirt, Gear -> Settings
import { cn } from "@/lib/utils";

export function QualityPromise() {
    const pillars = [
        {
            icon: Cpu,
            title: "Tech",
            desc: "We source OEM-grade screens and batteries for electronics to match factory specs.",
            color: "text-blue-400",
            bg: "bg-blue-500/10"
        },
        {
            icon: Shirt,
            title: "Fabric & Leather",
            desc: "We use premium dyes, Italian adhesives, and full-grain leather for restoration.",
            color: "text-orange-400",
            bg: "bg-orange-500/10"
        },
        {
            icon: Settings,
            title: "Hardware",
            desc: "High-tensile spokes for umbrellas and food-safe components for kitchen appliances.",
            color: "text-emerald-400",
            bg: "bg-emerald-500/10"
        }
    ];

    return (
        <section className="py-24 bg-background border-t border-border dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground dark:text-white mb-6">
                        The right parts. The right hands.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {pillars.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className={cn(
                                "w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110",
                                item.bg,
                                item.color
                            )}>
                                <item.icon size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground dark:text-white mb-4">{item.title}</h3>
                            <p className="text-lg text-muted-foreground dark:text-[#A0A0C0] leading-relaxed max-w-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
