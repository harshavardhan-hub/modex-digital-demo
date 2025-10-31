import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { SERVICES, FAQ } from '@/utils/constants';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import SEO from '@/components/seo/SEO';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES.find((s) => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <SEO
        title={`${service.title} — Modex Digital`}
        description={service.description}
        canonical={`/services/${service.id}`}
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary to-neutral-900 text-white">
        <Container>
          <Link
            to="/services"
            className="inline-flex items-center text-accent hover:text-accent2 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Services
          </Link>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="heading-1 mb-6 text-white">{service.title}</h1>
            <p className="text-xl text-neutral-300 max-w-3xl">
              {service.description}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Problem Statement */}
      <section className="section-padding bg-white">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="heading-3 mb-6 text-error">Common Challenges</h2>
              <ul className="space-y-4">
                {service.problems.map((problem, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-error mt-1">❌</span>
                    <span className="text-neutral-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="heading-3 mb-6 text-success">Our Solutions</h2>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-success mt-1 flex-shrink-0" size={20} />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-neutral-100">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">Our Approach</h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              A proven process that delivers results
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {service.approach.map((step, idx) => (
              <motion.div key={idx} variants={staggerItem}>
                <Card className="text-center h-full">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {idx + 1}
                  </div>
                  <p className="text-neutral-700 font-medium">{step}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="section-padding bg-white">
        <Container size="md">
          <h2 className="heading-2 text-center mb-12">What You'll Receive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.deliverables.map((deliverable, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center space-x-3 p-4 bg-accent/5 rounded-lg"
              >
                <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                <span className="text-neutral-700">{deliverable}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-neutral-100">
        <Container size="md">
          <h2 className="heading-2 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQ.map((faq, idx) => (
              <Card key={idx} hover={false}>
                <h3 className="font-semibold text-primary mb-2">{faq.question}</h3>
                <p className="text-neutral-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-2 text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-neutral-300 mb-8">
              Let's discuss how we can help you achieve your goals with {service.title.toLowerCase()}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as={Link} to="/contact" variant="primary" size="lg">
                Request a Quote
              </Button>
              <Button
                as="a"
                href="tel:+918838598345"
                variant="secondary"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Call Us Now
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ServiceDetail;
