"use client";

import { Card } from "../ui/Card";
import { Smartphone, Armchair, Briefcase, Ruler, Watch, Zap } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
    { icon: Smartphone, name: "Electronics", desc: "Phones, Laptops, Tablets" },
    { icon: Armchair, name: "Furniture", desc: "Sofas, Chairs, Tables" },
    { icon: Briefcase, name: "Bags & Luggage", desc: "Zippers, Handles, Wheels" },
    { icon: Ruler, name: "Shoes", desc: "Cleaning, Sole Repair" }, // Ruler as placeholder or maybe Footprints
    { icon: Zap, name: "Appliances", desc: "Microwave, Mixer, Iron" }, // Zap for electrical
    { icon: Watch, name: "Accessories", desc: "Watches, Belts" },
];

export function Services() {
    return (
        <section className="py-32 bg-stone-50/50 dark:bg-zinc-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                        We Fix Almost Everything
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Select a category to get started. Our experts can handle specific repairs with care.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card hoverEffect className="h-full p-6 flex flex-col items-center text-center justify-center gap-4 cursor-pointer border-border/40 hover:border-primary/20 hover:bg-muted/50 transition-all bg-background/40 backdrop-blur-sm">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-2">
                                    <cat.icon size={28} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-foreground mb-2">{cat.name}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
