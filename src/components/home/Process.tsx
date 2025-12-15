"use client";

import { Calendar, Truck, Wrench, CheckCircle } from "lucide-react";

export function Process() {
    const steps = [
        { icon: Calendar, title: "Book a Pickup", desc: "Schedule a time that works for you." },
        { icon: Truck, title: "We Collect", desc: "Our agent picks up your item securely." },
        { icon: Wrench, title: "Expert Repair", desc: "Technicians fix it with genuine parts." },
        { icon: CheckCircle, title: "Delivery", desc: "Get it back at your doorstep, fixed." },
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium text-sm tracking-widest uppercase mb-2 block">How It Works</span>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal">
                        Simple, Transparent Process
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex flex-col items-center text-center bg-white p-4">
                                <div className="w-16 h-16 rounded-full bg-white border-4 border-surface shadow-sm flex items-center justify-center text-primary mb-6 z-10">
                                    <step.icon size={28} />
                                </div>
                                <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">{step.title}</h3>
                                <p className="text-charcoal/60 text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
