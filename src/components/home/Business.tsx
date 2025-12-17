"use client";

import { motion } from "framer-motion";
import { Building2, FileText, Wrench } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Business() {
    return (
        <section className="py-24 bg-background relative overflow-hidden border-t border-border dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#1E1B4B] rounded-[3rem] overflow-hidden relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(#818CF8 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                    />

                    <div className="grid lg:grid-cols-2">
                        {/* Image Side (Simulated) */}
                        <div className="relative min-h-[400px] lg:h-auto bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000)',
                            }}
                        >
                            <div className="absolute inset-0 bg-indigo-900/40 mix-blend-multiply" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1E1B4B] to-transparent lg:hidden" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B] to-transparent" />
                        </div>

                        {/* Content Side */}
                        <div className="p-10 md:p-16 flex flex-col justify-center relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Keep your <span className="text-indigo-400">office running.</span>
                            </h2>
                            <p className="text-indigo-200/80 text-lg mb-10 leading-relaxed">
                                From fleet laptop repairs for your sales team to reupholstering office chairs. We manage facility maintenance so you can manage your business.
                            </p>

                            <ul className="space-y-6 mb-10">
                                {[
                                    { icon: Building2, text: "Unified Dashboard: Track 50+ repairs at once." },
                                    { icon: FileText, text: "GST Invoicing: Automated billing for tax credits." },
                                    { icon: Wrench, text: "On-Site Options: Technicians come to you." }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-white">
                                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                            <item.icon size={20} />
                                        </div>
                                        <span className="font-medium text-lg">{item.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <div>
                                <Button className="bg-indigo-500 hover:bg-indigo-600 text-white border-0 px-8 py-6 text-lg rounded-full shadow-lg shadow-indigo-500/30">
                                    Partner with Gofex
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
