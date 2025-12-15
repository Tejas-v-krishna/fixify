'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion, Transition, Variants } from 'framer-motion';
import { useState, useEffect, Children } from 'react';

type TextLoopProps = {
    children: React.ReactNode[];
    className?: string;
    interval?: number;
    transition?: Transition;
    variants?: Variants;
    onIndexChange?: (index: number) => void;
    trigger?: boolean;
};

export function TextLoop({
    children,
    className,
    interval = 1500,
    transition = { duration: 0.3 },
    variants,
    onIndexChange,
    trigger = true,
}: TextLoopProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = Children.toArray(children);

    useEffect(() => {
        if (!trigger) return;

        const intervalMs = setInterval(() => {
            setCurrentIndex((current) => {
                const next = (current + 1) % items.length;
                onIndexChange?.(next);
                return next;
            });
        }, interval);

        return () => clearInterval(intervalMs);
    }, [items.length, interval, onIndexChange, trigger]);

    return (
        <div className={cn('relative inline-block whitespace-nowrap', className)}>
            <AnimatePresence mode='popLayout' initial={false}>
                <motion.div
                    key={currentIndex}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    transition={transition}
                    variants={variants || {
                        initial: { y: 20, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        exit: { y: -20, opacity: 0 },
                    }}
                >
                    {items[currentIndex]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
