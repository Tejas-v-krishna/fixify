"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface TypewriterProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    className?: string;
    cursorClassName?: string;
}

export function Typewriter({
    words = ["Hello", "World"],
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000,
    className,
    cursorClassName
}: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    // Use a ref to keep track of timeouts to clear them on unmount
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];

        const handleTyping = () => {
            if (isDeleting) {
                // Deleting
                if (charIndex > 0) {
                    setDisplayedText(currentWord.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    // Finished deleting
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            } else {
                // Typing
                if (charIndex < currentWord.length) {
                    setDisplayedText(currentWord.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    // Finished typing, wait before deleting
                    timeoutRef.current = setTimeout(() => {
                        setIsDeleting(true);
                    }, pauseDuration);
                    return;
                }
            }
        };

        const speed = isDeleting ? deletingSpeed : typingSpeed;
        timeoutRef.current = setTimeout(handleTyping, speed);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [charIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className={cn("inline-flex items-center", className)}>
            {displayedText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className={cn("w-[2px] h-[1em] bg-current ml-1", cursorClassName)}
            />
        </span>
    );
}
