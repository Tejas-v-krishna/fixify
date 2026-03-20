"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Verified Technicians", value: "500+" },
  { label: "Repairs Completed", value: "15,000+" },
  { label: "Happy Customers", value: "12,000+" }
];

export function TrustStrip() {
  return (
    <section className="bg-zinc-50 border-y border-zinc-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <h3 className="text-zinc-500 font-medium text-lg text-center lg:text-left">
            Trusted by Thousands for Reliable Repairs
          </h3>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-zinc-900 mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
