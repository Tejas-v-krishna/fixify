"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Student, Bangalore",
    content: "I didn't have to step out. Pickup, repair, delivery — everything was smooth.",
    role: "User"
  },
  {
    name: "Working Professional",
    content: "The tracking feature gave me full confidence. Amazing experience.",
    role: "User"
  },
  {
    name: "Home Owner",
    content: "Transparent pricing and expert technicians. Gofex is a game changer.",
    role: "User"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-zinc-900 mb-4">
            Trusted by <span className="text-blue-600">Real Users</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            See what our customers have to say about their repair experience with Gofex.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[40px] bg-zinc-50 border border-zinc-100 shadow-xl relative overflow-hidden group"
            >
              <Quote className="absolute -top-4 -left-4 w-24 h-24 text-blue-100/50 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="flex text-yellow-400 mb-6">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-lg text-zinc-900 font-medium italic mb-8 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-bold text-zinc-900">{testimonial.name}</h4>
                  <p className="text-sm text-zinc-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
