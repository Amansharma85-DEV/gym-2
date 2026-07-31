import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    goal: 'weight-loss',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Reset form after delay
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0B0B] relative overflow-hidden border-t border-white/5">
      {/* Glow background */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#C7FF00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#C7FF00] font-heading tracking-widest text-sm uppercase mb-2">
            <Sparkles className="w-4 h-4" /> VISIT OUR KAKROLA GYM
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-wide leading-none">
            GET IN <span className="text-[#C7FF00] neon-glow-text">TOUCH</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 font-normal">
            Have questions about our plans, timing, or trainers? Reach out directly or visit our 2nd floor facility.
          </p>
        </div>

        {/* Split Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#121212] border border-white/10 rounded-3xl p-8 space-y-6 shadow-xl">
              <h3 className="font-heading text-3xl text-white tracking-wide border-b border-white/10 pb-4">
                CONTACT INFORMATION
              </h3>

              {/* Address Item */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C7FF00]/10 border border-[#C7FF00]/40 flex items-center justify-center text-[#C7FF00] shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-xl text-white tracking-wide">LOCATION ADDRESS</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mt-1 font-normal">
                    {GYM_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C7FF00]/10 border border-[#C7FF00]/40 flex items-center justify-center text-[#C7FF00] shrink-0 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-xl text-white tracking-wide">DIRECT PHONE / WHATSAPP</h4>
                  <a
                    href={`tel:${GYM_INFO.phoneRaw}`}
                    className="text-[#C7FF00] font-bold text-lg hover:underline block mt-1"
                  >
                    {GYM_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Hours Item */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C7FF00]/10 border border-[#C7FF00]/40 flex items-center justify-center text-[#C7FF00] shrink-0 mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-xl text-white tracking-wide">WORKING HOURS</h4>
                  <p className="text-gray-300 text-sm mt-1 font-medium">
                    {GYM_INFO.hours}
                  </p>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C7FF00]/10 border border-[#C7FF00]/40 flex items-center justify-center text-[#C7FF00] shrink-0 mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-xl text-white tracking-wide">EMAIL SUPPORT</h4>
                  <a
                    href={`mailto:${GYM_INFO.email}`}
                    className="text-gray-300 text-sm hover:text-[#C7FF00] transition-colors mt-1 block"
                  >
                    {GYM_INFO.email}
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Location Badge */}
            <div className="bg-[#141414] border border-[#C7FF00]/30 rounded-2xl p-4 flex items-center justify-between">
              <span className="text-white text-xs font-semibold uppercase tracking-wider">
                Near Old Palam Road • Dwarka Sector 15
              </span>
              <a
                href="https://maps.google.com/?q=Youthmate+Fitness+Kakrola+Dwarka"
                target="_blank"
                rel="noreferrer"
                className="bg-[#C7FF00] text-black font-heading text-sm px-4 py-1.5 rounded-lg hover:bg-[#d6ff33]"
              >
                OPEN MAPS
              </a>
            </div>
          </div>

          {/* Right Column - Map & Contact Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Google Map Embed Frame */}
            <div className="w-full h-64 rounded-3xl overflow-hidden border border-white/10 shadow-xl relative">
              <iframe
                title="Youthmate Fitness Location Map"
                src={GYM_INFO.googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) invert(0.9)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Form */}
            <div className="bg-[#121212] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="font-heading text-3xl text-white tracking-wide mb-6">
                SEND US A MESSAGE
              </h3>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-300 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kajal Dass"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-gray-700 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#C7FF00] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-300 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 92119 77754"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-gray-700 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#C7FF00] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="kajal@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-gray-700 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#C7FF00] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-300 mb-1">Fitness Goal</label>
                      <select
                        value={formState.goal}
                        onChange={(e) => setFormState({ ...formState, goal: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-gray-700 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#C7FF00] transition-colors"
                      >
                        <option value="weight-loss">Weight Loss</option>
                        <option value="muscle-building">Muscle Building</option>
                        <option value="strength">Strength Training</option>
                        <option value="personal-training">Personal Training</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-300 mb-1">Message / Inquiry</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Tell us about your fitness goals or questions..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-gray-700 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#C7FF00] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C7FF00] text-black font-heading text-xl tracking-wider py-3.5 rounded-xl shadow-[0_0_20px_rgba(199,255,0,0.4)] hover:bg-[#d6ff33] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" /> SUBMIT INQUIRY
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#C7FF00]/20 border-2 border-[#C7FF00] flex items-center justify-center text-[#C7FF00] mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-heading text-3xl text-white">MESSAGE SENT SUCCESSFULLY!</h4>
                  <p className="text-gray-300 text-sm">
                    Thank you <span className="text-[#C7FF00] font-semibold">{formState.name}</span>. Our desk team will call you back at <span className="text-white font-medium">{formState.phone}</span> shortly.
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
