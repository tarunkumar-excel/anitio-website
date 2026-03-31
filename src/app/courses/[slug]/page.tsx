import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Clock, Users, Star, Award, CheckCircle, BookOpen, ArrowRight,
  Wifi, MapPin, Calendar, ChevronDown, GraduationCap, FileText, Phone
} from 'lucide-react';
import { getCourseBySlug, courses } from '@/data/courses';
import { formatCurrency, calculateDiscount } from '@/lib/utils';

export async function generateStaticParams() {
  return courses.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = getCourseBySlug(params.slug);
  if (!course) return { title: 'Course Not Found' };
  return {
    title: `${course.title} | ANITIO`,
    description: course.description,
    keywords: [course.title, course.category, course.type, 'computer course', 'ANITIO'],
  };
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);
  if (!course) notFound();

  const discount = course.originalFees ? calculateDiscount(course.originalFees, course.fees) : 0;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-14">
        <div className="container-custom">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-gold-400 transition-colors">Courses</Link>
            <span>/</span>
            <span className="text-gold-400">{course.type}</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="badge-gold text-xs capitalize">{course.category}</span>
                {course.badge && <span className="badge-blue text-xs">{course.badge}</span>}
                <span className={`badge text-xs ${
                  course.mode === 'online' ? 'bg-green-500/20 text-green-300' :
                  course.mode === 'offline' ? 'bg-orange-500/20 text-orange-300' :
                  'bg-blue-500/20 text-blue-300'
                }`}>
                  {course.mode === 'online' ? <Wifi size={10} /> : <MapPin size={10} />}
                  {course.mode.charAt(0).toUpperCase() + course.mode.slice(1)}
                </span>
              </div>

              <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
                {course.title}
              </h1>

              <p className="text-gray-300 text-base leading-relaxed mb-6">{course.description}</p>

              <div className="flex flex-wrap gap-5 text-sm text-gray-300">
                <span className="flex items-center gap-1.5"><Star size={15} className="text-gold-400 fill-gold-400" />{course.rating}/5 Rating</span>
                <span className="flex items-center gap-1.5"><Users size={15} className="text-primary-300" />{course.students.toLocaleString()} Students</span>
                <span className="flex items-center gap-1.5"><Clock size={15} className="text-primary-300" />{course.duration}</span>
                <span className="flex items-center gap-1.5"><Award size={15} className="text-gold-400" />{course.certification}</span>
              </div>

              {course.university && (
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-300">
                  <GraduationCap size={15} className="text-gold-400" />
                  Affiliated with: <span className="text-white font-semibold">{course.university}</span>
                </div>
              )}
            </div>

            {/* Sticky Fee Card (desktop) */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-card-lg overflow-hidden">
                {/* Price */}
                <div className="bg-gradient-to-br from-primary-700 to-primary-900 p-6 text-white">
                  <div className="flex items-baseline gap-3 mb-1">
                    <div className="text-4xl font-bold">{formatCurrency(course.fees)}</div>
                    {course.originalFees && (
                      <div className="text-gray-300 line-through text-lg">{formatCurrency(course.originalFees)}</div>
                    )}
                  </div>
                  {discount > 0 && (
                    <div className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full inline-block mb-2">
                      {discount}% OFF Limited Time
                    </div>
                  )}
                  <div className="text-sm text-gray-300">Total Course Fee · EMI Available</div>
                </div>

                <div className="p-6 space-y-3">
                  <Link href="/admission" className="btn-primary w-full justify-center py-3.5">
                    Enroll Now <ArrowRight size={16} />
                  </Link>
                  <Link href="/contact" className="btn-outline w-full justify-center py-3.5 text-sm">
                    Request Callback
                  </Link>

                  <div className="border-t border-gray-100 pt-4 space-y-2.5 text-sm">
                    {[
                      { icon: Calendar, label: 'Start Date', value: course.startDate || 'Ongoing Batches' },
                      { icon: Clock, label: 'Duration', value: course.duration },
                      { icon: BookOpen, label: 'Level', value: course.level.charAt(0).toUpperCase() + course.level.slice(1) },
                      { icon: Award, label: 'Certificate', value: course.certification },
                      { icon: Wifi, label: 'Mode', value: course.mode.charAt(0).toUpperCase() + course.mode.slice(1) },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-center justify-between">
                        <span className="text-gray-500 flex items-center gap-1.5">
                          <Icon size={13} className="text-primary-500" />{label}
                        </span>
                        <span className="font-semibold text-gray-900 text-right ml-2">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gold-50 border border-gold-200 rounded-xl p-3 text-center">
                    <div className="text-xs text-gray-600 mb-1">Need Help? Call Us</div>
                    <a href="tel:+919876543210" className="font-bold text-primary-700 flex items-center justify-center gap-1.5">
                      <Phone size={14} /> +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* What You'll Learn */}
            {course.modules.length > 0 && (
              <div>
                <h2 className="font-display font-bold text-2xl text-primary-900 mb-6">Course Curriculum</h2>
                <div className="space-y-3">
                  {course.modules.map((mod, i) => (
                    <details key={i} className="card group">
                      <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 bg-primary-100 rounded-lg flex items-center justify-center text-xs font-bold text-primary-700">
                            {String(i + 1).padStart(2, '0')}
                          </div>
                          <span className="font-semibold text-gray-900">{mod.title}</span>
                          <span className="text-xs text-gray-400 ml-2">{mod.duration}</span>
                        </div>
                        <ChevronDown size={16} className="text-gray-400 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {mod.topics.map((topic) => (
                            <div key={topic} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle size={13} className="text-green-500 flex-shrink-0" />
                              {topic}
                            </div>
                          ))}
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* Syllabus */}
            {course.syllabus.length > 0 && (
              <div>
                <h2 className="font-display font-bold text-2xl text-primary-900 mb-6">Detailed Syllabus</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {course.syllabus.map((sec) => (
                    <div key={sec.unit} className="card p-5">
                      <div className="badge-blue text-[10px] mb-2">{sec.unit}</div>
                      <h3 className="font-display font-bold text-gray-900 mb-3">{sec.title}</h3>
                      <ul className="space-y-1.5">
                        {sec.topics.map((t) => (
                          <li key={t} className="text-sm text-gray-600 flex items-center gap-1.5">
                            <span className="w-1 h-1 bg-primary-400 rounded-full" />{t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Instructor */}
            <div>
              <h2 className="font-display font-bold text-2xl text-primary-900 mb-6">Your Instructor</h2>
              <div className="card p-6 flex items-start gap-5">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-900 rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  {course.instructor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-display font-bold text-gray-900 text-lg">{course.instructor.name}</h3>
                  <div className="text-primary-600 text-sm font-medium">{course.instructor.designation}</div>
                  <div className="text-xs text-gray-500 mt-1">Experience: {course.instructor.experience}</div>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    Dedicated educator with {course.instructor.experience} of expertise in computer science and IT education, committed to helping students achieve career goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Related */}
          <div>
            <h3 className="font-display font-bold text-gray-900 text-lg mb-4">Related Courses</h3>
            <div className="space-y-3">
              {courses
                .filter(c => c.category === course.category && c.id !== course.id)
                .slice(0, 4)
                .map(c => (
                  <Link key={c.id} href={`/courses/${c.slug}`} className="card p-4 flex items-start gap-3 hover:-translate-y-0.5 transition-transform">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen size={16} className="text-primary-700" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">{c.title}</div>
                      <div className="text-xs text-primary-600 font-bold mt-1">{formatCurrency(c.fees)}</div>
                    </div>
                  </Link>
                ))}
            </div>

            <div className="mt-6 bg-primary-50 border border-primary-100 rounded-2xl p-5">
              <FileText size={22} className="text-primary-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Ready to Enroll?</h4>
              <p className="text-xs text-gray-600 mb-4">Secure your seat today. Limited seats per batch.</p>
              <Link href="/admission" className="btn-primary w-full justify-center text-sm py-2.5">
                Start Admission <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
