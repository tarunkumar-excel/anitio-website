'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  GraduationCap, Play, ArrowRight, CheckCircle, Star, Users, Award, BookOpen, Wifi, MapPin
} from 'lucide-react';

const slides = [
  {
    tag: 'Now Enrolling – July 2024 Batch',
    heading: 'Build Your IT Career\nWith Expert Guidance',
    sub: 'India\'s leading computer institute offering 30+ programs in online & offline mode. BCA, MCA, PGDCA, Python, Web Dev, Data Science & more.',
    cta: { label: 'Start Your Journey', href: '/admission' },
    ctaSecondary: { label: 'Explore Courses', href: '/courses' },
    stats: ['15,000+ Alumni', '98% Pass Rate', '200+ Centers'],
    bg: 'from-primary-950 via-primary-900 to-primary-800',
  },
  {
    tag: 'Franchise Opportunity 2024',
    heading: 'Open Your Own\nComputer Institute',
    sub: 'Join ANITIO\'s rapidly growing franchise network. Complete training, marketing support, curriculum, and brand backing for your success.',
    cta: { label: 'Apply for Franchise', href: '/franchise/register' },
    ctaSecondary: { label: 'Know More', href: '/franchise' },
    stats: ['₹3–5 Lakh ROI/Year', 'Complete Support', '200+ Partners'],
    bg: 'from-primary-950 via-navy to-primary-900',
  },
  {
    tag: 'Online Education Platform',
    heading: 'Learn Anywhere,\nAnytime, Anyhow',
    sub: 'Access live classes, recorded lectures, study materials, and online exams — all from the comfort of your home on any device.',
    cta: { label: 'Explore Online Courses', href: '/courses?mode=online' },
    ctaSecondary: { label: 'View Schedule', href: '/schedule' },
    stats: ['Live + Recorded', 'Mobile Friendly', '24/7 Support'],
    bg: 'from-primary-900 via-primary-800 to-primary-950',
  },
];

const highlights = [
  { icon: GraduationCap, label: 'University Affiliated Programs' },
  { icon: Wifi, label: 'Online & Offline Classes' },
  { icon: Award, label: 'Govt. Recognized Certifications' },
  { icon: Users, label: 'Franchise Network Pan-India' },
  { icon: BookOpen, label: '30+ Programs Available' },
  { icon: MapPin, label: '200+ Centers Nationwide' },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className={`bg-gradient-to-br ${slide.bg} transition-all duration-1000`}>
        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />

        {/* Floating blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

        <div className="container-custom relative z-10 pt-16 pb-12 lg:pt-24 lg:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div key={active} className="animate-slide-in-left">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse" />
                {slide.tag}
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-5">
                {slide.heading.split('\n').map((line, i) => (
                  <span key={i}>
                    {i === 1 ? <span className="text-gold-400">{line}</span> : line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </h1>

              <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
                {slide.sub}
              </p>

              {/* Stats badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {slide.stats.map((s) => (
                  <div key={s} className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 text-xs font-medium text-white">
                    <CheckCircle size={12} className="text-gold-400" />
                    {s}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link href={slide.cta.href} className="btn-primary text-base px-8 py-4 shadow-gold">
                  {slide.cta.label}
                  <ArrowRight size={18} />
                </Link>
                <Link href={slide.ctaSecondary.href} className="flex items-center gap-2 text-white hover:text-gold-400 font-semibold transition-colors group">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                    <Play size={15} className="ml-0.5" />
                  </div>
                  {slide.ctaSecondary.label}
                </Link>
              </div>
            </div>

            {/* Right – Info Cards */}
            <div key={`cards-${active}`} className="hidden lg:block animate-slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                {/* Big stat card */}
                <div className="col-span-2 bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-6 flex items-center gap-5">
                  <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={32} className="text-primary-900" />
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-white">15,000<span className="text-gold-400">+</span></div>
                    <div className="text-gray-300 text-sm mt-1">Students Successfully Trained Since 2010</div>
                    <div className="flex items-center gap-1 mt-2">
                      {[1,2,3,4,5].map(s => <Star key={s} size={13} className="text-gold-400 fill-gold-400" />)}
                      <span className="text-xs text-gray-400 ml-1">4.9/5 Rating</span>
                    </div>
                  </div>
                </div>

                {/* Smaller stat cards */}
                {[
                  { value: '30+', label: 'Courses', color: 'bg-primary-600/30' },
                  { value: '200+', label: 'Centers', color: 'bg-gold-500/20' },
                  { value: '98%', label: 'Pass Rate', color: 'bg-green-500/20' },
                  { value: '14+', label: 'Years', color: 'bg-purple-500/20' },
                ].map(({ value, label, color }) => (
                  <div key={label} className={`${color} backdrop-blur border border-white/10 rounded-2xl p-5 text-center`}>
                    <div className="text-3xl font-display font-bold text-white">{value}</div>
                    <div className="text-xs text-gray-300 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex items-center gap-2 mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-gold-500' : 'w-3 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Highlights Strip */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                <Icon size={16} className="text-primary-600 flex-shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
