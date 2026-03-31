'use client';

import { useState } from 'react';
import { CreditCard, Smartphone, Building2, CheckCircle, Lock, AlertCircle, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

const paymentMethods = [
  { id: 'upi', label: 'UPI Payment', icon: Smartphone, desc: 'PhonePe, GPay, Paytm, BHIM' },
  { id: 'netbanking', label: 'Net Banking', icon: Building2, desc: 'All major banks supported' },
  { id: 'card', label: 'Debit / Credit Card', icon: CreditCard, desc: 'Visa, Mastercard, RuPay' },
];

const paymentTypes = [
  { id: 'admission', label: 'Admission Fee' },
  { id: 'tuition', label: 'Tuition / Course Fee' },
  { id: 'exam', label: 'Exam Fee' },
  { id: 'certificate', label: 'Certificate Fee' },
];

export default function PaymentPage() {
  const [method, setMethod] = useState('upi');
  const [form, setForm] = useState({ enrollmentNo: '', name: '', phone: '', amount: '', paymentType: 'tuition', upiId: '', bank: '', cardNo: '', expiry: '', cvv: '' });
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  const [txnId, setTxnId] = useState('');

  const update = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  const handlePay = async () => {
    if (!form.enrollmentNo || !form.amount) {
      toast.error('Please fill all required fields.');
      return;
    }
    setStep('processing');
    await new Promise(r => setTimeout(r, 2500));
    setTxnId('TXN' + Date.now());
    setStep('success');
    toast.success('Payment successful! SMS sent to your mobile.');
  };

  if (step === 'processing') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-700 rounded-full animate-spin mx-auto mb-4" />
          <h2 className="font-display font-bold text-xl text-primary-900 mb-2">Processing Payment</h2>
          <p className="text-gray-500 text-sm">Please do not close this window...</p>
        </div>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={36} className="text-green-500" />
            </div>
            <h2 className="font-display font-bold text-2xl text-primary-900 mb-2">Payment Successful!</h2>
            <p className="text-gray-500 text-sm mb-6">Your fee payment has been processed successfully.</p>

            <div className="bg-gray-50 rounded-xl p-5 mb-6 text-left space-y-3">
              {[
                ['Transaction ID', txnId],
                ['Enrollment No.', form.enrollmentNo],
                ['Amount Paid', `₹${parseInt(form.amount).toLocaleString('en-IN')}`],
                ['Payment Type', paymentTypes.find(t => t.id === form.paymentType)?.label || ''],
                ['Status', 'Success ✓'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between text-sm">
                  <span className="text-gray-500">{label}</span>
                  <span className="font-semibold text-gray-900">{value}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-400 mb-6">A payment confirmation SMS has been sent to +91 XXXXX {form.phone.slice(-5)}. Save your Transaction ID for records.</p>

            <div className="flex gap-3">
              <button onClick={() => window.print()} className="btn-outline flex-1 text-sm justify-center">
                Download Receipt
              </button>
              <button onClick={() => { setStep('form'); setForm(p => ({ ...p, amount: '', enrollmentNo: '' })); }} className="btn-primary flex-1 text-sm justify-center">
                Pay Again
              </button>
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
          <div className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-2">Secure Payment</div>
          <h1 className="font-display font-bold text-4xl mb-2">Online Fee Payment</h1>
          <p className="text-gray-300 text-sm flex items-center gap-1.5">
            <Lock size={13} className="text-green-400" />
            All payments are encrypted and secure. Powered by Razorpay.
          </p>
        </div>
      </div>

      <div className="container-custom py-10 max-w-3xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Form */}
          <div className="md:col-span-2 space-y-6">

            {/* Student Details */}
            <div className="card p-6">
              <h2 className="font-display font-bold text-gray-900 text-lg mb-5">Student Details</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Enrollment Number *</label>
                  <input className="input-field font-mono" placeholder="ANITIO24XXXXXX" value={form.enrollmentNo}
                    onChange={e => update('enrollmentNo', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Student Name *</label>
                  <input className="input-field" placeholder="Full Name" value={form.name}
                    onChange={e => update('name', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Mobile Number *</label>
                  <input className="input-field" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone}
                    onChange={e => update('phone', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Payment Type *</label>
                  <select className="select-field" value={form.paymentType} onChange={e => update('paymentType', e.target.value)}>
                    {paymentTypes.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Amount (₹) *</label>
                  <input className="input-field text-xl font-bold" type="number" placeholder="0" value={form.amount}
                    onChange={e => update('amount', e.target.value)} />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="card p-6">
              <h2 className="font-display font-bold text-gray-900 text-lg mb-5">Payment Method</h2>

              <div className="grid grid-cols-3 gap-3 mb-5">
                {paymentMethods.map(({ id, label, icon: Icon, desc }) => (
                  <button
                    key={id}
                    onClick={() => setMethod(id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      method === id ? 'border-primary-600 bg-primary-50' : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <Icon size={20} className={`mb-2 ${method === id ? 'text-primary-600' : 'text-gray-500'}`} />
                    <div className="text-xs font-semibold text-gray-900">{label}</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">{desc}</div>
                  </button>
                ))}
              </div>

              {/* UPI */}
              {method === 'upi' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">UPI ID *</label>
                  <input className="input-field" placeholder="yourname@paytm / @gpay / @upi" value={form.upiId}
                    onChange={e => update('upiId', e.target.value)} />
                  <p className="text-xs text-gray-500 mt-1.5">You will receive a payment request on your UPI app.</p>
                </div>
              )}

              {/* Net Banking */}
              {method === 'netbanking' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Select Bank *</label>
                  <select className="select-field" value={form.bank} onChange={e => update('bank', e.target.value)}>
                    <option value="">Select your bank</option>
                    {['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'PNB', 'BOI', 'Canara Bank', 'Union Bank', 'Kotak Bank', 'Yes Bank'].map(b => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Card */}
              {method === 'card' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Card Number *</label>
                    <input className="input-field font-mono" placeholder="XXXX XXXX XXXX XXXX" maxLength={19} value={form.cardNo}
                      onChange={e => update('cardNo', e.target.value)} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Expiry *</label>
                      <input className="input-field" placeholder="MM/YY" maxLength={5} value={form.expiry}
                        onChange={e => update('expiry', e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">CVV *</label>
                      <input className="input-field" type="password" placeholder="•••" maxLength={4} value={form.cvv}
                        onChange={e => update('cvv', e.target.value)} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="card p-5 sticky top-20">
              <h3 className="font-display font-bold text-gray-900 mb-4">Summary</h3>
              <div className="space-y-3 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount</span>
                  <span className="font-bold">₹{form.amount ? parseInt(form.amount).toLocaleString('en-IN') : '0'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="font-medium text-green-600">FREE</span>
                </div>
                <div className="flex justify-between border-t border-gray-100 pt-3">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="font-bold text-primary-700 text-lg">₹{form.amount ? parseInt(form.amount).toLocaleString('en-IN') : '0'}</span>
                </div>
              </div>

              <button onClick={handlePay} className="btn-primary w-full justify-center py-3.5">
                <Lock size={15} /> Pay Now <ArrowRight size={15} />
              </button>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <CheckCircle size={11} className="text-green-500" /> Instant SMS confirmation
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <CheckCircle size={11} className="text-green-500" /> 100% secure SSL payment
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <AlertCircle size={11} className="text-orange-500" /> Amount is non-refundable after processing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
