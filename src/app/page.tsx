import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import CoursesSection from '@/components/sections/CoursesSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import NoticesSection from '@/components/sections/NoticesSection';
import FranchiseSection from '@/components/sections/FranchiseSection';

export const metadata: Metadata = {
  title: 'ANITIO – Leading Computer Institute | Online & Offline IT Education',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      <WhyChooseSection />
      <NoticesSection />
      <FranchiseSection />
    </>
  );
}
