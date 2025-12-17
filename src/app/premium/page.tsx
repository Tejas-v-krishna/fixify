"use client";

import { Button } from "@/components/ui/Button";
import { Check, Crown, Diamond, Shield, Zap, ArrowLeft, Star } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar"; // Assuming there might be a Navbar component, but usually Layout handles it. 
// Actually, layout.tsx likely includes Header throughout. I might want to hide the default header? 
// The user said "a new page to be created". Usually app router layouts persist. 
// If they want a distinctive page, maybe I should hide the default header or just let it be. 
// For "way more premium", a custom header or no header (just back button) might be better.
// But keeping global nav is usually safer for UX. I'll stick to standard layout integration for now.

const features = [
    { icon: Zap, label: "Priority Pickup & Delivery", text: "Skip the queue. We'll be there in under 60 mins." },
    { icon: Shield, label: "Extended 12-Month Warranty", text: "Double the protection on all your repairs." },
    { icon: Diamond, label: "Zero Service Fees", text: "Unlimited repairs with $0 service charge." },
    { icon: Crown, label: "Dedicated Concierge", text: "24/7 personal support for all your needs." },
];

export default function PremiumPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-amber-500/30 font-sans">
            {/* Background Effects */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black -z-10" />
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none -z-10 opacity-50" />

            <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

                {/* Back Link */}
                <div className="absolute top-10 left-4 lg:left-8">
                    <Link href="/" className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">

                    {/* Left: Copy */}
                    <div className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-sm font-medium mx-auto lg:mx-0"
                        >
                            <Crown className="w-4 h-4" />
                            <span>Fixify Premium</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
                        >
                            Upgrade to <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">First Class</span>.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-neutral-400 mb-8 leading-relaxed"
                        >
                            Unlock the ultimate repair experience. Priority service, zero fees, and peace of mind for your entire home.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="hidden lg:grid grid-cols-2 gap-6"
                        >
                            {features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <div className="p-2 rounded-xl bg-amber-500/20 text-amber-500">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">{feature.label}</h4>
                                        <p className="text-sm text-neutral-400 mt-1">{feature.text}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                    </div>

                    {/* Right: Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="w-full max-w-md relative"
                    >
                        {/* Glow behind card */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-[2rem] blur opacity-20" />

                        <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[1.75rem] p-8 overflow-hidden">
                            {/* Card Shine */}
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 blur-3xl rounded-full pointer-events-none" />

                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-xl font-medium text-white flex items-center gap-2">
                                        Membership <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                                    </h3>
                                    <p className="text-sm text-neutral-400 mt-1">Billed annually</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-4xl font-bold text-white tracking-tight">$99</div>
                                    <div className="text-sm text-neutral-500">/year</div>
                                </div>
                            </div>

                            <div className="space-y-5 mb-8 lg:hidden">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="mt-0.5 min-w-[20px]">
                                            <Check className="w-5 h-5 text-amber-500" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-white">{feature.label}</div>
                                            <div className="text-xs text-neutral-500">{feature.text}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-5 mb-8 hidden lg:block">
                                <p className="text-neutral-300">
                                    Join the waiting list today and get <span className="text-white font-semibold">3 months free</span> when we launch.
                                </p>
                                <div className="h-px w-full bg-white/10" />
                                <div className="flex justify-between text-sm">
                                    <span className="text-neutral-400">Monthly breakdown</span>
                                    <span className="text-white">~$8.25/mo</span>
                                </div>
                            </div>

                            <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold h-14 rounded-xl text-lg transition-all shadow-lg shadow-amber-500/20 active:scale-[0.98]">
                                Join Fixify Premium
                            </Button>

                            <p className="mt-4 text-center text-xs text-neutral-500">
                                100% Satisfaction Guarantee. Cancel anytime.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
