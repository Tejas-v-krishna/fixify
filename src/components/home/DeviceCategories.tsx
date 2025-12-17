"use client";

import { Smartphone, Laptop, Watch, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";

export function DeviceCategories() {
    const categories = [
        {
            title: "Smartphones",
            description: "Screens, batteries, and logic boards.",
            icon: Smartphone,
        },
        {
            title: "Laptops",
            description: "Keyboards, displays, and thermal issues.",
            icon: Laptop,
        },
        {
            title: "Wearables",
            description: "Smartwatches and fitness trackers.",
            icon: Watch,
        },
        {
            title: "Consoles",
            description: "Gaming gear, controllers, and HDMI ports.",
            icon: Gamepad2,
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-bold text-[#00171F] text-center mb-16">
                    What can Gofex fix for you?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group hover:border-[#00A8E8] transition-all duration-300 cursor-pointer"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#00A8E8]/10 transition-colors">
                                <cat.icon className="w-8 h-8 text-gray-400 group-hover:text-[#00A8E8] transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{cat.title}</h3>
                            <p className="text-gray-500">{cat.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
