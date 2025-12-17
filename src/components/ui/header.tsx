"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { AnimatedBackground } from "@/components/core/animated-background"
import { PremiumToggle } from "@/components/ui/bouncy-toggle"
import { useTheme } from "next-themes"
import { toast } from "sonner"
import { Menu, X } from "lucide-react"

export function Header1() {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    const isLightMode = mounted ? resolvedTheme === 'light' : false;

    const [isScrolled, setIsScrolled] = React.useState(false)

    const [isHovered, setIsHovered] = React.useState(false)
    const [spotlightPos, setSpotlightPos] = React.useState<{ x: number; y: number } | null>(null)

    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerHeight * 0.8;
            setIsScrolled(window.scrollY > threshold);
        }

        handleScroll();
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    React.useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMobileMenuOpen]);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setSpotlightPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        })
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        setSpotlightPos(null)
    }

    // --- Dynamic Styles based on Theme State ---
    const textColor = isLightMode ? "text-[#1E1B4B] group-hover:text-black" : "text-white group-hover:text-white";
    const navLinkColor = isLightMode ? "text-[#1E1B4B]/80 hover:text-[#1E1B4B]" : "text-white/90 hover:text-white";
    const headerBg = isLightMode
        ? "bg-[#FAFAFA]/90 backdrop-blur-md border-[#E2E8F0] shadow-md"
        : "bg-[#0F0E17]/60 backdrop-blur-md border-[#2DD4BF]/20 shadow-2xl shadow-[#2DD4BF]/5";
    const logoBg = isLightMode ? "bg-[#1E1B4B]/5 group-hover:bg-[#1E1B4B]/10" : "bg-white/10 group-hover:bg-white/20";
    const logoIcon = isLightMode ? "text-[#1E1B4B]" : "text-white";
    const loginBtn = isLightMode ? "text-[#1E1B4B] hover:bg-[#1E1B4B]/5 hover:text-[#1E1B4B]" : "text-white hover:text-white hover:bg-white/10";

    // Gradient / Shine opacity adjustment
    const shineOpacity = isLightMode ? "opacity-10" : "opacity-20";

    return (
        <>
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[1px] pointer-events-none"
                    />
                )}
            </AnimatePresence>

            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
                <motion.header
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    className={cn(
                        "relative flex items-center justify-between px-2 pl-6 pr-2 py-1.5 w-full max-w-5xl transition-all duration-500",
                        headerBg, "rounded-[50px] overflow-hidden group/header"
                    )}
                >
                    {/* --- Running Glare/Shine Effect --- */}
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[50px]">
                        <div
                            className={cn("absolute -inset-full top-0 block w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white animate-shine", shineOpacity)}
                            style={{ left: '-100%' }}
                        />
                        <div className="absolute inset-0 rounded-[50px] p-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent [mask-image:linear-gradient(black,black),linear-gradient(black,black)] [mask-composite:exclude,add] pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine opacity-50" />
                        </div>
                    </div>

                    {/* --- Star Border Animation --- */}
                    <div
                        className="absolute inset-0 z-0 pointer-events-none rounded-[50px] overflow-hidden opacity-100 p-[1px]"
                        style={{
                            maskImage: 'linear-gradient(black, black), linear-gradient(black, black)',
                            maskClip: 'content-box, border-box',
                            maskComposite: 'exclude',
                            WebkitMaskImage: 'linear-gradient(black, black), linear-gradient(black, black)',
                            WebkitMaskClip: 'content-box, border-box',
                            WebkitMaskComposite: 'xor',
                        }}
                    >
                        {/* Stars adapted to theme colors */}
                        <div
                            className="absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
                            style={{
                                background: isLightMode ? `radial-gradient(circle, #1E1B4B, transparent 10%)` : `radial-gradient(circle, #2DD4BF, transparent 10%)`,
                                animationDuration: '6s'
                            }}
                        ></div>
                        <div
                            className="absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
                            style={{
                                background: isLightMode ? `radial-gradient(circle, #1E1B4B, transparent 10%)` : `radial-gradient(circle, #2DD4BF, transparent 10%)`,
                                animationDuration: '6s'
                            }}
                        ></div>
                    </div>

                    {/* --- Cursor Spotlight Effect --- */}
                    <motion.div
                        className="pointer-events-none absolute -inset-px rounded-[50px] opacity-0 transition duration-300 group-hover/header:opacity-100"
                        style={{
                            background: `radial-gradient(250px circle at ${spotlightPos?.x ?? 0}px ${spotlightPos?.y ?? 0}px, ${isLightMode ? 'rgba(30, 27, 75, 0.05)' : 'rgba(45, 212, 191, 0.15)'}, transparent 90%)`,
                        }}
                    />

                    {/* --- Logo --- */}
                    <div className="relative z-10 flex items-center gap-2 mr-4">
                        <Link href="/" className="flex items-center gap-2 group" onClick={() => toast("Back to Home")}>
                            <div className={cn("relative flex items-center justify-center w-8 h-8 rounded-full transition-colors", logoBg)}>
                                <svg className={cn("w-4 h-4 transition-colors", logoIcon)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <span className={cn("text-lg font-bold tracking-tight transition-colors", textColor)}>fixify</span>
                        </Link>
                    </div>

                    {/* --- Desktop Navigation --- */}
                    <div className="relative z-10 hidden md:flex items-center justify-center flex-1">
                        <AnimatedBackground
                            className={cn(
                                "rounded-full",
                                isLightMode ? "bg-black/5" : "bg-white/10"
                            )}
                            transition={{
                                type: 'spring',
                                bounce: 0.2,
                                duration: 0.3,
                            }}
                            enableHover
                        >
                            <Link href="/services" data-id="Services" onClick={() => toast("View Services", { description: "Explore our repair categories" })} className={cn("px-4 py-2 text-[14px] font-medium transition-colors duration-300", navLinkColor)}>
                                Services
                            </Link>
                            <Link href="/how-it-works" data-id="How It Works" onClick={() => toast("How It Works", { description: "Simple 3-step process" })} className={cn("px-4 py-2 text-[14px] font-medium transition-colors duration-300", navLinkColor)}>
                                How It Works
                            </Link>
                            <Link href="/pricing" data-id="Pricing" onClick={() => toast("Pricing", { description: "Transparent rates" })} className={cn("px-4 py-2 text-[14px] font-medium transition-colors duration-300", navLinkColor)}>
                                Pricing
                            </Link>
                            <Link href="/track-repair" data-id="Track Repair" onClick={() => toast("Tracking", { description: "Check your repair status" })} className={cn("px-4 py-2 text-[14px] font-medium transition-colors duration-300", navLinkColor)}>
                                Track Repair
                            </Link>
                            <Link href="/support" data-id="Support" onClick={() => toast("Support", { description: "We're here to help" })} className={cn("px-4 py-2 text-[14px] font-medium transition-colors duration-300", navLinkColor)}>
                                Support
                            </Link>
                        </AnimatedBackground>
                    </div>

                    {/* --- Right Actions --- */}
                    <div className="relative z-10 flex items-center gap-2">
                        <PremiumToggle />

                        <Link href="/login" onClick={() => toast.info("Log in flow initiated")}>
                            <Button variant="ghost" className={cn("hidden sm:inline-flex h-9 rounded-full px-5 text-[14px] transition-colors", loginBtn)}>
                                Log in
                            </Button>
                        </Link>
                        <Link href="/signup" onClick={() => toast.success("Welcome! Starting sign up...")}>
                            <Button
                                className="hidden sm:inline-flex bg-gradient-to-r from-[#2DD4BF] to-[#0D9488] text-white hover:brightness-110 items-center space-x-2 h-9 px-6 text-[14px] font-semibold transition-all duration-300 rounded-full shadow-lg hover:shadow-[#2DD4BF]/20 border-0"
                            >
                                <span>Get Started</span>
                            </Button>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={cn("md:hidden p-2 rounded-full transition-colors", isLightMode ? "text-[#1E1B4B] hover:bg-black/5" : "text-white hover:bg-white/10")}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </motion.header>

                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className={cn(
                                "absolute top-[calc(100%+8px)] left-0 right-0 p-4 rounded-[30px] shadow-2xl backdrop-blur-xl border flex flex-col gap-2 md:hidden overflow-hidden",
                                isLightMode
                                    ? "bg-white/90 border-zinc-200"
                                    : "bg-[#0F0E17]/90 border-white/10"
                            )}
                        >
                            <nav className="flex flex-col gap-1">
                                {[
                                    { href: "/services", label: "Services" },
                                    { href: "/how-it-works", label: "How It Works" },
                                    { href: "/pricing", label: "Pricing" },
                                    { href: "/track-repair", label: "Track Repair" },
                                    { href: "/support", label: "Support" },
                                ].map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn(
                                            "px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200",
                                            isLightMode
                                                ? "text-[#1E1B4B] hover:bg-black/5 active:bg-black/10"
                                                : "text-white hover:bg-white/10 active:bg-white/20"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="h-px bg-current opacity-10 my-2" />
                                <Link
                                    href="/login"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200",
                                        isLightMode
                                            ? "text-[#1E1B4B] hover:bg-black/5"
                                            : "text-white hover:bg-white/10"
                                    )}
                                >
                                    Log in
                                </Link>
                                <Link
                                    href="/signup"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-4 py-3 rounded-xl text-lg font-bold text-center bg-gradient-to-r from-[#2DD4BF] to-[#0D9488] text-white shadow-lg mt-2"
                                >
                                    Get Started
                                </Link>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}
