import { ArrowRight, HelpCircle, Shield, Clock, CreditCard } from "lucide-react";
import Link from "next/link";

export function LearnMore() {
    const resources = [
        {
            title: "How Pricing Works",
            icon: CreditCard,
            href: "/pricing",
            color: "text-green-600",
        },
        {
            title: "Safety & Insurance",
            icon: Shield,
            href: "/safety",
            color: "text-blue-600",
        },
        {
            title: "Repair Timelines",
            icon: Clock,
            href: "/timelines",
            color: "text-orange-600",
        },
        {
            title: "Frequently Asked Questions",
            icon: HelpCircle,
            href: "/faqs",
            color: "text-purple-600",
        },
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Learn More About Fixify</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Everything you need to know about our service, process, and commitment to quality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((resource, index) => (
                        <Link href={resource.href} key={index} className="group">
                            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-full flex flex-col justify-between">
                                <div>
                                    <resource.icon className={`w-8 h-8 mb-4 ${resource.color}`} />
                                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                        {resource.title}
                                    </h3>
                                </div>
                                <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-primary mt-4">
                                    Read more <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
