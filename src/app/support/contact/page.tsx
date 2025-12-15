"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-secondary pt-32 pb-20 px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Contact Info */}
                <div>
                    <h1 className="text-4xl font-bold font-heading mb-6">Get in Touch</h1>
                    <p className="text-lg text-muted-foreground mb-10">
                        Need help with a booking or have a question? Our support team is here for you.
                    </p>

                    <div className="space-y-6">
                        <Card className="p-6 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer border-none shadow-sm bg-white" hoverEffect={false}>
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Email Support</h3>
                                <p className="text-muted-foreground">support@fixify.com</p>
                            </div>
                        </Card>
                        <Card className="p-6 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer border-none shadow-sm bg-white" hoverEffect={false}>
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Phone Support</h3>
                                <p className="text-muted-foreground">+1 (800) 123-4567</p>
                            </div>
                        </Card>
                        <Card className="p-6 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer border-none shadow-sm bg-white" hoverEffect={false}>
                            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">In-App Chat</h3>
                                <p className="text-muted-foreground">Available 9 AM - 9 PM</p>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">First Name</label>
                                <Input placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Last Name</label>
                                <Input placeholder="Doe" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <Input type="email" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Message</label>
                            <textarea
                                className="flex min-h-[120px] w-full rounded-xl border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="How can we help?"
                            />
                        </div>
                        <Button className="w-full h-12 rounded-xl text-md">Send Message</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
