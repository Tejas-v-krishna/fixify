import { GraduationCap, Briefcase, Home } from "lucide-react";

export function UseCases() {
    const cases = [
        {
            title: "For Students",
            description: "Quick, affordable repairs without leaving campus. Focus on your studies while we fix your devices.",
            icon: GraduationCap,
            color: "bg-orange-100 text-orange-600",
        },
        {
            title: "For Working Professionals",
            description: "Save precious time with doorstep pickup & delivery. We work around your busy schedule.",
            icon: Briefcase,
            color: "bg-blue-100 text-blue-600",
        },
        {
            title: "For Families",
            description: "Reliable repairs for everyday household items. Keep your home running smoothly.",
            icon: Home,
            color: "bg-pink-100 text-pink-600",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Who Gofex Is For</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Designed for everyone who values time and convenience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((useCase, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${useCase.color}`}>
                                <useCase.icon className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-2xl text-gray-900 mb-3">{useCase.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
