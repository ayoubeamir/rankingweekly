import React from 'react';
import type { Feature } from '../types';

const ChartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const HandIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
    </svg>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const TargetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.586 15.586a2 2 0 11-2.828-2.828 2 2 0 012.828 2.828z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
    </svg>
);

const features: Feature[] = [
  {
    icon: <ChartIcon />,
    title: 'Proven Results',
    description: 'We’ve helped dozens of local businesses jump into the top 3 map pack and see a tangible increase in customer engagement.'
  },
  {
    icon: <HandIcon />,
    title: 'Hands-On Strategy',
    description: 'This isn\'t generic SEO. Everything in our action plan is tailored to make a direct impact on your local business.'
  },
  {
    icon: <ShieldIcon />,
    title: 'Trust & Credibility',
    description: 'Our methods are backed by real reviews and successful case studies from businesses just like yours.'
  },
  {
    icon: <TargetIcon />,
    title: 'Competitive Edge',
    description: 'Outrank your local competitors and capture customers who are actively searching for your services.'
  }
];

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-emerald-500 mb-6">
      {feature.icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-900">{feature.title}</h3>
    <p className="mt-4 text-slate-600">{feature.description}</p>
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Why Our Plan Works</h2>
          <p className="mt-4 text-xl text-slate-600">We focus on what truly moves the needle for local businesses on Google.</p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;