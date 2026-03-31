import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, MapPin, Wifi, Download, AlertCircle, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Exam Schedule | ANITIO',
  description: 'View upcoming examination schedules for all courses at ANITIO. Download admit cards and check exam guidelines.',
};

const exams = [
  { id: 'E001', examName: 'PGDCA Semester II Examination', course: 'PGDCA', date: '2024-06-20', time: '10:00 AM – 1:00 PM', duration: '3 Hours', center: 'Main Campus, Block A', mode: 'offline', type: 'internal', maxMarks: 100, passingMarks: 40, status: 'upcoming' },
  { id: 'E002', examName: 'DCA Final Examination', course: 'DCA', date: '2024-06-22', time: '2:00 PM – 4:00 PM', duration: '2 Hours', center: 'All Centers', mode: 'offline', type: 'internal', maxMarks: 100, passingMarks: 40, status: 'upcoming' },
  { id: 'E003', examName: 'Python Certification Online Test', course: 'Python Programming', date: '2024-06-25', time: '11:00 AM – 12:00 PM', duration: '1 Hour', center: 'Online (from home)', mode: 'online', type: 'internal', maxMarks: 50, passingMarks: 20, status: 'upcoming' },
  { id: 'E004', examName: 'BCA Semester IV – University Exam', course: 'BCA', date: '2024-07-01', time: '9:00 AM – 12:00 PM', duration: '3 Hours', center: 'University Center', mode: 'offline', type: 'university', maxMarks: 100, passingMarks: 40, status: 'upcoming' },
  { id: 'E005', examName: 'Web Development Project Submission', course: 'Full Stack Web Dev', date: '2024-06-28', time: '10:00 AM', duration: 'All Day', center: 'Online Portal', mode: 'online', type: 'internal', maxMarks: 100, passingMarks: 50, status: 'upcoming' },
  { id: 'E006', examName: 'Tally Prime Practical Test', course: 'Tally Prime + GST', date: '2024-06-21', time: '3:00 PM – 4:00 PM', duration: '1 Hour', center: 'All Centers', mode: 'offline', type: 'internal', maxMarks: 50, passingMarks: 20, status: 'upcoming' },
  { id: 'E007', examName: 'CCC Theory & Practical (NIELIT)', course: 'CCC', date: '2024-06-15', time: '10:00 AM – 12:00 PM', duration: '2 Hours', center: 'NIELIT Center', mode: 'offline', type: 'external', maxMarks: 100, passingMarks: 50, status: 'completed' },
  { id: 'E008', examName: 'PGDCA Semester I – Re-Exam', course: 'PGDCA', date: '2024-06-18', time: '2:00 PM – 5:00 PM', duration: '3 Hours', center: 'Main Campus, Block B', mode: 'offline', type: 'internal', maxMarks: 100, passingMarks: 40, status: 'completed' },
];

const guidelines = [
  'Carry your Admit Card and valid Photo ID (Aadhaar / PAN / Voter ID) to the exam center.',
  'Students must report 30 minutes before the scheduled exam time. Late entries not permitted.',
  'Electronic devices including mobile phones are strictly prohibited in the examination hall.',
  'For online exams, ensure stable internet connection and use Chrome/Firefox browser.',
  'Blue/black pen only for offline exams. Pencil is allowed for rough work only.',
  'Malpractice will result in immediate disqualification and cancellation of enrollment.',
  'Contact the exam cell at exam@anitio.in or +91 98765 43210 for any queries.',
];

export default function ExamPage() {
  const upcoming = exams.filter(e => e.status === 'upcoming');
  const completed = exams.filter(e => e.status === 'completed');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-14">
        <div className="container-custom">
          <div className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-2">Examinations</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-3">
            Exam <span className="text-gold-400">Schedule</span>
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl mb-6">
            All upcoming examinations for ANITIO students. Please check dates carefully and download your admit card before the exam.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/exam/admit-card" className="btn-primary text-sm">
              <FileText size={15} /> Download Admit Card
            </Link>
            <Link href="/exam/online" className="btn-outline border-white/30 text-white hover:bg-white/10 text-sm">
              <Wifi size={15} /> Online Exam Portal
            </Link>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Important Notice */}
        <div className="bg-gold-50 border-l-4 border-gold-500 rounded-xl p-5 mb-10 flex items-start gap-3">
          <AlertCircle size={20} className="text-gold-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-gold-800 mb-1">Important Notice – June 2024 Examinations</div>
            <p className="text-sm text-gold-700">
              Internal examinations for all ongoing batches are scheduled from June 20–28, 2024.
              Students must carry admit cards and valid photo ID. Admit cards are available for download from the portal below.
            </p>
          </div>
        </div>

        {/* Upcoming Exams */}
        <div className="mb-12">
          <h2 className="font-display font-bold text-2xl text-primary-900 mb-6 flex items-center gap-2">
            <Calendar size={22} className="text-primary-600" />
            Upcoming Examinations
            <span className="badge-blue text-xs ml-2">{upcoming.length}</span>
          </h2>

          <div className="space-y-4">
            {upcoming.map(exam => (
              <div key={exam.id} className="card p-5 hover:shadow-card-lg transition-all">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`badge text-[10px] font-bold ${
                        exam.type === 'university' ? 'bg-purple-100 text-purple-700' :
                        exam.type === 'external' ? 'bg-orange-100 text-orange-700' :
                        'badge-blue'
                      }`}>
                        {exam.type.charAt(0).toUpperCase() + exam.type.slice(1)}
                      </span>
                      <span className={`badge text-[10px] ${
                        exam.mode === 'online' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {exam.mode === 'online' ? <Wifi size={9} /> : <MapPin size={9} />}
                        {exam.mode.charAt(0).toUpperCase() + exam.mode.slice(1)}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-gray-900 text-base mb-1">{exam.examName}</h3>
                    <div className="text-xs text-primary-600 font-semibold mb-3">{exam.course}</div>
                    <div className="flex flex-wrap gap-4 text-xs text-gray-600">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-primary-500" />
                        {new Date(exam.date).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} className="text-primary-500" /> {exam.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} className="text-orange-500" /> Duration: {exam.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-primary-500" /> {exam.center}
                      </span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xs text-gray-500 mb-1">Max Marks</div>
                    <div className="text-2xl font-bold text-primary-700">{exam.maxMarks}</div>
                    <div className="text-[10px] text-gray-400">Pass: {exam.passingMarks}</div>
                    <button className="btn-outline text-xs py-1.5 px-3 mt-2">
                      <Download size={11} /> Admit Card
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Exams */}
        <div className="mb-12">
          <h2 className="font-display font-bold text-xl text-gray-600 mb-4">
            Recently Completed
          </h2>
          <div className="space-y-3">
            {completed.map(exam => (
              <div key={exam.id} className="bg-white rounded-xl p-4 border border-gray-100 opacity-70">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <h3 className="font-semibold text-gray-700 text-sm">{exam.examName}</h3>
                    <div className="text-xs text-gray-400 mt-1">
                      {new Date(exam.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} · {exam.course}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="badge text-[10px] bg-green-100 text-green-700">Completed</span>
                    <Link href="/results" className="text-xs text-primary-600 hover:underline">View Result →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exam Guidelines */}
        <div className="card p-7">
          <h3 className="font-display font-bold text-xl text-primary-900 mb-5">Examination Guidelines</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {guidelines.map((g, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center text-[10px] font-bold text-primary-700 flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                {g}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
