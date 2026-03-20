"use client";

import { motion } from "framer-motion";
import { Plus, Minus, CheckCircle2, DollarSign, ShieldCheck } from "lucide-react";
import { useState } from "react";

const features = [
  {
    title: "Flexible scheduling and quick repairs",
    desc: "We promptly review and provide you expert services needed to restore your home's functionality and comfort in no time.",
    icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Transparent Prices",
    desc: "Upfront pricing with no hidden fees. We believe in clear communication and honest service for all our customers.",
    icon: <DollarSign className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Trusted Quality",
    desc: "Our certified technicians provide high-quality repairs with guaranteed results you can count on every time.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
  }
];

export function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-heading font-bold text-zinc-900 mb-8 leading-tight">
              Why Choose <span className="text-blue-600">Mr. Appliance</span> to Repair
            </h2>
            <p className="text-zinc-500 mb-12 max-w-lg">
              Reliable appliance repair with trusted technicians ensuring assistance at any single time.
            </p>

            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className={`rounded-2xl border transition-all duration-300 ${openIndex === idx ? 'border-blue-600 shadow-lg' : 'border-zinc-200'}`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-xl ${openIndex === idx ? 'bg-blue-100' : 'bg-zinc-100'}`}>
                        {feature.icon}
                      </div>
                      <span className="font-bold text-zinc-900">{feature.title}</span>
                    </div>
                    {openIndex === idx ? <Minus className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-zinc-400" />}
                  </button>
                  {openIndex === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed ml-14"
                    >
                      {feature.desc}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[40px] overflow-hidden shadow-2xl h-[600px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop" 
              alt="Technician talking to customer" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
