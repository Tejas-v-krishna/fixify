"use client";

import Link from 'next/link';
import { Button } from './ui/Button';
import { FramerThemeToggle } from './ui/framer-theme-toggle';
import { useTheme } from 'next-themes';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [isNavbarHovered, setIsNavbarHovered] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = (checked: boolean) => {
        setTheme(checked ? "dark" : "light");
    };

    if (!mounted) return null;

    return (
        <>
            {/* Page Blur Overlay */}
            <AnimatePresence>
                {isNavbarHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
                        aria-hidden="true"
                    />
                )}
            </AnimatePresence>

            <nav
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4"
                onMouseEnter={() => setIsNavbarHovered(true)}
                onMouseLeave={() => setIsNavbarHovered(false)}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-14 relative">

                        {/* Logo (Left) */}
                        <div className="flex-shrink-0 z-20">
                            <Link href="/" className="flex items-center gap-2 group">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg group-hover:bg-primary/20 transition-colors border border-primary/10">
                                    F
                                </div>
                                <span className="font-heading font-bold text-xl text-foreground tracking-tight">Fixify</span>
                            </Link>
                        </div>

                        {/* Centered Capsule Nav (Desktop) */}
                        <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 z-10">
                            <div className="relative flex items-center px-1.5 py-1.5 rounded-full bg-background/70 backdrop-blur-md border border-border/40 shadow-sm gap-1 group">
                                {['Home', 'Services', 'How it Works', 'Tracking'].map((item) => (
                                    <div key={item} className="relative" onMouseEnter={() => setHoveredItem(item)} onMouseLeave={() => setHoveredItem(null)}>
                                        <Link
                                            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="relative px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full block"
                                        >
                                            {hoveredItem === item && (
                                                <motion.span
                                                    layoutId="nav-hover"
                                                    className="absolute inset-0 bg-foreground/10 dark:bg-foreground/25 rounded-full -z-10"
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                            <span className="relative z-10 flex items-center gap-1">
                                                {item}
                                                {item === 'Services' && (
                                                    <span className={`transition-transform duration-200 ${hoveredItem === 'Services' ? 'rotate-180' : ''}`}>
                                                        <svg width="10" height="10" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-muted-foreground"><path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                                    </span>
                                                )}
                                            </span>
                                        </Link>

                                        {/* Dropdown for Services */}
                                        <AnimatePresence>
                                            {item === 'Services' && hoveredItem === 'Services' && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] p-2"
                                                >
                                                    <div className="bg-black/80 dark:bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-8 text-left">
                                                        <div className="space-y-6">
                                                            <div className="group/item cursor-pointer">
                                                                <h3 className="text-white font-semibold mb-1 group-hover/item:text-primary transition-colors">Residential</h3>
                                                                <p className="text-sm text-white/60">Comprehensive repair services for homeowners.</p>
                                                            </div>
                                                            <div className="group/item cursor-pointer">
                                                                <h3 className="text-white font-semibold mb-1 group-hover/item:text-primary transition-colors">Landlords</h3>
                                                                <p className="text-sm text-white/60">Property management repair simplified.</p>
                                                            </div>
                                                        </div>
                                                        <div className="space-y-6">
                                                            <div className="group/item cursor-pointer">
                                                                <h3 className="text-white font-semibold mb-1 group-hover/item:text-primary transition-colors">Commercial</h3>
                                                                <p className="text-sm text-white/60">Reliable maintenance for offices and shops.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Actions */}
                        <div className="hidden md:flex items-center gap-4 z-20">
                            <div className="flex items-center gap-3">
                                <FramerThemeToggle />
                            </div>
                            <div className="h-4 w-px bg-border/50" />
                            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-medium">Log In</Button>
                            <Link href="/book">
                                <Button size="sm" className="bg-primary text-background hover:bg-primary/90 rounded-full font-medium px-5">
                                    Book a demo
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden items-center gap-4">
                            <div className="origin-right">
                                <FramerThemeToggle />
                            </div>
                            <button
                                className="p-2 text-muted-foreground hover:text-foreground"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/40 overflow-hidden absolute top-full left-0 right-0 shadow-xl"
                        >
                            <div className="px-4 py-6 flex flex-col gap-4">
                                {['Home', 'Services', 'How it Works', 'Tracking'].map((item) => (
                                    <Link
                                        key={item}
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-base font-medium text-foreground/80 hover:text-foreground"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                ))}
                                <div className="pt-4 flex flex-col gap-3">
                                    <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">Log In</Button>
                                    <Link href="/book" onClick={() => setIsOpen(false)}>
                                        <Button className="w-full bg-primary text-background">Book a demo</Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}
