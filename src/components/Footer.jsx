import React from 'react';
import { Dumbbell, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

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

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer() {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Fitness Programs', href: '#programs' },
    { name: 'Membership Plans', href: '#membership' },
    { name: 'Our Trainers', href: '#trainers' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Facility Gallery', href: '#gallery' },
    { name: 'BMI Calculator', href: '#bmi' },
    { name: 'Contact & Map', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050505] text-white pt-16 pb-24 lg:pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-black border border-[#C7FF00] flex items-center justify-center text-[#C7FF00] shadow-[0_0_15px_rgba(199,255,0,0.4)]">
                <Dumbbell className="w-6 h-6 -rotate-45" />
              </div>
              <span className="font-heading text-3xl text-white tracking-wider">
                YOUTHMATE <span className="text-[#C7FF00]">FITNESS</span>
              </span>
            </a>

            <p className="text-gray-400 text-sm leading-relaxed font-normal pr-4">
              {GYM_INFO.tagline} Youthmate Fitness is Kakrola, Dwarka's premier luxury gym offering state-of-the-art resistance machinery, certified coaching, and a motivating community.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#121212] border border-white/10 text-white hover:text-[#C7FF00] hover:border-[#C7FF00] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#121212] border border-white/10 text-white hover:text-[#C7FF00] hover:border-[#C7FF00] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#121212] border border-white/10 text-white hover:text-[#C7FF00] hover:border-[#C7FF00] flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-2xl text-white tracking-wide border-b border-[#C7FF00]/30 pb-2 w-fit">
              QUICK NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-[#C7FF00] text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#C7FF00]" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Location & Contact Info Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-2xl text-white tracking-wide border-b border-[#C7FF00]/30 pb-2 w-fit">
              GYM ADDRESS
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C7FF00] shrink-0 mt-1" />
                <span>{GYM_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C7FF00] shrink-0" />
                <a href={`tel:${GYM_INFO.phoneRaw}`} className="hover:text-[#C7FF00]">
                  {GYM_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C7FF00] shrink-0" />
                <span>{GYM_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Youthmate Fitness. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Designed for Peak Performance</span>
            <span>•</span>
            <span>Kakrola • Dwarka • Delhi</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
