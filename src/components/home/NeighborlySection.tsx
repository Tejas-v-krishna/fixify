"use client";

import { motion } from "framer-motion";
import { Apple, PlayCircle } from "lucide-react";
import { Button } from "../ui/Button";

export function NeighborlySection() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[40px] p-12 md:p-16 shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-12"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl font-heading font-bold text-zinc-900 mb-6 leading-tight">
              Mr. Appliance, part of <br />
              Neighborly family
            </h2>
            <p className="text-zinc-500 mb-10">
              Mr. Appliance is proud to be part of Neighborly, a community of home service experts we trust.
            </p>
            <div className="flex flex-wrap gap-8 grayscale opacity-50">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Neighborly_logo.svg/1200px-Neighborly_logo.svg.png" alt="Neighborly" className="h-8" />
            </div>
          </div>

          <div className="bg-zinc-50 rounded-[32px] p-8 md:p-10 w-full lg:max-w-md border border-zinc-200">
            <h3 className="font-bold text-zinc-900 mb-6 text-center">Download the App</h3>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="flex-1 bg-zinc-900 text-white hover:bg-zinc-800 h-14 rounded-2xl gap-3">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] opacity-70 leading-none">Download on the</div>
                  <div className="text-sm font-bold leading-none">App Store</div>
                </div>
              </Button>
              <Button className="flex-1 bg-zinc-900 text-white hover:bg-zinc-800 h-14 rounded-2xl gap-3">
                <PlayCircle className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] opacity-70 leading-none">GET IT ON</div>
                  <div className="text-sm font-bold leading-none">Google Play</div>
                </div>
              </Button>
            </div>
            <div className="pt-8 border-t border-zinc-200 text-center">
              <p className="text-sm text-zinc-500 mb-4">Neighborly is all you need for home services.</p>
              <Button variant="outline" className="rounded-full border-zinc-900 hover:bg-zinc-950 hover:text-white transition-colors">
                Discover Neighborly
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
