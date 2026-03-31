import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | ANITIO IT & Skill Development LLP',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-14">
        <div className="container-custom">
          <h1 className="text-4xl font-display font-bold mb-2">Terms of Service</h1>
          <p className="text-gray-300 text-sm">Last updated: June 1, 2024</p>
        </div>
      </div>
      <div className="container-custom py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-card p-10 space-y-8">
          {[
            {
              title: '1. Acceptance of Terms',
              content: 'By enrolling in any course or using services offered by ANITIO Information Technology and Skill Development LLP, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.',
            },
            {
              title: '2. Enrollment & Admission',
              content: 'Enrollment is confirmed only after payment of the prescribed admission fee and submission of required documents. ANITIO reserves the right to cancel admission if false information is found or documents are incomplete.',
            },
            {
              title: '3. Fee Policy',
              content: 'Course fees are non-refundable after 7 days of admission confirmation. In case of course discontinuation by ANITIO, a full refund will be processed within 30 working days. Fee receipts must be preserved for future reference.',
            },
            {
              title: '4. Examination Rules',
              content: 'Students must follow all examination rules. Any malpractice, use of unfair means, or misconduct during exams will result in cancellation of the exam and may lead to expulsion from the course without refund.',
            },
            {
              title: '5. Online Platform Usage',
              content: 'Login credentials issued to students are personal and must not be shared. Any misuse of the online portal, including sharing access, attempting unauthorized access, or distributing study materials, is strictly prohibited.',
            },
            {
              title: '6. Certification',
              content: 'Certificates are issued only upon successful completion of the course, clearing all examinations, and clearing all outstanding dues. ANITIO certifications are issued as per the standards of the affiliated university or government body.',
            },
            {
              title: '7. Franchise Terms',
              content: 'Franchise partners must comply with all guidelines issued by ANITIO. Unauthorized use of the ANITIO brand, curriculum, or certification system is a breach of the franchise agreement and may result in legal action.',
            },
            {
              title: '8. Changes to Terms',
              content: 'ANITIO reserves the right to modify these Terms at any time. Students and franchise partners will be notified of significant changes via email or SMS. Continued use of services constitutes acceptance of revised terms.',
            },
            {
              title: '9. Governing Law',
              content: 'These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in the city where the ANITIO registered office is located.',
            },
          ].map(({ title, content }) => (
            <div key={title}>
              <h2 className="font-display font-bold text-xl text-primary-900 mb-3">{title}</h2>
              <p className="text-gray-600 leading-relaxed">{content}</p>
            </div>
          ))}

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-500 text-sm">
              For questions about these Terms, contact us at{' '}
              <a href="mailto:legal@anitio.in" className="text-primary-700 font-medium">legal@anitio.in</a>{' '}
              or call <strong>+91 98765 43210</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
