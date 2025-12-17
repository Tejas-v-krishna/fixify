"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function CallToAction() {
    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/20 to-[#818CF8]/20 dark:from-[#2DD4BF]/10 dark:to-[#818CF8]/10" />
            <div className="absolute inset-0 backdrop-blur-3xl" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-12 rounded-[3rem] bg-background/50 dark:bg-black/20 border border-border dark:border-white/20 shadow-2xl backdrop-blur-xl"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-foreground dark:text-white mb-6 tracking-tight">
                        Stop hoarding <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">broken things.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-muted-foreground dark:text-[#A0A0C0] mb-10 font-light">
                        Clear your clutter. Restore your favorites. Save the planet.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <Link href="/book">
                            <Button className="h-16 px-10 text-xl rounded-full bg-foreground dark:bg-white text-background dark:text-black font-bold hover:scale-105 transition-transform shadow-xl">
                                Book Your First Pickup
                            </Button>
                        </Link>
                        <p className="text-sm font-medium text-[#2DD4BF] flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2DD4BF]"></span>
                            </span>
                            Arriving in your area in 45 mins.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
