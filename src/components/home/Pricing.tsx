"use client";

import { ArrowRight, Calculator } from "lucide-react";
import Link from "next/link";

export function Pricing() {
    return (
        <section className="py-16 bg-gray-50 border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-[#00171F] mb-2 flex items-center gap-2">
                            <Calculator className="w-6 h-6 text-[#00A8E8]" /> No Haggling. No "Inspection Fees."
                        </h2>
                        <p className="text-gray-600">Know your price before you book with our transparent calculator.</p>
                    </div>

                    <div className="flex-1 w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row items-center gap-4">
                        <div className="flex-1 w-full">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Device</label>
                            <select className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-900 font-medium focus:ring-2 focus:ring-[#00A8E8] focus:border-transparent outline-none">
                                <option>MacBook Pro M1</option>
                                <option>iPhone 14</option>
                                <option>Samsung S23</option>
                            </select>
                        </div>

                        <div className="flex-1 w-full">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Issue</label>
                            <select className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-900 font-medium focus:ring-2 focus:ring-[#00A8E8] focus:border-transparent outline-none">
                                <option>Battery Replacement</option>
                                <option>Screen Damage</option>
                                <option>Water Damage</option>
                            </select>
                        </div>

                        <div className="text-right whitespace-nowrap px-4 py-2 bg-[#00171F]/5 rounded-xl">
                            <div className="text-xs text-gray-500">Est. Total</div>
                            <div className="text-xl font-bold text-[#00171F]">₹ 8,500</div>
                        </div>
                    </div>

                    <div className="shrink-0">
                        <Link href="/pricing" className="inline-flex items-center text-[#00171F] font-bold hover:text-[#00A8E8] transition-colors">
                            Get Exact Quote <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
