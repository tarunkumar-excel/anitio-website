'use client';

import { useState } from 'react';
import { Search, CheckCircle, Clock, AlertCircle, User, BookOpen, Calendar, Phone } from 'lucide-react';

const sampleStatus = {
  applicationNo: 'APP2024-001234',
  enrollmentNo: 'ANITIO24101234',
  studentName: 'Priya Sharma',
  course: 'PGDCA – Post Graduate Diploma in Computer Applications',
  mode: 'Hybrid (Online + Offline)',
  batch: 'July 2024',
  appliedOn: '05 June 2024',
  status: 'confirmed' as 'pending' | 'under-review' | 'confirmed' | 'rejected',
  message: 'Your admission has been confirmed. Your enrollment number is ANITIO24101234. Classes begin on 1st July 2024. You will receive an SMS with your login credentials shortly.',
  nextStep: 'Pay your first semester fees to activate your student portal access.',
  phone: '+91 98765 43210',
};

const STATUS_CONFIG = {
  pending: { color: 'bg-yellow-100 text-yellow-700 border-yellow-300', icon: Clock, label: 'Pending Review' },
  'under-review': { color: 'bg-blue-100 text-blue-700 border-blue-300', icon: Clock, label: 'Under Review' },
  confirmed: { color: 'bg-green-100 text-green-700 border-green-300', icon: CheckCircle, label: 'Confirmed' },
  rejected: { color: 'bg-red-100 text-red-700 border-red-300', icon: AlertCircle, label: 'Not Approved' },
};

export default function AdmissionStatusPage() {
  const [appNo, setAppNo] = useState('');
  const [phone, setPhone] = useState('');
  const [result, setResult] = useState<typeof sampleStatus | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!appNo || !phone) { setError('Please fill all fields.'); return; }
    setError(''); setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    if (appNo.toUpperCase().startsWith('APP')) setResult(sampleStatus);
    else setError('No application found. Please verify your Application Number and Mobile Number.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-14">
        <div className="container-custom">
          <div className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">Admission</div>
          <h1 className="text-4xl font-display font-bold mb-3">Check Application Status</h1>
          <p className="text-gray-300">Track the status of your admission application in real-time.</p>
        </div>
      </div>

      <div className="container-custom py-12 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-card p-8 mb-8">
          <h2 className="font-display font-bold text-xl text-primary-900 mb-5">Track Your Application</h2>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 text-sm mb-4 flex items-center gap-2">
              <AlertCircle size={15} /> {error}
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Application Number</label>
              <input type="text" placeholder="e.g. APP2024-001234" value={appNo} onChange={e => setAppNo(e.target.value)} className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Registered Mobile Number</label>
              <input type="tel" placeholder="e.g. 9876543210" value={phone} onChange={e => setPhone(e.target.value)} className="input-field" />
            </div>
            <button onClick={handleCheck} disabled={loading} className="btn-primary w-full justify-center py-3.5">
              {loading ? 'Checking...' : <><Search size={16} /> Check Status</>}
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">Demo: Enter any Application No. starting with "APP" to see sample status.</p>
        </div>

        {result && (() => {
          const config = STATUS_CONFIG[result.status];
          const Icon = config.icon;
          return (
            <div className="bg-white rounded-2xl shadow-card-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-xl text-primary-900">Application Status</h3>
                  <span className={`border px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 ${config.color}`}>
                    <Icon size={15} /> {config.label}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    { icon: User, label: 'Student Name', value: result.studentName },
                    { icon: Search, label: 'Application No.', value: result.applicationNo },
                    { icon: BookOpen, label: 'Course', value: result.course },
                    { icon: Calendar, label: 'Applied On', value: result.appliedOn },
                  ].map(({ icon: ItemIcon, label, value }) => (
                    <div key={label} className="flex items-start gap-2">
                      <ItemIcon size={14} className="text-primary-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-gray-500">{label}</div>
                        <div className="font-semibold text-gray-900 text-xs">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {result.status === 'confirmed' && (
                <div className="p-4 bg-green-50 border-b border-green-200">
                  <div className="flex items-start gap-2 text-sm text-green-800">
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-0.5">Enrollment No: {result.enrollmentNo}</div>
                      <div>{result.message}</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="p-5">
                {result.nextStep && (
                  <div className="bg-blue-50 rounded-xl p-4 mb-4 text-sm text-blue-800">
                    <strong>Next Step:</strong> {result.nextStep}
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Phone size={14} className="text-primary-600" />
                  For queries, contact: <strong>{result.phone}</strong>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
