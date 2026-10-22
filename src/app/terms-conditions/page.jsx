// pages/terms.js
import Head from 'next/head';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Terms and Conditions | [careervalore@gmail.com]</title>
        <meta name="description" content="Review the Terms and Conditions for using [careervalore@gmail.com] services." />
      </Head>
      <div className=" mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Terms and Conditions</h1>
        <p className="text-sm text-gray-600 mb-4">Last Updated: March 20, 2025</p>
        <p className="text-gray-700 mb-6">
          Welcome to [careervalore@gmail.com]! These Terms and Conditions ("Terms") govern your use of our website and services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, please refrain from using the Service.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By accessing and using [careervalore@gmail.com], you acknowledge that you have read, understood, and agree to these Terms, as well as our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>. These Terms apply to all users, including visitors, registered users, and contributors. We reserve the right to modify these Terms at any time, with changes effective upon posting.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
          <p className="text-gray-700">
            To use the Service, you must:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Be at least 13 years of age. Users under 18 should have parental consent.</li>
            <li>Not be prohibited from using the Service under applicable laws.</li>
            <li>Provide accurate and complete information if registering an account.</li>
          </ul>
          <p className="text-gray-700 mt-2">
            We may refuse service to anyone for any reason at our discretion.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. User Accounts</h2>
          <p className="text-gray-700">
            Some features of the Service require an account. You agree to:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Maintain the confidentiality of your account credentials.</li>
            <li>Notify us immediately of any unauthorized use at <a href="careervalore@gmail.com" className="text-blue-600 hover:underline">careervalore@gmail.com</a>.</li>
            <li>Accept responsibility for all activities under your account.</li>
          </ul>
          <p className="text-gray-700 mt-2">
            We may suspend or terminate accounts for violations of these Terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Use of the Service</h2>
          <p className="text-gray-700">
            You agree to use the Service only for lawful purposes and in accordance with these Terms. Prohibited activities include:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Posting harmful, illegal, or infringing content.</li>
            <li>Attempting to hack, disrupt, or overload the Service.</li>
            <li>Using automated tools (e.g., bots) to scrape or misuse the Service.</li>
            <li>Impersonating others or misrepresenting your affiliation.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Intellectual Property</h2>
          <p className="text-gray-700">
            The Service and its content (e.g., text, graphics, logos) are owned by [careervalore@gmail.com] or its licensors and protected by copyright, trademark, and other laws. You may:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Use the Service for personal, non-commercial purposes.</li>
            <li>Not reproduce, distribute, or create derivative works without permission.</li>
          </ul>
          <p className="text-gray-700 mt-2">
            User-generated content remains yours, but you grant us a worldwide, royalty-free license to use, display, and distribute it within the Service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Third-Party Content and Links</h2>
          <p className="text-gray-700">
            The Service may include links to third-party websites or content. We do not control or endorse these, and your interactions with them are at your own risk. Third-party terms and privacy policies may apply.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Termination</h2>
          <p className="text-gray-700">
            We may suspend or terminate your access to the Service at our sole discretion, with or without notice, for reasons including:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Violation of these Terms.</li>
            <li>Inactivity for an extended period (e.g., 12 months).</li>
            <li>Legal or security concerns.</li>
          </ul>
          <p className="text-gray-700 mt-2">
            You may terminate your account at any time by contacting us. Provisions like intellectual property and liability survive termination.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Disclaimer of Warranties</h2>
          <p className="text-gray-700">
            The Service is provided "as is" and "as available" without warranties of any kind, express or implied, including fitness for a particular purpose or uninterrupted access. We do not guarantee the Service will be error-free.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Limitation of Liability</h2>
          <p className="text-gray-700">
            To the fullest extent permitted by law, [careervalore@gmail.com.] and its affiliates shall not be liable for indirect, incidental, or consequential damages arising from your use of the Service, including loss of data or profits.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
          <p className="text-gray-700">
            These Terms are governed by the laws of [Your Jurisdiction, e.g., "California, USA"], without regard to conflict of law principles. Disputes will be resolved in the courts of [Your Jurisdiction].
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">11. Changes to These Terms</h2>
          <p className="text-gray-700">
            We may update these Terms periodically. Changes will be posted here with an updated "Last Updated" date. Continued use of the Service after changes constitutes acceptance.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">12. Contact Us</h2>
          <p className="text-gray-700">
            For questions about these Terms, please contact us at:
          </p>
          <ul className="list-none pl-5 mt-2 text-gray-700">
            <li>Email: <a href="careervalore@gmail.com" className="text-blue-600 hover:underline">careervalore@gmail.com</a></li>
            {/* <li>Address: [Your Company Address]</li> */}
          </ul>
        </section>
      </div>
    </div>
  );
}