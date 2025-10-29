import React from 'react';
import { motion } from 'framer-motion';
import { CLIENTS } from '@/utils/constants';
import { staggerContainer, staggerItem } from '@/utils/animations';
import Container from '@/components/common/Container';
import Card from '@/components/common/Card';
import SEO from '@/components/seo/SEO';
import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';

const Clients: React.FC = () => {
  const clientProjectImages = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
  ];

  return (
    <>
      <SEO
        title="Our Clients & Case Studies — Modex Digital"
        description="Success stories from businesses we've helped transform with digital solutions."
        canonical="/clients"
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary to-neutral-900 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Our Success Stories
            </h1>
            <p className="text-xl text-neutral-300">
              Real results for real businesses. See how we've helped companies like yours
              achieve their digital goals.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-16"
          >
            {CLIENTS.map((client, index) => (
              <motion.div
                key={client.id}
                variants={staggerItem}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full mb-4">
                    {client.industry}
                  </span>

                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
                    {client.name}
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Project</h3>
                      <p className="text-neutral-600">{client.project}</p>
                    </div>

                    <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                      <h3 className="font-semibold text-success mb-2">Results</h3>
                      <p className="text-success">{client.result}</p>
                    </div>

                    <blockquote className="border-l-4 border-accent pl-4 italic text-neutral-600">
                      "{client.testimonial}"
                      <footer className="text-sm text-neutral-500 mt-2 not-italic">
                        — {client.contact}
                      </footer>
                    </blockquote>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card>
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={clientProjectImages[index]}
                        alt={`${client.name} Project`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Stats */}
      <section className="section-padding bg-neutral-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '20+', label: 'Happy Clients' },
              { value: '10+', label: 'Projects Completed' },
              { value: '100%', label: 'Satisfaction Rate' },
              { value: '3+', label: 'Years Experience' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-neutral-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <Button as={Link} to="/contact" variant="primary" size="lg">
              Start Your Project
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Clients;
