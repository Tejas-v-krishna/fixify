"use client";

import { motion } from "framer-motion";
import { MapPin, Wrench, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
    return (
        <section className="py-24 bg-[#002838] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00A8E8]/10 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Sticky Left Content */}
                    <div className="flex-1 lg:sticky lg:top-32 self-start">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Logistics, <br /><span className="text-[#00A8E8]">Reimagined.</span></h2>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-md">
                            Forget the hassle of finding a shop. We've built a seamless logistics network dedicated to your devices.
                        </p>
                    </div>

                    {/* Right Cards Stack */}
                    <div className="flex-1 w-full flex flex-col gap-6">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ margin: "-100px" }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center gap-6 group hover:bg-white/10 transition-colors"
                        >
                            <div className="w-14 h-14 rounded-full bg-[#00A8E8]/20 flex items-center justify-center shrink-0">
                                <MapPin className="w-6 h-6 text-[#00A8E8]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Instant Pickup</h3>
                                <p className="text-gray-400 text-sm">Rider arriving in <span className="text-white font-mono">15 mins</span></p>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ margin: "-100px" }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center gap-6 group hover:bg-white/10 transition-colors"
                        >
                            <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                                <Wrench className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Expert Diagnostics</h3>
                                <div className="inline-flex items-center px-2 py-1 rounded bg-purple-400/20 text-purple-300 text-xs font-medium mt-1">
                                    Issue Identified: Battery Replacement
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ margin: "-100px" }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center gap-6 group hover:bg-white/10 transition-colors"
                        >
                            <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                <CheckCircle2 className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Safe Return</h3>
                                <p className="text-gray-400 text-sm">Your device has been delivered safely.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
