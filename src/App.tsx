import React, { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { AboutAndTestimonials } from './components/AboutAndTestimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedSubject, setSelectedSubject] = useState<string>(
    'Avaliação Personalizada'
  );

  const handleNavigateToContact = (subject?: string) => {
    if (subject) {
      setSelectedSubject(subject);
    }
    const contactEl = document.querySelector('#contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="grain-overlay relative min-h-screen bg-[hsl(var(--bg-canvas))] text-[hsl(var(--fg-ink))]">
        <Navbar onContactClick={handleNavigateToContact} />

        <main>
          <HeroSection onContactClick={handleNavigateToContact} />
          <ServicesSection onSelectService={handleNavigateToContact} />
          <PricingSection onSelectPlan={handleNavigateToContact} />
          <AboutAndTestimonials onContactClick={handleNavigateToContact} />
          <ContactSection selectedSubject={selectedSubject} />
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </MotionConfig>
  );
}
