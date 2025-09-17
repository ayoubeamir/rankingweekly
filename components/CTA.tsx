
import React from 'react';
import Button from './common/Button';

const CTA: React.FC = () => {
  return (
    <section className="bg-slate-800">
      <div className="container mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Ready to Rank Higher on Google and Win More Customers?
        </h2>
        <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
          Download your free 30-Day Google Business Profile Checklist and start optimizing today. Stop leaving money on the table and start getting the customers you deserve.
        </p>
        <div className="mt-8">
          <Button 
            href="https://www.dropbox.com/scl/fi/d3we0nb5xngg6eiq6wkx1/15-Point-Google-Business-Profile-Audit-Checklist.pdf?rlkey=5ctbykyh7u24us63qm38958gn&st=rurkegc8&dl=0"
            className="transform transition-transform hover:scale-110"
          >
            Get My Free Checklist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;