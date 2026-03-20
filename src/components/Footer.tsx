"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white pt-24 pb-12 border-t border-zinc-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="col-span-1 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-zinc-900 uppercase">Gofex</span>
                        </Link>
                        <p className="text-zinc-500 text-sm mb-6 leading-relaxed max-w-xs">
                            Expert appliance repair services for your home. We&apos;re proud to be part of the Gofex family.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:border-blue-400 transition-all">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-pink-600 hover:border-pink-600 transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-red-600 hover:border-red-600 transition-all">
                                <Youtube className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div>
                        <h4 className="font-bold text-zinc-900 mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">The Gofex App</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">Why Us</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-zinc-900 mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">Residential</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">Commercial</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">Appliances</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">Repairs</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-zinc-900 mb-6">Resources</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">Quick Tips</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">Updates</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">Sitemap</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
                    <p>© 2026 Gofex. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
