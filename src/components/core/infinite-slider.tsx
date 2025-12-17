"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface InfiniteSliderProps {
    children: React.ReactNode;
    gap?: number;
    duration?: number;
    reverse?: boolean;
    className?: string;
}

export function InfiniteSlider({
    children,
    gap = 20,
    duration = 25,
    reverse = false,
    className,
}: InfiniteSliderProps) {
    return (
        <div className={cn("flex w-full overflow-hidden", className)}>
            <motion.div
                className="flex min-w-full shrink-0 items-center justify-around"
                style={{ gap }}
                animate={{
                    x: reverse ? ["-100%", "0%"] : ["0%", "-100%"],
                }}
                transition={{
                    duration,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {children}
                {children}
            </motion.div>
            <motion.div
                className="flex min-w-full shrink-0 items-center justify-around"
                style={{ gap }}
                animate={{
                    x: reverse ? ["-100%", "0%"] : ["0%", "-100%"],
                }}
                transition={{
                    duration,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}
