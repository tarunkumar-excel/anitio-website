import Link from 'next/link';
import { ArrowRight, Home, BookOpen, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="text-8xl font-display font-bold text-primary-200 mb-4">404</div>
        <h1 className="text-3xl font-display font-bold text-primary-900 mb-3">Page Not Found</h1>
        <p className="text-gray-500 leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
          Try navigating to one of the links below.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary justify-center">
            <Home size={16} /> Go to Homepage
          </Link>
          <Link href="/courses" className="btn-outline justify-center">
            <BookOpen size={16} /> Browse Courses
          </Link>
          <Link href="/contact" className="btn-ghost justify-center">
            <Phone size={16} /> Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
