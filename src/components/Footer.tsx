import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
                                F
                            </div>
                            <span className="font-heading font-bold text-xl text-charcoal">Fixify</span>
                        </div>
                        <p className="text-charcoal/60 text-sm leading-relaxed">
                            Premium restoration and repair services delivered to your doorstep. We fix electronics, furniture, accessories, and more.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-charcoal/40 hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-charcoal/40 hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-charcoal/40 hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-charcoal/40 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="font-heading font-semibold text-charcoal mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-sm text-charcoal/60 hover:text-primary transition-colors">Electronics Repair</Link></li>
                            <li><Link href="#" className="text-sm text-charcoal/60 hover:text-primary transition-colors">Furniture Restoration</Link></li>
                            <li><Link href="#" className="text-sm text-charcoal/60 hover:text-primary transition-colors">Shoe & Bag Spa</Link></li>
                            <li><Link href="#" className="text-sm text-charcoal/60 hover:text-primary transition-colors">Home Appliances</Link></li>
                            <li><Link href="#" className="text-sm text-charcoal/60 hover:text-primary transition-colors">Watch Repair</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="font-heading font-semibold text-charcoal mb-6">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-sm text-charcoal/60 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-sm text-charcoal/60 hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-sm text-charcoal/60 hover:text-primary transition-colors">Technician Partner</Link></li>
                            <li><Link href="#" className="text-sm text-charcoal/60 hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-sm text-charcoal/60 hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading font-semibold text-charcoal mb-6">Contact</h4>
                        <ul className="space-y-3">
                            <li className="text-sm text-charcoal/60">support@fixify.com</li>
                            <li className="text-sm text-charcoal/60">+1 (555) 123-4567</li>
                            <li className="text-sm text-charcoal/60">123 Repair Street,<br />Tech City, TC 90210</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-charcoal/40">© 2024 Fixify Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-xs text-charcoal/40 hover:text-primary">Privacy</Link>
                        <Link href="#" className="text-xs text-charcoal/40 hover:text-primary">Terms</Link>
                        <Link href="#" className="text-xs text-charcoal/40 hover:text-primary">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
