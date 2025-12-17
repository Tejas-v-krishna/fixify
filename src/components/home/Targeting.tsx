"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Home } from "lucide-react";

export function Targeting() {
    return (
        <section className="py-24 bg-background transition-colors duration-500 relative border-t border-border dark:border-white/5">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground dark:text-white mb-6">
                        Built for your busy life.
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-1 gap-6">
                    {/* Professional */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-6 p-6 rounded-2xl bg-card dark:bg-[#1E1B4B]/30 border border-[#818CF8]/20 hover:border-[#818CF8]/40 transition-colors shadow-sm dark:shadow-none"
                    >
                        <div className="w-12 h-12 rounded-full bg-[#818CF8]/20 flex items-center justify-center text-[#818CF8] shrink-0">
                            <Briefcase className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-foreground dark:text-white mb-1">For The Professional</h3>
                            <p className="text-muted-foreground dark:text-[#A0A0C0] text-sm">Don't cancel your meetings to fix your laptop. We handle the logistics so you can stay focused.</p>
                        </div>
                    </motion.div>

                    {/* Student */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        // Note: Keeping margin behavior but ensuring responsive
                        className="flex items-center gap-6 p-6 rounded-2xl bg-[#2DD4BF]/5 dark:bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 hover:border-[#2DD4BF]/40 transition-colors ml-0 md:ml-12 shadow-sm dark:shadow-none"
                    >
                        <div className="w-12 h-12 rounded-full bg-[#2DD4BF]/20 flex items-center justify-center text-[#2DD4BF] shrink-0">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-foreground dark:text-white mb-1">For The Student</h3>
                            <p className="text-muted-foreground dark:text-[#A0A0C0] text-sm">Deadline approaching? Fast-track turnaround options available for urgent academic needs.</p>
                        </div>
                    </motion.div>

                    {/* Home */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-6 p-6 rounded-2xl bg-card dark:bg-white/5 border border-border dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20 transition-colors shadow-sm dark:shadow-none"
                    >
                        <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-white/10 flex items-center justify-center text-foreground dark:text-white shrink-0">
                            <Home className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-foreground dark:text-white mb-1">For The Home</h3>
                            <p className="text-muted-foreground dark:text-[#A0A0C0] text-sm">From kitchen appliances to smart home tech. One platform to manage every breakdown in your house.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
