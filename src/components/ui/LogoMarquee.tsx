"use client";

import { motion } from "framer-motion";
import { Cloud, Globe, Box, Shield, Zap, Server } from "lucide-react";

const logos = [
    { icon: <Cloud />, name: "CloudFix" },
    { icon: <Globe />, name: "GlobalRepair" },
    { icon: <Box />, name: "BoxOps" },
    { icon: <Shield />, name: "SecureHome" },
    { icon: <Zap />, name: "FastTrack" },
    { icon: <Server />, name: "DataDone" },
];

export function LogoMarquee() {
    return (
        <section className="py-12 bg-[#0A0A0A] border-y border-white/5 overflow-hidden">
            <div className="flex relative items-center">
                {/* Fadout Edges */}
                <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
                <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />

                <motion.div
                    className="flex gap-16 items-center flex-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                >
                    {[...logos, ...logos, ...logos].map((logo, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors cursor-default whitespace-nowrap">
                            {logo.icon}
                            <span className="font-medium text-lg">{logo.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
