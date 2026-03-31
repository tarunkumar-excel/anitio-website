'use client';

import { useEffect, useRef, useState } from 'react';
import {
  GraduationCap, Award, Users, Building2, CheckCircle, BookOpen,
  Wifi, Shield, HeadphonesIcon, TrendingUp, Globe, Clock
} from 'lucide-react';

const stats = [
  { icon: Users, value: 15000, suffix: '+', label: 'Students Enrolled', color: 'text-blue-600' },
  { icon: BookOpen, value: 30, suffix: '+', label: 'Courses Offered', color: 'text-gold-500' },
  { icon: Building2, value: 200, suffix: '+', label: 'Franchise Centers', color: 'text-green-600' },
  { icon: Award, value: 98, suffix: '%', label: 'Pass Rate', color: 'text-purple-600' },
  { icon: GraduationCap, value: 14, suffix: '+', label: 'Years of Excellence', color: 'text-red-500' },
  { icon: Globe, value: 18, suffix: '+', label: 'States Covered', color: 'text-teal-600' },
];

const whyUs = [
  { icon: GraduationCap, title: 'University Affiliated Programs', desc: 'BCA, MCA, BSc IT affiliated with recognized universities for valid degree credentials.' },
  { icon: Wifi, title: 'Online & Offline Learning', desc: 'Flexible hybrid learning with live classes, recorded lectures, and in-person labs.' },
  { icon: Award, title: 'Govt. Recognized Certifications', desc: 'NIELIT authorized center offering CCC, O-Level, and other government-approved certifications.' },
  { icon: Shield, title: 'Secure Online Exams', desc: 'Proctored online examination system with AI monitoring for fair and secure assessments.' },
  { icon: HeadphonesIcon, title: '24/7 Student Support', desc: 'Dedicated support team available round the clock via call, chat, and email.' },
  { icon: TrendingUp, title: 'Placement Assistance', desc: '100% placement support with tie-ups with 50+ IT companies and regular campus drives.' },
  { icon: Clock, title: 'Flexible Batch Timings', desc: 'Morning, afternoon, evening, and weekend batches to suit working professionals & students.' },
  { icon: Building2, title: 'Pan-India Franchise Network', desc: '200+ centers across 18 states ensuring quality education in your neighborhood.' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString('en-IN')}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <>
      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-2">Our Impact</div>
            <h2 className="font-display text-3xl md:text-4xl text-white font-bold">
              Numbers That Speak For Themselves
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map(({ icon: Icon, value, suffix, label, color }) => (
              <div key={label} className="text-center group">
                <div className={`w-14 h-14 mx-auto mb-3 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors`}>
                  <Icon size={26} className={color} />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                  <CountUp target={value} suffix={suffix} />
                </div>
                <div className="text-xs text-gray-400 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ANITIO */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="section-subtitle">Why Choose Us</div>
            <h2 className="section-title">
              The <span className="text-primary-700">ANITIO Advantage</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              We combine academic excellence with industry relevance to produce job-ready graduates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-6 rounded-2xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50/50 transition-all duration-300 hover:shadow-card">
                <div className="w-12 h-12 bg-primary-100 group-hover:bg-primary-700 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon size={22} className="text-primary-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-base mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
