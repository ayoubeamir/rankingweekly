
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
          Local Businesses: Want to Rank Higher on Google in Just 30 Days?
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          👉 If your Google Business Profile isn’t bringing you calls, visits, and customers—you’re leaving money on the table.
        </p>
        <p className="mt-8 text-xl md:text-2xl text-slate-700 font-semibold max-w-4xl mx-auto">
          We help small businesses dominate Google My Business by optimizing their profiles with a proven 30-Day Action Plan that drives more traffic, reviews, and customers.
        </p>
      </div>
    </section>
  );
};

export default Hero;
