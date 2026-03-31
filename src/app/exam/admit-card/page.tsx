'use client';

import { useState } from 'react';
import { Search, Download, AlertCircle, User, BookOpen, Calendar, MapPin, Clock, Printer } from 'lucide-react';

const sampleAdmitCard = {
  enrollmentNo: 'ANITIO24101234',
  studentName: 'Priya Sharma',
  fatherName: 'Rajesh Sharma',
  dob: '15/05/2002',
  course: 'PGDCA – Post Graduate Diploma in Computer Applications',
  semester: 'Semester II',
  examName: 'Internal Theory Examination – June 2024',
  examCenter: 'ANITIO Main Center, City – 000000',
  examDate: '20 June – 28 June 2024',
  reportingTime: '9:00 AM',
  examTime: '10:00 AM – 12:00 PM',
  photo: null,
  subjects: [
    { date: '20 June 2024', time: '10:00 AM', subject: 'Advanced Java Programming', code: 'PGDCA-201' },
    { date: '22 June 2024', time: '10:00 AM', subject: 'Advanced Web Technologies', code: 'PGDCA-202' },
    { date: '24 June 2024', time: '10:00 AM', subject: 'Software Engineering', code: 'PGDCA-203' },
    { date: '26 June 2024', time: '10:00 AM', subject: 'Project Viva Voce', code: 'PGDCA-204' },
  ],
};

export default function AdmitCardPage() {
  const [enrollment, setEnrollment] = useState('');
  const [dob, setDob] = useState('');
  const [card, setCard] = useState<typeof sampleAdmitCard | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    if (!enrollment || !dob) { setError('Please enter both fields.'); return; }
    setError(''); setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    // Simulate: any enrollment starting with ANITIO shows the sample
    if (enrollment.toUpperCase().startsWith('ANITIO')) {
      setCard(sampleAdmitCard);
    } else {
      setError('No admit card found. Please check your enrollment number and date of birth.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-14">
        <div className="container-custom">
          <div className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">Download</div>
          <h1 className="text-4xl font-display font-bold mb-3">Admit Card</h1>
          <p className="text-gray-300">Download your hall ticket for upcoming examinations.</p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Search Form */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="bg-white rounded-2xl shadow-card p-8">
            <h2 className="font-display font-bold text-xl text-primary-900 mb-5">Fetch Your Admit Card</h2>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 text-sm mb-4 flex items-center gap-2">
                <AlertCircle size={15} /> {error}
              </div>
            )}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Enrollment Number</label>
                <input type="text" placeholder="e.g. ANITIO24101234" value={enrollment} onChange={e => setEnrollment(e.target.value)} className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Date of Birth</label>
                <input type="date" value={dob} onChange={e => setDob(e.target.value)} className="input-field" />
              </div>
              <button onClick={handleFetch} disabled={loading} className="btn-primary w-full justify-center py-3.5">
                {loading ? 'Fetching...' : <><Search size={16} /> Get Admit Card</>}
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">Demo: Enter any enrollment starting with "ANITIO" to see a sample.</p>
          </div>
        </div>

        {/* Admit Card */}
        {card && (
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-end gap-3 mb-4 no-print">
              <button onClick={() => window.print()} className="btn-outline text-sm">
                <Printer size={15} /> Print
              </button>
              <button className="btn-primary text-sm">
                <Download size={15} /> Download PDF
              </button>
            </div>

            <div id="admit-card" className="bg-white rounded-2xl shadow-card-lg overflow-hidden border-2 border-primary-200">
              {/* Header */}
              <div className="bg-primary-900 text-white p-6 text-center">
                <div className="text-2xl font-display font-bold">ANITIO</div>
                <div className="text-xs text-gray-300 tracking-widest">INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP</div>
                <div className="mt-3 text-lg font-semibold text-gold-400">ADMIT CARD / HALL TICKET</div>
                <div className="text-sm text-gray-300">{card.examName}</div>
              </div>

              {/* Student Info */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-28 bg-gray-100 rounded-xl border-2 border-gray-200 flex items-center justify-center flex-shrink-0">
                    <User size={40} className="text-gray-300" />
                    <span className="sr-only">Photo</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 flex-1 text-sm">
                    {[
                      ['Enrollment No.', card.enrollmentNo],
                      ['Student Name', card.studentName],
                      ["Father's Name", card.fatherName],
                      ['Date of Birth', card.dob],
                      ['Course', card.course],
                      ['Semester', card.semester],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <div className="text-xs text-gray-500 font-medium">{label}</div>
                        <div className="font-semibold text-gray-900">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Exam Info */}
              <div className="p-6 border-b border-gray-200 bg-gray-50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  {[
                    { icon: MapPin, label: 'Exam Center', value: card.examCenter },
                    { icon: Calendar, label: 'Exam Dates', value: card.examDate },
                    { icon: Clock, label: 'Reporting Time', value: card.reportingTime },
                    { icon: Clock, label: 'Exam Time', value: card.examTime },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-2">
                      <Icon size={15} className="text-primary-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-gray-500">{label}</div>
                        <div className="font-semibold text-gray-900 text-xs">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subject Schedule */}
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <BookOpen size={16} className="text-primary-600" /> Subject-wise Schedule
                </h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary-50 text-primary-900">
                      <th className="text-left p-2 rounded-l-lg text-xs font-bold">Date</th>
                      <th className="text-left p-2 text-xs font-bold">Time</th>
                      <th className="text-left p-2 text-xs font-bold">Subject Code</th>
                      <th className="text-left p-2 rounded-r-lg text-xs font-bold">Subject Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {card.subjects.map((s, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="p-2 text-gray-700">{s.date}</td>
                        <td className="p-2 text-gray-700">{s.time}</td>
                        <td className="p-2 font-mono text-primary-700 text-xs">{s.code}</td>
                        <td className="p-2 text-gray-700">{s.subject}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer Instructions */}
              <div className="bg-red-50 border-t border-red-200 p-4">
                <div className="text-xs text-red-700 font-semibold mb-2">Important Instructions:</div>
                <ul className="text-xs text-red-600 space-y-1 list-disc list-inside">
                  <li>Carry this admit card to the exam center. Entry without admit card is not permitted.</li>
                  <li>Carry a valid photo ID (Aadhar/Voter ID/PAN). Mobile phones are strictly prohibited.</li>
                  <li>Report 30 minutes before exam time. Late entry is not allowed.</li>
                  <li>This is a computer-generated admit card and does not require a physical signature.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
