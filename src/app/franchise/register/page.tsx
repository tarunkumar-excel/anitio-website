'use client';

import { useState } from 'react';
import { Building2, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const franchiseTypes = ['Associate Center', 'Sub-Franchise Center', 'Master Franchise'];
const states = ['Uttar Pradesh', 'Bihar', 'Madhya Pradesh', 'Rajasthan', 'Maharashtra', 'Delhi', 'West Bengal', 'Gujarat', 'Karnataka', 'Tamil Nadu', 'Other'];
const spaceOptions = ['Less than 200 sq ft', '200–500 sq ft', '500–1000 sq ft', '1000+ sq ft'];
const qualifications = ['10th / Matriculation', '12th / Intermediate', 'Diploma', 'Graduation', 'Post Graduation'];

export default function FranchiseRegisterPage() {
  const [form, setForm] = useState({
    ownerName: '', email: '', phone: '', city: '', state: '',
    address: '', qualification: '', experience: '',
    franchiseType: '', space: '', investment: '',
    centerName: '', agreeTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (k: string, v: string | boolean) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000));
    setSubmitted(true);
    setLoading(false);
    toast.success('Franchise application received! Our team will contact you within 24 hours.');
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-lg w-full card p-10 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={44} className="text-green-500" />
          </div>
          <h2 className="font-display font-bold text-3xl text-primary-900 mb-2">Application Received!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in the ANITIO franchise program. Our franchise team will review 
            your application and reach out within <strong>24 hours</strong>.
          </p>
          <div className="bg-primary-50 rounded-xl p-5 mb-6 text-left space-y-2 text-sm">
            <div className="font-semibold text-primary-900 mb-2">Next Steps:</div>
            {['Team will call you within 24 hours', 'Initial screening call (30 minutes)', 'Franchise agreement & documentation', 'Training at HQ (5 days)', 'Center launch with full support'].map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-700">
                <span className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center text-[10px] font-bold text-primary-700 flex-shrink-0">{i + 1}</span>
                {s}
              </div>
            ))}
          </div>
          <a href="/franchise" className="btn-secondary w-full justify-center">Back to Franchise Page</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-12">
        <div className="container-custom">
          <div className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-2">Apply Now</div>
          <h1 className="font-display font-bold text-4xl mb-2">Franchise Application Form</h1>
          <p className="text-gray-300 text-sm">Fill this form to start your journey as an ANITIO Franchise Partner. Our team will respond within 24 hours.</p>
        </div>
      </div>

      <div className="container-custom py-10 max-w-3xl">
        <form onSubmit={handleSubmit} className="card p-8 space-y-6">
          <div>
            <h2 className="font-display font-bold text-xl text-primary-900 mb-5 flex items-center gap-2">
              <Building2 size={20} className="text-primary-600" /> Personal & Contact Information
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { key: 'ownerName', label: 'Full Name *', placeholder: 'Your full name' },
                { key: 'email', label: 'Email Address *', placeholder: 'you@email.com', type: 'email' },
                { key: 'phone', label: 'Mobile Number *', placeholder: '+91 XXXXX XXXXX', type: 'tel' },
                { key: 'city', label: 'City *', placeholder: 'Your city' },
              ].map(({ key, label, placeholder, type }) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                  <input
                    className="input-field" type={type || 'text'} placeholder={placeholder}
                    value={form[key as keyof typeof form] as string}
                    onChange={e => update(key, e.target.value)} required
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">State *</label>
                <select className="select-field" value={form.state} onChange={e => update('state', e.target.value)} required>
                  <option value="">Select State</option>
                  {states.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Qualification *</label>
                <select className="select-field" value={form.qualification} onChange={e => update('qualification', e.target.value)} required>
                  <option value="">Select Qualification</option>
                  {qualifications.map(q => <option key={q}>{q}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Complete Address *</label>
                <textarea className="input-field resize-none" rows={2} placeholder="Street, locality, area..."
                  value={form.address} onChange={e => update('address', e.target.value)} required />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h2 className="font-display font-bold text-xl text-primary-900 mb-5">Franchise Details</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Franchise Type *</label>
                <select className="select-field" value={form.franchiseType} onChange={e => update('franchiseType', e.target.value)} required>
                  <option value="">Select Type</option>
                  {franchiseTypes.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Available Space *</label>
                <select className="select-field" value={form.space} onChange={e => update('space', e.target.value)} required>
                  <option value="">Select Space</option>
                  {spaceOptions.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Planned Center Name</label>
                <input className="input-field" placeholder="e.g. ANITIO Computer Center – Lucknow"
                  value={form.centerName} onChange={e => update('centerName', e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Teaching/Business Experience</label>
                <input className="input-field" placeholder="e.g. 3 years teaching experience"
                  value={form.experience} onChange={e => update('experience', e.target.value)} />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Approximate Investment Budget *</label>
                <select className="select-field" value={form.investment} onChange={e => update('investment', e.target.value)} required>
                  <option value="">Select Budget Range</option>
                  <option>₹1–2 Lakh</option>
                  <option>₹2–5 Lakh</option>
                  <option>₹5–10 Lakh</option>
                  <option>₹10 Lakh+</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-gold-50 border border-gold-200 rounded-xl p-4">
            <div className="flex items-start gap-2">
              <AlertCircle size={15} className="text-gold-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gold-700">
                <span className="font-semibold">Note:</span> Submitting this form is a non-binding inquiry. 
                Our franchise team will contact you with detailed information, investment breakdown, and next steps.
              </div>
            </div>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" checked={form.agreeTerms}
              onChange={e => update('agreeTerms', e.target.checked)}
              className="w-4 h-4 text-primary-600 rounded mt-0.5 flex-shrink-0" required />
            <span className="text-sm text-gray-700">
              I agree to be contacted by ANITIO representatives regarding the franchise opportunity and understand 
              that my data will be handled as per the privacy policy.
            </span>
          </label>

          <button type="submit" disabled={!form.agreeTerms || loading} className="btn-primary w-full justify-center py-4 text-base disabled:opacity-50">
            {loading ? (
              <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Submitting...</>
            ) : (
              <>Submit Franchise Application <ArrowRight size={18} /></>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
