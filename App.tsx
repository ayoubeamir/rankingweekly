
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LeadMagnet from './components/LeadMagnet';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CaseStudy from './components/CaseStudy';
import CTA from './components/CTA';
import Footer from './components/Footer';

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
