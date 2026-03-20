"use client";

import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ 
                        backgroundImage: `url('https://images.unsplash.com/photo-1626739011274-244f5532290e?q=80&w=2070&auto=format&fit=crop')`,
                    }}
                />
                <div className="absolute inset-0 bg-zinc-950/70 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
                    >
                        Repair Anything. <br />
                        Without Leaving <br />
                        Home.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-zinc-300 max-w-lg mb-10 leading-relaxed font-light"
                    >
                        Doorstep pickup, expert repair, and safe delivery — all managed in one simple, transparent platform.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <Link href="/book" className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 px-10 text-lg rounded-full transition-all shadow-xl">
                                Book a Pickup
                            </Button>
                        </Link>
                        <Link href="/services" className="w-full sm:w-auto">
                            <Button variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 font-bold h-14 px-10 text-lg rounded-full transition-all">
                                Explore Services
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 flex flex-wrap items-center gap-6 text-sm text-zinc-400"
                    >
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-400" />
                            <span>Verified Technicians</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-400" />
                            <span>Real-Time Tracking</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-400" />
                            <span>Secure Handling & Insurance</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
