"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { 
    Menu, 
    X, 
    ChevronDown, 
    Smartphone, 
    Refrigerator, 
    Armchair, 
    Briefcase, 
    HelpCircle, 
    MessageSquare, 
    BookOpen,
    ArrowRight
} from "lucide-react"

const SERVICES_DROPDOWN = [
    { name: "Electronics Repair", href: "/services/electronics", icon: Smartphone, desc: "Phones, Laptops & more" },
    { name: "Home Appliances", href: "/services/appliances", icon: Refrigerator, desc: "Fridges, Washing Machines" },
    { name: "Furniture & Household", href: "/services/furniture", icon: Armchair, desc: "Sofa, Chairs & Cleaning" },
    { name: "Shoes & Accessories", href: "/services/accessories", icon: Briefcase, desc: "Bags, Belts & Footwear" },
    { name: "All Services", href: "/services", icon: ArrowRight, desc: "View our full catalog", isLink: true },
]

const SUPPORT_DROPDOWN = [
    { name: "Help Center", href: "/support/help-center", icon: HelpCircle, desc: "Guides & Support" },
    { name: "FAQs", href: "/support/faqs", icon: BookOpen, desc: "Common Questions" },
    { name: "Contact Us", href: "/support/contact", icon: MessageSquare, desc: "Get in touch" },
]

export function Header1() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleMouseEnter = (menu: string) => {
        setActiveDropdown(menu)
    }

    const handleMouseLeave = () => {
        setActiveDropdown(null)
    }

    return (
        <header 
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-zinc-100" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                        <svg className="w-5 h-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <span className={cn(
                        "text-2xl font-bold tracking-tight transition-colors",
                        isScrolled ? "text-zinc-900" : "text-white"
                    )}>
                        Gofex
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {/* Services Dropdown */}
                    <div 
                        className="relative"
                        onMouseEnter={() => handleMouseEnter('services')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className={cn(
                            "flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-zinc-100/10",
                            isScrolled ? "text-zinc-600 hover:text-primary hover:bg-zinc-100" : "text-zinc-200 hover:text-white"
                        )}>
                            Services <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === 'services' && "rotate-180")} />
                        </button>
                        <AnimatePresence>
                            {activeDropdown === 'services' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 w-80 pt-4"
                                >
                                    <div className="bg-white rounded-3xl shadow-2xl border border-zinc-100 overflow-hidden p-3 grid gap-1">
                                        {SERVICES_DROPDOWN.map((item) => (
                                            <Link 
                                                key={item.name} 
                                                href={item.href}
                                                className={cn(
                                                    "flex items-start gap-4 p-3 rounded-2xl transition-colors hover:bg-zinc-50 group",
                                                    item.isLink && "mt-2 bg-zinc-50 border border-zinc-100"
                                                )}
                                            >
                                                {item.icon && (
                                                    <div className="mt-0.5 p-2 rounded-xl bg-zinc-100 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                        <item.icon className="w-5 h-5" />
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="text-sm font-bold text-zinc-900">{item.name}</div>
                                                    <div className="text-xs text-zinc-500">{item.desc}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/how-it-works" className={cn(
                        "px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-zinc-100/10",
                        isScrolled ? "text-zinc-600 hover:text-primary hover:bg-zinc-100" : "text-zinc-200 hover:text-white"
                    )}>
                        How It Works
                    </Link>

                    <Link href="/track" className={cn(
                        "px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-zinc-100/10",
                        isScrolled ? "text-zinc-600 hover:text-primary hover:bg-zinc-100" : "text-zinc-200 hover:text-white"
                    )}>
                        Track Repair
                    </Link>

                    <Link href="/#nearby-services" className={cn(
                        "px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-zinc-100/10",
                        isScrolled ? "text-zinc-600 hover:text-primary hover:bg-zinc-100" : "text-zinc-200 hover:text-white"
                    )}>
                        Nearby Services
                    </Link>

                    <Link href="/pricing" className={cn(
                        "px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-zinc-100/10",
                        isScrolled ? "text-zinc-600 hover:text-primary hover:bg-zinc-100" : "text-zinc-200 hover:text-white"
                    )}>
                        Pricing
                    </Link>

                    {/* Support Dropdown */}
                    <div 
                        className="relative"
                        onMouseEnter={() => handleMouseEnter('support')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className={cn(
                            "flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-zinc-100/10",
                            isScrolled ? "text-zinc-600 hover:text-primary hover:bg-zinc-100" : "text-zinc-200 hover:text-white"
                        )}>
                            Support <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === 'support' && "rotate-180")} />
                        </button>
                        <AnimatePresence>
                            {activeDropdown === 'support' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full right-0 w-72 pt-4"
                                >
                                    <div className="bg-white rounded-3xl shadow-2xl border border-zinc-100 overflow-hidden p-3 grid gap-1">
                                        {SUPPORT_DROPDOWN.map((item) => (
                                            <Link 
                                                key={item.name} 
                                                href={item.href}
                                                className="flex items-start gap-4 p-3 rounded-2xl transition-colors hover:bg-zinc-50 group"
                                            >
                                                <div className="mt-0.5 p-2 rounded-xl bg-zinc-100 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                    <item.icon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-zinc-900">{item.name}</div>
                                                    <div className="text-xs text-zinc-500">{item.desc}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </nav>

                {/* Right Side CTA */}
                <div className="flex items-center gap-3">
                    <Link href="/login" className={cn(
                        "hidden md:block text-sm font-medium transition-colors px-4 py-2 rounded-full hover:bg-zinc-100/10",
                        isScrolled ? "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100" : "text-zinc-200 hover:text-white"
                    )}>
                        Login / Sign Up
                    </Link>
                    <Link href="/book">
                        <Button className={cn(
                            "rounded-full px-6 font-bold shadow-lg transition-all hover:scale-105 active:scale-95",
                            isScrolled 
                                ? "bg-primary text-white shadow-primary/20 hover:shadow-primary/40 border-none" 
                                : "bg-white text-zinc-900 shadow-white/20 hover:shadow-white/40 border-none"
                        )}>
                            Book a Pickup
                        </Button>
                    </Link>
                    
                    {/* Mobile Menu Toggle */}
                    <button 
                        className="lg:hidden p-2 rounded-full hover:bg-zinc-100/10 transition-colors"
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
                        className="lg:hidden bg-white absolute top-full left-0 right-0 border-t border-zinc-100 shadow-2xl overflow-hidden rounded-b-3xl"
                    >
                        <div className="flex flex-col p-6 gap-2">
                            <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 px-2">Services</div>
                            {SERVICES_DROPDOWN.map((item) => (
                                <Link 
                                    key={item.name} 
                                    href={item.href} 
                                    className="flex items-center gap-3 px-2 py-3 text-lg font-medium text-zinc-900 hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.icon && <item.icon className="w-5 h-5 text-zinc-400" />}
                                    {item.name}
                                </Link>
                            ))}
                            
                            <div className="h-px bg-zinc-100 my-4" />
                            
                            <Link 
                                href="/how-it-works" 
                                className="px-2 py-3 text-lg font-medium text-zinc-900 hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                How It Works
                            </Link>
                            <Link 
                                href="/track" 
                                className="px-2 py-3 text-lg font-medium text-zinc-900 hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Track Repair
                            </Link>
                            <Link 
                                href="/#nearby-services" 
                                className="px-2 py-3 text-lg font-medium text-zinc-900 hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Nearby Services
                            </Link>
                            <Link 
                                href="/pricing" 
                                className="px-2 py-3 text-lg font-medium text-zinc-900 hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Pricing
                            </Link>
                            
                            <div className="h-px bg-zinc-100 my-4" />
                            
                            <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 px-2">Support</div>
                            {SUPPORT_DROPDOWN.map((item) => (
                                <Link 
                                    key={item.name} 
                                    href={item.href} 
                                    className="flex items-center gap-3 px-2 py-3 text-lg font-medium text-zinc-900 hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <item.icon className="w-5 h-5 text-zinc-400" />
                                    {item.name}
                                </Link>
                            ))}

                            <div className="mt-6 flex flex-col gap-3">
                                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button variant="outline" className="w-full rounded-2xl">Login / Sign Up</Button>
                                </Link>
                                <Link href="/book" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button className="w-full rounded-2xl bg-primary text-white border-none">Book a Pickup</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
