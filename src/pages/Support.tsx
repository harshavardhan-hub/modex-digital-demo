import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, FAQ } from '@/utils/constants';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import SEO from '@/components/seo/SEO';

const Support: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I need support with my project.");
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp.replace(/\+/g, '')}?text=${message}`, '_blank');
  };

  const supportChannels = [
    {
      icon: <Phone className="w-8 h-8 text-accent" />,
      title: 'Phone Support',
      description: 'Call us directly for immediate assistance',
      action: 'Call Now',
      link: `tel:${SITE_CONFIG.phone}`,
    },
    {
      icon: <Mail className="w-8 h-8 text-accent" />,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 24 hours',
      action: 'Send Email',
      link: `mailto:${SITE_CONFIG.email}`,
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-accent" />,
      title: 'WhatsApp',
      description: 'Chat with us instantly on WhatsApp',
      action: 'Start Chat',
      onClick: handleWhatsApp,
    },
  ];

  return (
    <>
      <SEO
        title="Support Center — Modex Digital"
        description="Get help and support for your Modex Digital projects. Contact us via phone, email, or WhatsApp."
        canonical="/support"
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary to-neutral-900 text-white">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              How Can We Help?
            </h1>
            <p className="text-xl text-neutral-300">
              We're here to support you 24/7. Get in touch through your preferred channel.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Support Channels */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {supportChannels.map((channel, idx) => (
              <motion.div key={idx} variants={staggerItem}>
                <Card className="text-center h-full flex flex-col">
                  <div className="flex justify-center mb-4">{channel.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {channel.title}
                  </h3>
                  <p className="text-neutral-500 mb-6 flex-grow">
                    {channel.description}
                  </p>
                  {channel.onClick ? (
                    <Button onClick={channel.onClick} variant="primary" className="w-full">
                      {channel.action}
                    </Button>
                  ) : (
                    <Button as="a" href={channel.link} variant="primary" className="w-full">
                      {channel.action}
                    </Button>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-neutral-100">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-500">
              Find answers to common questions about our services
            </p>
          </motion.div>

          <div className="space-y-4">
            {FAQ.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card hover={false} className="cursor-pointer">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                    className="w-full text-left flex items-start justify-between"
                  >
                    <h3 className="font-semibold text-primary pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                        openFAQ === idx ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFAQ === idx ? 'auto' : 0,
                      opacity: openFAQ === idx ? 1 : 0,
                      marginTop: openFAQ === idx ? 12 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-neutral-600">{faq.answer}</p>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Form CTA */}
      <section className="section-padding bg-primary text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Can't find what you're looking for? Submit a support ticket and we'll get back to you within 24 hours.
            </p>
            <Button as={Link} to="/contact" variant="primary" size="lg">
              Open a Support Ticket
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Support;
