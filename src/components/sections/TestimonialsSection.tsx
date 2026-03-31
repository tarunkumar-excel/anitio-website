'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Singh',
    course: 'BCA Graduate – 2023',
    location: 'Lucknow, UP',
    rating: 5,
    text: 'ANITIO gave me the perfect foundation for my IT career. The faculty is highly qualified and the practical labs are excellent. I got placed at Infosys within 2 months of completing my BCA!',
    avatar: 'PS',
    company: 'Infosys',
  },
  {
    id: 2,
    name: 'Rohit Kumar',
    course: 'Full Stack Web Dev – 2024',
    location: 'Patna, Bihar',
    rating: 5,
    text: 'The Web Development course here is top-notch. They teach you real industry tools and by the end you have a full portfolio. The online classes are very interactive and the doubt sessions are incredibly helpful.',
    avatar: 'RK',
    company: 'Wipro',
  },
  {
    id: 3,
    name: 'Anjali Verma',
    course: 'PGDCA – 2023',
    location: 'Kanpur, UP',
    rating: 5,
    text: 'After completing PGDCA from ANITIO, I cleared the government IT exam on my first attempt. The coaching quality and the exam preparation materials are far superior to other institutes in the area.',
    avatar: 'AV',
    company: 'Govt. Sector',
  },
  {
    id: 4,
    name: 'Sanjay Patel',
    course: 'Franchise Partner – Rajkot',
    location: 'Gujarat',
    rating: 5,
    text: 'Taking the ANITIO franchise was the best business decision of my life. Complete support from day one — curriculum, marketing, student management software. Now running a center with 200+ students.',
    avatar: 'SP',
    company: 'Franchise Owner',
  },
  {
    id: 5,
    name: 'Meena Sharma',
    course: 'Data Science – 2024',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    text: 'The Data Science course at ANITIO is comprehensive and industry-aligned. The mentors have real corporate experience and the projects are genuinely challenging. Worth every penny invested!',
    avatar: 'MS',
    company: 'TCS',
  },
  {
    id: 6,
    name: 'Deepak Mishra',
    course: 'Tally + Accounting – 2023',
    location: 'Varanasi, UP',
    rating: 5,
    text: 'The Tally Prime with GST course completely transformed my accounting skills. Now I handle GST filing for 15+ businesses. The trainer explained everything so simply even a non-commerce student like me could understand.',
    avatar: 'DM',
    company: 'Self Employed',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const visible = 3;
  const max = testimonials.length - visible;

  const prev = () => setCurrent(p => Math.max(0, p - 1));
  const next = () => setCurrent(p => Math.min(max, p + 1));

  return (
    <section className="section bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container-custom relative z-10">
        <div className="text-center mb-14">
          <div className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Student Stories</div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our <span className="text-gold-400">Students Say</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real stories from 15,000+ students and franchise partners who transformed their careers with ANITIO.
          </p>
        </div>

        {/* Cards */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${current} * (100% / ${visible} + 8px)))` }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white/8 backdrop-blur border border-white/10 rounded-2xl p-6"
              >
                {/* Quote icon */}
                <Quote size={28} className="text-gold-400 mb-4 opacity-60" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-gold-400 fill-gold-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">"{t.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.course}</div>
                    <div className="text-xs text-gold-500">{t.company} · {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: max + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-gold-400' : 'w-2 bg-white/30'}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === max}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
