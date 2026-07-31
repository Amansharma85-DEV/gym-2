import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Sparkles, Activity, CheckCircle2, ArrowRight } from 'lucide-react';

export default function BmiCalculator({ onOpenFreeTrial }) {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(70);
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    
    let category = '';
    let color = '';
    let advice = '';
    let programRecommend = '';

    if (bmiValue < 18.5) {
      category = 'Underweight';
      color = 'text-amber-400';
      advice = 'Focus on progressive overload strength training and a structured protein-dense calorie surplus meal plan.';
      programRecommend = 'Muscle Building & Strength Training';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      category = 'Normal Weight (Optimal)';
      color = 'text-[#C7FF00]';
      advice = 'Excellent shape! Maintain your physical condition through high-intensity functional workouts & athletic conditioning.';
      programRecommend = 'CrossFit & Functional Turf Training';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      category = 'Overweight';
      color = 'text-orange-400';
      advice = 'Combine metabolic HIIT interval sessions with steady-state cardio zone work to shed body fat efficiently.';
      programRecommend = 'Weight Loss & HIIT Programs';
    } else {
      category = 'Obese';
      color = 'text-red-500';
      advice = 'Work closely with a 1-on-1 personal trainer to establish safe, low-impact exercise habits and macro control.';
      programRecommend = 'Personal Training & Guided Cardio';
    }

    setResult({
      score: bmiValue,
      category,
      color,
      advice,
      programRecommend
    });
  };

  return (
    <section id="bmi" className="py-24 bg-[#0B0B0B] relative overflow-hidden border-t border-white/5">
      {/* Glow background */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#C7FF00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#C7FF00] font-heading tracking-widest text-sm uppercase mb-2">
            <Calculator className="w-4 h-4" /> BODY COMPOSITION METRICS
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-wide leading-none">
            CALCULATE YOUR <span className="text-[#C7FF00] neon-glow-text">BMI SCORE</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 font-normal">
            Check your Body Mass Index score instantly to get customized workout recommendations from our expert team.
          </p>
        </div>

        {/* Card Box */}
        <div className="max-w-4xl mx-auto bg-[#121212] border border-[#C7FF00]/30 rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Form Column */}
            <form onSubmit={calculateBMI} className="lg:col-span-7 space-y-6">
              
              {/* Gender selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                  Gender
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-3 rounded-xl font-heading text-xl tracking-wider border transition-all ${
                      gender === 'male'
                        ? 'bg-[#C7FF00] text-black border-[#C7FF00] shadow-[0_0_15px_rgba(199,255,0,0.4)]'
                        : 'bg-[#181818] text-gray-400 border-white/10 hover:text-white'
                    }`}
                  >
                    MALE
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-3 rounded-xl font-heading text-xl tracking-wider border transition-all ${
                      gender === 'female'
                        ? 'bg-[#C7FF00] text-black border-[#C7FF00] shadow-[0_0_15px_rgba(199,255,0,0.4)]'
                        : 'bg-[#181818] text-gray-400 border-white/10 hover:text-white'
                    }`}
                  >
                    FEMALE
                  </button>
                </div>
              </div>

              {/* Height slider / input */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                    Height
                  </label>
                  <span className="text-[#C7FF00] font-heading text-2xl">{height} cm</span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-[#222] rounded-lg appearance-none cursor-pointer accent-[#C7FF00]"
                />
              </div>

              {/* Weight slider / input */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                    Weight
                  </label>
                  <span className="text-[#C7FF00] font-heading text-2xl">{weight} kg</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="160"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-2 bg-[#222] rounded-lg appearance-none cursor-pointer accent-[#C7FF00]"
                />
              </div>

              {/* Age input */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                    Age
                  </label>
                  <span className="text-[#C7FF00] font-heading text-2xl">{age} Yrs</span>
                </div>
                <input
                  type="range"
                  min="14"
                  max="80"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-2 bg-[#222] rounded-lg appearance-none cursor-pointer accent-[#C7FF00]"
                />
              </div>

              {/* Calculate CTA */}
              <button
                type="submit"
                className="w-full bg-[#C7FF00] text-black font-heading text-2xl tracking-wider py-3.5 rounded-xl shadow-[0_0_20px_rgba(199,255,0,0.4)] hover:bg-[#d6ff33] transition-all flex items-center justify-center gap-2"
              >
                <Activity className="w-5 h-5" /> CALCULATE BMI NOW
              </button>
            </form>

            {/* Display Results Column */}
            <div className="lg:col-span-5 bg-[#0E0E0E] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full text-center lg:text-left">
              {result ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-4"
                >
                  <span className="text-gray-400 text-xs uppercase font-semibold tracking-widest">YOUR BMI RESULT</span>
                  
                  <div className="font-heading text-6xl text-white tracking-tight leading-none my-2">
                    {result.score}
                  </div>

                  <div className={`font-heading text-2xl ${result.color} tracking-wide`}>
                    Category: {result.category}
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-gray-300 leading-relaxed font-normal">
                    <strong>Health Advice:</strong> {result.advice}
                  </div>

                  <div className="p-4 bg-[#C7FF00]/10 border border-[#C7FF00]/30 rounded-xl text-left">
                    <span className="text-[11px] text-[#C7FF00] uppercase font-bold tracking-wider block mb-1">
                      RECOMMENDED PROGRAM
                    </span>
                    <span className="text-white font-heading text-xl block">
                      {result.programRecommend}
                    </span>
                  </div>

                  <button
                    onClick={onOpenFreeTrial}
                    className="w-full bg-[#C7FF00] text-black font-heading text-lg tracking-wider py-3 rounded-xl shadow-[0_0_15px_rgba(199,255,0,0.3)] hover:bg-[#d6ff33] transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    BOOK FREE CONSULTATION <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#C7FF00]/10 border border-[#C7FF00]/40 flex items-center justify-center text-[#C7FF00] mb-4">
                    <Activity className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading text-2xl text-white mb-2">READY TO MEASURE?</h4>
                  <p className="text-gray-400 text-xs">
                    Adjust your Height, Weight, and Age sliders on the left and hit <strong>CALCULATE BMI NOW</strong>.
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
