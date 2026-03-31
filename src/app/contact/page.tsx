'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', type: 'general' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setSent(true);
    setLoading(false);
    toast.success('Message sent! We will respond within 24 hours.');
  };

  const contactInfo = [
    { icon: Phone, title: 'Call Us', lines: ['+91 98765 43210', '+91 91234 56789'], href: 'tel:+919876543210' },
    { icon: Mail, title: 'Email Us', lines: ['info@anitio.in', 'admissions@anitio.in'], href: 'mailto:info@anitio.in' },
    { icon: MapPin, title: 'Visit Us', lines: ['123, IT Tower, Main Road', 'Your City – 000000, India'], href: '#' },
    { icon: Clock, title: 'Working Hours', lines: ['Mon – Sat: 9 AM – 6 PM', 'Sun: Closed'], href: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-14">
        <div className="container-custom">
          <div className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-2">Get In Touch</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-3">Contact <span className="text-gold-400">ANITIO</span></h1>
          <p className="text-gray-300 text-sm max-w-xl">
            Have questions about admission, courses, franchise, or anything else?
            Our team is here to help you 6 days a week.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {contactInfo.map(({ icon: Icon, title, lines, href }) => (
            <a key={title} href={href} className="card p-5 text-center group hover:-translate-y-1 transition-all hover:border-primary-200 border border-transparent">
              <div className="w-12 h-12 bg-primary-100 group-hover:bg-primary-700 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors">
                <Icon size={20} className="text-primary-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-bold text-gray-900 text-sm mb-2">{title}</h3>
              {lines.map(l => <div key={l} className="text-xs text-gray-600 leading-relaxed">{l}</div>)}
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="card p-8">
            <h2 className="font-display font-bold text-2xl text-primary-900 mb-6 flex items-center gap-2">
              <MessageSquare size={22} className="text-primary-600" />
              Send a Message
            </h2>

            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={34} className="text-green-500" />
                </div>
                <h3 className="font-display font-bold text-xl text-primary-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-sm mb-6">
                  We have received your message and will respond within 24 hours via email or call.
                </p>
                <button onClick={() => setSent(false)} className="btn-outline text-sm">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input className="input-field" placeholder="Your name" value={form.name} onChange={e => update('name', e.target.value)} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                    <input className="input-field" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => update('phone', e.target.value)} required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                  <input className="input-field" type="email" placeholder="you@email.com" value={form.email} onChange={e => update('email', e.target.value)} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Inquiry Type</label>
                  <select className="select-field" value={form.type} onChange={e => update('type', e.target.value)}>
                    {['general', 'admission', 'course', 'franchise', 'result', 'payment', 'other'].map(t => (
                      <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject *</label>
                  <input className="input-field" placeholder="Brief subject" value={form.subject} onChange={e => update('subject', e.target.value)} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                  <textarea className="input-field resize-none" rows={4} placeholder="Describe your query in detail..."
                    value={form.message} onChange={e => update('message', e.target.value)} required />
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3.5 disabled:opacity-70">
                  {loading ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Departments & Map */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="font-display font-bold text-gray-900 text-lg mb-4">Department Contacts</h3>
              <div className="space-y-4">
                {[
                  { dept: 'Admissions', email: 'admissions@anitio.in', phone: '+91 98765 43210', hours: 'Mon–Sat, 9 AM–5 PM' },
                  { dept: 'Examination Cell', email: 'exam@anitio.in', phone: '+91 91234 56789', hours: 'Mon–Fri, 10 AM–4 PM' },
                  { dept: 'Results & Certificates', email: 'results@anitio.in', phone: '+91 98765 11111', hours: 'Mon–Fri, 10 AM–4 PM' },
                  { dept: 'Franchise Division', email: 'franchise@anitio.in', phone: '+91 90000 12345', hours: 'Mon–Sat, 9 AM–6 PM' },
                  { dept: 'Technical Support', email: 'support@anitio.in', phone: '+91 91111 23456', hours: '24/7 (Online)' },
                ].map(({ dept, email, phone, hours }) => (
                  <div key={dept} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="font-semibold text-gray-900 text-sm mb-1">{dept}</div>
                    <div className="flex flex-wrap gap-x-4 text-xs text-gray-600">
                      <a href={`mailto:${email}`} className="hover:text-primary-600 transition-colors">{email}</a>
                      <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-primary-600 transition-colors">{phone}</a>
                      <span className="text-gray-400">{hours}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="card overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={36} className="text-primary-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-primary-800">ANITIO Main Campus</div>
                  <div className="text-xs text-primary-600 mt-1">123, IT Tower, Main Road, Your City</div>
                </div>
              </div>
              <div className="p-4 text-center">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                  className="btn-ghost text-sm">
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
