"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { Menu, X } from "lucide-react"

export function Header1() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header 
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <span className={cn(
                        "text-xl font-bold tracking-tight uppercase transition-colors",
                        isScrolled ? "text-zinc-900" : "text-white"
                    )}>
                        Mr. Appliance
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {["Residential", "Commercial", "Why Us", "About", "Resources"].map((item) => (
                        <Link 
                            key={item} 
                            href="#" 
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-blue-600",
                                isScrolled ? "text-zinc-600" : "text-zinc-200"
                            )}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <Link href="/book">
                        <Button className={cn(
                            "rounded-full px-6 font-bold transition-all",
                            isScrolled 
                                ? "bg-zinc-900 text-white hover:bg-zinc-800" 
                                : "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20"
                        )}>
                            Easy Online Booking
                        </Button>
                    </Link>
                    
                    {/* Mobile Menu Toggle */}
                    <button 
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className={isScrolled ? "text-zinc-900" : "text-white"} />
                        ) : (
                            <Menu className={isScrolled ? "text-zinc-900" : "text-white"} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white absolute top-full left-0 right-0 border-t border-zinc-100 shadow-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {["Residential", "Commercial", "Why Us", "About", "Resources"].map((item) => (
                                <Link 
                                    key={item} 
                                    href="#" 
                                    className="text-lg font-medium text-zinc-900 hover:text-blue-600"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
