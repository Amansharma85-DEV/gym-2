import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import { ArrowRight, Trophy, ShieldCheck, Star, ChevronDown, CheckCircle2, MapPin, Users, Award } from 'lucide-react';
import { GYM_INFO, STATS } from '../data/gymData';
import heroAthleteImg from '../assets/hero_athlete.jpg';

// Custom Google G Icon SVG
const GoogleGIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.92l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.29v3.15C3.26 21.3 7.36 24 12 24z"/>
    <path fill="#FBBC05" d="M5.28 14.26c-.25-.72-.38-1.49-.38-2.26s.13-1.54.38-2.26V6.59H1.29B11.98 11.98 0 0 0 0 12c0 1.92.45 3.74 1.29 5.41l3.99-3.15z"/>
    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.7 1.29 6.59l3.99 3.15c.95-2.83 3.6-4.99 6.72-4.99z"/>
  </svg>
);

export default function Hero({ onOpenFreeTrial }) {
  const quickFeatures = [
    "Certified Trainers",
    "Modern Equipment",
    "Free Trial Pass",
    "Locker Facility"
  ];

  return (
    <section id="home" className="relative min-h-[100vh] flex flex-col justify-between pt-28 sm:pt-36 pb-20 overflow-hidden bg-[#070707]">
      {/* Background Dark Mesh */}
      <div className="absolute inset-0 bg-dark-gradient opacity-95" />

      {/* Softer Radial Neon Glow Backdrop */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[550px] h-[550px] bg-[#C7FF00]/06 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C7FF00]/04 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtler Dot Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#C7FF00_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          >
            {/* Hero Badge with Location Pin */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-[#121212] border border-[#C7FF00]/30 px-4.5 py-2.5 rounded-full w-fit mx-auto lg:mx-0 mb-6 shadow-[0_0_12px_rgba(199,255,0,0.15)]"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C7FF00]" />
              <span className="text-[#C7FF00] font-heading tracking-widest text-xs sm:text-sm uppercase">
                🏆 Best Fitness Centre in Kakrola, Dwarka
              </span>
            </motion.div>

            {/* Main Heading Hierarchy */}
            <h1 className="font-heading tracking-tight leading-[1.02] mb-6">
              <span className="block text-4xl sm:text-6xl xl:text-7xl text-white">
                TRANSFORM YOUR BODY
              </span>
              <span className="block text-5xl sm:text-7xl xl:text-8xl text-[#C7FF00] neon-glow-text mt-1">
                TRANSFORM YOUR LIFE
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-gray-300 text-[15px] sm:text-base max-w-lg mx-auto lg:mx-0 mb-10 font-normal leading-[1.7]">
              Join Youthmate Fitness with certified trainers, modern resistance machinery, functional turf track, and custom workout plans designed for your transformation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 mb-8">
              <button
                onClick={onOpenFreeTrial}
                className="w-full sm:w-auto bg-[#C7FF00] text-black font-heading text-2xl tracking-wider px-8 py-3.5 rounded-xl shadow-[0_0_20px_rgba(199,255,0,0.4)] hover:bg-[#d6ff33] hover:-translate-y-0.5 transition-all active:scale-95 flex items-center justify-center gap-2 min-h-[48px]"
              >
                JOIN NOW
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenFreeTrial}
                className="w-full sm:w-auto bg-[#121212] hover:bg-[#181818] border border-[#C7FF00]/40 text-white font-heading text-2xl tracking-wider px-8 py-3.5 rounded-xl transition-all shadow-[0_0_12px_rgba(199,255,0,0.15)] flex items-center justify-center gap-2.5 min-h-[48px] group"
              >
                <span>FREE TRIAL</span>
                <ArrowRight className="w-4 h-4 text-[#C7FF00] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Feature Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mb-6">
              {quickFeatures.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#0E0E0E] border border-white/10 px-4 py-2 rounded-xl text-xs font-semibold text-gray-200 shadow-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C7FF00]" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Immediate Trust Indicator Row */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs font-medium text-gray-400 pt-2 border-t border-white/5 w-fit mx-auto lg:mx-0">
              <span className="text-amber-400 font-semibold flex items-center gap-1">⭐ 5.0 Google Rating</span>
              <span>•</span>
              <span className="text-gray-300 font-semibold flex items-center gap-1"><Users className="w-3.5 h-3.5 text-[#C7FF00]" /> 450+ Members</span>
              <span>•</span>
              <span className="text-gray-300 font-semibold flex items-center gap-1"><Award className="w-3.5 h-3.5 text-[#C7FF00]" /> 8+ Yrs Experience</span>
            </div>

          </motion.div>

          {/* Right Column Athlete Image with Custom Neon Power Burst Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center my-4 lg:my-0 animate-float"
          >
            {/* Soft Glow behind visual */}
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-[#C7FF00]/15 blur-3xl pointer-events-none" />

            {/* Main Athlete Card with Custom Photo */}
            <div className="relative rounded-[20px] overflow-hidden border border-[#C7FF00]/40 bg-[#121212] shadow-[0_25px_50px_rgba(0,0,0,0.9)] group max-w-md w-full">
              <img
                src={heroAthleteImg}
                alt="Youthmate Fitness Athlete Bicep Curl"
                className="w-full h-[420px] sm:h-[520px] object-cover object-center filter brightness-100 contrast-110 group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* Enhanced Review Badge */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 bg-black/90 backdrop-blur-md border border-[#C7FF00]/40 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                  <GoogleGIcon />
                </div>
                <div>
                  <div className="flex items-center text-amber-400 text-xs mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <div className="text-white font-bold text-xs">5.0 Google Rating</div>
                  <div className="text-[10px] text-gray-400 font-medium">450+ Happy Members</div>
                </div>
              </div>

              {/* Bottom Location Badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 bg-black/85 backdrop-blur-md border border-white/15 p-4 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C7FF00]/20 border border-[#C7FF00] flex items-center justify-center text-[#C7FF00] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl text-white tracking-wide leading-none">YOUTHMATE FITNESS</h4>
                    <p className="text-gray-400 text-[11px] mt-1">2nd Floor, Raju Extension, Kakrola, Dwarka</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Animated Statistics Grid */}
        <div className="mt-14 pt-8 border-t border-white/10 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-card bg-[#121212]/80 border border-white/10 rounded-2xl p-4 text-center hover:border-[#C7FF00]/30 transition-all shadow-lg hover:-translate-y-1.5"
              >
                <div className="font-heading text-3xl sm:text-4xl text-[#C7FF00] flex items-center justify-center gap-0.5">
                  <AnimatedCounter end={stat.count} suffix={stat.suffix} />
                </div>
                <span className="text-xs text-gray-300 font-medium tracking-wide mt-1 block">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Animated Scroll Down Indicator */}
      <a
        href="#about"
        className="relative z-10 mx-auto mt-8 text-gray-400 hover:text-[#C7FF00] flex flex-col items-center gap-1 transition-colors group"
      >
        <span className="text-[10px] tracking-widest uppercase font-semibold">↓ Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-[#C7FF00]" />
      </a>
    </section>
  );
}
