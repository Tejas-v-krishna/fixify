"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Search, Package, CheckCircle2, Truck, Wrench, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function TrackingPage() {
    const [orderId, setOrderId] = useState("");
    const [status, setStatus] = useState<"idle" | "found">("idle"); // Mock state

    const handleTrack = () => {
        if (orderId) {
            setStatus("found");
        }
    };

    const steps = [
        { icon: Package, label: "Order Placed", date: "Dec 10, 09:00 AM", done: true },
        { icon: Truck, label: "Picked Up", date: "Dec 10, 02:30 PM", done: true },
        { icon: Wrench, label: "In Repair", date: "In Progress", done: true, active: true },
        { icon: CheckCircle2, label: "Quality Check", date: "Pending", done: false },
        { icon: Truck, label: "Out for Delivery", date: "Pending", done: false },
    ];

    return (
        <div className="min-h-screen bg-surface pt-24 pb-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">

                <div className="text-center mb-12">
                    <h1 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">Track Your Repair</h1>
                    <p className="text-charcoal/60">Enter your Order ID to see the current status.</p>
                </div>

                <Card className="p-2 mb-12 max-w-lg mx-auto flex gap-2 border-transparent shadow-lg shadow-primary/5">
                    <div className="flex-grow">
                        <Input
                            placeholder="e.g. FX-1234-5678"
                            className="border-0 bg-transparent focus:ring-0 h-12"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                        />
                    </div>
                    <Button onClick={handleTrack} className="h-12 px-8">Track</Button>
                </Card>

                {status === "found" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Card className="p-8 border-transparent shadow-sm">
                            <div className="flex justify-between items-start mb-8 border-b border-gray-100 pb-6">
                                <div>
                                    <h2 className="font-heading font-bold text-xl text-charcoal mb-1">MacBook Pro Repair</h2>
                                    <p className="text-sm text-charcoal/50">Order #FX-8821-0092</p>
                                </div>
                                <div className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full uppercase tracking-wide">
                                    In Progress
                                </div>
                            </div>

                            {/* Progress Steps */}
                            <div className="relative">
                                {/* Line */}
                                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-100" />

                                <div className="space-y-8">
                                    {steps.map((step, index) => (
                                        <div key={index} className="relative flex gap-6 items-start">
                                            <div className={`relative z-10 w-12 h-12 rounded-full border-4 flex items-center justify-center bg-white transition-colors duration-300
                             ${step.done ? 'border-primary text-primary' : 'border-gray-100 text-gray-300'}
                             ${step.active ? 'ring-4 ring-primary/20' : ''}
                          `}>
                                                <step.icon size={20} />
                                            </div>
                                            <div className={`pt-2 transition-opacity duration-300 ${step.done ? 'opacity-100' : 'opacity-40'}`}>
                                                <h3 className="font-bold text-charcoal">{step.label}</h3>
                                                <p className="text-sm text-charcoal/50">{step.date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Agent Info */}
                            <div className="mt-10 bg-gray-50 rounded-xl p-4 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-200" /> {/* Placeholder Avatar */}
                                <div>
                                    <p className="font-bold text-charcoal text-sm">Assigned Technician</p>
                                    <p className="text-charcoal/60 text-xs">Alex M. • Verified Expert</p>
                                </div>
                                <Button variant="outline" size="sm" className="ml-auto">Contact</Button>
                            </div>

                        </Card>
                    </motion.div>
                )}

            </div>
        </div>
    );
}
