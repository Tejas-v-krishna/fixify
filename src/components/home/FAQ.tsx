"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "How do I know my price won't change?",
            a: "We provide a firm quote after diagnosis. If you don't like it, we return your device for a nominal logistics fee. No surprise charges, ever.",
        },
        {
            q: "Is my device insured?",
            a: "Yes. From the moment our pilot scans your device at pickup until it's back in your hands, it is insured up to ₹50,000 against damage or theft.",
        },
        {
            q: "Do you use original parts?",
            a: "We use high-quality OEM-grade parts that match your device's original specifications. We also offer a warranty on every repair for your peace of mind.",
        },
    ];

    return (
        <section className="py-24 bg-background border-t border-border dark:border-white/5">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-foreground dark:text-white text-center mb-12">Common Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-card dark:bg-white/5 border border-border dark:border-white/10 rounded-2xl overflow-hidden hover:bg-zinc-50 dark:hover:bg-white/10 transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="text-lg font-medium text-foreground dark:text-white">{faq.q}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-[#2DD4BF]" />
                                ) : (
                                    <Plus className="w-5 h-5 text-muted-foreground dark:text-gray-500" />
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
                                        <div className="px-6 pb-6 text-muted-foreground dark:text-gray-400 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
