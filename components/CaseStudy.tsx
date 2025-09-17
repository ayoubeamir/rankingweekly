import React from 'react';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="bg-emerald-50 p-6 rounded-lg text-center">
    <p className="text-4xl font-extrabold text-emerald-600">{value}</p>
    <p className="mt-1 text-slate-600">{label}</p>
  </div>
);

const CaseStudy: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Case Study: How a Small Café Doubled Local Foot Traffic in 6 Weeks
            </h2>
          </div>

          <div className="mt-12 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800">The Challenge</h3>
              <p className="mt-4 text-lg text-slate-600">
                A family-owned café had amazing food but almost zero visibility on Google. Their profile had outdated info, no reviews, and barely any photos. They were losing customers to competitors who appeared first in local searches.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800">Our Approach (Based on 30-Day Action Plan)</h3>
              <ul className="mt-4 space-y-3 list-disc list-inside text-lg text-slate-600">
                <li><span className="font-semibold">Week 1:</span> Claimed & verified their GBP, added correct categories, hours, and 10+ high-quality photos.</li>
                <li><span className="font-semibold">Week 2:</span> Implemented a simple strategy to collect 5 new reviews & professionally responded to all past reviews.</li>
                <li><span className="font-semibold">Week 3:</span> Published weekly Google Posts with offers & updates, and added crucial FAQ content.</li>
                <li><span className="font-semibold">Week 4:</span> Audited top competitors, optimized service keywords, and began tracking key performance insights.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800">The Results (After 6 Weeks)</h3>
              <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <StatCard value="+74%" label="Increase in discovery searches" />
                <StatCard value="+52%" label="More calls & direction requests" />
                <StatCard value="35" label="New reviews (4.8★ avg)" />
                <StatCard value="+20%" label="Consistent foot traffic increase" />
              </div>
            </div>

            <div className="bg-slate-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-800">Client Feedback</h3>
              <blockquote className="mt-4 border-l-4 border-emerald-500 pl-6 text-lg text-slate-700 italic">
                “We didn’t think a Google profile could bring so many new customers. Now people find us every day, and our sales are growing steadily. This was a game-changer.”
              </blockquote>
              <p className="mt-4 font-bold text-slate-800">— James, Café Owner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;