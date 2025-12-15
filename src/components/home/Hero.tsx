"use client";

import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

import BlurText from "../core/blur-text";
import { Announcement, AnnouncementTitle } from "../ui/announcement";
import LightPillar from "../ui/light-pillar";

export function Hero() {
    const [trigger, setTrigger] = useState(true);
    const [index, setIndex] = useState(0);
    const words = [
        "Without the Hassle",
        "With Doorstep Pickup",
        "With Trusted Experts",
        "Without Visiting Shops",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTrigger(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % words.length);
                setTrigger(true);
            }, 800); // Wait for exit animation
        }, 3000);

        return () => clearInterval(interval);
    }, [words.length]);

    const blurSlideVariants = {
        container: {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: { staggerChildren: 0.01 },
            },
            exit: {
                transition: { staggerChildren: 0.01, staggerDirection: -1 },
            },
        },
        item: {
            hidden: {
                opacity: 0,
                filter: 'blur(30px) brightness(0%)',
                y: 0,
            },
            visible: {
                opacity: 1,
                y: 0,
                filter: 'blur(30px) brightness(100%)',
                transition: {
                    duration: 0.4,
                },
            },
            exit: {
                opacity: 0,
                y: -30,
                filter: 'blur(10px) brightness(0%)',
                transition: {
                    duration: 0.4,
                },
            },
        },
    };

    return (

        <section className="relative overflow-hidden flex flex-col items-center justify-center min-h-screen w-full bg-black">
            <LightPillar
                className="absolute inset-0 z-0 w-full h-full"
                topColor="#003459"
                bottomColor="#00a8e8"
                intensity={0.5}
                rotationSpeed={0.8}
                glowAmount={0.003}
                pillarWidth={8}
                pillarHeight={0.1}
                noiseIntensity={3}
                pillarRotation={45}
                interactive={false}
                mixBlendMode="blend-mode"
            />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pt-24 pb-24 lg:pt-48 lg:pb-40">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex justify-center"
                >
                    <Announcement themed={true} className="group border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all cursor-pointer shadow-[0_0_20px_-10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.2)]">
                        <AnnouncementTitle className="text-sm font-medium text-white/85">
                            <span className="mr-2 text-lg">✨</span> Introducing Fixify Premium
                            <ArrowRight className="ml-2 size-3 text-primary transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                        </AnnouncementTitle>
                    </Announcement>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-heading font-bold text-3xl sm:text-5xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-8 drop-shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center gap-2 sm:gap-4"
                >
                    <span>Repair Anything From Home</span>
                    <span className="inline-block pb-2 min-h-[1.5em]">
                        <BlurText
                            key={words[index]}
                            text={words[index]}
                            className="text-cyan-400 font-bold"
                            delay={50}
                            animateBy="letters"
                            direction="bottom"
                        />
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg sm:text-xl text-white/80 max-w-xl mx-auto mb-10 leading-relaxed font-light"
                >
                    Experience the future of household maintenance.
                    <span className="text-white font-medium"> Effortlessly manage repairs, pickups, and delivery</span> in a way that works for you.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link href="/book">
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-200" />
                            <Button size="lg" className="relative h-12 px-8 bg-primary border border-primary text-primary-foreground hover:bg-primary/90 rounded-full text-sm font-medium transition-all shadow-lg">
                                <Sparkles className="w-4 h-4 mr-2 text-blue-200" /> Book a Service
                            </Button>
                        </div>
                    </Link>
                    <Link href="/services" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        View Services <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>

            </div>

            {/* Bottom Glow - Subtle */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        </section>
    );
}
