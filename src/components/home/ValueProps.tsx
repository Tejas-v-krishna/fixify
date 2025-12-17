"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function ValueProps() {
    return (
        <section className="py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

                {/* Row 1: Transparency */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 w-full order-1 lg:order-1">
                        {/* Visual Placeholder */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white aspect-[4/3] flex items-center justify-center p-8 border border-gray-100">
                            <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white" />
                            {/* Mock Tracker UI */}
                            <div className="relative z-10 w-64 bg-white rounded-2xl shadow-lg border border-gray-100 p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-bold text-gray-900">Live Tracker</h4>
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                </div>
                                <div className="space-y-4 relative pl-4 border-l-2 border-gray-100">
                                    {[1, 2, 3].map((_, i) => (
                                        <div key={i} className="relative">
                                            <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-white" />
                                            <div className="h-2 w-24 bg-gray-100 rounded mb-1" />
                                            <div className="h-2 w-16 bg-gray-50 rounded" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 order-2 lg:order-2 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#00171F]">Total Trust, <br /> Zero Surprises.</h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Track your device’s journey in real-time. From the moment it leaves your hand to the moment it returns, you know exactly where it is and who is handling it.
                        </p>
                        <Link href="/track" className="inline-flex items-center text-[#00A8E8] font-bold hover:underline gap-1 text-lg">
                            See how we track <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Row 2: Expertise */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 w-full order-1 lg:order-2">
                        {/* Visual Placeholder */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#00171F] aspect-[4/3] flex items-center justify-center p-8">
                            {/* "Certified Badge" Overlay */}
                            <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-green-400" />
                                <span className="text-white text-sm font-medium">Certified Expert</span>
                            </div>

                            {/* Abstract content for "Microscope/Lab" feel */}
                            <div className="text-center text-white/50">
                                <Search className="w-20 h-20 mx-auto mb-4 opacity-50" />
                                <p>High-Precision Repair Lab</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 order-2 lg:order-1 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#00171F]">Repairs you can <br /> count on.</h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Our technicians aren't just hobbyists. They are certified experts using genuine parts to ensure your device works like new.
                        </p>
                        <Link href="/experts" className="inline-flex items-center text-[#00A8E8] font-bold hover:underline gap-1 text-lg">
                            Meet our experts <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
