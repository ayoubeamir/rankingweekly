
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import LeadMagnet from './components/LeadMagnet.tsx';
import WhyChooseUs from './components/WhyChooseUs.tsx';
import Testimonials from './components/Testimonials.tsx';
import CaseStudy from './components/CaseStudy.tsx';
import CTA from './components/CTA.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-800">
      <Header />
      <main>
        <Hero />
        <LeadMagnet />
        <WhyChooseUs />
        <Testimonials />
        <CaseStudy />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;