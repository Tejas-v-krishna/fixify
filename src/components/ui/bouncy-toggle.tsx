"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BouncyToggleProps {
    defaultChecked?: boolean
    checked?: boolean
    onChange?: (checked: boolean) => void
    label?: string
}

export function PremiumToggle({ defaultChecked = false, checked, onChange, label }: BouncyToggleProps) {
    const [internalChecked, setInternalChecked] = useState(defaultChecked)

    // Controlled vs Uncontrolled
    const isChecked = checked !== undefined ? checked : internalChecked

    const handleToggle = () => {
        const newValue = !isChecked
        setInternalChecked(newValue)
        onChange?.(newValue)
    }

    // Animation variants
    // Thumb moves from left to right.
    // We want a "bouncy" stretch effect potentially? or just smooth spring.
    // The user linked a "Bouncy Toggle". 

    return (
        <div className="flex items-center gap-3">
            {label && (
                <span
                    className={cn(
                        "text-sm font-medium transition-colors duration-300",
                        isChecked ? "text-foreground" : "text-muted-foreground",
                    )}
                >
                    {label}
                </span>
            )}
            <button
                type="button"
                role="switch"
                aria-checked={isChecked}
                onClick={handleToggle}
                className={cn(
                    "relative h-9 w-[3.25rem] rounded-full p-1 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    // Background Color Logic:
                    // User: "color should not change to green instead it should change between white and black"
                    // Let's interpret: Background of the track.
                    // Dark Mode (checked=true): Track should be White? Thumb Black? 
                    // User said: "default mode which is dark is enabled [isChecked=true], it should be black inside the toggle button" -> Thumb is black.
                    // Light Mode (checked=false): Thumb is white.
                    // So Track colors? Maybe Gray?
                    // Let's try: Dark Mode (Active) -> Track White, Thumb Black.
                    // Light Mode (Inactive) -> Track Black, Thumb White.
                    // This creates high contrast.
                    isChecked ? "bg-white" : "bg-zinc-900"
                )}
            >
                <motion.div
                    layout
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                    }}
                    className={cn(
                        "h-7 w-7 rounded-full shadow-sm",
                        // Thumb Color Logic:
                        // Dark Mode (checked=true) -> Black
                        // Light Mode (checked=false) -> White
                        isChecked ? "bg-black" : "bg-white"
                    )}
                    style={{
                        originY: 0.5,
                        x: isChecked ? 24 : 0 // 3.25rem (52px) width - 1.75rem (28px) thumb - 4px padding = ~20px + extra
                    }}
                />
            </button>
        </div>
    )
}
