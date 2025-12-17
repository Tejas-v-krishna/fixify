import { BadgeCheck, Shield, DollarSign, Smile } from "lucide-react";

export function TrustBadges() {
    const badges = [
        { name: "Verified Technician", icon: BadgeCheck },
        { name: "Secure Service", icon: Shield },
        { name: "Transparent Pricing", icon: DollarSign },
        { name: "Customer Satisfaction", icon: Smile },
    ];

    return (
        <section className="py-16 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {badges.map((badge, index) => (
                        <div key={index} className="flex flex-col items-center text-center gap-3 group">
                            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary/5 transition-colors duration-300">
                                <badge.icon className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                            </div>
                            <span className="font-medium text-gray-600 group-hover:text-gray-900 transition-colors">{badge.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
