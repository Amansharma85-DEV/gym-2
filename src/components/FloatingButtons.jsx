import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function FloatingButtons() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      if (currentScroll > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-24 sm:bottom-10 right-6 sm:right-8 z-40 flex flex-col gap-5 items-end">
      
      {/* Floating WhatsApp Button (15-20px higher & farther from edge) */}
      <a
        href={`https://wa.me/${GYM_INFO.whatsapp}?text=Hi%20Youthmate%20Fitness,%20I%20want%20to%20know%20more%20about%20membership.`}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-transform hover:scale-110 group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="absolute right-16 bg-black/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-emerald-500/40">
          Chat on WhatsApp
        </span>
      </a>

      {/* Floating Direct Call Button */}
      <a
        href={`tel:${GYM_INFO.phoneRaw}`}
        className="w-14 h-14 rounded-full bg-[#121212] border-2 border-[#C7FF00]/60 text-[#C7FF00] hover:bg-[#C7FF00] hover:text-black flex items-center justify-center shadow-[0_0_20px_rgba(199,255,0,0.3)] transition-all hover:scale-110 group"
        aria-label="Call Youthmate Fitness"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-16 bg-black/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#C7FF00]/40">
          Call +91 92119 77754
        </span>
      </a>

      {/* Back To Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="relative w-14 h-14 rounded-full bg-[#0E0E0E] border border-white/20 text-white hover:text-[#C7FF00] hover:border-[#C7FF00] flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          aria-label="Back to top"
        >
          <svg className="absolute inset-0 w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="24"
              className="stroke-gray-800 fill-none"
              strokeWidth="3"
            />
            <circle
              cx="50%"
              cy="50%"
              r="24"
              className="stroke-[#C7FF00] fill-none transition-all duration-150"
              strokeWidth="3"
              strokeDasharray={150}
              strokeDashoffset={150 - (150 * scrollProgress) / 100}
            />
          </svg>
          <ArrowUp className="w-6 h-6 relative z-10" />
        </button>
      )}

    </div>
  );
}
