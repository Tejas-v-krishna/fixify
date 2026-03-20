"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Plus, Check, Zap } from "lucide-react";
import { Button } from "../ui/Button";

export function InsuranceSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[40px] bg-blue-600 p-12 md:p-16 lg:p-24 overflow-hidden shadow-2xl">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-400/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-800/20 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 text-white font-bold text-xs uppercase tracking-widest mb-8 border border-blue-400/30">
                <ShieldCheck className="w-4 h-4" /> Optional Add-on
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                Extra Protection. <br />
                Zero Worry.
              </h2>
              <p className="text-blue-100 text-lg mb-10 max-w-lg leading-relaxed">
                Add optional repair protection to safeguard your product against damage or loss during transit or the repair process.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">Simple add-on during booking</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">Transparent coverage details</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">Easy claim process</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">Peace of mind guaranteed</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold h-14 px-10 rounded-full shadow-xl">
                Add Protection Now
              </Button>
            </div>

            {/* Right Visual: Interactive Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-[32px] bg-white shadow-2xl border border-white/20"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="p-4 rounded-2xl bg-blue-50 text-blue-600">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div className="text-right">
                  <div className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-1">Gofex Care+</div>
                  <div className="text-2xl font-bold text-zinc-900">₹499 <span className="text-xs text-zinc-400 font-normal">/repair</span></div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 rounded-xl border border-blue-100 bg-blue-50/30">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-bold text-zinc-900">Theft Protection</span>
                  </div>
                  <span className="text-xs font-bold text-green-600 uppercase">Covered</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl border border-blue-100 bg-blue-50/30">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-bold text-zinc-900">Accidental Damage</span>
                  </div>
                  <span className="text-xs font-bold text-green-600 uppercase">Covered</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-xl border-2 border-dashed border-blue-200 text-zinc-400">
                <Plus className="w-5 h-5" />
                <span className="text-sm">Click to view all 12 coverage points</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
