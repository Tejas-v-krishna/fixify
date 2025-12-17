"use client";

import { Quote, Star, CheckCircle } from "lucide-react";

export function Testimonials() {
    return (
        <section className="py-24 bg-background border-t border-border dark:border-white/5 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#818CF8]/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground dark:text-white mb-4">
                        10,000+ devices restored. <br className="hidden md:block" />
                        <span className="text-muted-foreground dark:text-[#A0A0C0]">Here is the feedback.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            quote: "I dropped my iPad two days before a client pitch. Fixify picked it up within 20 mins and returned it the same evening. Absolute lifesaver.",
                            author: "Arjun M.",
                            role: "Architect",
                            tag: "The Professional"
                        },
                        {
                            quote: "The transparency is what sold me. I could see exactly when my son's console reached the lab and when the repair started. No guessing.",
                            author: "Priya S.",
                            role: "Homemaker",
                            tag: "The Parent"
                        },
                        {
                            quote: "I was worried about my data. The 'Repair Mode' guide they sent was very reassuring. Professional from start to finish.",
                            author: "Rohan K.",
                            role: "Software Engineer",
                            tag: "The Skeptic"
                        }
                    ].map((item, i) => (
                        <div key={i} className="relative p-8 rounded-3xl bg-card dark:bg-white/5 border border-border dark:border-white/10 backdrop-blur-sm flex flex-col h-full hover:border-[#2DD4BF]/30 transition-all">
                            <Quote className="absolute top-8 right-8 w-10 h-10 text-primary/10 dark:text-white/5 rotate-180" />

                            <div className="flex items-center gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-4 h-4 fill-[#2DD4BF] text-[#2DD4BF]" />
                                ))}
                            </div>

                            <p className="text-lg text-foreground dark:text-gray-200 leading-relaxed mb-8 flex-grow">
                                "{item.quote}"
                            </p>

                            <div className="mt-auto">
                                <div className="flex items-center gap-3 mb-1">
                                    <div className="font-bold text-foreground dark:text-white text-lg">{item.author}</div>
                                    <CheckCircle className="w-4 h-4 text-[#2DD4BF]" />
                                </div>
                                <div className="text-sm text-muted-foreground dark:text-[#A0A0C0]">{item.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
