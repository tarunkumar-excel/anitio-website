import type { Metadata, Viewport } from 'next';
import { Toaster } from 'react-hot-toast';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TopBar from '@/components/layout/TopBar';
import NewsTicker from '@/components/layout/NewsTicker';

export const metadata: Metadata = {
  title: {
    default: 'ANITIO – Information Technology & Skill Development LLP',
    template: '%s | ANITIO IT & Skill Development',
  },
  description:
    'ANITIO Information Technology and Skill Development LLP offers BCA, MCA, PGDCA, DCA, Python, Web Development, Data Science, Tally, AutoCAD and 30+ computer courses online & offline. Franchise opportunities available across India.',
  keywords: [
    'computer institute', 'BCA', 'MCA', 'PGDCA', 'DCA', 'ADCA',
    'Python course', 'web development', 'data science', 'Tally GST',
    'computer courses online', 'ANITIO', 'skill development',
    'computer education franchise', 'NIELIT CCC', 'AutoCAD training',
  ],
  authors: [{ name: 'ANITIO IT & Skill Development LLP' }],
  creator: 'ANITIO',
  publisher: 'ANITIO Information Technology and Skill Development LLP',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://anitio.in',
    siteName: 'ANITIO IT & Skill Development',
    title: 'ANITIO – Leading Computer Institute for Online & Offline Education',
    description: 'Join ANITIO for industry-ready computer courses, degree programs, vocational training, and certification courses. 30+ programs, expert faculty, franchise opportunities.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANITIO – Information Technology & Skill Development LLP',
    description: 'Leading computer institute offering BCA, MCA, PGDCA, Python, Web Dev, Data Science and 30+ courses online & offline.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#1e3a8a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: { fontFamily: 'DM Sans, sans-serif', fontSize: '14px' },
          }}
        />
        <TopBar />
        <Navbar />
        <NewsTicker />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
