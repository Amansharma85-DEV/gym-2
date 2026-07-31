import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Dumbbell, CreditCard, Phone, MessageCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function MobileBottomNav() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'programs', 'membership', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = [
    { id: 'home', name: 'Home', icon: Home, href: '#home' },
    { id: 'programs', name: 'Programs', icon: Dumbbell, href: '#programs' },
    { id: 'membership', name: 'Pricing', icon: CreditCard, href: '#membership' },
    { id: 'contact', name: 'Contact', icon: Phone, href: '#contact' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.95)] px-3 py-2 rounded-t-3xl">
      <div className="flex items-center justify-around max-w-md mx-auto">
        
        {items.map((item) => {
          const IconComp = item.icon;
          const isActive = activeTab === item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              className={`relative flex flex-col items-center justify-center min-h-[48px] px-3 flex-1 transition-colors ${
                isActive ? 'text-[#C7FF00]' : 'text-gray-400 hover:text-white'
              }`}
            >
              <IconComp className="w-5.5 h-5.5" />
              <span className="text-[11px] font-semibold uppercase tracking-wider mt-1">
                {item.name}
              </span>

              {/* Animated active dot indicator */}
              {isActive && (
                <motion.span
                  layoutId="mobileActiveDot"
                  className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-[#C7FF00] shadow-[0_0_8px_#C7FF00]"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </a>
          );
        })}

        {/* WhatsApp Direct Item */}
        <a
          href={`https://wa.me/${GYM_INFO.whatsapp}?text=Hi%20Youthmate%20Fitness,%20I%20want%20to%20know%20more%20about%20membership.`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center text-gray-400 hover:text-emerald-400 min-h-[48px] px-3 flex-1 transition-colors"
        >
          <MessageCircle className="w-5.5 h-5.5" />
          <span className="text-[11px] font-semibold uppercase tracking-wider mt-1">WhatsApp</span>
        </a>

      </div>
    </div>
  );
}
