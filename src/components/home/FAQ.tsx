"use client";

import { useState } from "react";
import { Plus, Minus, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "What makes Mr. Appliance different from other repair services?",
            a: "We provide expert, friendly, and efficient appliance repair service, treating your home with care and professionalism. Our upfront pricing and trusted quality guarantee mean you're always in safe hands.",
        },
        {
            q: "What types of appliances do you repair and maintain?",
            a: "We repair all major household appliances including refrigerators, freezers, dishwashers, washing machines, dryers, ovens, and stoves. We also provide maintenance services to keep them running efficiently.",
        },
        {
            q: "Why is dryer vent cleaning important?",
            a: "Regular dryer vent cleaning is essential for preventing fires and improving dryer efficiency. It also helps extend the life of your appliance by reducing strain on the motor.",
        },
        {
            q: "How does my gas oven glow like it's hot even when it's not heating?",
            a: "The glow you see is from the igniter. If the igniter is glowing but the oven isn't heating, it may be because the igniter is too weak to open the gas valve or there's a problem with the valve itself.",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left side: FAQ List */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border transition-all duration-300 rounded-3xl overflow-hidden ${openIndex === index ? 'border-blue-600 shadow-lg' : 'border-zinc-200'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="text-lg font-bold text-zinc-900 pr-8">{faq.q}</span>
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-blue-600 shrink-0" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-zinc-400 shrink-0" />
                                    )}
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 text-zinc-500 leading-relaxed text-sm">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Right side: Header and Rating */}
                    <div className="lg:sticky lg:top-24">
                        <h2 className="text-5xl font-heading font-bold text-zinc-900 mb-6 leading-tight">
                            Questions <br />
                            <span className="text-blue-600">Answered FAQ</span>
                        </h2>
                        <p className="text-zinc-500 mb-8 max-w-sm">
                            Our experts have provided professional and long-standing repair services for all your appliances.
                        </p>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 px-8 rounded-full mb-12">
                            View All FAQ
                        </Button>

                        {/* Rating Card */}
                        <div className="bg-white rounded-3xl border border-zinc-200 p-8 shadow-xl max-w-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
                                    <img 
                                      src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop" 
                                      alt="User" 
                                      className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900">Have more questions?</h4>
                                    <p className="text-sm text-zinc-500">Ask a friendly expert.</p>
                                </div>
                            </div>
                            <Button variant="outline" className="w-full rounded-full border-zinc-900 h-12 hover:bg-zinc-50 font-bold">
                                Get help appliance
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
