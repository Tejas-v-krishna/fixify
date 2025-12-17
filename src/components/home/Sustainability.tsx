"use client";

import { Leaf, Recycle, Smartphone, Battery } from "lucide-react";

export function Sustainability() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-30 dark:opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#2DD4BF_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="inline-flex items-center justify-center p-2 px-4 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
                    <Leaf className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-widest">Sustainability Impact</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold text-foreground dark:text-white mb-6 tracking-tight">
                    Don't replace it. <span className="text-green-500">Revive it.</span>
                </h2>

                <p className="text-xl text-muted-foreground dark:text-[#A0A0C0] leading-relaxed max-w-2xl mx-auto mb-16">
                    Extending the life of your device is the single most effective way to reduce your carbon footprint.
                </p>

                {/* Stat Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { val: "500+", unit: "Tons", label: "of E-Waste prevented this year.", icon: Recycle },
                        { val: "12,000+", unit: "Devices", label: "saved from landfills.", icon: Smartphone },
                        { val: "100%", unit: "Responsible", label: "recycling of damaged batteries.", icon: Battery },
                    ].map((stat, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-card dark:bg-white/5 border border-border dark:border-white/10 hover:border-green-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-6 mx-auto group-hover:scale-110 transition-transform">
                                <stat.icon size={24} />
                            </div>
                            <div className="text-4xl font-bold text-foreground dark:text-white mb-1">{stat.val}</div>
                            <div className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-2">{stat.unit}</div>
                            <p className="text-muted-foreground dark:text-[#A0A0C0]">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
