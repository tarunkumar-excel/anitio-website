'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  User, Mail, Phone, MapPin, BookOpen, Upload, CheckCircle, ArrowRight,
  AlertCircle, Calendar, GraduationCap, ChevronRight
} from 'lucide-react';
import { courses } from '@/data/courses';
import { generateEnrollmentNo } from '@/lib/utils';
import toast from 'react-hot-toast';

const STEPS = ['Personal Info', 'Contact & Address', 'Education', 'Course Selection', 'Documents', 'Review & Submit'];

const genders = ['Male', 'Female', 'Other', 'Prefer not to say'];
const categories = ['General', 'OBC', 'SC', 'ST', 'EWS'];
const qualifications = ['10th (Matriculation)', '12th (Intermediate)', 'Diploma', 'Graduation', 'Post Graduation', 'Other'];
const batches = ['Morning (8–10 AM)', 'Forenoon (10 AM–12 PM)', 'Afternoon (2–4 PM)', 'Evening (5–7 PM)', 'Weekend Only'];
const states = ['Uttar Pradesh', 'Bihar', 'Madhya Pradesh', 'Rajasthan', 'Maharashtra', 'Delhi', 'West Bengal', 'Gujarat', 'Karnataka', 'Tamil Nadu', 'Other'];

export default function AdmissionPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [enrollmentNo, setEnrollmentNo] = useState('');
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: '', lastName: '', dob: '', gender: '', category: '', nationality: 'Indian',
    email: '', phone: '', alternatePhone: '', address: '', city: '', state: '', pincode: '',
    lastQualification: '', percentage: '', passingYear: '', board: '',
    courseId: '', mode: 'hybrid', preferredBatch: '',
    agreeTerms: false, scholarshipApply: false,
  });

  const update = (field: string, value: string | boolean) =>
    setForm(p => ({ ...p, [field]: value }));

  const nextStep = () => {
    if (step < STEPS.length - 1) setStep(s => s + 1);
  };
  const prevStep = () => setStep(s => Math.max(0, s - 1));

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000)); // Simulate API
    const no = generateEnrollmentNo();
    setEnrollmentNo(no);
    setSubmitted(true);
    setLoading(false);
    toast.success('Application submitted! SMS sent to your mobile.');
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="container-custom max-w-2xl">
          <div className="card p-10 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={44} className="text-green-500" />
            </div>
            <h2 className="font-display font-bold text-3xl text-primary-900 mb-2">Application Submitted!</h2>
            <p className="text-gray-600 mb-6 text-base">
              Your admission application has been received. A confirmation SMS and email have been sent to your registered contact details.
            </p>

            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6 mb-6">
              <div className="text-xs text-gray-500 mb-1">Your Enrollment Number</div>
              <div className="font-mono text-2xl font-bold text-primary-700 tracking-wider">{enrollmentNo}</div>
              <div className="text-xs text-gray-400 mt-2">Save this number for future reference</div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div className="bg-gray-50 rounded-xl p-4 text-left">
                <div className="text-xs text-gray-500 mb-1">Status</div>
                <div className="font-semibold text-orange-600">Under Review</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-left">
                <div className="text-xs text-gray-500 mb-1">Confirmation</div>
                <div className="font-semibold text-green-600">SMS Sent ✓</div>
              </div>
            </div>

            <div className="bg-gold-50 border border-gold-200 rounded-xl p-4 mb-8 text-sm text-left">
              <div className="flex items-start gap-2">
                <AlertCircle size={15} className="text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gold-700 mb-1">Next Steps</div>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Our team will review your application within 1–2 working days.</li>
                    <li>• You will receive a call/SMS with fee payment instructions.</li>
                    <li>• Complete fee payment to confirm your seat.</li>
                    <li>• Visit the center with original documents for verification.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/payment" className="btn-primary">Pay Fees Online <ArrowRight size={16} /></Link>
              <Link href="/courses" className="btn-outline">Browse More Courses</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-12">
        <div className="container-custom">
          <div className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-2">Admissions 2024</div>
          <h1 className="font-display font-bold text-4xl mb-2">Online Admission Form</h1>
          <p className="text-gray-300 text-sm max-w-xl">
            Fill out the form below to apply for your chosen program. All fields marked with * are mandatory.
            You will receive an instant confirmation SMS on submission.
          </p>
        </div>
      </div>

      <div className="container-custom py-10 max-w-4xl">
        {/* Stepper */}
        <div className="flex items-center mb-10 overflow-x-auto pb-2">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center flex-shrink-0">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  i < step ? 'bg-green-500 text-white' :
                  i === step ? 'bg-primary-700 text-white' :
                  'bg-gray-200 text-gray-500'
                }`}>
                  {i < step ? <CheckCircle size={15} /> : i + 1}
                </div>
                <div className={`text-[10px] mt-1 font-medium whitespace-nowrap ${
                  i === step ? 'text-primary-700' : 'text-gray-400'
                }`}>{s}</div>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`h-0.5 w-10 md:w-16 mx-1 mt-[-14px] transition-all ${
                  i < step ? 'bg-green-400' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="card p-8">
          {/* Step 0: Personal Info */}
          {step === 0 && (
            <div className="space-y-6">
              <h2 className="font-display font-bold text-xl text-primary-900 flex items-center gap-2">
                <User size={20} className="text-primary-600" /> Personal Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input className="input-field" placeholder="Enter first name" value={form.firstName}
                    onChange={e => update('firstName', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input className="input-field" placeholder="Enter last name" value={form.lastName}
                    onChange={e => update('lastName', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                  <input className="input-field" type="date" value={form.dob}
                    onChange={e => update('dob', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
                  <select className="select-field" value={form.gender} onChange={e => update('gender', e.target.value)}>
                    <option value="">Select Gender</option>
                    {genders.map(g => <option key={g}>{g}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                  <select className="select-field" value={form.category} onChange={e => update('category', e.target.value)}>
                    <option value="">Select Category</option>
                    {categories.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
                  <input className="input-field" value={form.nationality} onChange={e => update('nationality', e.target.value)} />
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Contact */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="font-display font-bold text-xl text-primary-900 flex items-center gap-2">
                <Phone size={20} className="text-primary-600" /> Contact & Address
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input className="input-field" type="email" placeholder="you@email.com" value={form.email}
                    onChange={e => update('email', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number * (for SMS)</label>
                  <input className="input-field" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone}
                    onChange={e => update('phone', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Alternate Number</label>
                  <input className="input-field" type="tel" placeholder="+91 XXXXX XXXXX" value={form.alternatePhone}
                    onChange={e => update('alternatePhone', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code *</label>
                  <input className="input-field" placeholder="000000" value={form.pincode}
                    onChange={e => update('pincode', e.target.value)} />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Address *</label>
                  <textarea className="input-field resize-none" rows={3} placeholder="House No., Street, Locality..."
                    value={form.address} onChange={e => update('address', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                  <input className="input-field" placeholder="Your city" value={form.city}
                    onChange={e => update('city', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                  <select className="select-field" value={form.state} onChange={e => update('state', e.target.value)}>
                    <option value="">Select State</option>
                    {states.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Education */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="font-display font-bold text-xl text-primary-900 flex items-center gap-2">
                <GraduationCap size={20} className="text-primary-600" /> Educational Qualification
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Qualification *</label>
                  <select className="select-field" value={form.lastQualification} onChange={e => update('lastQualification', e.target.value)}>
                    <option value="">Select Qualification</option>
                    {qualifications.map(q => <option key={q}>{q}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Percentage / CGPA *</label>
                  <input className="input-field" placeholder="e.g. 78.5%" value={form.percentage}
                    onChange={e => update('percentage', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Passing Year *</label>
                  <input className="input-field" placeholder="e.g. 2023" value={form.passingYear}
                    onChange={e => update('passingYear', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Board / University *</label>
                  <input className="input-field" placeholder="e.g. CBSE / Lucknow University" value={form.board}
                    onChange={e => update('board', e.target.value)} />
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle size={15} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-700">
                    <span className="font-semibold">Scholarship Alert:</span> Students with 80%+ marks are eligible for merit-based scholarship. Original marksheet required.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Course Selection */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="font-display font-bold text-xl text-primary-900 flex items-center gap-2">
                <BookOpen size={20} className="text-primary-600" /> Course Selection
              </h2>
              <div className="grid gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Course *</label>
                  <select className="select-field" value={form.courseId} onChange={e => update('courseId', e.target.value)}>
                    <option value="">-- Select Program --</option>
                    {['university', 'diploma', 'certification', 'vocational'].map(cat => (
                      <optgroup key={cat} label={cat.charAt(0).toUpperCase() + cat.slice(1) + ' Programs'}>
                        {courses.filter(c => c.category === cat).map(c => (
                          <option key={c.id} value={c.id}>{c.title}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                {form.courseId && (
                  <div className="bg-primary-50 border border-primary-100 rounded-xl p-4">
                    {(() => {
                      const c = courses.find(x => x.id === form.courseId);
                      if (!c) return null;
                      return (
                        <div className="flex items-start gap-3">
                          <BookOpen size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-semibold text-primary-900">{c.title}</div>
                            <div className="text-sm text-gray-600 mt-1">{c.duration} · {c.certification}</div>
                            <div className="text-lg font-bold text-primary-700 mt-1">₹{c.fees.toLocaleString('en-IN')}</div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Learning Mode *</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['online', 'offline', 'hybrid'].map(m => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => update('mode', m)}
                        className={`p-3 rounded-xl border-2 text-sm font-medium capitalize transition-all ${
                          form.mode === m ? 'border-primary-600 bg-primary-50 text-primary-700' : 'border-gray-200 text-gray-600 hover:border-primary-300'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Batch Timing *</label>
                  <select className="select-field" value={form.preferredBatch} onChange={e => update('preferredBatch', e.target.value)}>
                    <option value="">Select Batch</option>
                    {batches.map(b => <option key={b}>{b}</option>)}
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <input type="checkbox" id="scholarship" checked={form.scholarshipApply}
                    onChange={e => update('scholarshipApply', e.target.checked)}
                    className="w-4 h-4 text-primary-600 rounded" />
                  <label htmlFor="scholarship" className="text-sm text-gray-700">
                    I want to apply for merit-based scholarship (if eligible)
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Documents */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="font-display font-bold text-xl text-primary-900 flex items-center gap-2">
                <Upload size={20} className="text-primary-600" /> Document Upload
              </h2>
              <p className="text-sm text-gray-600">Upload clear scans/photos. Accepted formats: JPG, PNG, PDF (max 2MB each).</p>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { id: 'photo', label: 'Passport Photo *', desc: 'Recent passport size photograph' },
                  { id: 'signature', label: 'Signature *', desc: 'On white paper, scanned clearly' },
                  { id: 'certificate', label: 'Last Qualification Certificate *', desc: 'Marksheet or certificate' },
                  { id: 'idProof', label: 'ID Proof *', desc: 'Aadhaar, PAN, Voter ID, or Passport' },
                ].map(({ id, label, desc }) => (
                  <div key={id}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-5 text-center hover:border-primary-400 transition-colors cursor-pointer">
                      <Upload size={22} className="text-gray-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-500">{desc}</div>
                      <input type="file" className="hidden" accept=".jpg,.jpeg,.png,.pdf" id={id} />
                      <label htmlFor={id} className="btn-ghost text-xs mt-2 cursor-pointer">Choose File</label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Review */}
          {step === 5 && (
            <div className="space-y-6">
              <h2 className="font-display font-bold text-xl text-primary-900">Review Your Application</h2>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                {[
                  ['Full Name', `${form.firstName} ${form.lastName}`],
                  ['Date of Birth', form.dob],
                  ['Gender', form.gender],
                  ['Category', form.category],
                  ['Email', form.email],
                  ['Mobile', form.phone],
                  ['City', form.city],
                  ['State', form.state],
                  ['Last Qualification', form.lastQualification],
                  ['Percentage', form.percentage],
                  ['Course', courses.find(c => c.id === form.courseId)?.title || '—'],
                  ['Mode', form.mode],
                  ['Batch', form.preferredBatch],
                ].map(([label, value]) => (
                  <div key={label} className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500">{label}</div>
                    <div className="font-medium text-gray-900 mt-0.5">{value || '—'}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gold-50 border border-gold-200 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle size={15} className="text-gold-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-700">
                    By submitting, you confirm that all information is accurate. An SMS confirmation will be sent to <strong>{form.phone}</strong>.
                  </div>
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={form.agreeTerms}
                  onChange={e => update('agreeTerms', e.target.checked)}
                  className="w-4 h-4 text-primary-600 rounded mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">
                  I agree to the{' '}
                  <Link href="/terms" className="text-primary-600 hover:underline">Terms & Conditions</Link>{' '}
                  and confirm that all provided information is accurate.
                </span>
              </label>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={prevStep}
              disabled={step === 0}
              className="btn-outline text-sm disabled:opacity-40"
            >
              ← Previous
            </button>

            {step < STEPS.length - 1 ? (
              <button onClick={nextStep} className="btn-primary text-sm">
                Next Step <ChevronRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!form.agreeTerms || loading}
                className="btn-primary text-sm px-8 disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  <>Submit Application <ArrowRight size={16} /></>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-3 gap-5 mt-8">
          {[
            { icon: CheckCircle, title: 'Instant Confirmation', desc: 'SMS sent immediately after submission', color: 'text-green-600' },
            { icon: Calendar, title: 'Batch Starts July 2024', desc: 'Limited seats — apply before June 30', color: 'text-primary-600' },
            { icon: AlertCircle, title: 'Scholarship Available', desc: '80%+ students get fee concession', color: 'text-gold-600' },
          ].map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="bg-white rounded-xl p-4 shadow-card flex items-start gap-3">
              <Icon size={20} className={`${color} flex-shrink-0 mt-0.5`} />
              <div>
                <div className="font-semibold text-gray-900 text-sm">{title}</div>
                <div className="text-xs text-gray-500 mt-0.5">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
