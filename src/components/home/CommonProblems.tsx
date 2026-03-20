"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const problems = [
  {
    title: "Dryers",
    icon: "🔥",
    items: [
      "Makes unusual loud noise",
      "Drum won't rotate",
      "Clothes take too long to dry",
      "Shuts off unexpectedly"
    ],
    color: "bg-blue-50",
    iconBg: "bg-blue-500"
  },
  {
    title: "Dishwashers",
    icon: "🍽️",
    items: [
      "Dishes are not cleaned properly",
      "Water not filling completely",
      "Strange or unusual noise",
      "Water stays at the bottom"
    ],
    color: "bg-blue-600",
    textColor: "text-white",
    iconBg: "bg-white",
    iconColor: "text-blue-600",
    checkColor: "text-blue-200",
    prominent: true
  },
  {
    title: "Refrigerators & Freezers",
    icon: "❄️",
    items: [
      "Not cooling or freezing properly",
      "Food spoiling quickly",
      "Freezer too much frost build-up",
      "Makes unusual or loud noise"
    ],
    color: "bg-blue-50",
    iconBg: "bg-blue-500"
  }
];

export function CommonProblems() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-zinc-900 mb-4">
            We Repair the Most <span className="text-blue-600">Common Appliance</span> Problems
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            We repair the most common appliance problems fast and effectively, restoring your home&apos;s functionality and comfort in no time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-3xl p-8 shadow-xl ${problem.color} ${problem.textColor || 'text-zinc-900'} ${problem.prominent ? 'scale-105 z-10' : ''}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${problem.iconBg} ${problem.iconColor || 'text-white'}`}>
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold">{problem.title}</h3>
              </div>
              <ul className="space-y-4">
                {problem.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 shrink-0 ${problem.checkColor || 'text-blue-600'}`} />
                    <span className="text-sm opacity-90">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
