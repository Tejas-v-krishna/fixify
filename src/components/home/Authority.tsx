"use client";

import { motion } from "framer-motion";
import { TrendingUp, Star } from "lucide-react";

export function Authority() {
    return (
        <section className="relative z-10 pt-32 pb-16 bg-white overflow-visible">
            {/* Note: The 'pt-32' compensates for the overlapping Hero visual */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Floating Authority Card */}
                <div className="relative -mt-24 mb-20 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12 max-w-4xl mx-auto">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">98% Success Rate on First Attempt.</h2>
                        <p className="text-gray-600 text-lg">
                            Rated as the most transparent repair service in the city. We don't just fix devices; we restore peace of mind.
                        </p>
                    </div>

                    <div className="flex-1 w-full max-w-xs bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center justify-center gap-4">
                        <div className="flex items-center gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                        <div className="text-center">
                            <span className="text-4xl font-bold text-gray-900">4.9/5</span>
                            <p className="text-sm text-gray-500 mt-1">Based on 10,000+ Repairs</p>
                        </div>
                        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-2">
                            <div className="w-[98%] h-full bg-[#00A8E8]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
