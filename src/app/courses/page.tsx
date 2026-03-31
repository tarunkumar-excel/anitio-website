import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen, Clock, Users, Star, ArrowRight, Award, Wifi, MapPin, Filter
} from 'lucide-react';
import { courses } from '@/data/courses';
import { formatCurrency, calculateDiscount } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'All Courses – BCA, MCA, PGDCA, Python, Web Dev & More',
  description: 'Explore 30+ computer courses at ANITIO — university degrees, diplomas, certifications, and vocational programs in online & offline mode.',
};

const CATEGORY_LABELS: Record<string, string> = {
  university: 'University Programs',
  diploma: 'Diploma Courses',
  certification: 'Certification Courses',
  vocational: 'Vocational Programs',
  'short-term': 'Short-Term Courses',
};

export default function CoursesPage({
  searchParams,
}: {
  searchParams: { category?: string; mode?: string };
}) {
  const { category, mode } = searchParams;

  let filtered = courses;
  if (category && category !== 'all') filtered = filtered.filter(c => c.category === category);
  if (mode) filtered = filtered.filter(c => c.mode === mode || c.mode === 'hybrid');

  const grouped = filtered.reduce((acc, c) => {
    const cat = c.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(c);
    return acc;
  }, {} as Record<string, typeof courses>);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-14">
        <div className="container-custom">
          <div className="text-gold-400 font-semibold text-xs uppercase tracking-widest mb-2">Our Programs</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-3">
            Explore All <span className="text-gold-400">Courses</span>
          </h1>
          <p className="text-gray-300 text-base max-w-2xl">
            From foundational computer skills to university degrees — find the perfect program to launch or advance your IT career.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[{ id: '', label: 'All Programs' }, ...Object.entries(CATEGORY_LABELS).map(([id, label]) => ({ id, label }))].map(({ id, label }) => (
              <Link
                key={id}
                href={id ? `/courses?category=${id}` : '/courses'}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  (category || '') === id
                    ? 'bg-gold-500 text-primary-950'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Mode Filter */}
        <div className="flex items-center gap-4 mb-8 flex-wrap">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <Filter size={15} /> Learning Mode:
          </div>
          {[
            { val: '', label: 'All Modes' },
            { val: 'online', label: '🟢 Online' },
            { val: 'offline', label: '🔵 Offline' },
            { val: 'hybrid', label: '🟡 Hybrid' },
          ].map(({ val, label }) => (
            <Link
              key={val}
              href={category ? `/courses?category=${category}&mode=${val}` : val ? `/courses?mode=${val}` : '/courses'}
              className={`px-4 py-1.5 rounded-full text-sm transition-all border ${
                (mode || '') === val
                  ? 'border-primary-600 bg-primary-50 text-primary-700 font-semibold'
                  : 'border-gray-200 text-gray-600 hover:border-primary-300'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="ml-auto text-sm text-gray-500">{filtered.length} programs found</div>
        </div>

        {/* Grouped Courses */}
        {Object.entries(grouped).map(([cat, catCourses]) => (
          <div key={cat} className="mb-14">
            <h2 className="font-display font-bold text-2xl text-primary-900 mb-6 pb-3 border-b-2 border-gold-400 inline-block">
              {CATEGORY_LABELS[cat] || cat}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {catCourses.map((course) => {
                const discount = course.originalFees ? calculateDiscount(course.originalFees, course.fees) : 0;
                return (
                  <div key={course.id} className="card group hover:-translate-y-1">
                    {/* Thumb */}
                    <div className="relative h-36 bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center">
                      <BookOpen size={44} className="text-white/20" />
                      {course.badge && (
                        <span className="absolute top-3 left-3 badge-gold text-[10px] font-bold uppercase">{course.badge}</span>
                      )}
                      {discount > 0 && (
                        <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{discount}% OFF</span>
                      )}
                      <span className="absolute bottom-3 right-3 flex items-center gap-1 text-[10px] text-white/80 bg-black/30 px-2 py-0.5 rounded-full">
                        {course.mode === 'online' ? <Wifi size={9} /> : <MapPin size={9} />}
                        {course.mode}
                      </span>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center gap-1 mb-1.5">
                        <Award size={11} className="text-gold-500" />
                        <span className="text-[10px] text-gray-500 font-medium">{course.certification}</span>
                      </div>
                      <h3 className="font-display font-bold text-gray-900 text-sm leading-snug mb-1 group-hover:text-primary-700 transition-colors line-clamp-2">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-3">
                        <span className="flex items-center gap-1"><Clock size={10} /> {course.duration}</span>
                        <span className="flex items-center gap-1"><Users size={10} /> {course.students.toLocaleString()}</span>
                        <span className="flex items-center gap-1"><Star size={10} className="text-gold-500 fill-gold-500" /> {course.rating}</span>
                      </div>
                      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                        <div>
                          <div className="text-base font-bold text-primary-700">{formatCurrency(course.fees)}</div>
                          {course.originalFees && <div className="text-[10px] text-gray-400 line-through">{formatCurrency(course.originalFees)}</div>}
                        </div>
                        <Link href={`/courses/${course.slug}`} className="btn-primary text-[11px] py-1.5 px-3">
                          Details <ArrowRight size={11} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <BookOpen size={48} className="text-gray-300 mx-auto mb-4" />
            <h3 className="font-display text-xl text-gray-600 mb-2">No courses found</h3>
            <p className="text-gray-400 text-sm mb-6">Try adjusting your filters</p>
            <Link href="/courses" className="btn-secondary">View All Courses</Link>
          </div>
        )}
      </div>
    </div>
  );
}
