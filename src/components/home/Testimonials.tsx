import { Card } from "../ui/Card";
import { Star } from "lucide-react";

export function Testimonials() {
    const reviews = [
        { name: "Sarah J.", role: "Homeowner", text: "Incredible service! They fixed my broken laptop screen in 2 days. The pickup was seamless." },
        { name: "Mike T.", role: "Designer", text: "I love the transparency. The tracking feature kept me updated every step of the way." },
        { name: "Emily R.", role: "Student", text: "Saved my favorite sneakers from the trash. They look brand new! Highly recommend." },
    ];

    return (
        <section className="py-16 md:py-24 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal text-center mb-16">
                    Trusted by Thousands
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <Card key={index} className="p-8">
                            <div className="flex gap-1 mb-4 text-yellow-400">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-charcoal/70 mb-6 italic">"{review.text}"</p>
                            <div>
                                <p className="font-bold text-charcoal">{review.name}</p>
                                <p className="text-xs text-charcoal/40">{review.role}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
