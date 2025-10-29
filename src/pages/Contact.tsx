import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SITE_CONFIG } from '@/utils/constants';
import { fadeInUp } from '@/utils/animations';
import Container from '@/components/common/Container';
import ContactForm from '@/components/forms/ContactForm';
import SEO from '@/components/seo/SEO';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      label: 'Phone',
      value: SITE_CONFIG.phone,
      link: `tel:${SITE_CONFIG.phone}`,
    },
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      label: 'Email',
      value: SITE_CONFIG.email,
      link: `mailto:${SITE_CONFIG.email}`,
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      label: 'Location',
      value: `${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state}`,
      link: null,
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      label: 'Hours',
      value: 'Mon-Sat: 9AM-6PM IST',
      link: null,
    },
  ];

  return (
    <>
      <SEO
        title="Contact Us — Modex Digital"
        description="Get in touch with Modex Digital for web development, app development, and digital solutions."
        canonical="/contact"
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary to-neutral-900 text-white pt-32">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Get In Touch
            </h1>
            <p className="text-xl text-neutral-300">
              Have a project in mind? Let's discuss how we can help bring your ideas to life.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">{info.icon}</div>
                    <div>
                      <div className="text-sm text-neutral-500 mb-1">{info.label}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-primary hover:text-accent transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-primary font-medium">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links (Optional) */}
              <div className="mt-8">
                <h3 className="font-semibold text-primary mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <p className="text-sm text-neutral-500">Coming soon...</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-6 text-primary">Send Us a Message</h2>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-neutral-100">
        <Container>
          <div className="bg-neutral-200 rounded-2xl h-96 flex items-center justify-center">
            <p className="text-neutral-500">Map integration can be added here</p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
