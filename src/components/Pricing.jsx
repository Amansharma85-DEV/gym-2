import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Check, Sparkles } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/gymData';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Pricing({ onOpenFreeTrial }) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="membership" className="py-20 sm:py-24 bg-[#070707] relative overflow-hidden">
      {/* Background Neon Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C7FF00]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-[#C7FF00] font-heading tracking-widest text-xs sm:text-sm uppercase mb-2">
            <Sparkles className="w-4 h-4" /> TRANSPARENT MEMBERSHIP
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-wide leading-none">
            MEMBERSHIP <span className="text-[#C7FF00] neon-glow-text">PRICING</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg mt-3 font-normal">
            Choose the membership tier that fits your ambition. No hidden charges, zero commitment fees.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <span className={`text-xs sm:text-sm font-semibold uppercase ${!isAnnual ? 'text-[#C7FF00]' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-[#1E1E1E] border border-gray-700 rounded-full p-1 transition-colors focus:outline-none focus:border-[#C7FF00]"
            >
              <motion.div
                animate={{ x: isAnnual ? 28 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="w-5 h-5 rounded-full bg-[#C7FF00] shadow-[0_0_10px_#C7FF00]"
              />
            </button>
            <div className="flex items-center gap-1.5">
              <span className={`text-xs sm:text-sm font-semibold uppercase ${isAnnual ? 'text-[#C7FF00]' : 'text-gray-400'}`}>
                Annual
              </span>
              <span className="bg-[#C7FF00]/20 text-[#C7FF00] border border-[#C7FF00]/40 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                SAVE 20%
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Swiper Layout (<768px) */}
        <div className="block md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.1}
            centeredSlides={true}
            initialSlide={1}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {MEMBERSHIP_PLANS.map((plan) => {
              const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;

              return (
                <SwiperSlide key={plan.id} className="h-auto">
                  <div
                    className={`relative rounded-3xl p-6 flex flex-col justify-between h-full transition-all ${
                      plan.highlight
                        ? 'bg-[#121212] border-2 border-[#C7FF00] shadow-[0_0_35px_rgba(199,255,0,0.35)]'
                        : 'bg-[#0E0E0E] border border-white/10'
                    }`}
                  >
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#C7FF00] text-black font-heading text-xs uppercase px-3 py-0.5 rounded-full shadow-md">
                        {plan.badge}
                      </div>
                    )}

                    <div>
                      <h3 className="font-heading text-3xl text-white mt-1 mb-2">{plan.name}</h3>
                      <div className="flex items-baseline gap-1 my-4">
                        <span className="text-gray-400 text-xl font-bold">₹</span>
                        <span className="font-heading text-5xl text-white leading-none">{price}</span>
                        <span className="text-gray-400 text-xs font-medium">/ Month</span>
                      </div>
                      <ul className="space-y-3 my-6">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-200">
                            <Check className="w-4 h-4 text-[#C7FF00] shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={onOpenFreeTrial}
                      className={`w-full font-heading text-lg tracking-wider py-3.5 rounded-2xl transition-all ${
                        plan.highlight
                          ? 'bg-[#C7FF00] text-black shadow-[0_0_20px_rgba(199,255,0,0.5)]'
                          : 'bg-white/10 text-white hover:bg-[#C7FF00] hover:text-black'
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Desktop Grid Layout (>=768px) */}
        <div className="hidden md:grid grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {MEMBERSHIP_PLANS.map((plan) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-[#121212] border-2 border-[#C7FF00] shadow-[0_0_40px_rgba(199,255,0,0.35)] md:-translate-y-4 scale-105 z-20'
                    : 'bg-[#0E0E0E] border border-white/10 hover:border-white/30'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#C7FF00] text-black font-heading text-sm uppercase px-4 py-1 rounded-full shadow-[0_0_15px_rgba(199,255,0,0.6)] tracking-wider">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="font-heading text-3xl text-white tracking-wide mb-2">
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-1 my-6">
                    <span className="text-gray-400 text-2xl font-bold">₹</span>
                    <span className="font-heading text-5xl sm:text-6xl text-white tracking-tight leading-none">
                      {price}
                    </span>
                    <span className="text-gray-400 text-sm font-medium">/ Month</span>
                  </div>

                  <p className="text-gray-400 text-xs mb-6 uppercase tracking-wider font-semibold border-b border-white/10 pb-4">
                    {isAnnual ? 'Billed annually at ₹' + (parseInt(price) * 12) : 'Billed month-to-month'}
                  </p>

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-200">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          plan.highlight ? 'bg-[#C7FF00] text-black' : 'bg-white/10 text-[#C7FF00]'
                        }`}>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenFreeTrial}
                  className={`w-full font-heading text-xl tracking-wider py-3.5 rounded-2xl transition-all ${
                    plan.highlight
                      ? 'bg-[#C7FF00] text-black hover:bg-[#d6ff33] shadow-[0_0_20px_rgba(199,255,0,0.5)]'
                      : 'bg-white/10 hover:bg-[#C7FF00] text-white hover:text-black border border-white/10 hover:border-[#C7FF00]'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
