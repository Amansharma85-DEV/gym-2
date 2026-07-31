import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Programs from './components/Programs';
import TrustStrip from './components/TrustStrip';
import Pricing from './components/Pricing';
import Trainers from './components/Trainers';
import Transformations from './components/Transformations';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import BmiCalculator from './components/BmiCalculator';
import Faq from './components/Faq';
import Contact from './components/Contact';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import MobileBottomNav from './components/MobileBottomNav';
import FreeTrialModal from './components/FreeTrialModal';

// Section Glowing Divider Component
const SectionDivider = () => (
  <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-[#C7FF00]/40 to-transparent" />
);

export default function App() {
  const [isFreeTrialOpen, setIsFreeTrialOpen] = useState(false);

  const handleOpenFreeTrial = () => {
    setIsFreeTrialOpen(true);
  };

  const handleCloseFreeTrial = () => {
    setIsFreeTrialOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white selection:bg-[#C7FF00] selection:text-black overflow-x-hidden">
      {/* Header & Navigation */}
      <Navbar onOpenFreeTrial={handleOpenFreeTrial} />

      {/* Main Sections */}
      <main>
        <Hero onOpenFreeTrial={handleOpenFreeTrial} />
        <SectionDivider />
        <About onOpenFreeTrial={handleOpenFreeTrial} />
        <SectionDivider />
        <WhyChooseUs />
        <SectionDivider />
        <Programs onOpenFreeTrial={handleOpenFreeTrial} />
        
        {/* Premium Trust Strip before Pricing */}
        <TrustStrip />
        
        <Pricing onOpenFreeTrial={handleOpenFreeTrial} />
        <SectionDivider />
        <Trainers />
        <SectionDivider />
        <Transformations onOpenFreeTrial={handleOpenFreeTrial} />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Gallery />
        <SectionDivider />
        <BmiCalculator onOpenFreeTrial={handleOpenFreeTrial} />
        <SectionDivider />
        <Faq />
        <SectionDivider />
        <Contact />
        <CtaBanner onOpenFreeTrial={handleOpenFreeTrial} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingButtons />

      {/* Sticky Mobile Bottom Navigation */}
      <MobileBottomNav />

      {/* Lead Generation & Booking Modal */}
      <FreeTrialModal isOpen={isFreeTrialOpen} onClose={handleCloseFreeTrial} />
    </div>
  );
}
