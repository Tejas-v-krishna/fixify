import { Link } from "lucide-react";
import { Button } from "../ui/Button";

export function Assurance() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Repairs you can trust</h2>
                <p className="text-xl text-gray-600 mb-10">
                    We don't just fix things; we ensure they stay fixed. Our quality checks and customer support are with you at every step.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12">
                    <div className="p-6 bg-gray-50 rounded-2xl flex-1">
                        <h3 className="font-bold text-lg mb-2">Secure Handling</h3>
                        <p className="text-gray-600">Your items are insured and handled with extreme care during transit and repair.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl flex-1">
                        <h3 className="font-bold text-lg mb-2">Quality Checks</h3>
                        <p className="text-gray-600">Every repair undergoes a strict quality control process before delivery.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl flex-1">
                        <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
                        <p className="text-gray-600">Our support team is always available to answer your queries.</p>
                    </div>
                </div>

                <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-colors">
                    Learn How We Ensure Quality
                </button>
            </div>
        </section>
    );
}
