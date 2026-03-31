'use client';

import { useState } from 'react';
import { Search, Trophy, Download, AlertCircle, CheckCircle, XCircle, User, BookOpen, Calendar } from 'lucide-react';
import { getGrade, GRADE_SCALE } from '@/lib/utils';

// Sample result data
const sampleResults = [
  {
    enrollmentNo: 'ANITIO24101234',
    studentName: 'Priya Sharma',
    courseName: 'PGDCA – Post Graduate Diploma in Computer Applications',
    examName: 'PGDCA Semester II Examination',
    semester: 'Semester II',
    subjects: [
      { subjectCode: 'PGDCA-201', subjectName: 'Advanced Java Programming', maxMarks: 100, obtainedMarks: 87, grade: 'A+' },
      { subjectCode: 'PGDCA-202', subjectName: 'Advanced Web Technologies', maxMarks: 100, obtainedMarks: 91, grade: 'O' },
      { subjectCode: 'PGDCA-203', subjectName: 'Software Engineering', maxMarks: 100, obtainedMarks: 78, grade: 'A' },
      { subjectCode: 'PGDCA-204', subjectName: 'Project Work', maxMarks: 100, obtainedMarks: 92, grade: 'O' },
    ],
    totalMarks: 400,
    obtainedMarks: 348,
    percentage: '87.00',
    grade: 'A+',
    status: 'pass' as const,
    datePublished: '2024-05-28',
  },
  {
    enrollmentNo: 'ANITIO24205678',
    studentName: 'Rohit Kumar',
    courseName: 'DCA – Diploma in Computer Applications',
    examName: 'DCA Final Examination',
    subjects: [
      { subjectCode: 'DCA-101', subjectName: 'Computer Fundamentals', maxMarks: 100, obtainedMarks: 72, grade: 'A' },
      { subjectCode: 'DCA-102', subjectName: 'MS Office Suite', maxMarks: 100, obtainedMarks: 68, grade: 'B+' },
      { subjectCode: 'DCA-103', subjectName: 'Internet & Email', maxMarks: 100, obtainedMarks: 80, grade: 'A+' },
    ],
    totalMarks: 300,
    obtainedMarks: 220,
    percentage: '73.33',
    grade: 'A',
    status: 'pass' as const,
    datePublished: '2024-05-20',
  },
];

type Result = typeof sampleResults[0];

function ResultCard({ result }: { result: Result }) {
  const [showDetails, setShowDetails] = useState(false);
  const isPass = result.status === 'pass';
  const pct = parseFloat(result.percentage);

  return (
    <div className={`card border-2 ${isPass ? 'border-green-200' : 'border-red-200'}`}>
      {/* Header */}
      <div className={`p-5 ${isPass ? 'bg-green-50' : 'bg-red-50'}`}>
        <div className="flex items-start justify-between flex-wrap gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {isPass
                ? <CheckCircle size={16} className="text-green-600" />
                : <XCircle size={16} className="text-red-600" />}
              <span className={`font-bold text-sm ${isPass ? 'text-green-700' : 'text-red-700'}`}>
                {isPass ? 'PASS' : 'FAIL'}
              </span>
              <span className="badge badge-blue text-[10px]">{result.grade}</span>
            </div>
            <h3 className="font-display font-bold text-gray-900 text-lg">{result.studentName}</h3>
            <div className="text-xs text-gray-500 mt-0.5 font-mono">{result.enrollmentNo}</div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary-700">{result.percentage}%</div>
            <div className="text-xs text-gray-500">{result.obtainedMarks}/{result.totalMarks} Marks</div>
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="p-5 border-t border-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <div>
            <div className="text-xs text-gray-400">Course</div>
            <div className="font-medium text-gray-900 text-xs leading-snug mt-0.5">{result.courseName}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Examination</div>
            <div className="font-medium text-gray-900 text-xs mt-0.5">{result.examName}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Published</div>
            <div className="font-medium text-gray-900 text-xs mt-0.5">{new Date(result.datePublished).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Score</span><span>{pct}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${
                pct >= 70 ? 'bg-green-500' : pct >= 50 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* Toggle Details */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-sm text-primary-600 hover:text-primary-800 font-medium mt-4 flex items-center gap-1 transition-colors"
        >
          {showDetails ? 'Hide' : 'View'} Subject-wise Result
          <span className={`transition-transform ${showDetails ? 'rotate-180' : ''}`}>▼</span>
        </button>

        {showDetails && (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-2 text-xs font-semibold text-gray-600 border border-gray-200">Code</th>
                  <th className="text-left p-2 text-xs font-semibold text-gray-600 border border-gray-200">Subject</th>
                  <th className="text-center p-2 text-xs font-semibold text-gray-600 border border-gray-200">Max</th>
                  <th className="text-center p-2 text-xs font-semibold text-gray-600 border border-gray-200">Obtained</th>
                  <th className="text-center p-2 text-xs font-semibold text-gray-600 border border-gray-200">Grade</th>
                </tr>
              </thead>
              <tbody>
                {result.subjects.map((s) => (
                  <tr key={s.subjectCode} className="hover:bg-gray-50">
                    <td className="p-2 text-xs font-mono text-gray-600 border border-gray-200">{s.subjectCode}</td>
                    <td className="p-2 text-xs text-gray-900 border border-gray-200">{s.subjectName}</td>
                    <td className="p-2 text-xs text-center text-gray-600 border border-gray-200">{s.maxMarks}</td>
                    <td className="p-2 text-xs text-center font-semibold text-gray-900 border border-gray-200">{s.obtainedMarks}</td>
                    <td className={`p-2 text-xs text-center font-bold border border-gray-200 ${
                      s.obtainedMarks >= 70 ? 'text-green-700' :
                      s.obtainedMarks >= 50 ? 'text-yellow-700' : 'text-red-700'
                    }`}>{s.grade}</td>
                  </tr>
                ))}
                <tr className="bg-primary-50 font-bold">
                  <td colSpan={2} className="p-2 text-xs border border-gray-200">Total</td>
                  <td className="p-2 text-xs text-center border border-gray-200">{result.totalMarks}</td>
                  <td className="p-2 text-xs text-center border border-gray-200">{result.obtainedMarks}</td>
                  <td className="p-2 text-xs text-center text-primary-700 border border-gray-200">{result.grade}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
          <button className="btn-secondary text-xs py-2 flex-1 justify-center">
            <Download size={13} /> Download Marksheet
          </button>
          <button className="btn-outline text-xs py-2 flex-1 justify-center">
            <Trophy size={13} /> Download Certificate
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    const found = sampleResults.find(
      r => r.enrollmentNo.toLowerCase() === query.toLowerCase() ||
           r.studentName.toLowerCase().includes(query.toLowerCase())
    );
    setResult(found || null);
    setSearched(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-14">
        <div className="container-custom text-center">
          <div className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-2">Examination Results</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-3">
            Check Your <span className="text-gold-400">Results</span>
          </h1>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-8">
            Enter your Enrollment Number or Name to view your examination results, subject-wise marks, and download your marksheet.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto flex gap-3">
            <div className="flex-1 relative">
              <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                className="w-full pl-11 pr-4 py-4 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                placeholder="Enter Enrollment No. (e.g. ANITIO24101234) or Name"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <button
              onClick={handleSearch}
              disabled={loading}
              className="btn-primary px-7 py-4 text-sm disabled:opacity-70"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <><Search size={15} /> Search</>
              )}
            </button>
          </div>

          {/* Sample */}
          <p className="text-gray-400 text-xs mt-3">
            Demo: Try enrollment no. <span className="font-mono text-gold-400 cursor-pointer" onClick={() => setQuery('ANITIO24101234')}>ANITIO24101234</span>
          </p>
        </div>
      </div>

      <div className="container-custom py-12 max-w-4xl">
        {/* Results */}
        {searched && (
          result ? (
            <ResultCard result={result} />
          ) : (
            <div className="card p-12 text-center">
              <AlertCircle size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="font-display text-xl text-gray-600 mb-2">No Result Found</h3>
              <p className="text-gray-400 text-sm max-w-sm mx-auto">
                No result found for "<strong>{query}</strong>". Please verify your enrollment number or contact the institute.
              </p>
            </div>
          )
        )}

        {/* Grade Scale */}
        <div className="mt-10 card p-6">
          <h3 className="font-display font-bold text-primary-900 text-lg mb-4">Grade Scale Reference</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {Object.entries(GRADE_SCALE).map(([grade, range]) => (
              <div key={grade} className="text-center bg-gray-50 rounded-xl p-3">
                <div className={`text-xl font-bold font-display mb-1 ${
                  grade === 'O' ? 'text-green-600' :
                  grade === 'A+' ? 'text-emerald-600' :
                  grade === 'A' ? 'text-blue-600' :
                  grade === 'B+' ? 'text-indigo-600' :
                  grade === 'B' ? 'text-purple-600' :
                  grade === 'C' ? 'text-yellow-600' : 'text-red-600'
                }`}>{grade}</div>
                <div className="text-[10px] text-gray-500">{range}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Results Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <Trophy size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-blue-900 mb-1">Recently Published Results</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• PGDCA Semester II – May 2024 Batch → Published on 28 May 2024</li>
                <li>• DCA Final Examination – April 2024 → Published on 20 May 2024</li>
                <li>• BCA Semester IV – April 2024 → Publication expected 10 June 2024</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
