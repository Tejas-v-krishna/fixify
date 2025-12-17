"use client";

import { motion } from "framer-motion";
import { Laptop, ShoppingBag, Home, Watch } from "lucide-react";
import { cn } from "@/lib/utils";

const labs = [
    {
        title: "The Tech Lab",
        items: "Phones, Laptops, Drones, Consoles.",
        copy: "Chip-level precision for your digital life.",
        icon: Laptop,
        color: "from-blue-500/20 to-indigo-500/20",
        border: "group-hover:border-blue-500/50",
        text_color: "text-blue-400"
    },
    {
        title: "The Atelier",
        items: "Shoes, Handbags, Jackets, Belts, Zippers.",
        copy: "Master cobblers and leather experts using premium materials.",
        icon: ShoppingBag,
        color: "from-orange-500/20 to-amber-500/20",
        border: "group-hover:border-orange-500/50",
        text_color: "text-orange-400"
    },
    {
        title: "The Home Hangar",
        items: "Blenders, Irons, Microwaves, Umbrellas, Luggage.",
        copy: "Restoring the daily essentials that run your home.",
        icon: Home,
        color: "from-emerald-500/20 to-green-500/20",
        border: "group-hover:border-emerald-500/50",
        text_color: "text-emerald-400"
    },
    {
        title: "The Timepiece & Optical Lab",
        items: "Analog Watches, Smartwatches, Eyeglass Frames.",
        copy: "Micro-precision handling for delicate mechanisms.",
        icon: Watch,
        color: "from-purple-500/20 to-pink-500/20",
        border: "group-hover:border-purple-500/50",
        text_color: "text-purple-400"
    }
];

export function Services() {
    return (
        <section className="py-24 bg-background relative overflow-hidden" id="services">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2DD4BF]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF] text-sm font-semibold tracking-wide mb-4 border border-[#2DD4BF]/20">
                        OUR EXPERTISE
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6">
                        Specialized Labs for Every Item.
                    </h2>
                    <p className="text-xl text-muted-foreground dark:text-[#A0A0C0] max-w-2xl mx-auto">
                        We don't have "handymen." We have specialized experts for every material and mechanism.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {labs.map((lab, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 dark:to-white/0 hover:to-white/10 transition-colors"
                        >
                            <div className={cn(
                                "h-full bg-card dark:bg-[#0F0E17]/80 backdrop-blur-xl rounded-[22px] p-8 border border-border dark:border-white/10 transition-colors",
                                lab.border
                            )}>
                                <div className={cn(
                                    "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                                    lab.color,
                                    lab.text_color
                                )}>
                                    <lab.icon size={32} />
                                </div>

                                <h3 className="text-2xl font-bold text-foreground dark:text-white mb-2">{lab.title}</h3>
                                <div className="text-sm font-medium text-muted-foreground dark:text-white/60 mb-4">{lab.items}</div>
                                <p className="text-lg text-foreground/80 dark:text-[#A0A0C0] leading-relaxed">
                                    {lab.copy}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
