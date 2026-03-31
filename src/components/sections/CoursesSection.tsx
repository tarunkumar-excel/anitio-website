'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Clock, Users, Star, ArrowRight, BookOpen, Award, Wifi, MapPin } from 'lucide-react';
import { courses } from '@/data/courses';
import { formatCurrency, calculateDiscount } from '@/lib/utils';
import { Course } from '@/types';

const CATEGORIES = [
  { id: 'all', label: 'All Programs' },
  { id: 'university', label: 'University' },
  { id: 'diploma', label: 'Diploma' },
  { id: 'certification', label: 'Certification' },
  { id: 'vocational', label: 'Vocational' },
];

const MODE_ICONS = {
  online: Wifi,
  offline: MapPin,
  hybrid: BookOpen,
};

function CourseCard({ course }: { course: Course }) {
  const discount = course.originalFees
    ? calculateDiscount(course.originalFees, course.fees)
    : 0;

  const ModeIcon = MODE_ICONS[course.mode];

  return (
    <div className="card group hover:-translate-y-1 transition-all duration-300">
      {/* Thumbnail */}
      <div className="relative h-44 bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center overflow-hidden">
        <BookOpen size={56} className="text-white/20" />
        <div className="absolute top-3 left-3 flex gap-2">
          {course.badge && (
            <span className="badge-gold text-[10px] font-bold uppercase">{course.badge}</span>
          )}
          <span className={`badge text-[10px] font-bold uppercase ${
            course.mode === 'online' ? 'bg-green-100 text-green-700' :
            course.mode === 'offline' ? 'bg-orange-100 text-orange-700' :
            'bg-blue-100 text-blue-700'
          }`}>
            <ModeIcon size={9} />
            {course.mode}
          </span>
        </div>
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            {discount}% OFF
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <div className="flex items-center gap-2 mb-2">
          <span className="badge-blue text-[10px] uppercase">{course.category}</span>
          <span className="flex items-center gap-0.5 text-xs text-gray-500">
            <Award size={10} className="text-gold-500" />
            {course.certification}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-gray-900 text-base leading-snug mb-1.5 group-hover:text-primary-700 transition-colors line-clamp-2">
          {course.title}
        </h3>

        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">{course.shortDesc}</p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Clock size={12} className="text-primary-500" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users size={12} className="text-primary-500" />
            {course.students.toLocaleString()} students
          </span>
          <span className="flex items-center gap-1">
            <Star size={12} className="text-gold-500 fill-gold-500" />
            {course.rating}
          </span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <div className="text-xl font-bold text-primary-700">{formatCurrency(course.fees)}</div>
            {course.originalFees && (
              <div className="text-xs text-gray-400 line-through">{formatCurrency(course.originalFees)}</div>
            )}
          </div>
          <Link
            href={`/courses/${course.slug}`}
            className="btn-primary text-xs py-2 px-4"
          >
            Details <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? courses
    : courses.filter(c => c.category === activeCategory);

  return (
    <section className="section bg-gray-50" id="courses">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-subtitle">Our Programs</div>
          <h2 className="section-title mb-4">
            Explore <span className="text-primary-700">30+ Courses</span> Designed
            <br className="hidden md:block" /> for Career Success
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            From foundational diplomas to university degrees and industry certifications —
            choose the perfect program to launch or upgrade your IT career.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === id
                  ? 'bg-primary-700 text-white shadow-blue'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-700 border border-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/courses" className="btn-secondary px-10 py-4 text-base">
            View All Programs <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
