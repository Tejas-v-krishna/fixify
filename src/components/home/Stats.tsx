export function Stats() {
    const stats = [
        { label: "Verified Technicians", value: "500+" },
        { label: "Repairs Completed", value: "15k+" },
        { label: "Happy Customers", value: "12k+" },
    ];

    return (
        <section className="py-12 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center pt-8 md:pt-0">
                            <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                            <p className="text-charcoal/60 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
