import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles, Send, Phone, User, Calendar, Target } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FreeTrialModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'weight-loss',
    slot: 'morning'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Trigger confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C7FF00', '#ffffff', '#a2db00']
    });

    setTimeout(() => {
      // Auto close after 3s
      // setIsSubmitted(false);
      // onClose();
    }, 4000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg bg-[#121212] border border-[#C7FF00]/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(199,255,0,0.25)] text-white overflow-hidden z-10"
        >
          {/* Close button */}
          <button
            onClick={handleReset}
            className="absolute top-4 right-4 text-gray-400 hover:text-[#C7FF00] transition-colors p-2 rounded-full hover:bg-white/5"
          >
            <X className="w-6 h-6" />
          </button>

          {!isSubmitted ? (
            <div>
              <div className="flex items-center gap-2 text-[#C7FF00] font-semibold text-xs tracking-widest uppercase mb-2">
                <Sparkles className="w-4 h-4" /> Exclusive Offer
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl text-white tracking-wide mb-2">
                CLAIM YOUR <span className="text-[#C7FF00]">FREE TRIAL PASS</span>
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Get 1-Day free VIP access to Youthmate Fitness. Test our modern equipment & consult our top certified trainers.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-300 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kajal Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#C7FF00] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-300 mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#C7FF00] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-300 mb-1">Fitness Goal</label>
                    <div className="relative">
                      <Target className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg py-2.5 pl-9 pr-3 text-white focus:outline-none focus:border-[#C7FF00] transition-colors text-sm"
                      >
                        <option value="weight-loss">Weight Loss</option>
                        <option value="muscle-gain">Muscle Building</option>
                        <option value="strength">Strength Training</option>
                        <option value="general">General Fitness</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-300 mb-1">Preferred Slot</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                      <select
                        value={formData.slot}
                        onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg py-2.5 pl-9 pr-3 text-white focus:outline-none focus:border-[#C7FF00] transition-colors text-sm"
                      >
                        <option value="morning">Morning (6 AM - 11 AM)</option>
                        <option value="afternoon">Afternoon (11 AM - 4 PM)</option>
                        <option value="evening">Evening (4 PM - 11 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-[#C7FF00] text-black font-heading tracking-wider text-xl py-3 rounded-lg hover:bg-[#d6ff33] transition-all transform active:scale-95 shadow-[0_0_20px_rgba(199,255,0,0.4)] flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" /> CONFIRM FREE TRIAL
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="w-20 h-20 bg-[#C7FF00]/20 border-2 border-[#C7FF00] rounded-full flex items-center justify-center mx-auto mb-4 text-[#C7FF00]"
              >
                <CheckCircle2 className="w-12 h-12" />
              </motion.div>
              <h3 className="font-heading text-3xl text-white mb-2">PASS GENERATED!</h3>
              <p className="text-gray-300 text-sm mb-4">
                Thank you <span className="text-[#C7FF00] font-semibold">{formData.name}</span>! Your 1-Day Free Trial pass has been sent to <span className="text-white font-medium">{formData.phone}</span>.
              </p>
              <p className="text-gray-400 text-xs mb-6">
                Show this pass at our reception (2nd Floor, Raju Extension, Kakrola, Dwarka) to activate your workout session.
              </p>
              <button
                onClick={handleReset}
                className="bg-white/10 hover:bg-white/20 text-white font-medium text-sm py-2.5 px-6 rounded-lg transition-colors"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
