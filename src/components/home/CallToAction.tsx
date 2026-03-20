"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[40px] bg-zinc-900 p-12 md:p-16 lg:p-24 overflow-hidden text-center shadow-2xl">
          {/* Decorative gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.1),transparent)] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.05),transparent)] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight"
            >
              Ready to Repair <br />
              <span className="text-blue-500">Without the Hassle?</span>
            </motion.h2>
            <p className="text-zinc-400 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
              Join thousands of happy customers who manage their repairs the smart way.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link href="/book" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold h-16 px-12 text-lg rounded-full shadow-2xl transition-all hover:scale-105">
                  Book a Pickup
                </Button>
              </Link>
              <Link href="/signup" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-zinc-700 text-white hover:bg-zinc-800 font-bold h-16 px-12 text-lg rounded-full transition-all">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
