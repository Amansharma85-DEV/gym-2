import React from 'react';
import { Trophy, Star, Award, Dumbbell, ShieldCheck } from 'lucide-react';

export default function TrustStrip() {
  const trustItems = [
    { icon: Trophy, label: "Best Gym in Kakrola", detail: "Rated #1 Fitness Centre" },
    { icon: Star, label: "450+ Happy Members", detail: "5.0 ★ Google Rating" },
    { icon: Award, label: "Certified Trainers", detail: "Dedicated 1-on-1 Support" },
    { icon: Dumbbell, label: "Premium Equipment", detail: "State-of-the-Art Machines" },
  ];

  return (
    <section className="py-10 bg-[#0B0B0B] border-t border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className="bg-[#121212] border border-white/10 hover:border-[#C7FF00]/40 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 transition-all hover:-translate-y-1 shadow-md group"
              >
                <div className="w-11 h-11 rounded-xl bg-black border border-[#C7FF00]/40 flex items-center justify-center text-[#C7FF00] group-hover:bg-[#C7FF00] group-hover:text-black transition-colors shrink-0">
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-lg sm:text-xl text-white tracking-wide leading-tight group-hover:text-[#C7FF00] transition-colors">
                    {item.label}
                  </h4>
                  <span className="text-[11px] text-gray-400 font-medium block mt-0.5">
                    {item.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
