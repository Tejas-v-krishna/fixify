"use client";

import { Check, X } from "lucide-react";

export function Comparison() {
    const rows = [
        { label: "Spare Parts", local: "Copy/Duplicate Parts", fixify: "OEM / Grade-A Certified" },
        { label: "Warranty", local: "Check before you leave", fixify: "6 Months Warranty" },
        { label: "Data Privacy", local: "Open access to data", fixify: "NDA Signed + CCTV Monitored" },
        { label: "Convenience", local: "Travel, Traffic, Waiting", fixify: "Doorstep Pickup & Drop" },
    ];

    return (
        <section className="py-24 bg-[#00171F]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
                    The <span className="text-[#00A8E8]">Fixify Standard.</span>
                </h2>

                <div className="max-w-4xl mx-auto border border-white/10 rounded-3xl overflow-hidden">
                    {/* Header */}
                    <div className="grid grid-cols-3 bg-white/5 p-6 border-b border-white/10">
                        <div className="text-gray-400 font-medium">Feature</div>
                        <div className="text-gray-400 font-medium text-center">Local Repair Shop</div>
                        <div className="text-[#00A8E8] font-bold text-center">Fixify Labs</div>
                    </div>

                    {/* Rows */}
                    {rows.map((row, index) => (
                        <div key={index} className="grid grid-cols-3 p-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group">
                            <div className="text-white font-medium flex items-center">{row.label}</div>

                            <div className="text-gray-500 text-center flex flex-col items-center justify-center">
                                <span className="text-sm">{row.local}</span>
                                <X className="w-4 h-4 text-red-500/50 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="relative text-white font-medium text-center flex flex-col items-center justify-center">
                                <div className="absolute inset-0 bg-[#00A8E8]/5 -z-10 rounded-xl scale-y-110 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="text-sm">{row.fixify}</span>
                                <Check className="w-4 h-4 text-[#00A8E8] mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
