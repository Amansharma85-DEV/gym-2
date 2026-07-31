import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell, Sparkles, PhoneCall, MessageCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

// Custom Brand SVGs
const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
  </svg>
);

export default function Navbar({ onOpenFreeTrial }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'programs', 'why-us', 'membership', 'trainers', 'transformations', 'gallery', 'testimonials', 'bmi', 'faq', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Membership', href: '#membership' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0B]/95 backdrop-blur-md py-3 border-b border-[#C7FF00]/30 shadow-[0_10px_35px_rgba(0,0,0,0.9)]'
            : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo (10-15% Larger) */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-black border-2 border-[#C7FF00] flex items-center justify-center shadow-[0_0_20px_rgba(199,255,0,0.5)] group-hover:scale-105 transition-transform">
                <Dumbbell className="w-6 h-6 text-[#C7FF00] -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-3xl sm:text-4xl text-white tracking-wider leading-none flex items-center gap-1">
                  YOUTHMATE <span className="text-[#C7FF00] neon-glow-text">FITNESS</span>
                </span>
                <span className="text-[10px] tracking-[0.22em] text-gray-400 font-semibold uppercase leading-tight hidden sm:block">
                  Kakrola • Dwarka Sector 15
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 text-sm font-semibold tracking-wide transition-all rounded-lg relative ${
                      isActive
                        ? 'text-[#C7FF00]'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#C7FF00] shadow-[0_0_10px_#C7FF00]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="hidden xl:flex items-center gap-2 text-gray-300 hover:text-[#C7FF00] text-xs font-semibold uppercase transition-colors mr-2"
              >
                <PhoneCall className="w-4 h-4 text-[#C7FF00]" />
                {GYM_INFO.phone}
              </a>

              {/* Free Trial Button with Pulsing Glow Animation */}
              <button
                onClick={onOpenFreeTrial}
                className="relative group border-2 border-[#C7FF00] bg-black/60 hover:bg-[#C7FF00] text-[#C7FF00] hover:text-black font-heading text-base sm:text-lg tracking-wider px-4 sm:px-6 py-2 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(199,255,0,0.35)] hover:shadow-[0_0_30px_rgba(199,255,0,0.75)] active:scale-95 flex items-center gap-1.5 animate-pulse-glow"
              >
                <Sparkles className="w-4 h-4 fill-current" />
                <span>FREE TRIAL</span>
              </button>

              {/* Hamburger Button (Slightly Larger for Easy Tapping) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-12 h-12 rounded-xl text-white hover:text-[#C7FF00] hover:bg-white/5 border border-white/15 flex items-center justify-center transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#C7FF00]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-[#0E0E0E] border-l border-[#C7FF00]/30 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-black border-2 border-[#C7FF00] flex items-center justify-center text-[#C7FF00]">
                      <Dumbbell className="w-5 h-5 -rotate-45" />
                    </div>
                    <span className="font-heading text-2xl text-white">YOUTHMATE</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-xl text-gray-400 hover:text-white bg-white/5 border border-white/10 flex items-center justify-center"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col space-y-1.5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 text-xl font-heading tracking-wider text-gray-200 hover:text-[#C7FF00] hover:bg-white/5 rounded-2xl transition-all flex items-center justify-between min-h-[48px]"
                    >
                      {link.name}
                      <span className="text-[#C7FF00]/40 text-xs">→</span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3 mt-6">
                <a
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-heading text-lg tracking-wider py-3.5 rounded-2xl flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <PhoneCall className="w-4 h-4 text-[#C7FF00]" />
                  CALL NOW: {GYM_INFO.phone}
                </a>

                <a
                  href={`https://wa.me/${GYM_INFO.whatsapp}?text=Hi%20Youthmate%20Fitness,%20I%20want%20to%20know%20more%20about%20membership.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 font-heading text-lg tracking-wider py-3.5 rounded-2xl flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <MessageCircle className="w-5 h-5 fill-emerald-500/20" />
                  WHATSAPP CHAT
                </a>

                <div className="flex items-center justify-center gap-4 pt-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full bg-[#181818] border border-white/10 text-white hover:text-[#C7FF00] flex items-center justify-center"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full bg-[#181818] border border-white/10 text-white hover:text-[#C7FF00] flex items-center justify-center"
                    aria-label="Facebook"
                  >
                    <FacebookIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
