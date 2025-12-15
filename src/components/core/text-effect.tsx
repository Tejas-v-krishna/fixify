'use client';
import { motion, Variants } from 'framer-motion';
import React from 'react';

type TextEffectProps = {
    children: string;
    per?: 'char' | 'word';
    variants?: {
        container?: Variants;
        item?: Variants;
    };
    className?: string;
    trigger?: boolean;
};

const defaultContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
    exit: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const defaultItemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
    },
    exit: { opacity: 0 },
};

export function TextEffect({
    children,
    per = 'char',
    variants,
    className,
    trigger = true,
}: TextEffectProps) {
    const words = children.split(' ');

    if (per === 'word') {
        return (
            <motion.div
                initial="hidden"
                animate={trigger ? 'visible' : 'exit'}
                variants={variants?.container || defaultContainerVariants}
                className={className}
            >
                {words.map((word, index) => (
                    <motion.span
                        key={index}
                        variants={variants?.item || defaultItemVariants}
                        className="inline-block whitespace-pre"
                    >
                        {word}{' '}
                    </motion.span>
                ))}
            </motion.div>
        );
    }

    return (
        <motion.div
            initial="hidden"
            animate={trigger ? 'visible' : 'exit'}
            variants={variants?.container || defaultContainerVariants}
            className={className}
        >
            {children.split('').map((char, index) => (
                <motion.span
                    key={index}
                    variants={variants?.item || defaultItemVariants}
                    className="inline-block whitespace-pre"
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
}
