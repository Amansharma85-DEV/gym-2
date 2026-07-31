import React from 'react';
import { motion } from 'framer-motion';
import { Award, Dumbbell, Wallet, Target, Lock, Users, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/gymData';

const iconMap = {
  Award: Award,
  Dumbbell: Dumbbell,
  Wallet: Wallet,
  Target: Target,
  Lock: Lock,
  Users: Users,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-[#070707] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#C7FF00]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#C7FF00] font-heading tracking-widest text-sm uppercase mb-2">
            <Sparkles className="w-4 h-4" /> THE YOUTHMATE ADVANTAGE
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-wide leading-none">
            WHY CHOOSE <span className="text-[#C7FF00] neon-glow-text">YOUTHMATE FITNESS?</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 font-normal">
            Experience world-class gym facilities, expert guidance, and an unbeatable community vibe right here in Kakrola, Dwarka.
          </p>
        </div>

        {/* 6 Animated Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Dumbbell;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#121212] border border-white/10 hover:border-[#C7FF00] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(199,255,0,0.2)] overflow-hidden"
              >
                {/* Background Shimmer hover effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C7FF00]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                {/* Card Icon */}
                <div className="w-14 h-14 rounded-2xl bg-black border border-[#C7FF00]/40 flex items-center justify-center text-[#C7FF00] mb-6 group-hover:bg-[#C7FF00] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(199,255,0,0.6)] transition-all duration-300">
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl sm:text-3xl text-white tracking-wide mb-3 group-hover:text-[#C7FF00] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Bottom Border Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C7FF00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
