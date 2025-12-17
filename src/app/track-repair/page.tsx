"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { ArrowRight, CheckCircle2, Clock, MapPin, Package, Search, ShieldCheck, Truck, User, Wrench } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

// Mock Data
const MOCK_ORDER = {
    id: "FIX-9281",
    device: "MacBook Pro 14\"",
    status: "In Repair",
    technician: {
        name: "Alex Rivera",
        rating: 4.9,
        verified: true,
        jobs: 1240
    },
    timeline: [
        { title: "Pickup Scheduled", date: "Oct 24, 10:30 AM", status: "completed", icon: Clock },
        { title: "Item Picked Up", date: "Oct 24, 02:15 PM", status: "completed", icon: Truck },
        { title: "Under Repair", date: "In Progress", status: "current", icon: Wrench },
        { title: "Quality Check", date: "Pending", status: "upcoming", icon: ShieldCheck },
        { title: "Out for Delivery", date: "Pending", status: "upcoming", icon: MapPin },
    ]
};

export default function TrackingPage() {
    const [orderId, setOrderId] = useState("FIX-9281");

    return (
        <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-500">
            {/* Background Mesh Gradient (Dark Mode Only) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 h-[500px] w-[500px] opacity-20 bg-gradient-to-b from-[#2DD4BF]/10 to-transparent blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#818CF8]/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-heading font-bold text-foreground dark:text-white mb-4">Track Your Repair</h1>
                    <div className="flex max-w-md mx-auto gap-2">
                        <Input
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                            placeholder="Enter Order ID (e.g. FIX-9281)"
                            className="bg-white border-zinc-200 dark:bg-white/5 dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground focus:border-[#2DD4BF] focus:ring-[#2DD4BF]/20 rounded-xl shadow-sm dark:shadow-none"
                        />
                        <Button className="rounded-xl px-6 bg-[#2DD4BF] hover:bg-[#2DD4BF]/90 text-[#0F0E17] font-bold">
                            <Search className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Main Timeline Column */}
                    <div className="md:col-span-2 space-y-6">
                        <Card className="p-8 bg-card dark:bg-white/5 border-border dark:border-white/10 backdrop-blur-md shadow-sm dark:shadow-none" hoverEffect={false}>
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <p className="text-sm text-muted-foreground dark:text-[#A0A0C0] uppercase tracking-widest font-semibold">Current Status</p>
                                    <h2 className="text-3xl font-bold text-[#2DD4BF] mt-1">{MOCK_ORDER.status}</h2>
                                    <p className="text-foreground/70 dark:text-white/70 mt-1">{MOCK_ORDER.device}</p>
                                </div>
                                <div className="bg-[#2DD4BF]/10 text-[#2DD4BF] px-3 py-1 rounded-full text-xs font-bold font-mono border border-[#2DD4BF]/20">
                                    {MOCK_ORDER.id}
                                </div>
                            </div>

                            <div className="relative">
                                {/* Vertical Line */}
                                <div className="absolute left-6 top-4 bottom-4 w-px bg-border dark:bg-white/10" />

                                <div className="space-y-8">
                                    {MOCK_ORDER.timeline.map((step, index) => {
                                        const isCompleted = step.status === "completed";
                                        const isCurrent = step.status === "current";
                                        const Icon = step.icon;

                                        return (
                                            <div key={index} className="relative flex items-start group">
                                                {/* Icon Bubble */}
                                                <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-4 transition-colors duration-300 ${isCompleted ? "bg-[#2DD4BF] border-[#2DD4BF] text-[#0F0E17]" :
                                                    isCurrent ? "bg-background dark:bg-[#0F0E17] border-[#2DD4BF] text-[#2DD4BF] shadow-[0_0_15px_rgba(45,212,191,0.4)]" :
                                                        "bg-background dark:bg-[#0F0E17] border-border dark:border-white/10 text-muted-foreground dark:text-gray-500"
                                                    }`}>
                                                    <Icon size={isCurrent ? 20 : 18} />
                                                    {isCurrent && (
                                                        <span className="absolute inset-0 rounded-full bg-[#2DD4BF]/20 animate-ping" />
                                                    )}
                                                </div>

                                                {/* Content */}
                                                <div className="ml-6 pt-2">
                                                    <h3 className={`font-semibold text-lg ${isCompleted || isCurrent ? "text-foreground dark:text-white" : "text-muted-foreground dark:text-gray-500"
                                                        }`}>
                                                        {step.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground dark:text-[#A0A0C0]">{step.date}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Sidebar: Technician Info */}
                    <div className="space-y-6">
                        <Card className="p-6 bg-[#1E1B4B]/20 dark:bg-[#1E1B4B]/30 border-border dark:border-white/10 text-foreground dark:text-white relative overflow-hidden shadow-sm dark:shadow-none" hoverEffect={false}>
                            {/* Decorative blurred blob */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#818CF8]/30 rounded-full blur-3xl opacity-50" />

                            <h3 className="text-lg font-semibold mb-6 relative z-10">Your Technician</h3>

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#818CF8] to-[#6366f1] flex items-center justify-center text-xl font-bold border-2 border-white/20 text-white shadow-lg">
                                    AR
                                </div>
                                <div>
                                    <p className="font-bold text-lg leading-none">{MOCK_ORDER.technician.name}</p>
                                    <div className="flex items-center gap-1 mt-1 text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                        <span className="text-xs text-muted-foreground dark:text-white/50 ml-1">({MOCK_ORDER.technician.rating})</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 relative z-10">
                                <div className="flex items-center gap-3 text-sm text-foreground/70 dark:text-white/70">
                                    <ShieldCheck className="w-4 h-4 text-[#2DD4BF]" />
                                    <span>Background Verified</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-foreground/70 dark:text-white/70">
                                    <Wrench className="w-4 h-4 text-[#818CF8]" />
                                    <span>{MOCK_ORDER.technician.jobs}+ Repairs Completed</span>
                                </div>
                            </div>

                            <Button variant="outline" className="w-full mt-8 border-border dark:border-white/20 bg-background dark:bg-white/5 text-foreground dark:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-all">
                                Contact Technician
                            </Button>
                        </Card>

                        <Card className="p-6 bg-card dark:bg-white/5 border-border dark:border-white/10 backdrop-blur-md shadow-sm dark:shadow-none" hoverEffect={false}>
                            <h3 className="font-semibold mb-4 text-foreground dark:text-white">Need Help?</h3>
                            <p className="text-sm text-muted-foreground dark:text-[#A0A0C0] mb-4">
                                If you have any questions about your repair, our support team is available 24/7.
                            </p>
                            <Button variant="secondary" className="w-full bg-[#2DD4BF]/10 text-[#2DD4BF] hover:bg-[#2DD4BF]/20 border border-[#2DD4BF]/20">
                                Visit Help Center
                            </Button>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
