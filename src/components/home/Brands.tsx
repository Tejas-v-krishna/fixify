"use client";

import { InfiniteSlider } from "@/components/core/infinite-slider";

const brands = [
    "Apple", "Samsung", "Nike", "Dyson", "Rolex", "Sony", "Louis Vuitton", "Bose", "Nintendo", "Dell", "Ray-Ban", "KitchenAid"
];

export function Brands() {
    return (
        <section className="py-12 bg-background border-y border-border dark:border-white/5 overflow-hidden relative">
            <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />

            <InfiniteSlider gap={60} duration={40}>
                {brands.map((brand, idx) => (
                    <div key={idx} className="flex items-center justify-center shrink-0 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                        {/* Placeholder for Logo - Using stylized text for now as we don't have SVGs */}
                        <span className="text-2xl md:text-3xl font-bold text-foreground cursor-default select-none tracking-tighter hover:text-[#2DD4BF] transition-colors">
                            {brand}
                        </span>
                    </div>
                ))}
            </InfiniteSlider>
        </section>
    );
}
