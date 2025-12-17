"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Calculator, Check, Info } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-500">
            {/* Background Mesh Gradient (Dark Mode Only) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 right-0 h-[500px] opacity-20 bg-gradient-to-b from-[#2DD4BF]/10 via-[#0F0E17] to-transparent" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#818CF8]/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground dark:text-white mb-6">
                        Transparent Pricing, <span className="text-[#2DD4BF]">No Surprises</span>
                    </h1>
                    <p className="text-lg text-muted-foreground dark:text-[#A0A0C0] max-w-2xl mx-auto">
                        Know what you pay before you pay. We believe in complete transparency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    {/* Estimated Pricing Card */}
                    <Card className="p-8 border border-border dark:border-white/10 border-l-4 border-l-[#818CF8] bg-card dark:bg-white/5 backdrop-blur-md h-full flex flex-col hover:border-[#818CF8]/30 transition-colors shadow-sm dark:shadow-none" hoverEffect>
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-foreground dark:text-white">Estimated Pricing</h3>
                                <p className="text-sm text-muted-foreground dark:text-[#A0A0C0] mt-1">For complex repairs</p>
                            </div>
                            <Calculator className="w-8 h-8 text-[#818CF8]" />
                        </div>
                        <p className="text-muted-foreground dark:text-gray-300 mb-8 text-lg flex-grow">
                            Get a price range based on item type and issue before booking. The final quote is provided after our experts inspect the item.
                        </p>
                        <div className="bg-[#818CF8]/10 text-[#818CF8] p-4 rounded-xl mb-6 border border-[#818CF8]/20">
                            <p className="font-semibold text-sm">Example: Laptop Screen Replacement</p>
                            <p className="text-2xl font-bold mt-1 text-foreground dark:text-white">$100 - $150</p>
                        </div>
                        <Link href="/book" className="w-full">
                            <Button variant="outline" className="w-full h-12 rounded-full border-[#818CF8]/30 text-[#818CF8] hover:bg-[#818CF8]/10  transition-all">
                                Get Estimate
                            </Button>
                        </Link>
                    </Card>

                    {/* Fixed Pricing Card */}
                    <Card className="p-8 border border-border dark:border-white/10 border-l-4 border-l-[#2DD4BF] bg-card dark:bg-white/5 backdrop-blur-md h-full flex flex-col hover:border-[#2DD4BF]/30 transition-colors shadow-sm dark:shadow-none" hoverEffect>
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-foreground dark:text-white">Fixed Pricing</h3>
                                <p className="text-sm text-muted-foreground dark:text-[#A0A0C0] mt-1">For standard services</p>
                            </div>
                            <div className="font-mono text-2xl font-bold text-[#2DD4BF]">$</div>
                        </div>
                        <p className="text-muted-foreground dark:text-gray-300 mb-8 text-lg flex-grow">
                            For selected categories like cleaning or standard assembly, see upfront fixed prices immediately.
                        </p>
                        <div className="bg-[#2DD4BF]/10 text-[#2DD4BF] p-4 rounded-xl mb-6 border border-[#2DD4BF]/20">
                            <p className="font-semibold text-sm">Example: Sofa Cleaning (3-Seater)</p>
                            <p className="text-2xl font-bold mt-1 text-foreground dark:text-white">$45.00</p>
                        </div>
                        <Link href="/book" className="w-full">
                            <Button variant="outline" className="w-full h-12 rounded-full border-[#2DD4BF]/30 text-[#2DD4BF] hover:bg-[#2DD4BF]/10 transition-all">
                                Book Standard Service
                            </Button>
                        </Link>
                    </Card>
                </div>

                {/* What's Included */}
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-xl font-bold text-center mb-8 text-foreground dark:text-white">What's Included in Service Fee</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "Doorstep Pickup & Delivery",
                            "Professional Inspection",
                            "Expert Repair Service",
                            "Post-Repair Quality Check"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-card dark:bg-white/5 rounded-xl border border-border dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none">
                                <div className="w-6 h-6 rounded-full bg-[#2DD4BF]/20 flex items-center justify-center text-[#2DD4BF]">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span className="font-medium text-foreground dark:text-gray-200">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 p-4 bg-amber-500/10 rounded-xl border border-amber-500/20 flex items-start gap-3">
                        <Info className="w-5 h-5 text-amber-600 dark:text-amber-500 mt-0.5" />
                        <p className="text-sm text-foreground dark:text-amber-200">
                            <strong className="text-amber-600 dark:text-amber-500">Note:</strong> Final pricing is confirmed before repair begins — you’re always in control. You can approve or reject the quote after inspection.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
