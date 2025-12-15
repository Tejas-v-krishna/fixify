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
        <div className="min-h-screen bg-secondary pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Track Your Repair</h1>
                    <div className="flex max-w-md mx-auto gap-2">
                        <Input
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                            placeholder="Enter Order ID (e.g. FIX-9281)"
                            className="bg-white"
                        />
                        <Button className="rounded-xl px-6">
                            <Search className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Main Timeline Column */}
                    <div className="md:col-span-2 space-y-6">
                        <Card className="p-8" hoverEffect={false}>
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Current Status</p>
                                    <h2 className="text-3xl font-bold text-primary mt-1">{MOCK_ORDER.status}</h2>
                                    <p className="text-foreground/70 mt-1">{MOCK_ORDER.device}</p>
                                </div>
                                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold font-mono">
                                    {MOCK_ORDER.id}
                                </div>
                            </div>

                            <div className="relative">
                                {/* Vertical Line */}
                                <div className="absolute left-6 top-4 bottom-4 w-px bg-gray-200" />

                                <div className="space-y-8">
                                    {MOCK_ORDER.timeline.map((step, index) => {
                                        const isCompleted = step.status === "completed";
                                        const isCurrent = step.status === "current";
                                        const Icon = step.icon;

                                        return (
                                            <div key={index} className="relative flex items-start group">
                                                {/* Icon Bubble */}
                                                <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-4 transition-colors duration-300 ${isCompleted ? "bg-primary border-primary text-white" :
                                                    isCurrent ? "bg-white border-primary text-primary shadow-lg shadow-primary/20" :
                                                        "bg-gray-50 border-gray-100 text-gray-300"
                                                    }`}>
                                                    <Icon size={isCurrent ? 20 : 18} />
                                                    {isCurrent && (
                                                        <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                                                    )}
                                                </div>

                                                {/* Content */}
                                                <div className="ml-6 pt-2">
                                                    <h3 className={`font-semibold text-lg ${isCompleted || isCurrent ? "text-foreground" : "text-gray-400"
                                                        }`}>
                                                        {step.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground">{step.date}</p>
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
                        <Card className="p-6 bg-charcoal text-white border-none relative overflow-hidden" hoverEffect={false}>
                            {/* Decorative blurred blob */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />

                            <h3 className="text-lg font-semibold mb-6 relative z-10">Your Technician</h3>

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-xl font-bold border-2 border-white/10">
                                    AR
                                </div>
                                <div>
                                    <p className="font-bold text-lg leading-none">{MOCK_ORDER.technician.name}</p>
                                    <div className="flex items-center gap-1 mt-1 text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                        <span className="text-xs text-white/50 ml-1">({MOCK_ORDER.technician.rating})</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 relative z-10">
                                <div className="flex items-center gap-3 text-sm text-white/70">
                                    <ShieldCheck className="w-4 h-4 text-green-400" />
                                    <span>Background Verified</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white/70">
                                    <Wrench className="w-4 h-4 text-primary" />
                                    <span>{MOCK_ORDER.technician.jobs}+ Repairs Completed</span>
                                </div>
                            </div>

                            <Button variant="outline" className="w-full mt-8 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                                Contact Technician
                            </Button>
                        </Card>

                        <Card className="p-6" hoverEffect={false}>
                            <h3 className="font-semibold mb-4 text-foreground">Need Help?</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                If you have any questions about your repair, our support team is available 24/7.
                            </p>
                            <Button variant="secondary" className="w-full">
                                Visit Help Center
                            </Button>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
