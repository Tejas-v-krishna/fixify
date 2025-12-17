"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import {
    Smartphone,
    Armchair,
    Briefcase,
    Watch,
    Zap,
    Search,
    ArrowRight,
    Wrench,
    Refrigerator,
    Shirt,
    MonitorSpeaker
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const ALL_SERVICES = [
    {
        id: "electronics",
        name: "Electronics",
        desc: "Phones, Laptops, Tablets, Consoles",
        icon: Smartphone,
        color: "text-[#2DD4BF]",
        bg: "bg-[#2DD4BF]/10"
    },
    {
        id: "appliances",
        name: "Appliances",
        desc: "Washing Machines, AC, Fridges",
        icon: Refrigerator,
        color: "text-[#818CF8]",
        bg: "bg-[#818CF8]/10"
    },
    {
        id: "furniture",
        name: "Furniture",
        desc: "Sofa Cleaning, Repair, Assembly",
        icon: Armchair,
        color: "text-amber-400",
        bg: "bg-amber-400/10"
    },
    {
        id: "accessories",
        name: "Accessories",
        desc: "Shoes, Bags, Belts, Leather Care",
        icon: Briefcase,
        color: "text-purple-400",
        bg: "bg-purple-400/10"
    },
    {
        id: "watches",
        name: "Watches",
        desc: "Service, Battery, Strap Replacement",
        icon: Watch,
        color: "text-rose-400",
        bg: "bg-rose-400/10"
    },
    {
        id: "electrical",
        name: "Electrical",
        desc: "Wiring, Fans, Light Installation",
        icon: Zap,
        color: "text-yellow-400",
        bg: "bg-yellow-400/10"
    },
    {
        id: "laundry",
        name: "Laundry",
        desc: "Dry Cleaning, Ironing, Wash & Fold",
        icon: Shirt,
        color: "text-indigo-400",
        bg: "bg-indigo-400/10"
    },
    {
        id: "smart-home",
        name: "Smart Home",
        desc: "Installation, Troubleshooting, Setup",
        icon: MonitorSpeaker,
        color: "text-cyan-400",
        bg: "bg-cyan-400/10"
    },
    {
        id: "plumbing",
        name: "Plumbing",
        desc: "Leaks, Taps, Pipe Fittings",
        icon: Wrench,
        color: "text-slate-400",
        bg: "bg-slate-400/10"
    }
];

export default function ServicesPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredServices = ALL_SERVICES.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-500">
            {/* Background Mesh Gradient - Neo-Restoration Theme (Dark Mode Only) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 right-0 h-[500px] opacity-20 bg-gradient-to-b from-[#2DD4BF]/10 via-[#818CF8]/10 to-transparent" />
                <div className="absolute top-[200px] -left-[100px] w-[500px] h-[500px] bg-[#7C3AED]/20 rounded-full blur-[120px]" />
                <div className="absolute top-[400px] -right-[100px] w-[400px] h-[400px] bg-[#2DD4BF]/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Hero / Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h1 className="text-4xl font-heading font-bold text-foreground dark:text-white mb-4">
                        Everything <span className="text-[#2DD4BF]">We Fix</span>
                    </h1>
                    <p className="text-muted-foreground dark:text-[#A0A0C0] text-lg mb-8">
                        From tiny watches to heavy appliances, our verified experts handle it all.
                    </p>

                    <div className="relative max-w-md mx-auto">
                        <Input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search repair services..."
                            className="bg-white border-zinc-200 dark:bg-white/5 dark:border-white/10 h-12 pl-12 rounded-full text-foreground dark:text-white placeholder:text-muted-foreground focus:border-[#2DD4BF] focus:ring-[#2DD4BF]/20 transition-all shadow-sm dark:shadow-none"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Card hoverEffect className="h-full p-6 flex flex-col items-start bg-card dark:bg-white/5 backdrop-blur-md border-border dark:border-white/10 hover:border-[#2DD4BF]/30 hover:bg-zinc-50 dark:hover:bg-white/10 transition-colors group shadow-sm dark:shadow-none">
                                <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 border border-black/5 dark:border-white/5`}>
                                    <service.icon size={28} />
                                </div>

                                <h3 className="text-xl font-bold text-foreground dark:text-white mb-2">{service.name}</h3>
                                <p className="text-muted-foreground dark:text-[#A0A0C0] mb-6 flex-grow text-sm">{service.desc}</p>

                                <Link href="/book" className="w-full">
                                    <Button variant="ghost" className="w-full justify-between text-foreground dark:text-white hover:text-[#2DD4BF] hover:bg-[#2DD4BF]/10 border border-border dark:border-white/5 group-hover:border-[#2DD4BF]/20 transition-all">
                                        Book Now
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {filteredServices.length === 0 && (
                    <div className="text-center py-20 text-muted-foreground dark:text-[#A0A0C0]">
                        <p className="text-lg">No services found matching "{searchQuery}"</p>
                        <Button
                            variant="link"
                            onClick={() => setSearchQuery("")}
                            className="text-[#2DD4BF] mt-2"
                        >
                            Clear Search
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
