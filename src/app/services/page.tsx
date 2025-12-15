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
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        id: "appliances",
        name: "Appliances",
        desc: "Washing Machines, AC, Fridges",
        icon: Refrigerator,
        color: "text-green-500",
        bg: "bg-green-500/10"
    },
    {
        id: "furniture",
        name: "Furniture",
        desc: "Sofa Cleaning, Repair, Assembly",
        icon: Armchair,
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
    {
        id: "accessories",
        name: "Accessories",
        desc: "Shoes, Bags, Belts, Leather Care",
        icon: Briefcase,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        id: "watches",
        name: "Watches",
        desc: "Service, Battery, Strap Replacement",
        icon: Watch,
        color: "text-rose-500",
        bg: "bg-rose-500/10"
    },
    {
        id: "electrical",
        name: "Electrical",
        desc: "Wiring, Fans, Light Installation",
        icon: Zap,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10"
    },
    {
        id: "laundry",
        name: "Laundry",
        desc: "Dry Cleaning, Ironing, Wash & Fold",
        icon: Shirt,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10"
    },
    {
        id: "smart-home",
        name: "Smart Home",
        desc: "Installation, Troubleshooting, Setup",
        icon: MonitorSpeaker,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10"
    },
    {
        id: "plumbing",
        name: "Plumbing",
        desc: "Leaks, Taps, Pipe Fittings",
        icon: Wrench,
        color: "text-slate-500",
        bg: "bg-slate-500/10"
    }
];

export default function ServicesPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredServices = ALL_SERVICES.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-secondary pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero / Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
                        Everything We Fix
                    </h1>
                    <p className="text-muted-foreground text-lg mb-8">
                        From tiny watches to heavy appliances, our verified experts handle it all.
                    </p>

                    <div className="relative max-w-md mx-auto">
                        <Input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search repair services..."
                            className="bg-white h-12 pl-12 rounded-full shadow-sm"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
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
                            <Card hoverEffect className="h-full p-6 flex flex-col items-start bg-white/60 backdrop-blur-md border-white/20">
                                <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6`}>
                                    <service.icon size={28} />
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-2">{service.name}</h3>
                                <p className="text-muted-foreground mb-6 flex-grow">{service.desc}</p>

                                <Link href="/book" className="w-full">
                                    <Button variant="ghost" className="w-full justify-between group hover:bg-primary/5 hover:text-primary">
                                        Book Now
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {filteredServices.length === 0 && (
                    <div className="text-center py-20 text-muted-foreground">
                        <p className="text-lg">No services found matching "{searchQuery}"</p>
                        <Button
                            variant="link"
                            onClick={() => setSearchQuery("")}
                            className="text-primary mt-2"
                        >
                            Clear Search
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
