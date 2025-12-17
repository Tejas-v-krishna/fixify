"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, MapPin, ShieldCheck, Truck, User } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HowItWorksPage() {
    const steps = [
        {
            num: "01",
            title: "Book a Pickup",
            desc: "Choose the item, select a pickup time, and confirm your request.",
            icon: Clock,
            color: "text-[#2DD4BF]",
            bg: "bg-[#2DD4BF]/10"
        },
        {
            num: "02",
            title: "Pickup & Repair",
            desc: "A verified agent collects your item and assigns it to a trusted technician.",
            icon: User,
            color: "text-[#818CF8]",
            bg: "bg-[#818CF8]/10"
        },
        {
            num: "03",
            title: "Delivery Back Home",
            desc: "Get your repaired item delivered safely to your doorstep.",
            icon: Truck,
            color: "text-[#2DD4BF]",
            bg: "bg-[#2DD4BF]/10"
        }
    ];

    const trustFeatures = [
        { title: "Verified Technicians", icon: CheckCircle2 },
        { title: "Transparent Pricing", icon: CheckCircle2 },
        { title: "Real-time Updates", icon: CheckCircle2 },
        { title: "Secure Handling", icon: ShieldCheck },
    ];

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-500">
            {/* Background Mesh Gradient (Dark Mode Only) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 right-0 h-[500px] opacity-20 bg-gradient-to-b from-[#818CF8]/10 via-[#2DD4BF]/10 to-transparent" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2DD4BF]/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground dark:text-white mb-6">
                        How Gofex <span className="text-[#818CF8]">Works</span>
                    </h1>
                    <p className="text-lg text-muted-foreground dark:text-[#A0A0C0] max-w-2xl mx-auto">
                        We've simplified repair services into three easy steps. No more hassle, just results.
                    </p>
                </div>

                {/* Steps Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#2DD4BF] via-[#818CF8] to-[#2DD4BF] opacity-30" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative"
                        >
                            <Card className="h-full p-8 flex flex-col items-center text-center bg-card dark:bg-white/5 backdrop-blur-md border-border dark:border-white/10 hover:border-[#2DD4BF]/30 transition-all group shadow-sm dark:shadow-none" hoverEffect>
                                <div className={`w-20 h-20 rounded-full ${step.bg} ${step.color} flex items-center justify-center text-3xl font-bold mb-6 relative z-10 ring-4 ring-background dark:ring-[#0F0E17] group-hover:scale-110 transition-transform`}>
                                    {step.num}
                                </div>
                                <h3 className="text-2xl font-bold text-foreground dark:text-white mb-4">{step.title}</h3>
                                <p className="text-muted-foreground dark:text-[#A0A0C0] text-lg leading-relaxed">{step.desc}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Section */}
                <Card className="p-12 bg-[#1E1B4B]/20 dark:bg-[#1E1B4B]/30 border-border dark:border-white/10 text-foreground dark:text-white text-center rounded-3xl overflow-hidden relative shadow-sm dark:shadow-none" hoverEffect={false}>
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 to-transparent dark:from-white/5 opacity-50" />

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-10 text-foreground dark:text-white">Why Choose Gofex?</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {trustFeatures.map((feature, i) => (
                                <div key={i} className="flex flex-col items-center gap-3">
                                    <div className="p-3 bg-[#2DD4BF]/10 rounded-full text-[#2DD4BF]">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <span className="font-medium text-lg text-foreground dark:text-gray-200">{feature.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <Link href="/book">
                        <Button size="lg" className="h-14 px-10 rounded-full text-lg shadow-[0_0_30px_rgba(45,212,191,0.3)] bg-gradient-to-r from-[#2DD4BF] to-[#0D9488] hover:from-[#14B8A6] hover:to-[#0F766E] text-[#0F0E17] font-bold">
                            Book a Pickup <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <p className="mt-4 text-sm text-muted-foreground dark:text-[#A0A0C0]">Takes less than a minute</p>
                </div>
            </div>
        </div>
    );
}
