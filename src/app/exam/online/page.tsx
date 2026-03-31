'use client';

import { useState, useEffect, useCallback } from 'react';
import { Clock, CheckCircle, AlertCircle, ArrowRight, ArrowLeft, Flag, Trophy, BookOpen } from 'lucide-react';
import Link from 'next/link';

// Sample exam questions
const questions = [
  {
    id: 1,
    question: 'What does CPU stand for?',
    options: ['Central Processing Unit', 'Computer Processing Unit', 'Central Program Unit', 'Central Processor Utility'],
    correct: 0,
    marks: 1,
  },
  {
    id: 2,
    question: 'Which of the following is NOT an operating system?',
    options: ['Windows 11', 'Ubuntu', 'MS Excel', 'macOS'],
    correct: 2,
    marks: 1,
  },
  {
    id: 3,
    question: 'What is the full form of HTML?',
    options: ['Hyper Text Markup Language', 'High Text Markup Language', 'Hyper Transfer Markup Language', 'Hyper Text Making Language'],
    correct: 0,
    marks: 1,
  },
  {
    id: 4,
    question: 'Which language is primarily used for web styling?',
    options: ['Python', 'Java', 'CSS', 'C++'],
    correct: 2,
    marks: 1,
  },
  {
    id: 5,
    question: 'RAM stands for:',
    options: ['Read Access Memory', 'Random Access Memory', 'Read And Memory', 'Random And Memory'],
    correct: 1,
    marks: 1,
  },
  {
    id: 6,
    question: 'Which of the following is a programming language?',
    options: ['HTTP', 'FTP', 'Python', 'SMTP'],
    correct: 2,
    marks: 1,
  },
  {
    id: 7,
    question: 'The binary number system uses which base?',
    options: ['Base 8', 'Base 10', 'Base 16', 'Base 2'],
    correct: 3,
    marks: 1,
  },
  {
    id: 8,
    question: 'Which shortcut key is used to save a document in MS Word?',
    options: ['Ctrl+P', 'Ctrl+S', 'Ctrl+D', 'Alt+S'],
    correct: 1,
    marks: 1,
  },
  {
    id: 9,
    question: 'What is the extension of an MS Excel file?',
    options: ['.doc', '.ppt', '.xlsx', '.pdf'],
    correct: 2,
    marks: 1,
  },
  {
    id: 10,
    question: 'Which of the following is a search engine?',
    options: ['Chrome', 'Google', 'Windows', 'Linux'],
    correct: 1,
    marks: 1,
  },
];

const EXAM_DURATION = 10 * 60; // 10 minutes

type Phase = 'login' | 'instructions' | 'exam' | 'result';

export default function OnlineExamPage() {
  const [phase, setPhase] = useState<Phase>('login');
  const [credentials, setCredentials] = useState({ enrollment: '', dob: '', examCode: '' });
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [visited, setVisited] = useState<Set<number>>(new Set([0]));
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Timer countdown
  useEffect(() => {
    if (phase !== 'exam' || submitted) return;
    if (timeLeft <= 0) { handleSubmit(); return; }
    const t = setTimeout(() => setTimeLeft(p => p - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, timeLeft, submitted]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const handleLogin = () => {
    if (!credentials.enrollment || !credentials.dob || !credentials.examCode) {
      setError('Please fill all fields.');
      return;
    }
    setError('');
    setPhase('instructions');
  };

  const handleAnswer = (qIdx: number, optIdx: number) => {
    setAnswers(p => ({ ...p, [qIdx]: optIdx }));
  };

  const goTo = (idx: number) => {
    setCurrent(idx);
    setVisited(p => new Set([...p, idx]));
  };

  const toggleFlag = () => {
    setFlagged(p => {
      const n = new Set(p);
      n.has(current) ? n.delete(current) : n.add(current);
      return n;
    });
  };

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
    setPhase('result');
  }, []);

  const score = questions.reduce((acc, q, i) => acc + (answers[i] === q.correct ? q.marks : 0), 0);
  const total = questions.length;
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 40;

  // ── LOGIN PHASE ──────────────────────────────────────────────────────────
  if (phase === 'login') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen size={30} className="text-gold-400" />
            </div>
            <h1 className="text-2xl font-display font-bold text-primary-900">Online Examination Portal</h1>
            <p className="text-gray-500 text-sm mt-1">ANITIO Information Technology & Skill Development LLP</p>
          </div>

          <div className="bg-white rounded-2xl shadow-card-lg p-8">
            <h2 className="font-display font-bold text-xl text-primary-900 mb-6">Student Login</h2>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 text-sm mb-4 flex items-center gap-2">
                <AlertCircle size={15} /> {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Enrollment Number</label>
                <input
                  type="text"
                  placeholder="e.g. ANITIO24101234"
                  value={credentials.enrollment}
                  onChange={e => setCredentials(p => ({ ...p, enrollment: e.target.value }))}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Date of Birth</label>
                <input
                  type="date"
                  value={credentials.dob}
                  onChange={e => setCredentials(p => ({ ...p, dob: e.target.value }))}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Exam Code</label>
                <input
                  type="text"
                  placeholder="e.g. EXAM2024-CCC"
                  value={credentials.examCode}
                  onChange={e => setCredentials(p => ({ ...p, examCode: e.target.value }))}
                  className="input-field"
                />
              </div>
              <button onClick={handleLogin} className="btn-primary w-full justify-center py-3.5">
                Login & Continue <ArrowRight size={16} />
              </button>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl text-xs text-blue-700">
              <strong>Demo:</strong> Enter any values to access the sample exam. In production, credentials are validated against the database.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── INSTRUCTIONS PHASE ───────────────────────────────────────────────────
  if (phase === 'instructions') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-card-lg p-8">
            <h2 className="font-display font-bold text-2xl text-primary-900 mb-2">Exam Instructions</h2>
            <p className="text-gray-500 text-sm mb-6">Please read carefully before starting</p>

            <div className="space-y-3 mb-8">
              {[
                `This exam contains ${total} questions. Total marks: ${total}.`,
                `Time allowed: 10 minutes. The exam will auto-submit when time expires.`,
                'Each question carries 1 mark. There is no negative marking.',
                'You can navigate between questions using the question panel on the right.',
                'You can flag questions for review using the Flag button.',
                'Do NOT refresh or close the browser during the exam.',
                'Minimum passing marks: 40% (4 out of 10).',
                'Once submitted, answers cannot be changed.',
              ].map((rule, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <div className="w-5 h-5 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  {rule}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {[
                { color: 'bg-green-500', label: 'Answered' },
                { color: 'bg-gray-200', label: 'Not Visited' },
                { color: 'bg-orange-400', label: 'Visited' },
                { color: 'bg-yellow-400', label: 'Flagged' },
              ].map(({ color, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs text-gray-600">
                  <div className={`w-5 h-5 rounded ${color}`} />
                  {label}
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button onClick={() => setPhase('login')} className="btn-outline flex-1 justify-center">
                Back
              </button>
              <button
                onClick={() => setPhase('exam')}
                className="btn-primary flex-1 justify-center"
              >
                Start Exam <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── EXAM PHASE ───────────────────────────────────────────────────────────
  if (phase === 'exam') {
    const q = questions[current];
    const answered = Object.keys(answers).length;

    return (
      <div className="min-h-screen bg-gray-100">
        {/* Top Bar */}
        <div className="bg-primary-900 text-white py-3 px-4 flex items-center justify-between sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <div className="font-display font-bold text-base">ANITIO Online Exam</div>
            <div className="hidden sm:block text-xs text-gray-400">| {credentials.enrollment || 'DEMO'}</div>
          </div>
          <div className={`flex items-center gap-2 text-lg font-bold font-mono px-4 py-1.5 rounded-lg ${timeLeft < 120 ? 'bg-red-600 animate-pulse' : 'bg-primary-700'}`}>
            <Clock size={18} />
            {formatTime(timeLeft)}
          </div>
        </div>

        <div className="flex h-[calc(100vh-52px)]">
          {/* Question Area */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-2xl mx-auto">
              {/* Question */}
              <div className="bg-white rounded-2xl shadow-card p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="badge-blue">Question {current + 1} of {total}</span>
                  <span className="text-xs text-gray-500">{q.marks} Mark</span>
                </div>
                <p className="text-gray-900 font-medium text-lg leading-relaxed">{q.question}</p>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(current, i)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${
                      answers[current] === i
                        ? 'border-primary-600 bg-primary-50 text-primary-900'
                        : 'border-gray-200 bg-white hover:border-primary-300 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                      answers[current] === i
                        ? 'border-primary-600 bg-primary-600 text-white'
                        : 'border-gray-300 text-gray-500'
                    }`}>
                      {['A', 'B', 'C', 'D'][i]}
                    </div>
                    {opt}
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => goTo(Math.max(0, current - 1))}
                  disabled={current === 0}
                  className="btn-outline disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ArrowLeft size={16} /> Previous
                </button>
                <button
                  onClick={toggleFlag}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    flagged.has(current) ? 'bg-yellow-100 text-yellow-700 border border-yellow-300' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Flag size={14} />
                  {flagged.has(current) ? 'Flagged' : 'Flag for Review'}
                </button>
                {current < total - 1 ? (
                  <button onClick={() => goTo(current + 1)} className="btn-primary">
                    Next <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (window.confirm(`You have answered ${answered}/${total} questions. Submit now?`)) {
                        handleSubmit();
                      }
                    }}
                    className="btn-primary bg-green-600 hover:bg-green-700"
                  >
                    Submit Exam <CheckCircle size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Question Panel Sidebar */}
          <div className="w-64 bg-white border-l border-gray-200 p-4 overflow-y-auto hidden md:block">
            <div className="mb-4">
              <div className="text-sm font-semibold text-gray-700 mb-2">Question Navigator</div>
              <div className="grid grid-cols-5 gap-1.5">
                {questions.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-9 h-9 rounded-lg text-xs font-bold transition-colors ${
                      i === current ? 'ring-2 ring-primary-500' : ''
                    } ${
                      answers[i] !== undefined
                        ? 'bg-green-500 text-white'
                        : flagged.has(i)
                        ? 'bg-yellow-400 text-white'
                        : visited.has(i)
                        ? 'bg-orange-400 text-white'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              {[
                { color: 'bg-green-500', label: `Answered (${Object.keys(answers).length})` },
                { color: 'bg-orange-400', label: `Visited (${visited.size})` },
                { color: 'bg-yellow-400', label: `Flagged (${flagged.size})` },
                { color: 'bg-gray-200', label: `Not Visited (${total - visited.size})` },
              ].map(({ color, label }) => (
                <div key={label} className="flex items-center gap-2 text-gray-600">
                  <div className={`w-3 h-3 rounded ${color}`} />
                  {label}
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                if (window.confirm(`Submit exam? Answered: ${answered}/${total}`)) handleSubmit();
              }}
              className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
            >
              Submit Exam
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── RESULT PHASE ─────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-card-lg overflow-hidden">
          {/* Result Header */}
          <div className={`p-8 text-center text-white ${passed ? 'bg-green-600' : 'bg-red-600'}`}>
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              {passed
                ? <Trophy size={40} className="text-yellow-300" />
                : <AlertCircle size={40} />
              }
            </div>
            <h2 className="text-3xl font-display font-bold mb-1">{passed ? 'Congratulations!' : 'Better Luck Next Time'}</h2>
            <p className="text-white/80">{passed ? 'You have successfully passed the exam.' : 'You did not meet the minimum passing criteria.'}</p>
          </div>

          {/* Score */}
          <div className="p-8">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center bg-gray-50 rounded-xl p-4">
                <div className="text-3xl font-display font-bold text-primary-700">{score}/{total}</div>
                <div className="text-xs text-gray-500 mt-1">Score</div>
              </div>
              <div className="text-center bg-gray-50 rounded-xl p-4">
                <div className="text-3xl font-display font-bold text-primary-700">{percentage}%</div>
                <div className="text-xs text-gray-500 mt-1">Percentage</div>
              </div>
              <div className="text-center bg-gray-50 rounded-xl p-4">
                <div className={`text-3xl font-display font-bold ${passed ? 'text-green-600' : 'text-red-600'}`}>
                  {passed ? 'PASS' : 'FAIL'}
                </div>
                <div className="text-xs text-gray-500 mt-1">Status</div>
              </div>
            </div>

            {/* Answer Review */}
            <div className="border border-gray-200 rounded-xl overflow-hidden mb-6">
              <div className="bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700 border-b border-gray-200">
                Answer Review
              </div>
              <div className="divide-y divide-gray-100 max-h-64 overflow-y-auto">
                {questions.map((q, i) => {
                  const isCorrect = answers[i] === q.correct;
                  return (
                    <div key={i} className={`px-4 py-3 text-sm ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                      <div className="flex items-start gap-2">
                        {isCorrect
                          ? <CheckCircle size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                          : <AlertCircle size={14} className="text-red-600 flex-shrink-0 mt-0.5" />
                        }
                        <div className="flex-1">
                          <div className="font-medium text-gray-800 text-xs">{i + 1}. {q.question}</div>
                          {!isCorrect && (
                            <div className="text-xs mt-0.5">
                              <span className="text-red-600">Your answer: {answers[i] !== undefined ? q.options[answers[i]] : 'Not answered'}</span>
                              <br />
                              <span className="text-green-600">Correct: {q.options[q.correct]}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="/results" className="btn-outline flex-1 justify-center">View Official Results</Link>
              <Link href="/courses" className="btn-primary flex-1 justify-center">Explore Courses</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
