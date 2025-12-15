"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GlareHoverProps {
    children: React.ReactNode;
    className?: string;
    glareColor?: string;
    glareOpacity?: number;
    glareAngle?: number;
    glareSize?: number;
    transitionDuration?: number;
    playOnce?: boolean;
}

export const GlareHover = ({
    children,
    className,
    glareColor = "#ffffff",
    glareOpacity = 0.8,
    glareAngle = -30,
    glareSize = 200,
    transitionDuration = 800,
    playOnce = false,
}: GlareHoverProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setPosition({ x, y });
        setOpacity(glareOpacity);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
        setIsHovered(false);
    };

    return (
        <div
            ref={containerRef}
            className={cn("relative", className)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transition: `all ${transitionDuration}ms ease`,
            }}
        >
            {children}
            <div className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none">
                <div
                    className="absolute mix-blend-overlay"
                    style={{
                        left: position.x,
                        top: position.y,
                        width: `${glareSize}px`,
                        height: `${glareSize}px`,
                        transform: 'translate(-50%, -50%)',
                        background: `radial-gradient(circle, ${glareColor} -50%, transparent 60%)`,
                        opacity: opacity,
                        transition: 'opacity 0.2s ease',
                        zIndex: 10,
                    }}
                />
            </div>
        </div>
    );
};

export default GlareHover;
