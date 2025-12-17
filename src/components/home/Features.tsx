"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, Banknote, Activity } from "lucide-react";

export function Features() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

                {/* Row 1: Effortless Logistics (Pickup + Tracking) */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Visual */}
                    <div className="flex-1 w-full">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#F0F2F5] aspect-[4/3] flex items-center justify-center p-8 group">
                            {/* Abstract Backdrop */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

                            {/* Floating UI Elements */}
                            <div className="relative z-10 w-full max-w-sm">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white rounded-2xl p-6 shadow-xl mb-6 relative border border-gray-100"
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Truck className="w-5 h-5" /></div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm">Pickup Scheduled</h4>
                                            <p className="text-gray-500 text-xs">Mon, 12 Aug • 10:00 AM</p>
                                        </div>
                                    </div>
                                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full w-3/4 bg-blue-500 rounded-full" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="bg-white rounded-2xl p-6 shadow-xl ml-8 border border-gray-100"
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><Activity className="w-5 h-5" /></div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm">Real-Time Tracking</h4>
                                            <p className="text-gray-500 text-xs">Technician is on the way</p>
                                        </div>
                                    </div>
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300" />
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold">+2</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Right Text */}
                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Logistics, <br /> <span className="text-blue-600">Reimagined.</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Forget the hassle of finding a repair shop. We bring the expert to your doorstep, collect your device, and keep you updated every second of the way.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1"><Truck className="w-6 h-6 text-blue-600" /></div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Doorstep Pickup & Delivery</h3>
                                    <p className="text-gray-600">We handle the travel so you don't have to.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1"><Activity className="w-6 h-6 text-orange-600" /></div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Live Journey Tracking</h3>
                                    <p className="text-gray-600">Watch your item's journey from pickup to delivery.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2: Trust & Quality (Verified + Pricing) */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    {/* Right Visual */}
                    <div className="flex-1 w-full">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#F0F2F5] aspect-[4/3] flex items-center justify-center p-8 group">
                            {/* Abstract Backdrop */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />

                            {/* Floating UI Elements */}
                            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="col-span-2 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex items-center gap-4"
                                >
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Verified Expert</h4>
                                        <p className="text-sm text-green-600 font-medium">Background Checked</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex flex-col items-center text-center gap-2"
                                >
                                    <div className="font-bold text-2xl text-gray-900">$80</div>
                                    <p className="text-xs text-gray-500">Fixed Quote</p>
                                </motion.div>

                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex flex-col items-center text-center gap-2"
                                >
                                    <div className="font-bold text-2xl text-gray-900">0%</div>
                                    <p className="text-xs text-gray-500">Hidden Fees</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Left Text */}
                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Total Trust, <br /> <span className="text-green-600">Zero Surprises.</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Your trust is our currency. We only work with the top 5% of technicians and provide upfront, fixed pricing before we start.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1"><ShieldCheck className="w-6 h-6 text-green-600" /></div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Vetted Professionals</h3>
                                    <p className="text-gray-600">Rigorous background checks and skill testing.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1"><Banknote className="w-6 h-6 text-purple-600" /></div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Transparent Pricing</h3>
                                    <p className="text-gray-600">What you see is exactly what you pay.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
