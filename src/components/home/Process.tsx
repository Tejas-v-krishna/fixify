"use client";

import { motion } from "framer-motion";
import { Calendar, Package, Wrench, CheckCircle } from "lucide-react";

const STEPS = [
    {
        title: "Schedule your slot",
        body: "Select your device and issue. Get an instant estimate and pick a pickup time that fits your schedule.",
        icon: Calendar
    },
    {
        title: "Secure Collection",
        body: "A verified agent arrives at your door. Your item is sealed in a tamper-proof bag in front of you.",
        icon: Package
    },
    {
        title: "Expert Repair",
        body: "Your item is routed to a specialist—not a generalist. We use OEM-grade parts and run diagnostic tests.",
        icon: Wrench
    },
    {
        title: "Quality Checked & Returned",
        body: "We deliver it back to you. Verify the repair yourself before you pay the final balance.",
        icon: CheckCircle
    }
];

export function Process() {
    return (
        <section className="py-24 bg-background transition-colors duration-500 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground dark:text-white mb-6">
                        From broken to brand new. <br />
                        <span className="text-[#818CF8]">Without stepping out.</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#2DD4BF]/0 via-[#2DD4BF]/30 to-[#2DD4BF]/0 w-full z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {STEPS.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-32 h-32 mb-6 rounded-full bg-white dark:bg-[#1E1B4B] border border-border dark:border-[#2DD4BF]/20 flex items-center justify-center relative group-hover:border-[#2DD4BF] transition-colors duration-500 shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                                    <div className="absolute inset-0 rounded-full bg-[#2DD4BF]/5 blur-xl group-hover:bg-[#2DD4BF]/10 transition-colors" />
                                    <step.icon className="w-10 h-10 text-[#2DD4BF]" />
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background dark:bg-[#0F0E17] border border-[#2DD4BF] flex items-center justify-center text-[#2DD4BF] font-mono font-bold text-sm">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-foreground dark:text-white mb-3">{step.title}</h3>
                                <p className="text-muted-foreground dark:text-[#A0A0C0] text-sm leading-relaxed max-w-[280px]">
                                    {step.body}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
