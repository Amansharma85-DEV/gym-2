import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'Gym Interior', 'Equipment', 'Workouts'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-[#070707] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C7FF00] font-heading tracking-widest text-sm uppercase mb-2">
              <Sparkles className="w-4 h-4" /> FACILITY SHOWCASE
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-wide leading-none">
              GYM <span className="text-[#C7FF00] neon-glow-text">GALLERY</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-[#141414] p-1.5 rounded-xl border border-white/10 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-lg font-heading text-lg tracking-wider transition-all ${
                  activeFilter === cat
                    ? 'bg-[#C7FF00] text-black shadow-[0_0_15px_rgba(199,255,0,0.5)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxImage(item)}
                className="group relative h-72 rounded-3xl overflow-hidden border border-white/10 hover:border-[#C7FF00] cursor-pointer shadow-lg transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Lightbox Trigger Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 border border-[#C7FF00]/40 text-[#C7FF00] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[#C7FF00] text-xs font-bold uppercase tracking-widest block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-2xl text-white tracking-wide leading-none">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[85vh] bg-[#121212] rounded-3xl overflow-hidden border border-[#C7FF00]/40 shadow-2xl z-10 flex flex-col"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-20 bg-black/80 text-white hover:text-[#C7FF00] p-2.5 rounded-full border border-white/20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="max-w-full max-h-[75vh] object-contain"
                />
              </div>

              <div className="p-6 bg-[#121212] border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[#C7FF00] text-xs font-bold uppercase tracking-widest">
                    {lightboxImage.category}
                  </span>
                  <h3 className="font-heading text-3xl text-white">
                    {lightboxImage.title}
                  </h3>
                </div>
                <span className="text-gray-400 text-xs uppercase font-medium">Youthmate Fitness Facility</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
