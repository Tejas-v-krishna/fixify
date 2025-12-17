"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MapPin, MessageSquare, Receipt, Smartphone } from "lucide-react";
import Link from "next/link";

export function ControlDeck() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#2DD4BF]/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left: Phone UI Visualization */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    {/* Abstract Phone Container */}
                    <div className="relative w-[300px] h-[600px] rounded-[3rem] border border-border dark:border-white/20 bg-[#0F0E17] shadow-2xl overflow-hidden p-4">
                        {/* Status Bar */}
                        <div className="absolute top-0 left-0 right-0 h-6 bg-black z-20 flex justify-center">
                            <div className="w-20 h-4 bg-black rounded-b-xl" />
                        </div>

                        {/* App Interface Mockup */}
                        <div className="w-full h-full rounded-[2rem] bg-zinc-900/50 relative overflow-hidden flex flex-col">
                            {/* Map Header */}
                            <div className="h-2/5 bg-[#1E1B4B]/50 w-full relative">
                                <div className="absolute inset-0 opacity-20"
                                    style={{ backgroundImage: 'radial-gradient(#2DD4BF 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                                />
                                {/* Rider marker */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="w-8 h-8 bg-[#2DD4BF] rounded-full shadow-[0_0_15px_#2DD4BF] animate-pulse" />
                                </div>
                            </div>

                            {/* Dashboard Content */}
                            <div className="flex-1 p-4 space-y-4">
                                <div className="h-2 w-12 bg-zinc-700 rounded-full mx-auto" />
                                <div className="space-y-2">
                                    <div className="text-xs text-zinc-400 uppercase tracking-wider">Status</div>
                                    <div className="text-white font-bold text-lg">Fixify Pilot Approaching</div>
                                    <div className="text-sm text-[#2DD4BF] flex items-center gap-2">
                                        <MapPin size={14} /> Arriving in 4 mins
                                    </div>
                                </div>

                                <div className="bg-white/5 rounded-xl p-3 flex items-center gap-3 border border-white/5">
                                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                        <MessageSquare size={18} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-white font-medium">Chat with Technician</div>
                                        <div className="text-xs text-zinc-500">Online</div>
                                    </div>
                                </div>

                                <div className="bg-white/5 rounded-xl p-3 flex items-center gap-3 border border-white/5">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                        <Receipt size={18} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-white font-medium">Estimate Ready</div>
                                        <div className="text-xs text-zinc-500">Tap to view & approve</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Content */}
                <div className="flex flex-col items-start gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-4 leading-tight">
                            Your remote control <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#818CF8]">for repairs.</span>
                        </h2>
                        <p className="text-xl text-muted-foreground dark:text-[#A0A0C0] mb-8 max-w-lg">
                            Manage everything from a single dashboard. No phone calls required.
                        </p>

                        <ul className="space-y-6 mb-8">
                            {[
                                {
                                    icon: MapPin,
                                    title: "Live Map View",
                                    desc: "See your \"Fixify Pilot\" approaching your location in real-time."
                                },
                                {
                                    icon: MessageSquare,
                                    title: "Chat with Experts",
                                    desc: "Direct line to the lab technician working on your device."
                                },
                                {
                                    icon: Receipt,
                                    title: "Digital Invoice",
                                    desc: "Approve estimates and pay securely via the app."
                                }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 dark:bg-white/5 flex items-center justify-center text-primary dark:text-[#2DD4BF]">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground dark:text-white text-lg">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground dark:text-[#A0A0C0]">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-4">
                            <Button className="rounded-full px-8 py-6 text-lg bg-foreground dark:bg-white text-background dark:text-black hover:opacity-90 transition-opacity">
                                Download the App
                            </Button>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
