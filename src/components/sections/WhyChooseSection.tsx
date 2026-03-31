'use client';

import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import {
  Shield, Award, Users, BookOpen, Wifi, Clock, HeadphonesIcon, Trophy,
  CheckCircle, Star, Building2, GraduationCap
} from 'lucide-react';

const stats = [
  { value: 15000, suffix: '+', label: 'Students Trained', icon: Users, color: 'text-blue-500' },
  { value: 30, suffix: '+', label: 'Programs Offered', icon: BookOpen, color: 'text-gold-500' },
  { value: 200, suffix: '+', label: 'Franchise Centers', icon: Building2, color: 'text-green-500' },
  { value: 98, suffix: '%', label: 'Pass Rate', icon: Trophy, color: 'text-purple-500' },
  { value: 14, suffix: '+', label: 'Years Experience', icon: Award, color: 'text-red-500' },
  { value: 50, suffix: '+', label: 'Expert Faculty', icon: GraduationCap, color: 'text-cyan-500' },
];

const features = [
  {
    icon: Shield,
    title: 'Government Recognized',
    desc: 'All certifications are government recognized and accepted by major employers across India.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Wifi,
    title: 'Online & Offline Classes',
    desc: 'Attend live classes online or offline at your nearest center — fully flexible learning.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Clock,
    title: 'Flexible Batches',
    desc: 'Morning, evening and weekend batches to suit working professionals and students.',
    color: 'bg-gold-50 text-gold-600',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Student Support',
    desc: 'Round-the-clock support via WhatsApp, phone, and email for all enrolled students.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Trophy,
    title: 'Placement Assistance',
    desc: '100% placement support with dedicated career counseling and company tie-ups.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Award,
    title: 'Industry Expert Faculty',
    desc: 'Learn from seasoned professionals with real-world experience in top IT companies.',
    color: 'bg-cyan-50 text-cyan-600',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    course: 'BCA Graduate',
    text: 'ANITIO gave me a solid foundation. I got placed in a MNC within 2 months of completing BCA. The faculty is exceptional!',
    rating: 5,
    location: 'Delhi',
  },
  {
    name: 'Rohit Kumar',
    course: 'Python + Web Dev',
    text: 'The online classes were well-structured and interactive. Got my first freelance project during the course itself. Highly recommended!',
    rating: 5,
    location: 'Patna',
  },
  {
    name: 'Anjali Singh',
    course: 'PGDCA',
    text: 'Excellent teaching methodology. The practical sessions and live projects gave me the confidence to crack technical interviews.',
    rating: 5,
    location: 'Lucknow',
  },
];

export default function WhyChooseSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      {/* Stats Section */}
      <section className="section bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Our Impact</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              Numbers That Speak for <span className="text-gold-400">Themselves</span>
            </h2>
          </div>

          <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map(({ value, suffix, label, icon: Icon, color }) => (
              <div
                key={label}
                className="text-center bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3 ${color}`}>
                  <Icon size={20} />
                </div>
                <div className="text-3xl font-display font-bold text-white">
                  {inView ? (
                    <CountUp end={value} duration={2.5} separator="," suffix={suffix} />
                  ) : (
                    <span>0{suffix}</span>
                  )}
                </div>
                <div className="text-xs text-gray-300 mt-1 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <div className="section-subtitle">Why Choose ANITIO</div>
              <h2 className="section-title mb-5">
                The Institute That <span className="text-primary-700">Transforms</span> Careers
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                ANITIO has been at the forefront of IT education since 2010. With a student-first approach,
                industry-aligned curriculum, and a network of 200+ centers, we ensure every learner gets
                the skills and support needed to thrive in the digital economy.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'University Affiliated Programs',
                  'NIELIT Authorized Center',
                  'Online & Offline Education',
                  'Live + Recorded Sessions',
                  'Online Examination System',
                  'Result Management Portal',
                  'Placement Cell Active',
                  'EMI Payment Options',
                  'Franchise Network Available',
                  'Regular Syllabus Updates',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="/about" className="btn-secondary">Know More About Us</a>
                <a href="/contact" className="btn-outline">Contact Us</a>
              </div>
            </div>

            {/* Right – Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="bg-gray-50 rounded-xl p-5 hover:shadow-card transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1.5 group-hover:text-primary-700 transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-subtitle">Student Stories</div>
            <h2 className="section-title">
              What Our <span className="text-primary-700">Students</span> Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, course, text, rating, location }) => (
              <div key={name} className="card p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{text}"</p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{name}</div>
                    <div className="text-xs text-gray-500">{course} · {location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
