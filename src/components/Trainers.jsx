import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles } from 'lucide-react';
import { TRAINERS } from '../data/gymData';

// Custom Brand SVGs
const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
  </svg>
);

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-[#0B0B0B] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#C7FF00] font-heading tracking-widest text-sm uppercase mb-2">
            <Sparkles className="w-4 h-4" /> CERTIFIED FITNESS COACHES
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-wide leading-none">
            MEET OUR <span className="text-[#C7FF00] neon-glow-text">EXPERT TRAINERS</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 font-normal">
            Our team of certified professionals are here to push your limits, refine your posture, and guide your diet.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRAINERS.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#121212] border border-white/10 hover:border-[#C7FF00]/60 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(0,0,0,0.9),0_0_20px_rgba(199,255,0,0.2)] flex flex-col justify-between"
            >
              {/* Photo Container */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />

                {/* Experience Badge */}
                <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-[#C7FF00]/30 text-[#C7FF00] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" /> {trainer.experience}
                </span>

                {/* Hover Social Icons Overlay */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={trainer.socials.instagram}
                    className="w-10 h-10 rounded-full bg-black/80 border border-[#C7FF00]/40 text-white hover:text-[#C7FF00] hover:border-[#C7FF00] flex items-center justify-center transition-colors shadow-md"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href={trainer.socials.facebook}
                    className="w-10 h-10 rounded-full bg-black/80 border border-[#C7FF00]/40 text-white hover:text-[#C7FF00] hover:border-[#C7FF00] flex items-center justify-center transition-colors shadow-md"
                    aria-label="Facebook"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href={trainer.socials.linkedin}
                    className="w-10 h-10 rounded-full bg-black/80 border border-[#C7FF00]/40 text-white hover:text-[#C7FF00] hover:border-[#C7FF00] flex items-center justify-center transition-colors shadow-md"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="font-heading text-2xl text-white tracking-wide group-hover:text-[#C7FF00] transition-colors">
                  {trainer.name}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C7FF00] block mb-3">
                  {trainer.role}
                </span>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-normal">
                  {trainer.bio}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
