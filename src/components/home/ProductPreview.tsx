"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Truck, Wrench } from "lucide-react";

export function ProductPreview() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fixify in Action</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        See every step of your repair, clearly and transparently. From booking to delivery, you are always in the loop.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.25rem] left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col items-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-white border-4 border-primary flex items-center justify-center mb-6 shadow-sm z-10">
                                <Truck className="w-8 h-8 text-primary" />
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm border border-gray-100">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">Completed</span>
                                    <span className="text-xs text-gray-400">10:00 AM</span>
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 mb-2">Pickup Scheduled</h3>
                                <p className="text-sm text-gray-600">Your technician has picked up your Laptop (MacBook Pro) and is on the way to the lab.</p>
                            </div>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col items-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-white border-4 border-primary flex items-center justify-center mb-6 shadow-sm z-10">
                                <Wrench className="w-8 h-8 text-primary" />
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 animate-pulse" />
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> In Progress
                                    </span>
                                    <span className="text-xs text-gray-400">1:30 PM</span>
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 mb-2">Repairing</h3>
                                <p className="text-sm text-gray-600">Technician John is currently replacing the screen. Estimated completion in 2 hours.</p>
                            </div>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col items-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-gray-100 border-4 border-gray-200 flex items-center justify-center mb-6 shadow-sm z-10">
                                <CheckCircle2 className="w-8 h-8 text-gray-400" />
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm w-full max-w-sm border border-gray-100 opacity-60">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Pending</span>
                                    <span className="text-xs text-gray-400">--:--</span>
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 mb-2">Delivery</h3>
                                <p className="text-sm text-gray-600">Your item will be delivered back to you safely once QC is passed.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
