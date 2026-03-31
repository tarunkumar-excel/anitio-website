import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ANITIO IT & Skill Development LLP',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-14">
        <div className="container-custom">
          <h1 className="text-4xl font-display font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-300 text-sm">Last updated: June 1, 2024</p>
        </div>
      </div>
      <div className="container-custom py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-card p-10 prose prose-gray max-w-none">
          <h2 className="font-display font-bold text-primary-900 text-2xl mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            ANITIO Information Technology and Skill Development LLP collects personal information that you voluntarily provide when registering for courses, filling admission forms, or contacting us. This includes name, email address, phone number, date of birth, educational qualifications, and payment information.
          </p>

          <h2 className="font-display font-bold text-primary-900 text-2xl mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We use collected information to: process admissions, issue enrollment numbers, send examination schedules and results via SMS/email, manage fee payments, provide customer support, send important updates and notices, and improve our services.
          </p>

          <h2 className="font-display font-bold text-primary-900 text-2xl mb-4">3. Data Security</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Payment data is processed through secure, PCI-compliant payment gateways.
          </p>

          <h2 className="font-display font-bold text-primary-900 text-2xl mb-4">4. SMS & Email Alerts</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            By registering with ANITIO, you consent to receive transactional and informational SMS messages and emails regarding your admission, examinations, results, and important notices. You may opt out of promotional communications at any time.
          </p>

          <h2 className="font-display font-bold text-primary-900 text-2xl mb-4">5. Data Sharing</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We do not sell your personal information to third parties. We may share data with affiliated universities for degree enrollment, government authorities as required by law, and payment processors for fee transactions.
          </p>

          <h2 className="font-display font-bold text-primary-900 text-2xl mb-4">6. Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            For privacy-related queries, contact us at: <a href="mailto:privacy@anitio.in" className="text-primary-700 font-medium">privacy@anitio.in</a> or call +91 98765 43210.
          </p>
        </div>
      </div>
    </div>
  );
}
