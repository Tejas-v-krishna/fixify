"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { BookOpen, CreditCard, LifeBuoy, Search, Truck, Wrench } from "lucide-react";
import Link from "next/link";

export default function HelpCenterPage() {
    const categories = [
        { icon: BookOpen, title: "Booking Issues", desc: "How to book, schedule, or cancel." },
        { icon: Truck, title: "Pickup & Delivery", desc: "Tracking, rescheduling, and logistics." },
        { icon: CreditCard, title: "Pricing & Payments", desc: "Estimates, invoices, and refunds." },
        { icon: Wrench, title: "Repairs & Warranty", desc: "Service quality, claims, and guarantees." },
    ];

    return (
        <div className="min-h-screen bg-secondary pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Search Header */}
                <div className="text-center mb-16 bg-charcoal text-white py-20 px-6 rounded-3xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h1 className="text-4xl font-bold mb-6">How can we help you?</h1>
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                            <Input
                                className="h-14 pl-12 rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-offset-0 focus-visible:ring-white/30"
                                placeholder="Search for answers (e.g. 'cancel booking')"
                            />
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {categories.map((cat, i) => (
                        <Card key={i} className="p-6 flex flex-col items-center text-center cursor-pointer hover:border-primary/50 transition-colors" hoverEffect={false}>
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                                <cat.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">{cat.title}</h3>
                            <p className="text-sm text-muted-foreground">{cat.desc}</p>
                        </Card>
                    ))}
                </div>

                {/* Quick Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="p-8 bg-blue-50 border-blue-100 flex items-center justify-between" hoverEffect={false}>
                        <div>
                            <h3 className="text-xl font-bold text-blue-900 mb-2">New to Fixify?</h3>
                            <p className="text-blue-700 mb-4">Learn the basics of how our platform works.</p>
                            <Link href="/how-it-works">
                                <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-100">Read Guide</Button>
                            </Link>
                        </div>
                        <LifeBuoy className="w-16 h-16 text-blue-200" />
                    </Card>
                    <Card className="p-8 bg-orange-50 border-orange-100 flex items-center justify-between" hoverEffect={false}>
                        <div>
                            <h3 className="text-xl font-bold text-orange-900 mb-2">Emergency Support</h3>
                            <p className="text-orange-700 mb-4">Need urgent help with an active order?</p>
                            <Link href="/support/contact">
                                <Button className="bg-orange-500 hover:bg-orange-600 border-none">Contact Us</Button>
                            </Link>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-orange-200/50 flex items-center justify-center text-orange-500 text-2xl font-bold">!</div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
