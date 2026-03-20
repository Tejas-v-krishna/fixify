"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

const appliances = [
  {
    title: "Electronics",
    desc: "Phones, Laptops, Devices and all your smart gadgets.",
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=2070&auto=format&fit=crop",
    size: "col-span-1"
  },
  {
    title: "Home Appliances",
    desc: "AC, Washing Machine, Fridge and all household essentials.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    size: "col-span-1"
  },
  {
    title: "Furniture & Household Items",
    desc: "Restoration and repair for your home's most used items.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop",
    size: "col-span-1"
  },
  {
    title: "Shoes, Bags & Accessories",
    desc: "Premium cleaning and repair for your favorite wear.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop",
    size: "col-span-1"
  }
];

export function MajorAppliances() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-zinc-900 mb-4">
            We Repair <span className="text-blue-600">Almost Everything</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-4">
            If it's repairable, we'll handle it. From gadgets to furniture, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {appliances.map((app, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group overflow-hidden rounded-3xl bg-white shadow-lg h-[350px]"
            >
              <img 
                src={app.image} 
                alt={app.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{app.title}</h3>
                <p className="text-zinc-300 mb-6 max-w-xs">{app.desc}</p>
                {app.cta && (
                  <Button className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-full">
                    {app.cta} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
