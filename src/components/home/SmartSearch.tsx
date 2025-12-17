"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function SmartSearch() {
    const placeholderText = "I need to repair my...";
    const [displayText, setDisplayText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let index = -1;
        const interval = setInterval(() => {
            if (index < placeholderText.length) {
                index++;
                setDisplayText(placeholderText.substring(0, index));
            } else {
                clearInterval(interval);
                setIsTyping(false);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-background relative border-t border-border dark:border-white/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground dark:text-white mb-10">
                    If you own it, we can likely fix it.
                </h2>

                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto mb-8 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF] to-[#818CF8] rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity" />
                    <div className="relative bg-card dark:bg-[#0F0E17] border border-border dark:border-white/20 rounded-full flex items-center p-2 shadow-2xl">
                        <div className="pl-6 flex-1 text-left">
                            <span className="text-2xl font-light text-muted-foreground dark:text-white/50">
                                {displayText}
                                <span className={cn("inline-block w-0.5 h-6 bg-[#2DD4BF] ml-1 align-middle", isTyping ? "animate-pulse" : "hidden")} />
                            </span>
                        </div>
                        <button className="w-14 h-14 bg-gradient-to-r from-[#2DD4BF] to-[#0D9488] rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform active:scale-95">
                            <Search size={24} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-3">
                    {["#Luggage", "#MixerGrinder", "#Drones", "#Heels", "#Jackets", "#Watches", "#Printers", "#CoffeeMachines"].map((tag, i) => (
                        <span key={i} className="px-4 py-2 rounded-full bg-secondary dark:bg-white/5 text-muted-foreground dark:text-[#A0A0C0] text-sm font-medium hover:bg-[#2DD4BF]/10 hover:text-[#2DD4BF] transition-colors cursor-pointer">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
