"use client";

import { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import { motion } from "framer-motion";
import { GripVertical } from "lucide-react";

interface CompareSliderProps {
    beforeImage: string;
    afterImage: string;
    alt: string;
}

function CompareSlider({ beforeImage, afterImage, alt }: CompareSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        setSliderPosition(percent);
    };

    const onMouseDown = () => setIsDragging(true);
    const onMouseUp = () => setIsDragging(false);
    const onMouseMove = (e: MouseEvent) => {
        if (isDragging) handleMove(e.clientX);
    };

    const onTouchStart = () => setIsDragging(true);
    const onTouchEnd = () => setIsDragging(false);
    const onTouchMove = (e: TouchEvent) => {
        if (isDragging) handleMove(e.touches[0].clientX);
    };

    useEffect(() => {
        const handleGlobalUp = () => setIsDragging(false);
        const handleGlobalMove = (e: globalThis.MouseEvent) => {
            if (isDragging) handleMove(e.clientX);
        };

        window.addEventListener("mouseup", handleGlobalUp);
        window.addEventListener("mousemove", handleGlobalMove);
        return () => {
            window.removeEventListener("mouseup", handleGlobalUp);
            window.removeEventListener("mousemove", handleGlobalMove);
        };
    }, [isDragging]);


    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none touch-none shadow-2xl"
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {/* After Image (Background) */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${afterImage})` }}
            >
                <span className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest pointer-events-none">After</span>
            </div>

            {/* Before Image (Foreground, Clipped) */}
            <div
                className="absolute inset-0 bg-cover bg-center border-r-[3px] border-white"
                style={{
                    backgroundImage: `url(${beforeImage})`,
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                }}
            >
                <div className="absolute inset-0 bg-black/10" /> {/* Subtle overlay for 'dirty' feel */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest pointer-events-none">Before</span>
            </div>

            {/* Drag Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-transparent cursor-ew-resize z-20 flex items-center justify-center -ml-0.5"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-black hover:scale-110 transition-transform">
                    <GripVertical size={20} />
                </div>
            </div>
        </div>
    );
}

export function BeforeAfter() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Gradient Accent */}
            <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground dark:text-white mb-6">
                        See the difference.
                    </h2>
                    <p className="text-xl text-muted-foreground dark:text-[#A0A0C0] max-w-2xl mx-auto">
                        Visual proof of our engineering precision.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {[
                        {
                            before: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=800", // Dirty-ish sneaker (placeholder)
                            after: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800", // Clean sneaker
                            label: "Sneaker Restoration"
                        },
                        {
                            before: "https://images.unsplash.com/photo-1588873289050-dfc9a56a6352?auto=format&fit=crop&q=80&w=800", // Broken component (approx)
                            after: "https://images.unsplash.com/photo-1597872252165-482c0e46594c?auto=format&fit=crop&q=80&w=800", // Fixed component
                            label: "Board Repair"
                        },
                        {
                            before: "https://plus.unsplash.com/premium_photo-1664302148512-ddea43fcd9b6?auto=format&fit=crop&q=80&w=800", // Old leather
                            after: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=800", // New leather
                            label: "Leather Treatment"
                        }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col gap-4">
                            <CompareSlider beforeImage={item.before} afterImage={item.after} alt={item.label} />
                            <h3 className="text-center font-bold text-lg text-foreground dark:text-white">{item.label}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
