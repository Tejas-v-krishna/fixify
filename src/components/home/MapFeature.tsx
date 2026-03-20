"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Filter, Truck } from "lucide-react";

export function MapFeature() {
  return (
    <section id="nearby-services" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-heading font-bold text-zinc-900 mb-6 leading-tight">
              Find Trusted Repair <br />
              Services <span className="text-blue-600">Near You</span>
            </h2>
            <p className="text-zinc-500 mb-10 max-w-lg">
              Explore verified service stations on a live map — compare, choose, or schedule pickup instantly. More control, more transparency.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Nearby service discovery</h4>
                  <p className="text-sm text-zinc-500">Instantly locate the best repair centers in your neighborhood.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Ratings & reviews</h4>
                  <p className="text-sm text-zinc-500">Check real feedback from other users before choosing a station.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                  <Filter className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Category filters</h4>
                  <p className="text-sm text-zinc-500">Filter by device type to find specialized technicians.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual: Map Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[40px] overflow-hidden shadow-2xl h-[550px] bg-zinc-200 border-8 border-white"
          >
            {/* Simple Map Visualization with markers */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-80" />
            <div className="absolute inset-0 bg-blue-900/10" />
            
            {/* Animated Markers */}
            <div className="absolute top-1/4 left-1/3">
              <div className="relative flex h-10 w-10">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-10 w-10 bg-blue-600 items-center justify-center text-white shadow-lg">
                  <MapPin className="w-5 h-5" />
                </span>
              </div>
            </div>
            <div className="absolute top-1/2 left-2/3">
              <div className="relative flex h-10 w-10">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-10 w-10 bg-blue-600 items-center justify-center text-white shadow-lg">
                  <MapPin className="w-5 h-5" />
                </span>
              </div>
            </div>
            
            {/* Selected Station Card */}
            <div className="absolute bottom-8 left-8 right-8 p-6 rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border border-white/20">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h4 className="font-bold text-zinc-900">Premium Tech Center</h4>
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                    <span>4.9 (2k+ reviews)</span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-[10px] font-bold uppercase tracking-wider">Verified</div>
              </div>
              <button className="w-full py-3 rounded-2xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Truck className="w-4 h-4" /> Pickup from this location
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
