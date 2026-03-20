"use client";

import { motion } from "framer-motion";
import { Search, Clock, MapPin, ShieldAlert } from "lucide-react";

const painPoints = [
  {
    title: "Hard to find trusted repair shops",
    icon: <Search className="w-8 h-8 text-red-500" />,
    desc: "Endless searching for someone you can actually trust with your expensive items."
  },
  {
    title: "Unclear pricing and delays",
    icon: <Clock className="w-8 h-8 text-red-500" />,
    desc: "Hidden costs and no clear timeline on when you'll get your item back."
  },
  {
    title: "No tracking or updates",
    icon: <MapPin className="w-8 h-8 text-red-500" />,
    desc: "Wondering where your item is and what's happening with the repair."
  },
  {
    title: "Risk of damage or loss",
    icon: <ShieldAlert className="w-8 h-8 text-red-500" />,
    desc: "Worried about the safety and handling of your product during transit or repair."
  }
];

export function ProblemSolution() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-zinc-900 mb-4">
            We Fix the Hassle, Not Just the Product
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Repairing items shouldn’t mean wasting time, guessing prices, or worrying about safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[32px] bg-zinc-50 border border-zinc-100 hover:shadow-lg transition-all"
            >
              <div className="mb-6">{point.icon}</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3 leading-tight">{point.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50 text-blue-600 font-bold text-lg">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            With Gofex, everything is structured, trackable, and reliable.
          </div>
        </div>
      </div>
    </section>
  );
}
