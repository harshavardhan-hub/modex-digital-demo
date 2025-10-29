import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/utils/constants';
import { staggerContainer, staggerItem } from '@/utils/animations';
import Container from '@/components/common/Container';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import SEO from '@/components/seo/SEO';

const Services: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Services — Modex Digital"
        description="Web development, app development, business consulting, and branding services for small businesses."
        canonical="/services"
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-neutral-900 text-white ">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Our Services
            </h1>
            <p className="text-xl text-neutral-300">
              Comprehensive digital solutions designed to help your business grow and succeed in the modern marketplace.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {SERVICES.map((service) => (
              <motion.div key={service.id} variants={staggerItem}>
                <Card className="h-full flex flex-col">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  
                  <h2 className="text-2xl font-semibold mb-3 text-primary">
                    {service.title}
                  </h2>
                  
                  <p className="text-neutral-600 mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-sm text-neutral-700 mb-3">Key Features:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-sm text-neutral-600 flex items-start">
                          <span className="text-accent mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    as={Link}
                    to={`/services/${service.id}`}
                    variant="primary"
                    className="w-full group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent to-accent2 text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help transform your business with the right digital solutions.
            </p>
            <Button
              as={Link}
              to="/contact"
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-accent"
            >
              Get a Free Consultation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;
