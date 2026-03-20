"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function FindNearMe() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[40px] overflow-hidden min-h-[400px] flex items-center justify-center text-center">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1599939571322-792a326991f2?q=80&w=2070&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-zinc-950/70" />

          <div className="relative z-10 p-8 max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
            >
              Find a Gofex Near Me Today
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-300 text-lg mb-10"
            >
              Expert service on appliance repair is here for you today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button size="lg" className="bg-white text-zinc-950 hover:bg-zinc-100 font-bold h-14 px-10 rounded-full shadow-xl">
                Find Out
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
