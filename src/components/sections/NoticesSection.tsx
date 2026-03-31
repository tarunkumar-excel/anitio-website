import Link from 'next/link';
import { Bell, ArrowRight, Calendar, FileText, Trophy, Star, BookOpen } from 'lucide-react';
import { notices } from '@/data/notices';
import { formatDate } from '@/lib/utils';

const categoryConfig: Record<string, { label: string; color: string; icon: typeof Bell }> = {
  admission: { label: 'Admission', color: 'badge-blue', icon: BookOpen },
  exam:      { label: 'Exam',      color: 'badge-gold', icon: FileText },
  result:    { label: 'Result',    color: 'badge-green', icon: Trophy },
  event:     { label: 'Event',     color: 'bg-purple-100 text-purple-700 badge', icon: Star },
  general:   { label: 'General',   color: 'bg-gray-100 text-gray-700 badge', icon: Bell },
};

export default function NoticesSection() {
  const recent = notices.slice(0, 6);

  return (
    <>
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="section-subtitle">Stay Updated</div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-900">
                    Latest Notices & Announcements
                  </h2>
                </div>
                <Link href="/notices" className="btn-ghost text-sm hidden sm:flex">
                  View All <ArrowRight size={14} />
                </Link>
              </div>

              <div className="space-y-3">
                {recent.map((notice) => {
                  const config = categoryConfig[notice.category];
                  const Icon = config.icon;
                  return (
                    <div key={notice.id} className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 hover:shadow-card cursor-pointer ${notice.important ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'}`}>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${notice.important ? 'bg-red-100 text-red-600' : 'bg-primary-100 text-primary-600'}`}>
                        <Icon size={17} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          {notice.important && <span className="badge bg-red-100 text-red-700 text-[10px] uppercase font-bold">Important</span>}
                          <span className={`${config.color} text-[10px] uppercase font-bold`}>{config.label}</span>
                        </div>
                        <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-1">{notice.title}</h3>
                        <p className="text-xs text-gray-500 line-clamp-1">{notice.content}</p>
                        <div className="flex items-center gap-1 mt-1 text-[11px] text-gray-400">
                          <Calendar size={10} />{formatDate(notice.date)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary-900 to-primary-700 rounded-2xl p-6 text-white">
                <h3 className="font-display font-bold text-lg mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  {[
                    { href: '/admission', label: 'Apply for Admission', icon: BookOpen },
                    { href: '/results', label: 'Check Result', icon: Trophy },
                    { href: '/exam', label: 'View Exam Schedule', icon: FileText },
                    { href: '/payment', label: 'Pay Fees Online', icon: Star },
                    { href: '/schedule', label: 'Class Schedule', icon: Calendar },
                    { href: '/franchise/register', label: 'Apply for Franchise', icon: Bell },
                  ].map(({ href, label, icon: Icon }) => (
                    <Link key={href} href={href} className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-sm font-medium group">
                      <Icon size={15} className="text-gold-400" />
                      {label}
                      <ArrowRight size={13} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gold-50 border border-gold-200 rounded-2xl p-6">
                <div className="w-12 h-12 bg-gold-500 rounded-2xl flex items-center justify-center mb-4">
                  <BookOpen size={24} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-primary-900 mb-2">Admissions Open!</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">July 2024 batch enrollments are live. Limited seats available. Apply now!</p>
                <Link href="/admission" className="btn-primary w-full justify-center text-sm py-3">
                  Apply Online Now <ArrowRight size={15} />
                </Link>
                <p className="text-xs text-gray-500 text-center mt-3">Scholarship available for meritorious students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-950">Ready to Start Your IT Career?</h2>
              <p className="text-primary-800 font-medium mt-1">Join 15,000+ students who have transformed their lives with ANITIO</p>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <Link href="/admission" className="bg-primary-900 hover:bg-primary-950 text-white font-semibold px-8 py-4 rounded-xl transition-colors inline-flex items-center gap-2">
                Enroll Now <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="bg-white/30 hover:bg-white/50 text-primary-900 font-semibold px-6 py-4 rounded-xl transition-colors">
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
