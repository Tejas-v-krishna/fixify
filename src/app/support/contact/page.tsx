"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4 relative overflow-hidden transition-colors duration-500">
            {/* Background Mesh Gradient (Dark Mode Only) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 h-[600px] w-[600px] opacity-20 bg-gradient-to-b from-[#2DD4BF]/10 to-transparent blur-[120px]" />
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#818CF8]/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">

                {/* Contact Info */}
                <div>
                    <h1 className="text-4xl font-bold font-heading mb-6 text-foreground">Get in <span className="text-[#2DD4BF]">Touch</span></h1>
                    <p className="text-lg text-muted-foreground mb-10">
                        Need help with a booking or have a question? Our support team is here for you.
                    </p>

                    <div className="space-y-6">
                        <Card className="p-6 flex items-center gap-4 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors cursor-pointer border-border dark:border-white/10 bg-card dark:bg-white/5 backdrop-blur-md shadow-sm dark:shadow-none" hoverEffect={false}>
                            <div className="w-12 h-12 rounded-full bg-[#818CF8]/20 flex items-center justify-center text-[#818CF8]">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-foreground dark:text-white">Email Support</h3>
                                <p className="text-muted-foreground">support@gofex.com</p>
                            </div>
                        </Card>
                        <Card className="p-6 flex items-center gap-4 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors cursor-pointer border-border dark:border-white/10 bg-card dark:bg-white/5 backdrop-blur-md shadow-sm dark:shadow-none" hoverEffect={false}>
                            <div className="w-12 h-12 rounded-full bg-[#2DD4BF]/20 flex items-center justify-center text-[#2DD4BF]">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-foreground dark:text-white">Phone Support</h3>
                                <p className="text-muted-foreground">+1 (800) 123-4567</p>
                            </div>
                        </Card>
                        <Card className="p-6 flex items-center gap-4 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors cursor-pointer border-border dark:border-white/10 bg-card dark:bg-white/5 backdrop-blur-md shadow-sm dark:shadow-none" hoverEffect={false}>
                            <div className="w-12 h-12 rounded-full bg-[#F472B6]/20 flex items-center justify-center text-[#F472B6]">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-foreground dark:text-white">In-App Chat</h3>
                                <p className="text-muted-foreground">Available 9 AM - 9 PM</p>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-card dark:bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-border dark:border-white/10 shadow-lg dark:shadow-none">
                    <h2 className="text-2xl font-bold mb-6 text-foreground dark:text-white">Send us a message</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">First Name</label>
                                <Input placeholder="John" className="bg-zinc-50 dark:bg-[#0F0E17]/50 border-input dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground focus:border-[#2DD4BF] focus:ring-[#2DD4BF]/20" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                                <Input placeholder="Doe" className="bg-zinc-50 dark:bg-[#0F0E17]/50 border-input dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground focus:border-[#2DD4BF] focus:ring-[#2DD4BF]/20" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Email</label>
                            <Input type="email" placeholder="john@example.com" className="bg-zinc-50 dark:bg-[#0F0E17]/50 border-input dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground focus:border-[#2DD4BF] focus:ring-[#2DD4BF]/20" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Message</label>
                            <textarea
                                className="flex min-h-[120px] w-full rounded-xl border border-input dark:border-white/10 bg-zinc-50 dark:bg-[#0F0E17]/50 px-3 py-2 text-sm shadow-sm dark:shadow-xl placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]/20 focus-visible:border-[#2DD4BF] disabled:cursor-not-allowed disabled:opacity-50 text-foreground dark:text-white transition-all"
                                placeholder="How can we help?"
                            />
                        </div>
                        <Button className="w-full h-12 rounded-xl text-md bg-gradient-to-r from-[#2DD4BF] to-[#0D9488] hover:from-[#14B8A6] hover:to-[#0F766E] text-[#0F0E17] font-bold shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] border-none">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
