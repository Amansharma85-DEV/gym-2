import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, Flame, TrendingUp, Quote } from 'lucide-react';
import { TRANSFORMATIONS } from '../data/gymData';

export default function Transformations({ onOpenFreeTrial }) {
  const [activeId, setActiveId] = useState(1);

  return (
    <section id="transformations" className="py-24 bg-[#070707] relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#C7FF00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#C7FF00] font-heading tracking-widest text-sm uppercase mb-2">
            <Trophy className="w-4 h-4 text-[#C7FF00]" /> REAL RESULTS & METRICS
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-wide leading-none">
            MEMBER <span className="text-[#C7FF00] neon-glow-text">TRANSFORMATIONS</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 font-normal">
            Proven proof of dedication. See how Youthmate Fitness members achieved life-changing body transformations.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TRANSFORMATIONS.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#121212] border border-white/10 hover:border-[#C7FF00] rounded-3xl p-6 transition-all hover:shadow-[0_0_30px_rgba(199,255,0,0.2)] flex flex-col justify-between"
            >
              <div>
                {/* Header Category & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#C7FF00] font-heading text-xl tracking-wider uppercase">
                    {item.category}
                  </span>
                  <span className="bg-[#C7FF00]/20 text-[#C7FF00] text-xs font-bold px-3 py-1 rounded-full border border-[#C7FF00]/40 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> {item.stats}
                  </span>
                </div>

                {/* Before & After Image Comparison Pair */}
                <div className="grid grid-cols-2 gap-3 mb-6 relative rounded-2xl overflow-hidden border border-white/10">
                  <div className="relative h-56">
                    <img
                      src={item.beforeImg}
                      alt={`${item.name} Before`}
                      className="w-full h-full object-cover filter grayscale contrast-125"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/80 text-gray-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      BEFORE
                    </span>
                  </div>
                  <div className="relative h-56">
                    <img
                      src={item.afterImg}
                      alt={`${item.name} After`}
                      className="w-full h-full object-cover filter contrast-110"
                    />
                    <span className="absolute bottom-2 right-2 bg-[#C7FF00] text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      AFTER
                    </span>
                  </div>
                </div>

                {/* Quote & Name */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-[#C7FF00]/20 absolute -top-3 -left-2" />
                  <p className="text-gray-300 text-sm italic relative z-10 pl-4 font-normal">
                    "{item.quote}"
                  </p>
                  <h4 className="font-heading text-2xl text-white mt-3 pl-4 tracking-wide">
                    — {item.name}
                  </h4>
                </div>
              </div>

              {/* Start Your Transformation Button */}
              <button
                onClick={onOpenFreeTrial}
                className="w-full bg-white/5 hover:bg-[#C7FF00] text-white hover:text-black font-heading text-lg tracking-wider py-3 rounded-xl border border-white/10 hover:border-[#C7FF00] transition-all"
              >
                START YOUR STORY
              </button>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
