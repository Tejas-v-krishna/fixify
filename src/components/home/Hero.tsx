"use client";

import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
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
                        Fast Appliance <br />
                        Repair Services <br />
                        Nearby
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-zinc-300 max-w-lg mb-10 leading-relaxed font-light"
                    >
                        Our experts diagnose and repair top-tier brands, including Samsung, LG, Whirlpool, Bosch, etc. even many more.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <Link href="/book" className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto bg-white hover:bg-zinc-100 text-zinc-950 font-bold h-14 px-10 text-lg rounded-full transition-all shadow-xl">
                                Schedule Appliance
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-12 flex items-center gap-2 text-sm text-zinc-400"
                    >
                        <div className="flex text-blue-400">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <span>4.9/5 Rating based on 12,000+ repairs.</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
