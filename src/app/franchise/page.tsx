import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Building2, TrendingUp, Users, Shield, CheckCircle, ArrowRight, Phone, Mail,
  Star, Award, Globe, Laptop, BookOpen, BarChart2, HeadphonesIcon, FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Franchise Opportunity | ANITIO IT & Skill Development',
  description: 'Open your own computer institute with ANITIO franchise. Complete support, proven curriculum, and ₹3-15 Lakh annual ROI. Apply now.',
};

const steps = [
  { step: '01', title: 'Submit Application', desc: 'Fill the online franchise application form with your details and preferred location.' },
  { step: '02', title: 'Initial Screening', desc: 'Our team reviews your application and conducts an initial video/phone call.' },
  { step: '03', title: 'Agreement & Payment', desc: 'Sign the franchise agreement and complete the one-time setup fee payment.' },
  { step: '04', title: 'Training & Setup', desc: 'Attend 5-day training at HQ. We help set up your center and install systems.' },
  { step: '05', title: 'Launch Your Center', desc: 'Launch with our marketing support. Start enrolling students from day one.' },
  { step: '06', title: 'Ongoing Support', desc: 'Continuous support from our dedicated franchise manager and support team.' },
];

const benefits = [
  { icon: BookOpen, title: 'Complete Curriculum', desc: '30+ ready-to-teach course packages with study materials, notes, and practicals.' },
  { icon: Laptop, title: 'Management Software', desc: 'Free student management system, attendance, fees, and report software.' },
  { icon: BarChart2, title: 'Marketing Support', desc: 'Banners, brochures, social media templates, and digital marketing assistance.' },
  { icon: Award, title: 'Brand Recognition', desc: 'Use the ANITIO brand name, logo, and ISO-certified quality standards.' },
  { icon: HeadphonesIcon, title: 'Dedicated Support', desc: '24/7 helpline, monthly webinars, and a dedicated franchise manager.' },
  { icon: Globe, title: 'Online Exam System', desc: 'Access to our online examination and result management platform.' },
  { icon: Shield, title: 'Certificate Authority', desc: 'Issue ANITIO-verified certificates to your students with QR authentication.' },
  { icon: TrendingUp, title: 'Revenue Sharing', desc: 'Attractive margins on all enrollments with monthly performance bonuses.' },
];

const faqs = [
  { q: 'What is the minimum investment required?', a: 'The minimum investment for an Associate Franchise is ₹1–2 Lakh which includes the franchise fee, setup, and initial marketing. This varies by center type.' },
  { q: 'What qualifications do I need to open a franchise?', a: 'You need to be at least a graduate. A background in education or computers is preferred but not mandatory. We provide complete training.' },
  { q: 'How much can I earn from an ANITIO franchise?', a: 'Average earnings range from ₹3–15 Lakh per year depending on student enrollment. Top-performing centers earn ₹20 Lakh+.' },
  { q: 'Is NIELIT authorization included?', a: 'Yes, registered franchise partners can offer NIELIT CCC, O-Level, and other government-approved courses using our authorization.' },
  { q: 'Do I need to hire qualified faculty?', a: 'We help you find and train faculty. Our training program certifies your teachers to deliver ANITIO curriculum.' },
  { q: 'What ongoing fees are charged?', a: 'A monthly royalty of 5–15% of gross revenue depending on your franchise type. This covers brand rights, software, and support.' },
];

export default function FranchisePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <div className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">Business Opportunity</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Open Your Own <br />
            <span className="text-gold-400">Computer Institute</span>
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto mb-8">
            Join India's fastest-growing computer education franchise network.
            Complete support, proven brand, and attractive returns starting from ₹1 Lakh investment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/franchise/register" className="btn-primary px-10 py-4 text-base">
              Apply for Franchise <ArrowRight size={18} />
            </Link>
            <a href="tel:+919876543210" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all text-base">
              <Phone size={18} /> Call for Details
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 max-w-3xl mx-auto">
            {[
              { value: '200+', label: 'Active Centers' },
              { value: '18+', label: 'States' },
              { value: '₹3–15L', label: 'Annual Earnings' },
              { value: '14+', label: 'Years Trust' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-display font-bold text-gold-400">{value}</div>
                <div className="text-xs text-gray-400 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section id="benefits" className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-subtitle">What You Get</div>
            <h2 className="section-title">Complete Franchise Support Package</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-6 group hover:border-primary-200 border border-transparent hover:-translate-y-1 transition-all">
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

      {/* Franchise Types */}
      <section id="types" className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-subtitle">Choose Your Plan</div>
            <h2 className="section-title">Franchise Types</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                type: 'Associate Center',
                icon: Building2,
                investment: '₹1–2 Lakh',
                royalty: '15% of revenue',
                area: '200–500 sq ft',
                students: 'Up to 50',
                courses: 'Up to 10 courses',
                color: 'border-blue-200',
                bg: 'from-blue-50 to-white',
                badge: null,
              },
              {
                type: 'Sub-Franchise Center',
                icon: Star,
                investment: '₹3–5 Lakh',
                royalty: '10% of revenue',
                area: '500–1000 sq ft',
                students: 'Up to 150',
                courses: 'Up to 25 courses',
                color: 'border-gold-400',
                bg: 'from-gold-50 to-white',
                badge: 'Most Popular',
              },
              {
                type: 'Master Franchise',
                icon: Award,
                investment: '₹8–15 Lakh',
                royalty: '5% of revenue',
                area: '1000+ sq ft',
                students: 'Unlimited',
                courses: 'All 30+ courses',
                color: 'border-purple-300',
                bg: 'from-purple-50 to-white',
                badge: 'Premium',
              },
            ].map(({ type, icon: Icon, investment, royalty, area, students, courses, color, bg, badge }) => (
              <div key={type} className={`relative card border-2 ${color} bg-gradient-to-b ${bg} overflow-hidden`}>
                {badge && (
                  <div className="absolute top-0 right-0 bg-gold-500 text-primary-950 text-xs font-bold px-4 py-1 rounded-bl-xl">{badge}</div>
                )}
                <div className="p-6">
                  <Icon size={32} className="text-primary-700 mb-4" />
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-4">{type}</h3>
                  <div className="space-y-3 mb-6">
                    {[
                      { label: 'Investment', value: investment },
                      { label: 'Royalty', value: royalty },
                      { label: 'Space Required', value: area },
                      { label: 'Student Capacity', value: students },
                      { label: 'Course Offering', value: courses },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex items-center justify-between border-b border-gray-100 pb-2">
                        <span className="text-sm text-gray-500">{label}</span>
                        <span className="text-sm font-bold text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/franchise/register" className="btn-secondary w-full justify-center text-sm">
                    Apply Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-primary-950 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">How It Works</div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
              Your Journey to Owning a Center
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4">
                <div className="text-5xl font-display font-bold text-gold-500/20 flex-shrink-0 leading-none">{step}</div>
                <div>
                  <h3 className="font-display font-bold text-white text-base mb-2">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <div className="section-subtitle">FAQs</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="card p-5 group">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between list-none">
                  {q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform text-lg ml-4">▼</span>
                </summary>
                <div className="mt-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-900 py-16 text-white text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="font-display font-bold text-3xl mb-3">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 mb-8">Apply today and our team will reach out within 24 hours.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/franchise/register" className="btn-primary px-10 py-4">
              Apply for Franchise <ArrowRight size={18} />
            </Link>
            <a href="mailto:franchise@anitio.in" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all">
              <Mail size={18} /> franchise@anitio.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
