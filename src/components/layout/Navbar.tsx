'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu, X, ChevronDown, GraduationCap, BookOpen, Users, ClipboardList,
  CreditCard, BarChart2, Calendar, LogIn, Building2, Wifi, MapPin
} from 'lucide-react';
import { cn } from '@/lib/utils';

const courseLinks = [
  { href: '/courses?category=university', label: 'University Programs', icon: GraduationCap, desc: 'BCA, MCA, B.Sc IT' },
  { href: '/courses?category=diploma', label: 'Diploma Courses', icon: BookOpen, desc: 'DCA, ADCA, PGDCA' },
  { href: '/courses?category=certification', label: 'Certification', icon: ClipboardList, desc: 'Python, Web Dev, DS' },
  { href: '/courses?category=vocational', label: 'Vocational', icon: Building2, desc: 'Tally, AutoCAD, Graphic' },
  { href: '/courses', label: 'All Courses', icon: BookOpen, desc: 'Browse 30+ programs' },
];

const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/courses',
    label: 'Courses',
    mega: true,
    children: courseLinks,
  },
  {
    href: '/admission',
    label: 'Admission',
    children: [
      { href: '/admission', label: 'Online Admission' },
      { href: '/admission/offline', label: 'Offline Admission' },
      { href: '/admission/status', label: 'Check Status' },
    ],
  },
  {
    href: '/exam',
    label: 'Examinations',
    children: [
      { href: '/exam', label: 'Exam Schedule' },
      { href: '/exam/admit-card', label: 'Admit Card' },
      { href: '/exam/online', label: 'Online Exam' },
    ],
  },
  { href: '/results', label: 'Results' },
  { href: '/schedule', label: 'Class Schedule' },
  {
    href: '/franchise',
    label: 'Franchise',
    children: [
      { href: '/franchise', label: 'Franchise Info' },
      { href: '/franchise/register', label: 'Apply Franchise' },
      { href: '/franchise/login', label: 'Franchise Login' },
    ],
  },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); setActiveDropdown(null); }, [pathname]);

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-white border-b border-gray-100',
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-700 to-primary-900 rounded-xl flex items-center justify-center shadow-blue">
              <GraduationCap size={22} className="text-gold-400" />
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-xl text-primary-900 leading-none">ANITIO</div>
              <div className="text-[9px] text-gray-500 font-medium tracking-wider leading-none mt-0.5">IT & SKILL DEVELOPMENT LLP</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative group"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50',
                  )}
                >
                  {link.label}
                  {link.children && <ChevronDown size={13} className="mt-0.5" />}
                </Link>

                {/* Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <div className={cn(
                    'absolute top-full left-0 pt-2 z-50 animate-slide-up',
                    link.mega ? 'w-[520px]' : 'w-52',
                  )}>
                    <div className="bg-white rounded-xl shadow-card-lg border border-gray-100 overflow-hidden p-2">
                      {link.mega ? (
                        <div className="grid grid-cols-2 gap-1">
                          {(link.children as typeof courseLinks).map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary-50 transition-colors group/item"
                            >
                              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary-700 transition-colors">
                                <item.icon size={15} className="text-primary-700 group-hover/item:text-white transition-colors" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                                <div className="text-xs text-gray-500">{item.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        link.children.map((item: { href: string; label: string }) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Link href="/franchise/login" className="btn-ghost text-sm">
              <LogIn size={15} />
              Franchise Login
            </Link>
            <Link href="/admission" className="btn-primary text-sm py-2.5">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="xl:hidden border-t border-gray-100 bg-white max-h-screen overflow-y-auto">
          <div className="container-custom py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'block px-4 py-3 rounded-lg font-medium text-sm transition-colors',
                    pathname === link.href
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-50',
                  )}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.children.map((child: { href: string; label: string }) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-xs text-gray-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
                      >
                        → {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
              <Link href="/franchise/login" className="btn-outline text-sm justify-center">
                Franchise Login
              </Link>
              <Link href="/admission" className="btn-primary text-sm justify-center">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
