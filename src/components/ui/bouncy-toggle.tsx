"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function PremiumToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Logic:
    // Light Mode (Default/Unchecked) -> Show Moon
    // Dark Mode (Checked) -> Show Sun
    const isDark = mounted && (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches));

    if (!mounted) {
        return <div className="w-9 h-9 flex items-center justify-center animate-pulse"><div className="w-5 h-5 bg-zinc-300 rounded-full" /></div>;
    }

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative w-9 h-9 flex items-center justify-center cursor-pointer outline-none"
            aria-label="Toggle Theme"
        >
            {/* Icons Context: Grid overlap approach simulated with absolute positioning */}

            {/* Moon Icon */}
            {/* CSS: transition: transform 500ms; transition-delay: 200ms (when entering? No, looks like base state has delay?) */}
            {/* CSS Logic: 
                icon--moon { transition-delay: 200ms }
                checked + icon--moon { transform: rotate(360deg) scale(0); transition-delay: 0s (implied or inherited?) } 
                Actually the provided CSS puts delay on the base class .icon--moon. 
                When checked, it rotates and scales out.
            */}
            <div
                className={cn(
                    "absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out text-[#b4b4b4]",
                    isDark
                        ? "scale-0 rotate-[360deg]" // Checked state (Dark): Hidden
                        : "scale-100 rotate-0 delay-200" // Unchecked state (Light): Visible, Delayed entry?
                )}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                </svg>
            </div>

            {/* Sun Icon */}
            {/* CSS: transform: scale(0); color: #ffa500; */}
            {/* Checked ~ icon--sun { transition-delay: 200ms; transform: scale(1) rotate(360deg); } */}
            <div
                className={cn(
                    "absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out text-[#ffa500]",
                    isDark
                        ? "scale-100 rotate-[360deg] delay-200" // Checked state (Dark): Visible, Delayed entry
                        : "scale-0 rotate-0" // Unchecked state (Light): Hidden
                )}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
            </div>
        </button>
    );
}
