'use client';

import { Phone, Mail, Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-primary-950 text-white text-xs py-2 hidden md:block">
      <div className="container-custom flex items-center justify-between">
        {/* Left: contact info */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
          >
            <Phone size={12} />
            <span>+91 98765 43210</span>
          </a>
          <a
            href="mailto:info@anitio.in"
            className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
          >
            <Mail size={12} />
            <span>info@anitio.in</span>
          </a>
          <span className="text-gray-400">
            Mon – Sat: 9:00 AM – 6:00 PM
          </span>
        </div>

        {/* Right: social links */}
        <div className="flex items-center gap-3">
          <span className="text-gray-400">Follow Us:</span>
          {[
            { icon: Facebook, href: '#', label: 'Facebook' },
            { icon: Twitter, href: '#', label: 'Twitter' },
            { icon: Youtube, href: '#', label: 'YouTube' },
            { icon: Instagram, href: '#', label: 'Instagram' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-gray-400 hover:text-gold-400 transition-colors"
            >
              <Icon size={13} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
