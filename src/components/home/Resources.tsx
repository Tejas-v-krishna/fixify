"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

const resources = [
  {
    title: "Dishwasher Not Draining",
    desc: "Understand why your dishwasher is not draining and how to fix it effectively.",
    image: "https://images.unsplash.com/photo-1590601397293-58203e395cc9?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Fridge Noise Issue",
    desc: "Strange or loud noise coming from your fridge? Here's what you need to check.",
    image: "https://images.unsplash.com/photo-1571175484209-514214fe4e3e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Oven/Stove Not Working",
    desc: "Common reasons why your oven or stove is not heating and how to troubleshoot.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
  }
];

export function Resources() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-heading font-bold text-zinc-900 mb-4 leading-tight">
              Get Quick Help Access <br />
              <span className="text-blue-600">Useful Resources</span>
            </h2>
            <p className="text-zinc-500">
              Get our helpful resources for each appliance tips, maintenance advice, and common problems troubleshooting.
            </p>
          </div>
          <Button variant="outline" className="rounded-full border-zinc-200 px-8 h-12 hover:bg-zinc-50">
            View All Resources
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((res, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden rounded-[32px] mb-6 shadow-lg transition-transform group-hover:scale-[1.02]">
                <img 
                  src={res.image} 
                  alt={res.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">{res.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{res.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
