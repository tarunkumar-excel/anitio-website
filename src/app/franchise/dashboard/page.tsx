import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Users, BookOpen, CreditCard, BarChart2, Bell, Settings, LogOut,
  TrendingUp, Award, Calendar, FileText, ArrowRight, CheckCircle, AlertCircle, Plus
} from 'lucide-react';

export const metadata: Metadata = { title: 'Franchise Dashboard | ANITIO' };

const stats = [
  { label: 'Total Students', value: '142', change: '+12 this month', icon: Users, color: 'bg-blue-500', trend: 'up' },
  { label: 'Active Courses', value: '18', change: '2 starting soon', icon: BookOpen, color: 'bg-green-500', trend: 'neutral' },
  { label: 'Monthly Revenue', value: '₹1,24,500', change: '+8.3% vs last month', icon: CreditCard, color: 'bg-gold-500', trend: 'up' },
  { label: 'Pass Rate', value: '94%', change: '+2% this exam', icon: Award, color: 'bg-purple-500', trend: 'up' },
];

const recentAdmissions = [
  { name: 'Anjali Singh', course: 'PGDCA', date: '2024-06-08', fee: '₹12,000', status: 'confirmed' },
  { name: 'Rahul Gupta', course: 'Python Programming', date: '2024-06-07', fee: '₹4,500', status: 'pending' },
  { name: 'Priya Verma', course: 'DCA', date: '2024-06-06', fee: '₹6,000', status: 'confirmed' },
  { name: 'Sanjay Kumar', course: 'Tally Prime', date: '2024-06-05', fee: '₹2,500', status: 'confirmed' },
  { name: 'Nisha Sharma', course: 'Web Development', date: '2024-06-04', fee: '₹8,000', status: 'pending' },
];

const upcomingExams = [
  { name: 'PGDCA Sem II', date: '2024-06-20', students: 28, status: 'scheduled' },
  { name: 'DCA Final', date: '2024-06-22', students: 35, status: 'scheduled' },
  { name: 'Python Certification', date: '2024-06-25', students: 22, status: 'scheduled' },
];

export default function FranchiseDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container-custom py-5">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs text-gray-400">Welcome back,</div>
              <h1 className="font-display font-bold text-xl">ANITIO Center – Lucknow (ANITIO-FC001)</h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-green-400">Active Franchise Partner</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Bell size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Settings size={18} />
              </button>
              <Link href="/" className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors">
                <LogOut size={15} /> Logout
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="bg-primary-800 text-white border-t border-primary-700">
        <div className="container-custom">
          <div className="flex items-center gap-1 overflow-x-auto py-1">
            {[
              { label: 'Dashboard', icon: BarChart2, href: '/franchise/dashboard', active: true },
              { label: 'Students', icon: Users, href: '/franchise/students', active: false },
              { label: 'Admissions', icon: FileText, href: '/franchise/admissions', active: false },
              { label: 'Courses', icon: BookOpen, href: '/franchise/courses', active: false },
              { label: 'Fees & Payments', icon: CreditCard, href: '/franchise/payments', active: false },
              { label: 'Exams', icon: Calendar, href: '/franchise/exams', active: false },
              { label: 'Reports', icon: TrendingUp, href: '/franchise/reports', active: false },
            ].map(({ label, icon: Icon, href, active }) => (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium whitespace-nowrap transition-colors rounded-t-lg ${
                  active ? 'bg-white text-primary-800' : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon size={13} /> {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map(({ label, value, change, icon: Icon, color, trend }) => (
            <div key={label} className="card p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-xs text-gray-500 mb-1">{label}</div>
                  <div className="text-2xl font-bold text-gray-900">{value}</div>
                </div>
                <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center`}>
                  <Icon size={20} className="text-white" />
                </div>
              </div>
              <div className={`text-xs font-medium flex items-center gap-1 ${
                trend === 'up' ? 'text-green-600' : 'text-gray-500'
              }`}>
                {trend === 'up' && '↑'} {change}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Admissions */}
          <div className="lg:col-span-2">
            <div className="card overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <h2 className="font-display font-bold text-gray-900">Recent Admissions</h2>
                <Link href="/franchise/admissions" className="btn-ghost text-xs">
                  View All <ArrowRight size={12} />
                </Link>
              </div>
              <div className="divide-y divide-gray-50">
                {recentAdmissions.map((adm) => (
                  <div key={adm.name} className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 text-xs font-bold">
                        {adm.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{adm.name}</div>
                        <div className="text-xs text-gray-500">{adm.course} · {adm.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-primary-700">{adm.fee}</div>
                      <span className={`badge text-[10px] ${
                        adm.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {adm.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-100">
                <button className="btn-primary text-xs w-full justify-center">
                  <Plus size={13} /> Add New Student
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Exams */}
            <div className="card p-5">
              <h3 className="font-display font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar size={16} className="text-primary-600" /> Upcoming Exams
              </h3>
              <div className="space-y-3">
                {upcomingExams.map(exam => (
                  <div key={exam.name} className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{exam.name}</div>
                      <div className="text-xs text-gray-500">{exam.date} · {exam.students} students</div>
                    </div>
                    <span className="badge bg-blue-100 text-blue-700 text-[10px]">{exam.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notices */}
            <div className="card p-5">
              <h3 className="font-display font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Bell size={16} className="text-gold-500" /> Notices
              </h3>
              <div className="space-y-3">
                {[
                  { type: 'success', msg: 'Royalty payment received for May 2024.' },
                  { type: 'warning', msg: 'Submit exam forms for June batch by June 15.' },
                  { type: 'info', msg: 'New course: AI & Machine Learning added to catalog.' },
                ].map((n, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                    {n.type === 'success' && <CheckCircle size={13} className="text-green-500 flex-shrink-0 mt-0.5" />}
                    {n.type === 'warning' && <AlertCircle size={13} className="text-orange-500 flex-shrink-0 mt-0.5" />}
                    {n.type === 'info' && <Bell size={13} className="text-blue-500 flex-shrink-0 mt-0.5" />}
                    {n.msg}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card p-5">
              <h3 className="font-display font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                {[
                  { label: 'New Admission', href: '/admission', icon: Plus },
                  { label: 'Download Certificates', href: '#', icon: Award },
                  { label: 'Monthly Report', href: '#', icon: TrendingUp },
                  { label: 'Contact Support', href: '/contact', icon: Bell },
                ].map(({ label, href, icon: Icon }) => (
                  <Link key={label} href={href} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700 hover:text-primary-700">
                    <Icon size={14} className="text-primary-500" />
                    {label}
                    <ArrowRight size={12} className="ml-auto text-gray-300" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
