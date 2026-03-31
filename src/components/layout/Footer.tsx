import Link from 'next/link';
import {
  GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram, Linkedin,
  ArrowRight, Shield, Award, Users
} from 'lucide-react';

const footerLinks = {
  programs: [
    { href: '/courses?category=university', label: 'BCA / MCA / B.Sc IT' },
    { href: '/courses?category=diploma', label: 'DCA / ADCA / PGDCA' },
    { href: '/courses/python-programming-certification', label: 'Python Programming' },
    { href: '/courses/full-stack-web-development', label: 'Web Development' },
    { href: '/courses/data-science-machine-learning', label: 'Data Science & ML' },
    { href: '/courses/tally-prime-accounting', label: 'Tally Prime + GST' },
    { href: '/courses/ccc-course-computer-concepts', label: 'CCC (NIELIT)' },
    { href: '/courses', label: 'View All Courses →' },
  ],
  quickLinks: [
    { href: '/admission', label: 'Online Admission' },
    { href: '/exam', label: 'Exam Schedule' },
    { href: '/results', label: 'Check Results' },
    { href: '/schedule', label: 'Class Schedule' },
    { href: '/payment', label: 'Pay Fees Online' },
    { href: '/franchise', label: 'Franchise Inquiry' },
    { href: '/about', label: 'About ANITIO' },
    { href: '/contact', label: 'Contact Us' },
  ],
  franchise: [
    { href: '/franchise', label: 'Franchise Details' },
    { href: '/franchise/register', label: 'Apply for Franchise' },
    { href: '/franchise/login', label: 'Franchise Login' },
    { href: '/franchise#benefits', label: 'Franchise Benefits' },
    { href: '/franchise#types', label: 'Franchise Types' },
    { href: '/franchise#faq', label: 'Franchise FAQ' },
  ],
};

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
  { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
];

const stats = [
  { icon: Users, value: '15,000+', label: 'Students Enrolled' },
  { icon: Award, value: '30+', label: 'Courses Offered' },
  { icon: Shield, value: '200+', label: 'Franchise Centers' },
  { icon: GraduationCap, value: '98%', label: 'Pass Rate' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      {/* Stats Bar */}
      <div className="bg-primary-900 border-b border-primary-800">
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gold-400 font-display">{value}</div>
                  <div className="text-xs text-gray-400">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center shadow-blue">
                <GraduationCap size={26} className="text-gold-400" />
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-white">ANITIO</div>
                <div className="text-[10px] text-gray-400 font-medium tracking-widest">IT & SKILL DEVELOPMENT LLP</div>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering India's digital future through quality IT education. From foundational computer skills 
              to advanced degrees — we build careers with 15,000+ successful alumni across India.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-6">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-gray-400 hover:text-gold-400 transition-colors">
                <Phone size={15} className="text-gold-500 flex-shrink-0" />
                +91 98765 43210 / +91 91234 56789
              </a>
              <a href="mailto:info@anitio.in" className="flex items-center gap-3 text-sm text-gray-400 hover:text-gold-400 transition-colors">
                <Mail size={15} className="text-gold-500 flex-shrink-0" />
                info@anitio.in
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={15} className="text-gold-500 flex-shrink-0 mt-0.5" />
                123, IT Tower, Main Road, Your City – 000000, India
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-8 h-8 bg-primary-800 rounded-lg flex items-center justify-center text-gray-400 ${color} transition-colors`}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-bold text-base text-white mb-4 pb-2 border-b border-primary-800">
              Programs
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.programs.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-1.5">
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-base text-white mb-4 pb-2 border-b border-primary-800">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Franchise */}
          <div>
            <h3 className="font-display font-bold text-base text-white mb-4 pb-2 border-b border-primary-800">
              Franchise
            </h3>
            <ul className="space-y-2.5 mb-6">
              {footerLinks.franchise.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="bg-primary-900 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-white mb-2">Get Updates</h4>
              <p className="text-xs text-gray-400 mb-3">Subscribe for latest notices & updates</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-primary-800 border border-primary-700 rounded-lg px-3 py-2 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gold-500 min-w-0"
                />
                <button
                  type="submit"
                  className="bg-gold-500 hover:bg-gold-600 text-primary-950 font-bold text-xs px-3 py-2 rounded-lg transition-colors flex-shrink-0"
                >
                  →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} ANITIO Information Technology and Skill Development LLP. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold-400 transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-gold-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
