import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Clock, Download, ArrowRight, FileText, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Offline Admission Process | ANITIO IT & Skill Development',
};

const steps = [
  { step: '01', title: 'Visit Nearest Center', desc: 'Come to the ANITIO main center or any authorized franchise center near you. Bring original documents.' },
  { step: '02', title: 'Collect Prospectus', desc: 'Collect the course prospectus and admission form from the admission desk. Free of charge.' },
  { step: '03', title: 'Fill Application Form', desc: 'Fill the admission form carefully with all personal, educational, and course details.' },
  { step: '04', title: 'Submit Documents', desc: 'Submit attested copies of all required documents along with your filled form and passport photo.' },
  { step: '05', title: 'Pay Admission Fee', desc: 'Pay the admission fee at the counter by cash, UPI, or bank draft. Collect the receipt.' },
  { step: '06', title: 'Get Enrollment Number', desc: 'Receive your enrollment number and admit card. Classes begin as per the batch schedule.' },
];

const documents = [
  '10th Marksheet & Certificate',
  '12th Marksheet & Certificate (for degree courses)',
  'Graduation Marksheet (for PG courses)',
  'Aadhar Card / Voter ID / PAN (any one)',
  '4 Recent Passport Size Photographs',
  'Domicile / Residence Certificate',
  'Caste Certificate (if applicable)',
  'Migration Certificate (for university programs)',
];

const centers = [
  { name: 'ANITIO Main Center', address: '123, IT Tower, Main Road, City – 000000', phone: '+91 98765 43210', timing: 'Mon–Sat: 9 AM – 6 PM' },
  { name: 'ANITIO North Branch', address: '45, North Zone, Sector-12, City – 000001', phone: '+91 91234 56789', timing: 'Mon–Sat: 9 AM – 5 PM' },
  { name: 'ANITIO South Branch', address: '78, South Colony, Near Bus Stand, City – 000002', phone: '+91 89012 34567', timing: 'Mon–Sat: 10 AM – 6 PM' },
];

export default function OfflineAdmissionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-14">
        <div className="container-custom">
          <div className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">Admission</div>
          <h1 className="text-4xl font-display font-bold mb-3">Offline Admission Process</h1>
          <p className="text-gray-300 max-w-xl">Visit your nearest ANITIO center and complete your admission in person with assistance from our counselors.</p>
          <div className="flex gap-4 mt-6">
            <Link href="/admission" className="btn-primary">Apply Online Instead <ArrowRight size={16} /></Link>
            <a href="#" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm">
              <Download size={16} /> Download Form
            </a>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Steps */}
        <div className="mb-14">
          <div className="text-center mb-10">
            <div className="section-subtitle">How It Works</div>
            <h2 className="section-title">Offline Admission Steps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-2xl shadow-card p-6 relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center text-primary-950 font-bold text-sm shadow-gold">
                  {step}
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mt-2 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Documents Required */}
          <div className="bg-white rounded-2xl shadow-card p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                <FileText size={20} className="text-primary-700" />
              </div>
              <h2 className="font-display font-bold text-xl text-primary-900">Documents Required</h2>
            </div>
            <div className="space-y-3">
              {documents.map((doc) => (
                <div key={doc} className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle size={15} className="text-green-500 flex-shrink-0" />
                  {doc}
                </div>
              ))}
            </div>
            <div className="mt-5 p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-700">
              <strong>Note:</strong> Carry both originals and attested photocopies of all documents. Missing documents may delay your admission.
            </div>
          </div>

          {/* Centers */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                <MapPin size={20} className="text-primary-700" />
              </div>
              <h2 className="font-display font-bold text-xl text-primary-900">Our Centers</h2>
            </div>
            <div className="space-y-4">
              {centers.map(({ name, address, phone, timing }) => (
                <div key={name} className="bg-white rounded-2xl shadow-card p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
                  <div className="space-y-1.5 text-sm text-gray-500">
                    <div className="flex items-start gap-2"><MapPin size={13} className="text-primary-600 flex-shrink-0 mt-0.5" />{address}</div>
                    <div className="flex items-center gap-2"><Phone size={13} className="text-primary-600" />{phone}</div>
                    <div className="flex items-center gap-2"><Clock size={13} className="text-primary-600" />{timing}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
