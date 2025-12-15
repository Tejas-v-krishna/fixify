"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Data mapping for categories
const servicesData: Record<string, {
    title: string;
    description: string;
    longDescription: string;
    features: string[];
    ctaText: string;
    imageGradient: string;
}> = {
    electronics: {
        title: "Electronics Repair",
        description: "Smartphones, laptops, headphones, radios, and small electronic devices repaired by verified technicians.",
        longDescription: "Our electronics experts are certified to handle complex repairs for all major brands. From cracked screens to motherboard issues, we bring your devices back to life with genuine parts and warranty-backed service.",
        features: ["Screen & Battery Replacement", "Motherboard Repair", "Water Damage Recovery", "Software Troubleshooting"],
        ctaText: "Book Electronics Repair",
        imageGradient: "from-blue-600 to-indigo-600"
    },
    appliances: {
        title: "Appliances Repair",
        description: "Home appliances like mixers, fans, irons, and other everyday essentials — repaired safely and reliably.",
        longDescription: "Don't let a broken appliance disrupt your routine. We provide doorstep repair for heavy and small appliances, ensuring safety standards and quick turnaround times.",
        features: ["Washing Machines & Dryers", "Refrigerators & ACs", "Microwaves & Ovens", "Mixers & Small Appliances"],
        ctaText: "Schedule Appliance Pickup",
        imageGradient: "from-orange-500 to-red-500"
    },
    furniture: {
        title: "Furniture & Household Items",
        description: "Chairs, tables, wooden items, household fittings, and minor carpentry repairs.",
        longDescription: "Restore the beauty and functionality of your furniture. Our skilled carpenters and restoration experts handle everything from wobbling chairs to polishing and structural repairs.",
        features: ["Carpentry Repairs", "Polishing & Varnishing", "Upholstery Cleaning", "Assembly & Installation"],
        ctaText: "Get Furniture Repaired",
        imageGradient: "from-amber-600 to-yellow-600"
    },
    accessories: {
        title: "Shoes, Bags & Accessories",
        description: "Footwear repairs, luggage trolleys, bags, umbrellas, and everyday personal items.",
        longDescription: "Give your favorite accessories a second life. We specialize in premium repair for leather goods, travel gear, and footwear, using high-quality materials to match the original.",
        features: ["Shoe Repair & Cleaning", "Zipper & Handle Replacement", "Leather Restoration", "Bag Stitching"],
        ctaText: "Repair Personal Items",
        imageGradient: "from-rose-500 to-pink-500"
    }
};

export default function ServiceDetailPage() {
    const params = useParams();
    const category = params.category as string;
    const service = servicesData[category];

    // Fallback for unknown categories
    if (!service) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link href="/services">
                        <Button variant="outline" className="text-white border-white/20">All Services</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-secondary">
            {/* Hero Section */}
            <div className={`relative pt-32 pb-20 px-6 overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.imageGradient} opacity-10`} />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />

                <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-foreground text-sm font-medium mb-6">
                            <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
                            Premium Service
                        </div>
                        <h1 className="text-5xl sm:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                            {service.title}
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            {service.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/book">
                                <Button size="lg" className="h-14 px-8 rounded-full text-lg shadow-lg shadow-primary/20">
                                    {service.ctaText} <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button variant="ghost" size="lg" className="h-14 px-8 rounded-full text-lg">
                                    View All Services
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Visual Card */}
                    <div className="relative">
                        <div className={`absolute -inset-4 bg-gradient-to-r ${service.imageGradient} rounded-[2rem] blur-2xl opacity-30`} />
                        <div className="relative bg-white/50 backdrop-blur-xl border border-white/40 p-10 rounded-[2rem] shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6">What we fix</h3>
                            <ul className="space-y-4">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.imageGradient} flex items-center justify-center text-white`}>
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <span className="text-lg font-medium text-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-gray-200 flex items-center gap-4 text-sm text-muted-foreground">
                                <ShieldCheck className="w-5 h-5 text-green-600" />
                                <span>Warranty included on all repairs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Details Section */}
            <div className="py-20 px-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">About this Service</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                    {service.longDescription}
                </p>
            </div>
        </div>
    );
}
