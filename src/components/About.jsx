import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Play, Sparkles, MapPin } from 'lucide-react';
import { GYM_INFO, ABOUT_FEATURES } from '../data/gymData';
import sprinterImg from '../assets/about_sprinter.jpg';

export default function About({ onOpenFreeTrial }) {
  return (
    <section id="about" className="py-24 bg-[#0B0B0B] relative overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C7FF00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Large Image with Sprinter Neon Slash */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-[20px] overflow-hidden border border-[#C7FF00]/40 shadow-[0_0_30px_rgba(0,0,0,0.8)] group">
              <img
                src={sprinterImg}
                alt="Youthmate Fitness Athletic Training Kakrola"
                className="w-full h-[450px] sm:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Central Play Badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={onOpenFreeTrial}
                  className="w-20 h-20 rounded-full bg-[#C7FF00] text-black flex items-center justify-center shadow-[0_0_30px_rgba(199,255,0,0.8)] hover:scale-110 transition-transform"
                >
                  <Play className="w-8 h-8 fill-black ml-1" />
                </button>
              </div>

              {/* Location Tag Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/85 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[#C7FF00] font-heading tracking-widest text-xs uppercase flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> Kakrola, Delhi
                  </span>
                  <p className="text-white text-sm font-semibold mt-0.5">
                    2nd Floor, Raju Extension, Sector 15 Dwarka
                  </p>
                </div>
                <div className="bg-[#C7FF00]/20 text-[#C7FF00] text-xs font-bold px-3 py-1.5 rounded-full border border-[#C7FF00]/40">
                  OPEN DAILY
                </div>
              </div>
            </div>

            {/* Accent Decorative Frame Box */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[#C7FF00]/20 rounded-3xl -z-10 hidden sm:block" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 text-[#C7FF00] font-heading tracking-widest text-sm uppercase mb-3">
              <Sparkles className="w-4 h-4" /> ABOUT YOUTHMATE FITNESS
            </div>

            <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-wide leading-none mb-6">
              BUILT ON PASSION. <br />
              <span className="text-[#C7FF00] neon-glow-text">DRIVEN BY RESULTS.</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed font-normal">
              {GYM_INFO.aboutParagraph}
            </p>

            {/* Checklist Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {ABOUT_FEATURES.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-[#141414] border border-white/5 p-3 rounded-xl hover:border-[#C7FF00]/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#C7FF00] shrink-0" />
                  <span className="text-sm font-semibold text-gray-200">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#why-us"
                className="bg-[#C7FF00] text-black font-heading text-xl tracking-wider px-8 py-3.5 rounded-xl shadow-[0_0_20px_rgba(199,255,0,0.3)] hover:bg-[#d6ff33] hover:shadow-[0_0_30px_rgba(199,255,0,0.6)] transition-all"
              >
                LEARN MORE
              </a>
              <button
                onClick={onOpenFreeTrial}
                className="bg-transparent border border-white/20 text-white hover:border-[#C7FF00] font-heading text-xl tracking-wider px-8 py-3.5 rounded-xl hover:bg-white/5 transition-all"
              >
                BOOK TOUR
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
