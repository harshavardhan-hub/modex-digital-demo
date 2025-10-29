import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import Container from '@/components/common/Container';
import SEO from '@/components/seo/SEO';

const Terms: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms of Service — Modex Digital"
        description="Terms and conditions for using Modex Digital's services."
        canonical="/terms"
      />

      <section className="section-padding bg-white">
        <Container size="md">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="heading-1 mb-8 text-center">Terms of Service</h1>
            <p className="text-neutral-500 text-center mb-12">
              Last updated: October 29, 2025
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="heading-3 mb-4">1. Agreement to Terms</h2>
              <p className="text-neutral-600 mb-6">
                By accessing or using Modex Digital's services, you agree to be bound by these 
                Terms of Service and all applicable laws and regulations. If you do not agree 
                with any of these terms, you are prohibited from using our services.
              </p>

              <h2 className="heading-3 mb-4">2. Services Description</h2>
              <p className="text-neutral-600 mb-6">
                Modex Digital provides web development, app development, business consulting, 
                and branding services. The specific scope of work, deliverables, timelines, 
                and pricing will be outlined in individual project agreements.
              </p>

              <h2 className="heading-3 mb-4">3. User Responsibilities</h2>
              <p className="text-neutral-600 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-neutral-600 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
              </ul>

              <h2 className="heading-3 mb-4">4. Payment Terms</h2>
              <p className="text-neutral-600 mb-6">
                Payment terms will be specified in individual project agreements. Generally, 
                we require milestone-based payments: 30% upfront, 40% at mid-point, and 30% 
                upon completion. All payments are non-refundable unless otherwise specified 
                in writing.
              </p>

              <h2 className="heading-3 mb-4">5. Intellectual Property</h2>
              <p className="text-neutral-600 mb-6">
                Upon full payment, clients receive ownership of the final deliverables. 
                However, Modex Digital retains the right to use project work in portfolios 
                and marketing materials unless otherwise agreed. We retain ownership of all 
                pre-existing intellectual property and methodologies.
              </p>

              <h2 className="heading-3 mb-4">6. Project Timeline</h2>
              <p className="text-neutral-600 mb-6">
                While we strive to meet all agreed-upon deadlines, timelines are estimates 
                and may be affected by factors beyond our control. Delays caused by client 
                feedback cycles, content provision, or scope changes may extend delivery dates.
              </p>

              <h2 className="heading-3 mb-4">7. Revisions and Changes</h2>
              <p className="text-neutral-600 mb-6">
                Each project includes a specified number of revision rounds as outlined in 
                the project agreement. Additional revisions or scope changes may incur 
                additional charges.
              </p>

              <h2 className="heading-3 mb-4">8. Warranties and Disclaimers</h2>
              <p className="text-neutral-600 mb-6">
                We warrant that services will be performed in a professional manner. However, 
                we make no guarantees regarding specific business outcomes, rankings, or 
                conversion rates. Our services are provided "as is" without warranty of any kind.
              </p>

              <h2 className="heading-3 mb-4">9. Limitation of Liability</h2>
              <p className="text-neutral-600 mb-6">
                Modex Digital shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages resulting from your use of our services. 
                Our total liability shall not exceed the amount paid for the specific service 
                in question.
              </p>

              <h2 className="heading-3 mb-4">10. Confidentiality</h2>
              <p className="text-neutral-600 mb-6">
                Both parties agree to keep confidential any proprietary or sensitive information 
                shared during the course of the project. This obligation survives the termination 
                of the agreement.
              </p>

              <h2 className="heading-3 mb-4">11. Termination</h2>
              <p className="text-neutral-600 mb-6">
                Either party may terminate the agreement with written notice. Upon termination, 
                the client is responsible for payment for all work completed to date. Modex 
                Digital will deliver all completed work upon receipt of payment.
              </p>

              <h2 className="heading-3 mb-4">12. Support and Maintenance</h2>
              <p className="text-neutral-600 mb-6">
                All projects include 30 days of free support after launch. Extended support 
                and maintenance packages are available separately. Support does not include 
                new feature development or significant content changes.
              </p>

              <h2 className="heading-3 mb-4">13. Governing Law</h2>
              <p className="text-neutral-600 mb-6">
                These Terms shall be governed by and construed in accordance with the laws 
                of India. Any disputes shall be subject to the exclusive jurisdiction of the 
                courts in Chennai, Tamil Nadu.
              </p>

              <h2 className="heading-3 mb-4">14. Changes to Terms</h2>
              <p className="text-neutral-600 mb-6">
                We reserve the right to modify these terms at any time. Changes will be 
                effective immediately upon posting. Continued use of our services after 
                changes constitutes acceptance of the new terms.
              </p>

              <h2 className="heading-3 mb-4">15. Contact Information</h2>
              <p className="text-neutral-600 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-none mb-6 text-neutral-600 space-y-2">
                <li>Email: reachmodexdigital@gmail.com</li>
                <li>Phone: +91 8838598345</li>
                <li>Address: Chennai, Tamil Nadu, India</li>
              </ul>

              <p className="text-neutral-600 mb-6">
                By using our services, you acknowledge that you have read, understood, and 
                agree to be bound by these Terms of Service.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default Terms;
