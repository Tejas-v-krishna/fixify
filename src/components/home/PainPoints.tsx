"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Cpu, Clock, Zap } from "lucide-react";

export function PainPoints() {
    const points = [
        {
            title: "Data-First Security Protocols",
            description: "You shouldn't have to give your passcode to a stranger. We offer 'Repair Mode' guidance and strictly monitored labs to ensure your photos and files stay yours.",
            icon: Shield,
            subIcon: Lock,
        },
        {
            title: "OEM-Grade Components",
            description: "Cheap screens ruin your battery and touch sensitivity. We source only Original Equipment Manufacturer (OEM) grade parts that match factory specifications.",
            icon: Cpu,
        },
        {
            title: '4-Hour "Flash" Turnaround',
            description: "For screen and battery replacements, our logistics network is optimized to pick up, fix, and return your device within a single afternoon.",
            icon: Clock,
            subIcon: Zap,
        },
    ];

    return (
        <section className="py-24 bg-[#00171F] relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[500px] bg-[#00A8E8]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            className="group bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:border-[#00A8E8] transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-[#00A8E8]/10 flex items-center justify-center mb-6 border border-[#00A8E8]/20 group-hover:bg-[#00A8E8] transition-colors">
                                    <point.icon className="w-7 h-7 text-[#00A8E8] group-hover:text-[#00171F]" />
                                    {point.subIcon && (
                                        <point.subIcon className="w-3 h-3 text-[#00A8E8] group-hover:text-[#00171F] absolute bottom-3 right-3" />
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{point.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {point.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
