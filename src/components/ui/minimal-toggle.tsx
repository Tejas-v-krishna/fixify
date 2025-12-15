"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function MinimalToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <motion.button
            className="relative h-8 w-14 rounded-full p-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-gray-500"
            onClick={toggleTheme}
            animate={{
                backgroundColor: isDark ? "#111827" : "#D1D5DB", // bg-gray-900 : bg-gray-300
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            aria-label="Toggle Dark Mode"
        >
            <motion.div
                className="h-6 rounded-full shadow-sm"
                initial={false}
                animate={{
                    x: isDark ? 24 : 0, // Slide to right
                    width: isDark ? 8 : 24, // Morph width: w-2 (8px) vs size-6 (24px)
                    backgroundColor: isDark ? "#FFFFFF" : "#D1D5DB", // White vs Gray-300
                    // Replicating the ring effect:
                    // Unchecked: ring-[6px] ring-inset ring-white -> box-shadow inset
                    boxShadow: isDark
                        ? "inset 0 0 0 0px transparent"
                        : "inset 0 0 0 6px #FFFFFF",
                }}
                // Using a spring for that "really seamless" feel
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                }}
            />
        </motion.button>
    );
}
