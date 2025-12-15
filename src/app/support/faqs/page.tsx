"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function FAQsPage() {
    const faqs = [
        {
            q: "Is my item insured?",
            a: "Yes, every item picked up by Fixify is insured against damage or loss during transit and repair. We value your trust and safety."
        },
        {
            q: "How long does repair take?",
            a: "Most standard repairs are completed within 24-48 hours. Complex issues may take longer, but we will keep you updated every step of the way."
        },
        {
            q: "Can I cancel a booking?",
            a: "Yes, you can cancel your booking anytime before the pickup agent arrives. If canceled after pickup, a small service fee may apply."
        },
        {
            q: "Are technicians verified?",
            a: "Absolutely. All our technicians undergo rigorous background checks and skill verification processes to ensure top-quality service."
        },
        {
            q: "How do I pay?",
            a: "We accept all major credit cards, UPI, and digital wallets. Payment is requested only after the repair estimate is approved."
        }
    ];

    return (
        <div className="min-h-screen bg-secondary pt-32 pb-20 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold font-heading mb-4">Frequently Asked Questions</h1>
                    <p className="text-muted-foreground text-lg">Quick answers to your most common questions.</p>
                </div>

                <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-sm">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b-black/5">
                                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary transition-colors text-left">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-muted-foreground mb-4">Still have questions?</p>
                    <Link href="/support/contact">
                        <Button>Contact Support</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
