import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PhoneCall, ArrowRight } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function CtaBanner({ onOpenFreeTrial }) {
  return (
    <section className="py-20 bg-[#070707] relative overflow-hidden border-t border-b border-[#C7FF00]/30">
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 bg-dark-gradient opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(#C7FF00_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      {/* Glowing Neon Accents */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#C7FF00]/10 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#121212] border border-[#C7FF00]/40 px-4 py-1.5 rounded-full mb-6 shadow-[0_0_15px_rgba(199,255,0,0.3)]">
            <Sparkles className="w-4 h-4 text-[#C7FF00]" />
            <span className="text-[#C7FF00] font-heading tracking-widest text-sm uppercase">
              NO EXCUSES. START TODAY.
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-7xl text-white tracking-tight leading-none mb-6">
            READY TO <span className="text-[#C7FF00] neon-glow-text">TRANSFORM YOUR LIFE?</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            Join Youthmate Fitness today and begin your fitness journey with expert guidance, modern equipment, locker facilities, and a supportive family atmosphere in Kakrola.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenFreeTrial}
              className="w-full sm:w-auto bg-[#C7FF00] text-black font-heading text-2xl tracking-wider px-10 py-4 rounded-xl shadow-[0_0_30px_rgba(199,255,0,0.5)] hover:bg-[#d6ff33] hover:shadow-[0_0_40px_rgba(199,255,0,0.8)] transition-all flex items-center justify-center gap-2 group"
            >
              BOOK FREE TRIAL
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`tel:${GYM_INFO.phoneRaw}`}
              className="w-full sm:w-auto bg-transparent border-2 border-white/20 hover:border-[#C7FF00] text-white font-heading text-2xl tracking-wider px-10 py-4 rounded-xl hover:bg-white/5 transition-all text-center flex items-center justify-center gap-2.5"
            >
              <PhoneCall className="w-5 h-5 text-[#C7FF00]" />
              CALL NOW: {GYM_INFO.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
