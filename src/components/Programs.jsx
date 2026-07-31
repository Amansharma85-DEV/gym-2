import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Clock, Zap, ArrowRight, Sparkles, X, Check } from 'lucide-react';
import { PROGRAMS } from '../data/gymData';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Programs({ onOpenFreeTrial }) {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProgram, setSelectedProgram] = useState(null);

  const categories = ['All', 'Strength', 'Cardio', 'Specialized'];

  const filteredPrograms = activeTab === 'All'
    ? PROGRAMS
    : PROGRAMS.filter(p => p.category === activeTab);

  return (
    <section id="programs" className="py-20 sm:py-24 bg-[#0B0B0B] relative overflow-hidden border-t border-white/5">
      {/* Glow background */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C7FF00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C7FF00] font-heading tracking-widest text-xs sm:text-sm uppercase mb-2">
              <Sparkles className="w-4 h-4" /> TAILORED WORKOUT REGIMENS
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-wide leading-none">
              OUR FITNESS <span className="text-[#C7FF00] neon-glow-text">PROGRAMS</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 bg-[#141414] p-1.5 rounded-2xl border border-white/10 w-fit mx-auto sm:mx-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 sm:px-5 py-2 rounded-xl font-heading text-base sm:text-lg tracking-wider transition-all min-h-[44px] ${
                  activeTab === cat
                    ? 'bg-[#C7FF00] text-black shadow-[0_0_15px_rgba(199,255,0,0.5)]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Swipeable Swiper Carousel (<768px) */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.15}
            centeredSlides={false}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="pb-12"
          >
            {filteredPrograms.map((program) => (
              <SwiperSlide key={program.id} className="h-auto">
                <div className="bg-[#121212] border border-white/10 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between h-full">
                  <div className="relative h-48">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-black/80 text-[#C7FF00] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                      {program.category}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-2xl text-white mb-2">{program.title}</h3>
                      <p className="text-gray-400 text-xs line-clamp-3 mb-4">{program.description}</p>
                    </div>
                    <button
                      onClick={() => setSelectedProgram(program)}
                      className="w-full bg-[#C7FF00] text-black font-heading text-base py-3 rounded-xl flex items-center justify-center gap-1.5"
                    >
                      LEARN MORE <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid Layout (>=1024px) */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {filteredPrograms.map((program) => (
            <motion.div
              key={program.id}
              layout
              className="group relative bg-[#121212] border border-white/10 hover:border-[#C7FF00]/60 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(0,0,0,0.9),0_0_25px_rgba(199,255,0,0.2)] flex flex-col justify-between"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-white/10 text-[#C7FF00] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {program.category}
                </span>
                <span className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-[#C7FF00]/30 text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Zap className="w-3 h-3 text-[#C7FF00]" /> {program.intensity}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-2xl text-white tracking-wide mb-2 group-hover:text-[#C7FF00] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed font-normal">
                    {program.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-gray-300 text-xs font-medium mb-4 pb-4 border-b border-white/10">
                    <Clock className="w-3.5 h-3.5 text-[#C7FF00]" />
                    <span>{program.duration}</span>
                  </div>

                  <button
                    onClick={() => setSelectedProgram(program)}
                    className="w-full bg-white/5 hover:bg-[#C7FF00] text-white hover:text-black font-heading tracking-wider py-2.5 rounded-xl border border-white/10 hover:border-[#C7FF00] transition-all flex items-center justify-center gap-2 group/btn text-sm"
                  >
                    LEARN MORE
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Program Detail Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProgram(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-xl bg-[#121212] border border-[#C7FF00]/50 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <div className="relative h-56">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-transparent" />
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-4 bg-black/70 text-white hover:text-[#C7FF00] p-2 rounded-full border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-[#C7FF00] font-bold text-xs uppercase tracking-widest bg-black/80 px-3 py-1 rounded-full border border-[#C7FF00]/40">
                    {selectedProgram.category} • {selectedProgram.intensity} Intensity
                  </span>
                  <h3 className="font-heading text-3xl text-white mt-2 leading-none">
                    {selectedProgram.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-normal">
                  {selectedProgram.description}
                </p>

                <div className="space-y-3 mb-6 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 text-sm text-gray-200">
                    <Check className="w-4 h-4 text-[#C7FF00]" />
                    <span>Duration: <strong>{selectedProgram.duration}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-200">
                    <Check className="w-4 h-4 text-[#C7FF00]" />
                    <span>Certified Personal Trainer Supervision</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-200">
                    <Check className="w-4 h-4 text-[#C7FF00]" />
                    <span>Tailored Progressive Overload Routine</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setSelectedProgram(null);
                      onOpenFreeTrial();
                    }}
                    className="w-full bg-[#C7FF00] text-black font-heading text-xl py-3.5 rounded-2xl shadow-[0_0_20px_rgba(199,255,0,0.4)] hover:bg-[#d6ff33]"
                  >
                    START THIS PROGRAM
                  </button>
                  <button
                    onClick={() => setSelectedProgram(null)}
                    className="w-full sm:w-auto px-6 bg-white/10 hover:bg-white/20 text-white font-medium text-sm py-3 rounded-2xl"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
