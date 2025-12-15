"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { FileUpload } from "@/components/ui/FileUpload";
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin, Package, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import { useSearchParams } from "next/navigation";

import { Suspense } from "react";

function BookingContent() {
    const [step, setStep] = useState(1);
    const searchParams = useSearchParams();
    const category = searchParams.get("category");
    const categoryLabel = category ? category.charAt(0).toUpperCase() + category.slice(1) : "";

    return (
        <div className="min-h-screen bg-secondary pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-3xl font-heading font-bold text-foreground">Schedule a Pickup</h1>
                    <p className="text-muted-foreground mt-1">Tell us what needs fixing, and we'll handle the rest.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Form */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Step 1: Item Details */}
                        <Card className="p-6 md:p-8" hoverEffect={false}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">1</div>
                                <h2 className="text-xl font-semibold text-foreground">Item Details</h2>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input label="Category" placeholder="Select Category (e.g. Electronics)" defaultValue={categoryLabel} />
                                    <Input label="Item Name" placeholder="e.g. iPhone 13 Pro" />
                                </div>
                                <Textarea label="Problem Description" placeholder="Describe the issue... (e.g. Screen cracked, battery draining fast)" />
                                <FileUpload label="Upload Photo (Optional)" />
                            </div>
                        </Card>

                        {/* Step 2: Location */}
                        <Card className="p-6 md:p-8" hoverEffect={false}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">2</div>
                                <h2 className="text-xl font-semibold text-foreground">Pickup Location</h2>
                            </div>
                            <div className="space-y-4">
                                <Input label="Street Address" placeholder="123 Main St" />
                                <div className="grid grid-cols-2 gap-4">
                                    <Input label="City" placeholder="New York" />
                                    <Input label="Zip Code" placeholder="10001" />
                                </div>
                            </div>
                        </Card>

                        {/* Step 3: Schedule */}
                        <Card className="p-6 md:p-8" hoverEffect={false}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">3</div>
                                <h2 className="text-xl font-semibold text-foreground">Preferred Time</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="Date" type="date" className="bg-white" />
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-charcoal/70">Time Slot</label>
                                    <select className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white text-gray-900">
                                        <option>Morning (9 AM - 12 PM)</option>
                                        <option>Afternoon (12 PM - 4 PM)</option>
                                        <option>Evening (4 PM - 8 PM)</option>
                                    </select>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Right Column: Summary */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <Card className="p-6 bg-charcoal text-white border-none" hoverEffect={false}>
                                <h3 className="text-lg font-semibold mb-4">Pricing Estimate</h3>
                                <div className="flex justify-between items-center mb-2 text-white/80">
                                    <span>Inspection Fee</span>
                                    <span>$0.00</span>
                                </div>
                                <div className="flex justify-between items-center mb-6 text-white/80">
                                    <span>Pickup & Delivery</span>
                                    <span className="text-green-400 font-medium">Free</span>
                                </div>
                                <div className="h-px bg-white/10 mb-6" />
                                <div className="flex justify-between items-end mb-1">
                                    <span className="text-sm text-white/60">Estimated Total</span>
                                    <span className="text-3xl font-bold">$10 - $50*</span>
                                </div>
                                <p className="text-xs text-white/40 mb-6">*Final price depends on parts needed.</p>

                                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-12 text-base font-semibold shadow-lg shadow-blue-500/20">
                                    Confirm Pickup
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Card>

                            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/50 space-y-3">
                                <div className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-green-600 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-semibold text-charcoal">Verified Experts</p>
                                        <p className="text-xs text-muted-foreground">All technicians are background checked.</p>
                                    </div>
                                </div>
                                <div className="h-px bg-gray-200/50" />
                                <div className="flex items-start gap-3">
                                    <Package className="w-5 h-5 text-blue-600 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-semibold text-charcoal">Safe Handling</p>
                                        <p className="text-xs text-muted-foreground">Insured pickup and delivery.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function BookingPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-secondary flex items-center justify-center">Loading...</div>}>
            <BookingContent />
        </Suspense>
    );
}
