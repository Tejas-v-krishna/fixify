"use client";

import { Typewriter } from "@/components/ui/Typewriter";

import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, Bike, Package, ShieldCheck, Clock, Microwave, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import LightRays from "@/components/core/light-rays";

export function Hero() {
    return (
        <section className="relative w-full min-h-screen bg-background transition-colors duration-500 overflow-hidden flex items-center pt-20 pb-20">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* LightRays Component */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                    <LightRays
                        raysColor="#2DD4BF"
                        raysOrigin="top-center"
                        raysSpeed={0.9}
                        lightSpread={2}
                        rayLength={3.0}
                        fadeDistance={2.0}
                        mouseInfluence={0.01}
                    />
                </div>
                {/* Light Pillar Effect (Dark Mode Standard) */}
                <div className="hidden dark:block absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[140%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_160deg,#2DD4BF_180deg,transparent_200deg,transparent_360deg)] opacity-10 blur-[80px] rotate-180" />

                {/* Secondary blurred pillar for depth */}
                <div className="hidden dark:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[800px] bg-gradient-to-t from-[#818CF8]/20 via-[#2DD4BF]/5 to-transparent blur-[60px]" />

                {/* Existing Mesh Gradients */}
                <div className="absolute bottom-0 left-0 right-0 h-[500px] opacity-30 bg-gradient-to-t from-[#2DD4BF]/10 via-[#818CF8]/20 to-transparent" />
                <div className="absolute -bottom-[200px] -left-[200px] w-[600px] h-[600px] bg-[#7C3AED]/20 rounded-full blur-[120px]" />
                <div className="absolute -bottom-[200px] -right-[200px] w-[600px] h-[600px] bg-[#2DD4BF]/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="flex flex-col items-start text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6"
                    >
                        <span className="px-4 py-1.5 rounded-full border border-[#2DD4BF]/30 bg-[#2DD4BF]/10 text-[#2DD4BF] text-sm font-medium tracking-wide">
                            ✨ Introducing Gofex+
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground dark:text-white leading-[1.1] mb-6"
                    >
                        The one-stop shop for <br />
                        <Typewriter
                            words={[
                                "everything broken.",
                                "your smartphone.",
                                "favorite sneakers.",
                                "kitchen appliances.",
                                "vintage watches.",
                                "leather handbags.",
                                "peace of mind."
                            ]}
                            typingSpeed={80}
                            deletingSpeed={40}
                            pauseDuration={2000}
                            className="text-[#2DD4BF]"
                            cursorClassName="bg-[#2DD4BF]"
                        />
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground dark:text-[#A0A0C0] max-w-xl mb-8 leading-relaxed font-light"
                    >
                        From your favorite sneakers to your smart TV. We pick up, repair, and restore your household and personal essentials without you leaving the door.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col gap-4 mb-8 w-full sm:w-auto"
                    >
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Link href="/book" onClick={() => toast.info("Starting booking process...")} className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto bg-gradient-to-r from-[#2DD4BF] to-[#0D9488] hover:from-[#14B8A6] hover:to-[#0F766E] text-[#0F0E17] font-bold h-14 px-8 text-lg rounded-full transition-all shadow-lg hover:shadow-[#2DD4BF]/25">
                                    Book a Pickup
                                </Button>
                            </Link>
                            <Link href="/how-it-works" className="w-full sm:w-auto px-8 h-14 flex items-center justify-center rounded-full border border-border dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm text-foreground dark:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-all font-medium group shadow-sm dark:shadow-none">
                                See how it works <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Micro-Copy */}
                        <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground dark:text-[#A0A0C0]/80">
                            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#2DD4BF]" /> Instant quote</span>
                            <span className="w-1 h-1 rounded-full bg-border dark:bg-[#A0A0C0]/30" />
                            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#2DD4BF]" /> Insured Logistics</span>
                            <span className="w-1 h-1 rounded-full bg-border dark:bg-[#A0A0C0]/30" />
                            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#2DD4BF]" /> Real-time Tracking</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground dark:text-[#A0A0C0]"
                    >
                        <div className="flex text-[#2DD4BF]">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <span>4.9/5 Rating based on 12,000+ repairs.</span>
                    </motion.div>
                </div>

                {/* Right Visual: Live Operations Stack */}
                {/* Right Visual: Live Operations Stack (User Provided) */}
                <div className="relative w-full h-[600px] flex items-center justify-center perspective-1000">

                    {/* Container for the 3D Stack */}
                    <div className="relative w-[320px] h-[400px] transform rotate-x-6 rotate-y-[-12deg] rotate-z-2 animate-float preserve-3d">

                        {/* =========================================
                            CARD 1 (Bottom): Order Placed
                            Z-Index: 10
                        ========================================= */}
                        <div className="absolute top-[330px] left-[-40px] w-full p-4 rounded-2xl border border-white/10 bg-[#0F0E17]/80 backdrop-blur-md shadow-2xl z-10 transition-transform hover:scale-105 duration-300">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                                    <Microwave className="w-6 h-6 text-gray-400" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Order Placed</p>
                                    <h4 className="text-white text-sm font-medium">Samsung Convection</h4>
                                </div>
                            </div>
                        </div>

                        {/* =========================================
                            CARD 2 (Middle): In Transit
                            Z-Index: 20
                        ========================================= */}
                        <div className="absolute top-[200px] left-[-20px] w-full p-4 rounded-2xl border border-indigo-500/30 bg-[#1E1B4B]/80 backdrop-blur-md shadow-indigo-900/20 shadow-2xl z-20 transition-transform hover:scale-105 duration-300">

                            {/* Header */}
                            <div className="flex justify-between items-center mb-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
                                    <p className="text-indigo-300 text-xs font-bold uppercase tracking-wider">In Transit</p>
                                </div>
                                <span className="text-xs text-white/50">12 mins away</span>
                            </div>

                            {/* Map Visualization (CSS Only) */}
                            <div className="relative h-20 w-full rounded-lg bg-indigo-950/50 border border-indigo-500/20 overflow-hidden">
                                {/* Map Path Line */}
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 100">
                                    <path d="M 20,80 C 80,80 100,20 180,50 S 280,20 280,20" fill="none" stroke="#6366F1" strokeWidth="2" strokeDasharray="5,5" className="opacity-60" />
                                </svg>

                                {/* Rider Icon Floating */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-500 p-1.5 rounded-full shadow-lg shadow-indigo-500/50">
                                    <Bike className="w-4 h-4 text-white" />
                                </div>

                                {/* Home Marker */}
                                <MapPin className="absolute top-2 right-4 w-4 h-4 text-white/40" />
                            </div>
                        </div>

                        {/* =========================================
                            CARD 3 (Top): Repair In Progress
                            Z-Index: 30 (Highest)
                        ========================================= */}
                        <div className="absolute top-[-10] left-0 w-full p-5 rounded-2xl border border-[#2DD4BF]/40 bg-[#0F0E17]/90 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(45,212,191,0.3)] z-30 transition-transform hover:scale-105 duration-300">

                            {/* Header */}
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-[#2DD4BF] text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2DD4BF]"></span>
                                        </span>
                                        Repair in Progress
                                    </p>
                                    <h3 className="text-white text-xl font-bold">iPhone 14 Pro</h3>
                                    <p className="text-gray-400 text-sm">Display Replacement</p>
                                </div>

                                {/* Circular Progress Ring */}
                                <div className="relative w-12 h-12 flex items-center justify-center">
                                    <svg className="w-full h-full transform -rotate-90">
                                        {/* Background Circle */}
                                        <circle cx="24" cy="24" r="20" stroke="#334155" strokeWidth="4" fill="transparent" />
                                        {/* Progress Circle (Mint) */}
                                        <circle cx="24" cy="24" r="20" stroke="#2DD4BF" strokeWidth="4" fill="transparent" strokeDasharray="125.6" strokeDashoffset="31.4" strokeLinecap="round" />
                                    </svg>
                                    <span className="absolute text-[10px] font-bold text-white">75%</span>
                                </div>
                            </div>

                            {/* Timeline / Steps */}
                            <div className="space-y-3 mt-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />
                                    <span className="text-gray-400 text-xs line-through">Diagnostics Complete</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 rounded-full border-2 border-[#2DD4BF] border-t-transparent animate-spin"></div>
                                    <span className="text-white text-xs font-medium">Installing new OLED Panel...</span>
                                </div>
                            </div>

                            {/* ETA Footer */}
                            <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center">
                                <span className="text-gray-400 text-xs">Estimated Completion</span>
                                <span className="text-[#2DD4BF] text-sm font-bold">45 Mins</span>
                            </div>

                        </div>

                    </div>

                    {/* Custom Styles for Float Animation */}
                    <style jsx>{`
                        .perspective-1000 {
                            perspective: 1000px;
                        }
                        .preserve-3d {
                            transform-style: preserve-3d;
                        }
                        @keyframes float {
                            0%, 100% { transform: rotateX(6deg) rotateY(-12deg) rotateZ(2deg) translateY(0px); }
                            50% { transform: rotateX(6deg) rotateY(-12deg) rotateZ(2deg) translateY(-20px); }
                        }
                        .animate-float {
                            animation: float 6s ease-in-out infinite;
                        }
                    `}</style>
                </div>

            </div>
        </section>
    );
}
