"use client";

import { motion } from "framer-motion";
import { Check, Crown, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Membership() {
    return (
        <section className="py-24 bg-[#0F0E17] relative overflow-hidden">
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2DD4BF]/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-semibold tracking-wide mb-6 border border-indigo-500/20">
                                FIXIFY+ MEMBER
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Join Fixify+. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-[#2DD4BF]">The OS for your household.</span>
                            </h2>
                            <p className="text-xl text-[#A0A0C0] mb-10 max-w-lg">
                                The maintenance subscription for your entire household. One fee, unlimited convenience.
                            </p>

                            <div className="space-y-6 mb-10">
                                {[
                                    { title: "Unlimited Free Pickups", desc: "Never pay a logistics fee. Whether it's one shoe or a microwave." },
                                    { title: "Priority Queue", desc: "Skip the line. Your items are routed to the 'Express Bench' immediately." },
                                    { title: "Flat 15% Discounts", desc: "Save on service charges for all categories—Tech, Fashion, and Home." }
                                ].map((benefit, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mt-1">
                                            <Check size={16} strokeWidth={3} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">{benefit.title}</h4>
                                            <p className="text-[#A0A0C0]">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Button className="h-14 px-8 text-lg rounded-full bg-white text-black hover:bg-gray-200 font-bold transition-all transform hover:scale-105">
                                Get Fixify+ Black Card
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right: The Black Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="relative flex justify-center perspective-1000"
                    >
                        {/* Card Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-[#2DD4BF]/30 blur-2xl transform rotate-6 scale-95" />

                        {/* The Card Itself */}
                        <div className="relative w-full max-w-md aspect-[1.586/1] rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl overflow-hidden p-8 flex flex-col justify-between backdrop-blur-3xl group hover:rotate-1 transition-transform duration-500">
                            {/* Noise Texture */}
                            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex justify-between items-start z-10">
                                <Crown className="text-[#2DD4BF] w-8 h-8" />
                                <div className="text-indigo-400 font-mono tracking-widest text-sm">FIXIFY+</div>
                            </div>

                            <div className="z-10 space-y-2">
                                <div className="text-white/60 text-xs uppercase tracking-widest">Member ID</div>
                                <div className="text-white font-mono text-xl tracking-widest">0000 8821 4590</div>
                            </div>

                            <div className="flex justify-between items-end z-10">
                                <div>
                                    <div className="text-white font-bold tracking-wide">TEJAS V KRISHNA</div>
                                </div>
                                <div className="w-12 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-md opacity-80" /> {/* Simulated Chip */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
