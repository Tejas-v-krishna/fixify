"use client";

import { motion } from "framer-motion";
import { MousePointerClick, Truck, Wrench, LayoutDashboard, Home } from "lucide-react";

const steps = [
  {
    title: "1. Book a Pickup",
    desc: "Tell us what needs repair and schedule a pickup.",
    icon: <MousePointerClick className="w-8 h-8 text-blue-600" />
  },
  {
    title: "2. We Collect",
    desc: "A verified agent safely picks up your item.",
    icon: <Truck className="w-8 h-8 text-blue-600" />
  },
  {
    title: "3. Expert Repair",
    desc: "Assigned to skilled technicians based on your need.",
    icon: <Wrench className="w-8 h-8 text-blue-600" />
  },
  {
    title: "4. Track in Real-Time",
    desc: "Get live updates at every stage.",
    icon: <LayoutDashboard className="w-8 h-8 text-blue-600" />
  },
  {
    title: "5. Safe Delivery",
    desc: "Receive your repaired item at your doorstep.",
    icon: <Home className="w-8 h-8 text-blue-600" />
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-zinc-900 mb-4">
            Simple. Transparent. Reliable.
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Our 5-step process ensures your item is handled with care and returned to you in perfect condition.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-blue-50 border-4 border-white shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
