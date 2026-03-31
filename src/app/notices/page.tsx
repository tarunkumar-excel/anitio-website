import { Metadata } from 'next';
import { Bell, Calendar, BookOpen, FileText, Trophy, Star, AlertTriangle, Download } from 'lucide-react';
import { notices } from '@/data/notices';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Notices & Announcements | ANITIO IT & Skill Development',
  description: 'Latest notices, exam schedules, result announcements, and important updates from ANITIO.',
};

const categoryConfig: Record<string, { label: string; bg: string; icon: typeof Bell }> = {
  admission: { label: 'Admission', bg: 'bg-blue-100 text-blue-700', icon: BookOpen },
  exam:      { label: 'Exam',      bg: 'bg-amber-100 text-amber-700', icon: FileText },
  result:    { label: 'Result',    bg: 'bg-green-100 text-green-700', icon: Trophy },
  event:     { label: 'Event',     bg: 'bg-purple-100 text-purple-700', icon: Star },
  general:   { label: 'General',   bg: 'bg-gray-100 text-gray-700', icon: Bell },
};

export default function NoticesPage() {
  const important = notices.filter(n => n.important);
  const all = notices;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-14">
        <div className="container-custom">
          <div className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">Stay Informed</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">Notices & Announcements</h1>
          <p className="text-gray-300 max-w-xl">Important notices, examination schedules, result declarations, events, and updates from ANITIO.</p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Important Notices */}
        {important.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <AlertTriangle size={20} className="text-red-500" />
              <h2 className="text-xl font-display font-bold text-gray-900">Important Notices</h2>
            </div>
            <div className="space-y-4">
              {important.map((notice) => {
                const config = categoryConfig[notice.category];
                const Icon = config.icon;
                return (
                  <div key={notice.id} className="bg-red-50 border-l-4 border-red-500 rounded-xl p-5 flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-red-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <span className="badge bg-red-100 text-red-700 text-[10px] uppercase font-bold">Important</span>
                        <span className={`badge ${config.bg} text-[10px] uppercase font-bold`}>{config.label}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{notice.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-2">{notice.content}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar size={11} />{formatDate(notice.date)}
                      </div>
                    </div>
                    {notice.attachment && (
                      <button className="btn-outline text-xs py-1.5 px-3 flex-shrink-0">
                        <Download size={12} /> Download
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* All Notices */}
        <div>
          <h2 className="text-xl font-display font-bold text-gray-900 mb-5">All Notices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {all.map((notice) => {
              const config = categoryConfig[notice.category];
              const Icon = config.icon;
              return (
                <div key={notice.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-card transition-all duration-200 flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${config.bg}`}>
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      {notice.important && <span className="badge bg-red-100 text-red-700 text-[10px] uppercase font-bold">Important</span>}
                      <span className={`badge ${config.bg} text-[10px] uppercase font-bold`}>{config.label}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-1">{notice.title}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-2">{notice.content}</p>
                    <div className="flex items-center gap-1 text-[11px] text-gray-400">
                      <Calendar size={10} />{formatDate(notice.date)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
