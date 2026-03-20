"use client";

import { motion } from "framer-motion";
import { ShieldCheck, LayoutDashboard, Zap, MousePointerClick } from "lucide-react";

const features = [
  {
    title: "Real-Time Tracking",
    desc: "Know exactly where your item is. From pickup to repair and delivery, track every stage live.",
    icon: <LayoutDashboard className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden costs, no surprises. Get a clear estimate before you commit to any repair.",
    icon: <Zap className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Smart Technician Matching",
    desc: "We match your specific item with the right expert for the highest quality repair possible.",
    icon: <MousePointerClick className="w-8 h-8 text-blue-600" />
  },
  {
    title: "User Dashboard",
    desc: "Manage all your current and past repairs in one single, easy-to-use place.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
  }
];

export function FeatureHighlights() {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-zinc-900 mb-4">
            Everything You Need <br />
            For A <span className="text-blue-600">Stress-Free Repair</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Our platform is built to provide maximum transparency and control over your items.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[40px] bg-white border border-zinc-100 shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="mb-6 p-4 rounded-3xl bg-blue-50 w-fit group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">{feature.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
