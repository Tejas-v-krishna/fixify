import { Zap, ThumbsUp, Recycle, Clock } from "lucide-react";

export function Benefits() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Users Choose Fixify</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            We make repairs so easy, you'll never think about buying new again.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Saves Time</h3>
                                    <p className="text-gray-600">No trips to the repair shop. We handle the logistics.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                    <Recycle className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Eco-Friendly</h3>
                                    <p className="text-gray-600">Extending the life of your products reduces e-waste.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                                    <Zap className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Effortless</h3>
                                    <p className="text-gray-600">Book in minutes, track in real-time.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full grid grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-3xl text-center">
                            <div className="text-4xl font-bold text-primary mb-2">30%</div>
                            <div className="text-gray-600 font-medium">Faster Repairs</div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-3xl text-center translate-y-8">
                            <div className="text-4xl font-bold text-primary mb-2">90%</div>
                            <div className="text-gray-600 font-medium">Satisfaction Rate</div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-3xl text-center">
                            <div className="text-4xl font-bold text-primary mb-2">10k+</div>
                            <div className="text-gray-600 font-medium">Items Saved</div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-3xl text-center translate-y-8">
                            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                            <div className="text-gray-600 font-medium">Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
