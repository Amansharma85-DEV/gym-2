import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS, GYM_INFO } from '../data/gymData';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0B0B0B] relative overflow-hidden border-t border-white/5">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#C7FF00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#C7FF00] font-heading tracking-widest text-sm uppercase mb-2">
            <Sparkles className="w-4 h-4" /> VERIFIED GOOGLE REVIEWS
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-wide leading-none">
            WHAT OUR <span className="text-[#C7FF00] neon-glow-text">MEMBERS SAY</span>
          </h2>

          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-3 bg-[#141414] border border-[#C7FF00]/40 px-6 py-2.5 rounded-full mt-6 shadow-[0_0_20px_rgba(199,255,0,0.2)]">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">{GYM_INFO.googleRating}</span>
            <span className="text-gray-400 text-sm border-l border-gray-700 pl-3">
              Based on {GYM_INFO.totalReviews} Google Reviews
            </span>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="px-2 sm:px-8">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            className="pb-16"
          >
            {TESTIMONIALS.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="bg-[#121212] border border-white/10 hover:border-[#C7FF00]/50 rounded-3xl p-8 h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(199,255,0,0.2)]">
                  <div>
                    {/* Stars */}
                    <div className="flex items-center text-amber-400 mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 italic font-normal">
                      "{item.review}"
                    </p>
                  </div>

                  {/* Profile info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#C7FF00]"
                    />
                    <div>
                      <h4 className="font-heading text-xl text-white tracking-wide">
                        {item.name}
                      </h4>
                      <span className="text-xs text-gray-400 font-medium block">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
