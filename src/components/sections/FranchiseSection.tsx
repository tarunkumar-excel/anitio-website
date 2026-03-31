import Link from 'next/link';
import { ArrowRight, CheckCircle, Building2, TrendingUp, HeadphonesIcon, Award, MapPin } from 'lucide-react';

const benefits = [
  { icon: TrendingUp, title: 'High ROI', desc: '₹3–5 Lakh annual return with growing IT education demand.' },
  { icon: HeadphonesIcon, title: 'Complete Support', desc: 'Full training, curriculum, branding, and ongoing technical support.' },
  { icon: Award, title: 'Brand Power', desc: 'Leverage ANITIO\'s 14+ year reputation and recognized certifications.' },
  { icon: Building2, title: 'Student Network', desc: 'Centralized admission system, results portal, and student database.' },
];

const types = [
  { name: 'Associate Center', invest: '₹50K – ₹1 Lakh', area: 'Single Town', features: ['Basic Branding', 'Course Materials', 'Online Support', 'Certificate Authority'] },
  { name: 'Sub Franchise', invest: '₹1 Lakh – ₹2.5 Lakh', area: 'District Level', features: ['Full Branding Kit', 'Faculty Training', 'Admission System', 'Marketing Support', 'Exam Authority'], highlight: true },
  { name: 'Master Franchise', invest: '₹2.5 Lakh – ₹5 Lakh', area: 'State Level', features: ['Exclusive Territory', 'Sub-Franchise Rights', 'Complete System Access', 'Dedicated Manager', 'Premium Support'] },
];

export default function FranchiseSection() {
  return (
    <section className="section bg-gray-50" id="franchise">
      <div className="container-custom">
        <div className="text-center mb-14">
          <div className="section-subtitle">Franchise Opportunity</div>
          <h2 className="section-title mb-4">
            Start Your Own <span className="text-primary-700">Computer Institute</span>
            <br className="hidden md:block" /> with ANITIO's Franchise Network
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join India's fastest growing IT education franchise. Low investment, high returns, complete support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card p-6 text-center group hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-700 transition-colors">
                <Icon size={22} className="text-primary-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {types.map(({ name, invest, area, features, highlight }) => (
            <div key={name} className={`rounded-2xl p-6 border-2 transition-all duration-300 hover:-translate-y-1 ${highlight ? 'bg-primary-900 border-primary-700 text-white shadow-blue' : 'bg-white border-gray-200 hover:shadow-card'}`}>
              {highlight && (
                <div className="inline-block bg-gold-500 text-primary-950 text-[10px] font-bold px-3 py-1 rounded-full uppercase mb-3">Most Popular</div>
              )}
              <h3 className={`font-display font-bold text-xl mb-1 ${highlight ? 'text-white' : 'text-primary-900'}`}>{name}</h3>
              <div className={`text-sm font-semibold mb-1 ${highlight ? 'text-gold-400' : 'text-gold-600'}`}>{invest}</div>
              <div className={`text-xs mb-4 flex items-center gap-1 ${highlight ? 'text-gray-300' : 'text-gray-500'}`}>
                <MapPin size={11} />{area}
              </div>
              <div className="space-y-2 mb-6">
                {features.map((f) => (
                  <div key={f} className={`flex items-center gap-2 text-sm ${highlight ? 'text-gray-200' : 'text-gray-600'}`}>
                    <CheckCircle size={14} className={highlight ? 'text-gold-400' : 'text-green-500'} />
                    {f}
                  </div>
                ))}
              </div>
              <Link href="/franchise/register" className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-colors ${highlight ? 'bg-gold-500 hover:bg-gold-600 text-primary-950' : 'bg-primary-700 hover:bg-primary-800 text-white'}`}>
                Apply Now <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center flex items-center justify-center gap-4">
          <Link href="/franchise" className="btn-secondary px-8">Franchise Details <ArrowRight size={16} /></Link>
          <Link href="/contact" className="btn-outline px-8">Contact Franchise Team</Link>
        </div>
      </div>
    </section>
  );
}
