"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Zap, MapPin, PenTool, CheckCircle } from "lucide-react";

export function JourneyMap() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            id: 0,
            title: "AI Diagnosis",
            text: "Describe your issue in our app. Our AI estimates the cost and required parts instantly.",
            icon: Zap,
        },
        {
            id: 1,
            title: "Secure Pickup",
            text: "A verified rider arrives with a tamper-proof seal bag. Your device is sealed in front of you.",
            icon: MapPin,
        },
        {
            id: 2,
            title: "The Lab Bench",
            text: "Technicians work on ESD-safe mats. You receive updates: 'Device Opened', 'Part Replaced', 'QC Passed'.",
            icon: PenTool,
        },
        {
            id: 3,
            title: "The Drop",
            text: "Delivery is tracked live. Pay via UPI or Card only after you inspect the device.",
            icon: CheckCircle,
        },
    ];

    return (
        <section className="py-24 bg-[#00171F]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left: Stepper List */}
                    <div className="flex-1 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
                            Transparent <span className="text-[#00A8E8]">Journey.</span>
                        </h2>
                        <div className="space-y-6">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveStep(index)}
                                    className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${activeStep === index
                                            ? "bg-white/10 border-[#00A8E8] shadow-[0_0_20px_rgba(0,168,232,0.1)]"
                                            : "bg-transparent border-white/5 hover:bg-white/5"
                                        }`}
                                >
                                    <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border ${activeStep === index ? "bg-[#00A8E8] text-[#00171F] border-[#00A8E8]" : "bg-transparent text-gray-500 border-gray-700"}`}>
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold mb-2 ${activeStep === index ? "text-white" : "text-gray-500"}`}>{step.title}</h3>
                                        <p className={`text-sm leading-relaxed ${activeStep === index ? "text-gray-300" : "text-gray-600"}`}>{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Mock App Interface displaying Step Content */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="relative w-[320px] h-[640px] bg-black rounded-[40px] border-8 border-gray-800 shadow-2xl overflow-hidden">
                            {/* Status Bar */}
                            <div className="h-8 bg-black w-full flex items-center justify-between px-6">
                                <div className="text-white text-xs font-medium">9:41</div>
                                <div className="flex gap-1.5">
                                    <div className="w-4 h-4 rounded-full bg-white/20" />
                                    <div className="w-4 h-4 rounded-full bg-white/20" />
                                </div>
                            </div>

                            {/* App Screen Content */}
                            <div className="p-6 h-full bg-gray-900 flex flex-col pt-10">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-1"
                                >
                                    {/* Dynamic UI based on Step */}
                                    <div className="w-16 h-16 rounded-2xl bg-[#00A8E8]/20 flex items-center justify-center mb-6">
                                        {(() => {
                                            const Icon = steps[activeStep].icon;
                                            return <Icon className="w-8 h-8 text-[#00A8E8]" />
                                        })()}
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-4">{steps[activeStep].title}</h2>

                                    {/* Mock UI Elements */}
                                    <div className="space-y-4">
                                        {activeStep === 0 && (
                                            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                                <div className="text-xs text-gray-500 mb-1">Detected Issue</div>
                                                <div className="text-white font-medium">Screen Cracked - iPhone 13</div>
                                                <div className="mt-4 text-xs text-gray-500 mb-1">Est. Cost</div>
                                                <div className="text-[#00A8E8] text-xl font-bold">₹ 4,500</div>
                                            </div>
                                        )}
                                        {activeStep === 1 && (
                                            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                                                <div className="w-24 h-24 mx-auto bg-white/10 rounded-lg flex items-center justify-center mb-2">
                                                    <div className="w-16 h-1 bg-gray-600 rounded" />
                                                </div>
                                                <div className="text-white font-medium text-sm">Security Bag ID: #9921</div>
                                            </div>
                                        )}
                                        {activeStep === 2 && (
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-3 text-sm text-green-400">
                                                    <CheckCircle className="w-4 h-4" /> Device Opened
                                                </div>
                                                <div className="flex items-center gap-3 text-sm text-green-400">
                                                    <CheckCircle className="w-4 h-4" /> Battery Removed
                                                </div>
                                                <div className="flex items-center gap-3 text-sm text-white/50">
                                                    <div className="w-4 h-4 rounded-full border border-white/20" /> Installing New Part...
                                                </div>
                                            </div>
                                        )}
                                        {activeStep === 3 && (
                                            <div className="bg-white/5 h-48 rounded-xl border border-white/10 relative overflow-hidden">
                                                <div className="absolute inset-0 bg-[#00171F] flex items-center justify-center">
                                                    <div className="text-xs text-gray-500">Map View Placeholder</div>
                                                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#00A8E8] rounded-full shadow-[0_0_20px_#00A8E8]" />
                                                </div>
                                                <div className="absolute bottom-4 left-4 right-4 bg-gray-900 p-3 rounded-lg border border-white/10">
                                                    <div className="text-xs text-gray-400">Rider nearby</div>
                                                    <div className="text-white text-sm font-bold">2 mins away</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                </motion.div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
