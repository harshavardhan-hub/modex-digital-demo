import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import Container from '@/components/common/Container';
import SEO from '@/components/seo/SEO';

const Privacy: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy — Modex Digital"
        description="Learn how Modex Digital collects, uses, and protects your personal information."
        canonical="/privacy"
      />

      <section className="section-padding bg-white">
        <Container size="md">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="heading-1 mb-8 text-center">Privacy Policy</h1>
            <p className="text-neutral-500 text-center mb-12">
              Last updated: October 29, 2025
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="heading-3 mb-4">1. Introduction</h2>
              <p className="text-neutral-600 mb-6">
                Modex Digital ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website or use our services.
              </p>

              <h2 className="heading-3 mb-4">2. Information We Collect</h2>
              <p className="text-neutral-600 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-neutral-600 space-y-2">
                <li>Name and contact information (email, phone number)</li>
                <li>Business information and project requirements</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h2 className="heading-3 mb-4">3. How We Use Your Information</h2>
              <p className="text-neutral-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-neutral-600 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>

              <h2 className="heading-3 mb-4">4. Information Sharing</h2>
              <p className="text-neutral-600 mb-6">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6 text-neutral-600 space-y-2">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist in our operations</li>
              </ul>

              <h2 className="heading-3 mb-4">5. Cookies and Tracking</h2>
              <p className="text-neutral-600 mb-6">
                We use cookies and similar tracking technologies to track activity on our 
                website and hold certain information. You can instruct your browser to refuse 
                all cookies or to indicate when a cookie is being sent.
              </p>

              <h2 className="heading-3 mb-4">6. Data Security</h2>
              <p className="text-neutral-600 mb-6">
                We implement appropriate technical and organizational measures to protect 
                your personal information against unauthorized access, alteration, disclosure, 
                or destruction.
              </p>

              <h2 className="heading-3 mb-4">7. Your Rights</h2>
              <p className="text-neutral-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-neutral-600 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request restriction of processing</li>
              </ul>

              <h2 className="heading-3 mb-4">8. Children's Privacy</h2>
              <p className="text-neutral-600 mb-6">
                Our services are not directed to individuals under the age of 18. 
                We do not knowingly collect personal information from children.
              </p>

              <h2 className="heading-3 mb-4">9. Changes to This Policy</h2>
              <p className="text-neutral-600 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of 
                any changes by posting the new Privacy Policy on this page and updating the 
                "Last updated" date.
              </p>

              <h2 className="heading-3 mb-4">10. Contact Us</h2>
              <p className="text-neutral-600 mb-4">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none mb-6 text-neutral-600 space-y-2">
                <li>Email: reachmodexdigital@gmail.com</li>
                <li>Phone: +91 8838598345</li>
                <li>Address: Chennai, Tamil Nadu, India</li>
              </ul>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default Privacy;
