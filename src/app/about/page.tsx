import type { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, Award, Users, Building2, Target, Eye, Heart, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About ANITIO | IT & Skill Development LLP',
  description: 'Learn about ANITIO Information Technology and Skill Development LLP – our mission, vision, history, and commitment to quality IT education since 2010.',
};

const team = [
  { name: 'Dr. A.K. Sharma', role: 'Founder & Director', exp: '22 Years', initials: 'AS' },
  { name: 'Prof. Sunita Singh', role: 'Academic Director', exp: '18 Years', initials: 'SS' },
  { name: 'Mr. Rahul Verma', role: 'Franchise Head', exp: '12 Years', initials: 'RV' },
  { name: 'Ms. Priya Kapoor', role: 'Technology Director', exp: '10 Years', initials: 'PK' },
];

const milestones = [
  { year: '2010', event: 'ANITIO founded with a single center in Lucknow' },
  { year: '2013', event: 'Launched first franchise program with 10 partner centers' },
  { year: '2016', event: 'Received NIELIT authorization for CCC and O-Level programs' },
  { year: '2018', event: 'Expanded to 50+ centers across Uttar Pradesh and Bihar' },
  { year: '2020', event: 'Launched online education platform during COVID-19 pandemic' },
  { year: '2022', event: 'Crossed 10,000 student enrollment milestone' },
  { year: '2023', event: 'Expanded to 200+ centers across 18 states pan-India' },
  { year: '2024', event: 'Launched AI, Data Science, and Cloud Computing programs' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">Our Story</div>
              <h1 className="font-display font-bold text-4xl md:text-5xl mb-5 leading-tight">
                Building India's <span className="text-gold-400">Digital Future</span><br />
                Since 2010
              </h1>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                ANITIO Information Technology and Skill Development LLP was founded with a single vision: 
                to make quality IT education accessible to every student in India, regardless of their 
                geographic location or economic background.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Starting from a single center in Lucknow in 2010, we have grown into a pan-India 
                educational network with 200+ franchise centers, 15,000+ students trained, and a 
                curriculum trusted by employers across India.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '14+', label: 'Years of Excellence', icon: Award, bg: 'bg-gold-500/20' },
                { value: '15,000+', label: 'Students Trained', icon: Users, bg: 'bg-blue-500/20' },
                { value: '200+', label: 'Franchise Centers', icon: Building2, bg: 'bg-green-500/20' },
                { value: '98%', label: 'Student Satisfaction', icon: Heart, bg: 'bg-red-500/20' },
              ].map(({ value, label, icon: Icon, bg }) => (
                <div key={label} className={`${bg} backdrop-blur border border-white/10 rounded-2xl p-5 text-center`}>
                  <Icon size={24} className="text-gold-400 mx-auto mb-2" />
                  <div className="text-2xl font-display font-bold text-white">{value}</div>
                  <div className="text-xs text-gray-400 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Vision */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                color: 'text-primary-700',
                bg: 'bg-primary-100',
                content: 'To provide affordable, high-quality IT education that empowers every student to build a successful career in the digital economy. We commit to excellence, innovation, and inclusivity in every program we offer.',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                color: 'text-gold-600',
                bg: 'bg-gold-100',
                content: 'To be India\'s most trusted IT education brand, with 1,000+ centers across every district, producing 1 million skilled IT professionals by 2030 and transforming India\'s digital workforce.',
              },
              {
                icon: Heart,
                title: 'Our Values',
                color: 'text-red-600',
                bg: 'bg-red-100',
                content: 'Quality over quantity. Integrity in education. Student-first approach. Continuous innovation. Inclusive growth that reaches students in cities, towns, and rural areas alike.',
              },
            ].map(({ icon: Icon, title, color, bg, content }) => (
              <div key={title} className="card p-7">
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon size={24} className={color} />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-xl mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-subtitle">Leadership</div>
            <h2 className="section-title">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map(({ name, role, exp, initials }) => (
              <div key={name} className="card p-6 text-center group hover:-translate-y-1 transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-900 rounded-2xl flex items-center justify-center text-white text-2xl font-display font-bold mx-auto mb-4 group-hover:shadow-blue transition-all">
                  {initials}
                </div>
                <h3 className="font-display font-bold text-gray-900 text-base">{name}</h3>
                <div className="text-primary-600 text-xs font-semibold mt-1">{role}</div>
                <div className="text-gray-400 text-xs mt-1">{exp} Experience</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-gradient-to-br from-primary-950 to-primary-900 text-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <div className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Our Journey</div>
            <h2 className="font-display font-bold text-3xl md:text-4xl">14 Years of Growth</h2>
          </div>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-primary-700" />
            <div className="space-y-8">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-6 items-start">
                  <div className="w-12 text-right flex-shrink-0">
                    <span className="text-gold-400 font-bold text-sm">{year}</span>
                  </div>
                  <div className="w-4 h-4 bg-gold-500 rounded-full flex-shrink-0 mt-1 relative z-10" />
                  <div className="flex-1 pb-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-sm leading-relaxed">{event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="section-subtitle">Recognition</div>
            <h2 className="section-title">Certifications & Affiliations</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {['NIELIT Authorized Center', 'ISO 9001:2015 Certified', 'Ministry of Skill Development Partner', 'NSDC Affiliated', 'University Approved'].map((cert) => (
              <div key={cert} className="bg-white border border-gray-200 rounded-xl px-6 py-4 flex items-center gap-2 shadow-card">
                <Award size={18} className="text-gold-500" />
                <span className="text-sm font-semibold text-gray-900">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-800 py-12 text-white text-center">
        <div className="container-custom">
          <h2 className="font-display font-bold text-2xl mb-3">Join the ANITIO Family</h2>
          <p className="text-gray-300 mb-6 text-sm max-w-xl mx-auto">
            Whether as a student, franchise partner, or collaborator — there's a place for you at ANITIO.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/admission" className="btn-primary">Apply for Admission <ArrowRight size={16} /></Link>
            <Link href="/franchise" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all inline-flex items-center gap-2">
              Franchise Opportunity <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
