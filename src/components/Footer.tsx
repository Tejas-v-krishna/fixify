"use client";

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-1 space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
                                F
                            </div>
                            <span className="font-bold text-xl text-charcoal">Fixify</span>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed pr-4">
                            Smart repairs, right from your doorstep. Premium service for your premium devices.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={18} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Column 1: Product */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><Link href="/services" className="text-sm text-gray-500 hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/how-it-works" className="text-sm text-gray-500 hover:text-primary transition-colors">How It Works</Link></li>
                            <li><Link href="/pricing" className="text-sm text-gray-500 hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="/track" className="text-sm text-gray-500 hover:text-primary transition-colors">Track Repair</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Company */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-sm text-gray-500 hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="/careers" className="text-sm text-gray-500 hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="text-sm text-gray-500 hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="/partners" className="text-sm text-gray-500 hover:text-primary transition-colors">Partners</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><Link href="/help" className="text-sm text-gray-500 hover:text-primary transition-colors">Help Center</Link></li>
                            <li><Link href="/faqs" className="text-sm text-gray-500 hover:text-primary transition-colors">FAQs</Link></li>
                            <li><Link href="/terms" className="text-sm text-gray-500 hover:text-primary transition-colors">Terms & Privacy</Link></li>
                            <li><Link href="/community" className="text-sm text-gray-500 hover:text-primary transition-colors">Community</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Reach Us (Merged into simple text in original layout, but explicit here) */}
                    <div className="col-span-2 lg:col-span-1 lg:hidden">
                        <h4 className="font-bold text-gray-900 mb-6">Reach Us</h4>
                        <ul className="space-y-3">
                            <li className="text-sm text-gray-500">support@fixify.com</li>
                            <li className="text-sm text-gray-500">+1 (555) 123-4567</li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400">© 2024 Fixify Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-xs text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-xs text-gray-400 hover:text-primary transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="text-xs text-gray-400 hover:text-primary transition-colors">Cookie Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
