'use client';

import { Bell } from 'lucide-react';

const tickerItems = [
  '🔔 Admissions Open for July 2024 Batch – BCA, MCA, PGDCA  |  Apply Now!',
  '📢 Internal Exam Schedule Released – June 20–28, 2024',
  '🏆 PGDCA Sem II Results Declared – Check Now in Results Section',
  '🎓 New Course Launched: Full Stack Web Development with Job Guarantee',
  '🤝 Franchise Opportunities Available – Apply for 2024-25 Batch',
  '💳 Online Fee Payment Now Available – UPI, Net Banking, Cards Accepted',
  '📅 Free AI & ChatGPT Workshop – June 15, 2024 | Register Now',
  '🌟 Scholarship Available – Merit-Based Fee Concession for 80%+ Students',
];

export default function NewsTicker() {
  const repeated = [...tickerItems, ...tickerItems];

  return (
    <div className="bg-primary-700 text-white py-2 overflow-hidden">
      <div className="flex items-center">
        {/* Label */}
        <div className="flex-shrink-0 bg-gold-500 text-primary-900 font-bold text-xs px-4 py-0.5 flex items-center gap-1.5 z-10">
          <Bell size={12} className="animate-pulse" />
          <span className="uppercase tracking-wide">Latest</span>
        </div>

        {/* Ticker */}
        <div className="ticker-wrap flex-1 ml-3">
          <div className="ticker-content text-xs font-medium">
            {repeated.map((item, i) => (
              <span key={i} className="mx-8 text-white/90">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
