"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { FileUpload } from "@/components/ui/FileUpload";
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin, Package, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState, Suspense } from "react";
import { motion } from "framer-motion";

import { useSearchParams } from "next/navigation";

function BookingContent() {
    const [step, setStep] = useState(1);
    const searchParams = useSearchParams();
    const category = searchParams.get("category");
    const categoryLabel = category ? category.charAt(0).toUpperCase() + category.slice(1) : "";

    return (
        <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-500">
            {/* Background Mesh Gradient (Dark Mode Only) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 h-[600px] w-[600px] opacity-20 bg-gradient-to-b from-[#2DD4BF]/10 to-transparent blur-[120px]" />
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#818CF8]/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-[#2DD4BF] mb-4 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-3xl font-heading font-bold text-foreground">Schedule a <span className="text-[#2DD4BF]">Pickup</span></h1>
                    <p className="text-muted-foreground mt-1">Tell us what needs fixing, and we'll handle the rest.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Form */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Step 1: Item Details */}
                        <Card className="p-6 md:p-8 bg-card dark:bg-white/5 border-border dark:border-white/10 dark:backdrop-blur-md shadow-sm dark:shadow-none" hoverEffect={false}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF] flex items-center justify-center font-bold text-sm border border-[#2DD4BF]/20">1</div>
                                <h2 className="text-xl font-semibold text-foreground">Item Details</h2>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input label="Category" placeholder="Select Category (e.g. Electronics)" defaultValue={categoryLabel} className="bg-white dark:bg-[#0F0E17]/50 border-input dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground focus:border-[#2DD4BF] focus:ring-[#2DD4BF]/20" />
                                    <Input label="Item Name" placeholder="e.g. iPhone 13 Pro" className="bg-white dark:bg-[#0F0E17]/50 border-input dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground focus:border-[#2DD4BF] focus:ring-[#2DD4BF]/20" />
                                </div>
                                <Textarea label="Problem Description" placeholder="Describe the issue... (e.g. Screen cracked, battery draining fast)" className="bg-white dark:bg-[#0F0E17]/50 border-input dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground focus:border-[#2DD4BF] focus:ring-[#2DD4BF]/20" />
                                <FileUpload label="Upload Photo (Optional)" />
                            </div>
                        </Card>

                        {/* Step 2: Location */}
                        <Card className="p-6 md:p-8 bg-card dark:bg-white/5 border-border dark:border-white/10 dark:backdrop-blur-md shadow-sm dark:shadow-none" hoverEffect={false}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF] flex items-center justify-center font-bold text-sm border border-[#2DD4BF]/20">2</div>
                                <h2 className="text-xl font-semibold text-foreground">Pickup Location</h2>
                            </div>
                            <div className="space-y-4">
                                <Input label="Street Address" placeholder="123 Main St" className="bg-white dark:bg-[#0F0E17]/50 border-input dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground focus:border-[#2DD4BF] focus:ring-[#2DD4BF]/20" />
                                <div className="grid grid-cols-2 gap-4">
                                    <Input label="City" placeholder="New York" className="bg-white dark:bg-[#0F0E17]/50 border-input dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground focus:border-[#2DD4BF] focus:ring-[#2DD4BF]/20" />
                                    <Input label="Zip Code" placeholder="10001" className="bg-white dark:bg-[#0F0E17]/50 border-input dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground focus:border-[#2DD4BF] focus:ring-[#2DD4BF]/20" />
                                </div>
                            </div>
                        </Card>

                        {/* Step 3: Schedule */}
                        <Card className="p-6 md:p-8 bg-card dark:bg-white/5 border-border dark:border-white/10 dark:backdrop-blur-md shadow-sm dark:shadow-none" hoverEffect={false}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF] flex items-center justify-center font-bold text-sm border border-[#2DD4BF]/20">3</div>
                                <h2 className="text-xl font-semibold text-foreground">Preferred Time</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="Date" type="date" className="bg-white dark:bg-[#0F0E17]/50 border-input dark:border-white/10 text-foreground dark:text-white focus:border-[#2DD4BF] focus:ring-[#2DD4BF]/20 [color-scheme:light] dark:[color-scheme:dark]" />
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-muted-foreground">Time Slot</label>
                                    <select className="w-full h-11 px-4 rounded-xl border border-input dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/20 focus:border-[#2DD4BF] transition-all bg-white dark:bg-[#0F0E17]/50 text-foreground dark:text-white">
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
                            <Card className="p-6 bg-[#1E1B4B] dark:bg-[#1E1B4B]/30 border-none dark:border-white/10 text-white dark:backdrop-blur-md shadow-xl" hoverEffect={false}>
                                <h3 className="text-lg font-semibold mb-4 text-white">Pricing Estimate</h3>
                                <div className="flex justify-between items-center mb-2 text-white/80">
                                    <span>Inspection Fee</span>
                                    <span>$0.00</span>
                                </div>
                                <div className="flex justify-between items-center mb-6 text-white/80">
                                    <span>Pickup & Delivery</span>
                                    <span className="text-[#2DD4BF] font-medium">Free</span>
                                </div>
                                <div className="h-px bg-white/10 mb-6" />
                                <div className="flex justify-between items-end mb-1">
                                    <span className="text-sm text-white/60">Estimated Total</span>
                                    <span className="text-3xl font-bold text-white">$10 - $50*</span>
                                </div>
                                <p className="text-xs text-white/40 mb-6">*Final price depends on parts needed.</p>

                                <Button className="w-full bg-[#2DD4BF] hover:bg-[#2DD4BF]/90 text-[#0F0E17] rounded-full h-12 text-base font-bold shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all">
                                    Confirm Pickup
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Card>

                            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-zinc-200 dark:border-white/10 space-y-3">
                                <div className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-[#2DD4BF] mt-0.5" />
                                    <div>
                                        <p className="text-sm font-semibold text-foreground dark:text-white">Verified Experts</p>
                                        <p className="text-xs text-muted-foreground">All technicians are background checked.</p>
                                    </div>
                                </div>
                                <div className="h-px bg-zinc-200 dark:bg-white/10" />
                                <div className="flex items-start gap-3">
                                    <Package className="w-5 h-5 text-[#818CF8] mt-0.5" />
                                    <div>
                                        <p className="text-sm font-semibold text-foreground dark:text-white">Safe Handling</p>
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
        <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-foreground">Loading...</div>}>
            <BookingContent />
        </Suspense>
    );
}
