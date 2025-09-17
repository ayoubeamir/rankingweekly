import React from 'react';
import Button from './common/Button';

const CheckIcon = () => (
  <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const LeadMagnet: React.FC = () => {
  return (
    <section id="checklist" className="py-20 sm:py-24 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="p-8 lg:p-12">
            <h2 className="text-base font-semibold uppercase tracking-wider text-emerald-600">
              Free Download
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-slate-900">
              30-Day Google Business Profile Optimization Checklist
            </p>
            <p className="mt-4 text-lg text-slate-600">
              This step-by-step action plan is your roadmap to getting noticed on Google. It covers:
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-slate-700">Claiming & verifying your profile the right way.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-slate-700">A simple system to get more reviews & respond effectively.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-slate-700">Adding engaging posts, FAQs, and services that attract customers.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-slate-700">Tracking key insights to boost your calls, clicks & visits.</span>
              </li>
            </ul>
            <div className="mt-8 text-center">
              <Button href="https://www.dropbox.com/scl/fi/d3we0nb5xngg6eiq6wkx1/15-Point-Google-Business-Profile-Audit-Checklist.pdf?rlkey=5ctbykyh7u24us63qm38958gn&st=rurkegc8&dl=0">
                Download the Free Checklist Now
              </Button>
            </div>
          </div>
          <div className="hidden lg:block relative">
             <img 
               className="absolute inset-0 w-full h-full object-cover" 
               src="https://picsum.photos/seed/business/600/800" 
               alt="Business checklist visual"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;