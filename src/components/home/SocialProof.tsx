import { Star, ShieldCheck, Wrench, Users } from "lucide-react";

export function SocialProof() {
    return (
        <section className="py-12 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Trusted by thousands of users</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl">
                        <Users className="w-8 h-8 text-primary mb-2" />
                        <span className="text-2xl font-bold text-gray-900">12k+</span>
                        <span className="text-sm text-gray-600">Happy Customers</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl">
                        <Wrench className="w-8 h-8 text-primary mb-2" />
                        <span className="text-2xl font-bold text-gray-900">15k+</span>
                        <span className="text-sm text-gray-600">Repairs Completed</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl">
                        <ShieldCheck className="w-8 h-8 text-primary mb-2" />
                        <span className="text-2xl font-bold text-gray-900">500+</span>
                        <span className="text-sm text-gray-600">Verified Technicians</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl">
                        <Star className="w-8 h-8 text-primary mb-2" />
                        <span className="text-2xl font-bold text-gray-900">4.8/5</span>
                        <span className="text-sm text-gray-600">Average Rating</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
