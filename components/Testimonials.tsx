import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: 'Within 3 weeks, our café started showing up in the top 3 results. Calls and walk-ins nearly doubled.',
    author: 'James',
    role: 'Café Owner',
    rating: 5,
  },
  {
    quote: 'We used to be invisible online. After following the checklist and working with the team, customer inquiries increased by 60%.',
    author: 'Sophia',
    role: 'Wellness Studio',
    rating: 5,
  },
  {
    quote: 'The strategies are simple but powerful. We now get steady leads every week, without spending a dime on paid ads.',
    author: 'David',
    role: 'Home Services',
    rating: 5,
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex items-center">
        {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        ))}
    </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full">
        <StarRating rating={testimonial.rating} />
        <blockquote className="mt-4 text-slate-700 text-lg flex-grow">
            “{testimonial.quote}”
        </blockquote>
        <footer className="mt-6">
            <p className="font-bold text-slate-900">{testimonial.author}</p>
            <p className="text-slate-500">{testimonial.role}</p>
        </footer>
    </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Backed by Real Results and Reviews</h2>
          <p className="mt-4 text-xl text-slate-600">Don't just take our word for it. Here's what local business owners are saying.</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;