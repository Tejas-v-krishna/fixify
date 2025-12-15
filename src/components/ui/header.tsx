"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/Button"

// ListItem component for Dropdowns
const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white group focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none text-white group-hover:text-white transition-colors">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-white/60 group-hover:text-white/80 transition-colors">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export function Header1() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isHovered, setIsHovered] = React.useState(false)
    const [spotlightPos, setSpotlightPos] = React.useState<{ x: number; y: number } | null>(null)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

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

    return (
        <>
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] pointer-events-none"
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
                        "relative flex items-center justify-between px-2 pl-6 pr-2 py-2 w-full max-w-5xl transition-all duration-300",
                        "rounded-[50px] bg-black/60 backdrop-blur-xl border border-white/5 shadow-2xl overflow-hidden group/header"
                    )}
                >
                    {/* --- Running Glare/Shine Effect --- */}
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[50px]">
                        <div
                            className="absolute -inset-full top-0 block w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 animate-shine"
                            style={{ left: '-100%' }}
                        />
                        <div className="absolute inset-0 rounded-[50px] p-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent [mask-image:linear-gradient(black,black),linear-gradient(black,black)] [mask-composite:exclude,add] pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine opacity-50" />
                        </div>
                    </div>

                    {/* --- Cursor Spotlight Effect --- */}
                    <motion.div
                        className="pointer-events-none absolute -inset-px rounded-[50px] opacity-0 transition duration-300 group-hover/header:opacity-100"
                        style={{
                            background: `radial-gradient(600px circle at ${spotlightPos?.x ?? 0}px ${spotlightPos?.y ?? 0}px, rgba(255,255,255,0.06), transparent 40%)`,
                        }}
                    />

                    {/* --- Logo --- */}
                    <div className="relative z-10 flex items-center gap-2 mr-4">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <span className="text-lg font-bold tracking-tight text-white">fixify</span>
                        </Link>
                    </div>

                    {/* --- Desktop Navigation --- */}
                    <div className="relative z-10 hidden md:flex items-center justify-center flex-1">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-[14px] font-medium text-white/90 hover:text-white bg-transparent hover:bg-transparent rounded-full px-4 h-9">Services</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-2 p-2 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10">
                                            <ListItem href="/book?category=electronics" title="Electronics">
                                                Repair for phones, laptops, and more.
                                            </ListItem>
                                            <ListItem href="/book?category=plumbing" title="Plumbing">
                                                Expert leak fixing and installations.
                                            </ListItem>
                                            <ListItem href="/book?category=cleaning" title="Cleaning">
                                                Deep cleaning for home and office.
                                            </ListItem>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/how-it-works" legacyBehavior passHref>
                                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent text-[14px] h-9 rounded-full px-4 text-white/90 hover:text-white")}>
                                            How It Works
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/pricing" legacyBehavior passHref>
                                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent text-[14px] h-9 rounded-full px-4 text-white/90 hover:text-white")}>
                                            Pricing
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/track-repair" legacyBehavior passHref>
                                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent text-[14px] h-9 rounded-full px-4 text-white/90 hover:text-white")}>
                                            Track Repair
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-[14px] font-medium text-white/90 hover:text-white bg-transparent hover:bg-transparent rounded-full px-4 h-9">Support</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[300px] gap-2 p-2 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10">
                                            <ListItem href="/support/help-center" title="Help Center">
                                                Find answers to common questions.
                                            </ListItem>
                                            <ListItem href="/support/contact" title="Contact Us">
                                                Get in touch with our team.
                                            </ListItem>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* --- Right Actions --- */}
                    <div className="relative z-10 flex items-center gap-2">
                        <Link href="/login">
                            <Button variant="ghost" className="hidden sm:inline-flex text-white hover:text-white hover:bg-white/10 h-9 rounded-full px-5 text-[14px]">
                                Log in
                            </Button>
                        </Link>
                        <Link href="/signup">
                            <Button className="bg-white text-black hover:bg-white/90 h-9 rounded-full px-6 text-[14px] font-semibold border-none shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all">
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                </motion.header>
            </div>
        </>
    )
}
