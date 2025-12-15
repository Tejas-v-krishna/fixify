"use client";

import { motion } from "framer-motion";
import { Wrench, Clock, ShieldCheck, MapPin, Smile, Zap } from "lucide-react";

const features = [
    {
        title: "Expert Technicians",
        description: "Verified professionals for every repair need.",
        icon: <Wrench className="w-5 h-5" />,
        colSpan: "col-span-1 sm:col-span-2",
        bg: "bg-zinc-900/50"
    },
    {
        title: "Instant Booking",
        description: "Schedule in seconds.",
        icon: <Zap className="w-5 h-5" />,
        colSpan: "col-span-1",
        bg: "bg-zinc-900/30"
    },
    {
        title: "Real-time Tracking",
        description: "Monitor your service status live.",
        icon: <MapPin className="w-5 h-5" />,
        colSpan: "col-span-1",
        bg: "bg-zinc-900/30"
    },
    {
        title: "Warranty Protection",
        description: "30-day guarantee on all repairs.",
        icon: <ShieldCheck className="w-5 h-5" />,
        colSpan: "col-span-1 sm:col-span-2",
        bg: "bg-zinc-900/50"
    },
];

export function BentoGrid() {
    return (
        <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="font-serif italic text-4xl sm:text-5xl text-white mb-6">
                        Why Choose Fixify?
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto text-lg font-light">
                        We combine technology with expert craftsmanship to deliver the smoothest repair experience possible.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className={`${feature.colSpan} ${feature.bg} group relative p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors overflow-hidden`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                                <div className="p-3 bg-white/5 rounded-2xl w-fit text-white group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-white mb-2">{feature.title}</h3>
                                    <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors">{feature.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
