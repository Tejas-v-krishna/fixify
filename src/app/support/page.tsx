"use client";

import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { Search, HelpCircle, FileText, MessageCircle, Phone, Mail, ChevronRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "How do I track my repair?",
        answer: "You can track your repair status in real-time by visiting the 'Track Repair' page and entering your Order ID."
    },
    {
        question: "Is my device insured?",
        answer: "Yes, every device is insured up to $5,000 during transit and while in our repair lab."
    },
    {
        question: "What if I need to cancel?",
        answer: " cancellations are free within 1 hour of booking. After that, a small cancellation fee may apply."
    },
    {
        question: "Do you offer a warranty?",
        answer: "We offer a 12-month warranty on all parts and labor for every repair."
    }
];

const categories = [
    { icon: FileText, title: "Booking & Orders", desc: "Manage appointments and edit details" },
    { icon: HelpCircle, title: "Repair Process", desc: "Learn how we fix your devices" },
    { icon: MessageCircle, title: "Billing & Invoices", desc: "Payments, refunds, and receipts" },
    { icon: ShieldCheck, title: "Warranty & Safety", desc: "Coverage and data protection" },
];

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-500">
            {/* Background Mesh Gradient (Dark Mode Only) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#2DD4BF]/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">How can we <span className="text-[#2DD4BF]">help</span>?</h1>
                    <p className="text-muted-foreground text-lg mb-8">Search for answers or browse topics below.</p>

                    <div className="max-w-xl mx-auto relative">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search help articles..."
                            className="w-full pl-10 pr-4 py-4 rounded-2xl bg-white border border-input dark:bg-white/5 dark:border-white/10 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] dark:focus:border-[#2DD4BF]/50 dark:focus:bg-white/10 transition-all text-foreground dark:text-white placeholder:text-muted-foreground shadow-sm dark:shadow-none"
                        />
                    </div>
                </div>

                {/* Common Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="p-6 bg-card dark:bg-white/5 border-border dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors cursor-pointer group backdrop-blur-md shadow-sm dark:shadow-none" hoverEffect={false}>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-[#2DD4BF]/10 text-[#2DD4BF] group-hover:scale-110 transition-transform">
                                        <cat.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-foreground dark:text-white mb-1 group-hover:text-[#2DD4BF] transition-colors">{cat.title}</h3>
                                        <p className="text-sm text-muted-foreground">{cat.desc}</p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* FAQs */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-foreground dark:text-white">Common Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-card dark:bg-white/5 border border-border dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10 transition-colors shadow-sm dark:shadow-none">
                                <h3 className="text-lg font-semibold mb-2 text-foreground dark:text-white">{faq.question}</h3>
                                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#1E1B4B] dark:to-[#0F0E17] border border-border dark:border-white/10 text-center shadow-lg dark:shadow-none">
                        <div className="w-12 h-12 mx-auto bg-zinc-100 dark:bg-white/10 rounded-full flex items-center justify-center mb-4">
                            <MessageCircle className="w-6 h-6 text-[#2DD4BF]" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-foreground dark:text-white">Live Chat</h3>
                        <p className="text-muted-foreground mb-6">Talk to a support agent real-time.</p>
                        <button className="px-6 py-2 rounded-full bg-[#2DD4BF] text-[#0F0E17] font-bold hover:bg-[#2DD4BF]/90 transition-colors">Start Chat</button>
                    </div>

                    <div className="p-8 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#1E1B4B] dark:to-[#0F0E17] border border-border dark:border-white/10 text-center shadow-lg dark:shadow-none">
                        <div className="w-12 h-12 mx-auto bg-zinc-100 dark:bg-white/10 rounded-full flex items-center justify-center mb-4">
                            <Mail className="w-6 h-6 text-[#818CF8]" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-foreground dark:text-white">Email Support</h3>
                        <p className="text-muted-foreground mb-6">Get a response within 24 hours.</p>
                        <button className="px-6 py-2 rounded-full border border-border dark:border-white/20 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors text-foreground dark:text-white">support@gofex.com</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
