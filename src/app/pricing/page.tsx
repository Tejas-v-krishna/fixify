"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Calculator, Check, Info } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-secondary pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
                        Transparent Pricing, No Surprises
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Know what you pay before you pay. We believe in complete transparency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    {/* Estimated Pricing Card */}
                    <Card className="p-8 border-l-4 border-l-blue-500 h-full flex flex-col" hoverEffect>
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-foreground">Estimated Pricing</h3>
                                <p className="text-sm text-muted-foreground mt-1">For complex repairs</p>
                            </div>
                            <Calculator className="w-8 h-8 text-blue-500" />
                        </div>
                        <p className="text-muted-foreground mb-8 text-lg flex-grow">
                            Get a price range based on item type and issue before booking. The final quote is provided after our experts inspect the item.
                        </p>
                        <div className="bg-blue-500/10 text-blue-700 p-4 rounded-xl mb-6">
                            <p className="font-semibold text-sm">Example: Laptop Screen Replacement</p>
                            <p className="text-2xl font-bold mt-1">$100 - $150</p>
                        </div>
                        <Link href="/book" className="w-full">
                            <Button variant="outline" className="w-full h-12 rounded-full border-blue-200 text-blue-600 hover:bg-blue-50">
                                Get Estimate
                            </Button>
                        </Link>
                    </Card>

                    {/* Fixed Pricing Card */}
                    <Card className="p-8 border-l-4 border-l-green-500 h-full flex flex-col" hoverEffect>
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-foreground">Fixed Pricing</h3>
                                <p className="text-sm text-muted-foreground mt-1">For standard services</p>
                            </div>
                            <div className="font-mono text-2xl font-bold text-green-500">$</div>
                        </div>
                        <p className="text-muted-foreground mb-8 text-lg flex-grow">
                            For selected categories like cleaning or standard assembly, see upfront fixed prices immediately.
                        </p>
                        <div className="bg-green-500/10 text-green-700 p-4 rounded-xl mb-6">
                            <p className="font-semibold text-sm">Example: Sofa Cleaning (3-Seater)</p>
                            <p className="text-2xl font-bold mt-1">$45.00</p>
                        </div>
                        <Link href="/book" className="w-full">
                            <Button variant="outline" className="w-full h-12 rounded-full border-green-200 text-green-600 hover:bg-green-50">
                                Book Standard Service
                            </Button>
                        </Link>
                    </Card>
                </div>

                {/* What's Included */}
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-xl font-bold text-center mb-8">What's Included in Service Fee</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "Doorstep Pickup & Delivery",
                            "Professional Inspection",
                            "Expert Repair Service",
                            "Post-Repair Quality Check"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span className="font-medium text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3">
                        <Info className="w-5 h-5 text-amber-600 mt-0.5" />
                        <p className="text-sm text-amber-800">
                            <strong>Note:</strong> Final pricing is confirmed before repair begins — you’re always in control. You can approve or reject the quote after inspection.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
