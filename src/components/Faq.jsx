import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';
import { FAQS } from '../data/gymData';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(
    faq => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
           faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-[#070707] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#C7FF00] font-heading tracking-widest text-sm uppercase mb-2">
            <HelpCircle className="w-4 h-4" /> GOT QUESTIONS?
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-wide leading-none">
            FREQUENTLY ASKED <span className="text-[#C7FF00] neon-glow-text">QUESTIONS</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 font-normal">
            Everything you need to know about membership, trainers, lockers, timings, and training plans at Youthmate Fitness.
          </p>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto mt-8">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions (e.g. locker, timing, trial)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#141414] border border-gray-700 focus:border-[#C7FF00] rounded-xl py-3 pl-12 pr-4 text-white text-sm placeholder-gray-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#121212] border-[#C7FF00]/50 shadow-[0_0_20px_rgba(199,255,0,0.15)]'
                      : 'bg-[#0E0E0E] border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading text-xl sm:text-2xl text-white tracking-wide hover:text-[#C7FF00] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#C7FF00] text-black border-[#C7FF00] rotate-180'
                        : 'bg-white/5 text-gray-400 border-white/10'
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4 font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-gray-400 text-sm">
              No questions found matching "{searchQuery}". Call us directly at <strong>+91 92119 77754</strong>.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
