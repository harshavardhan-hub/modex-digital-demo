import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CLIENTS } from '@/utils/constants';
import { staggerContainer, staggerItem } from '@/utils/animations';
import Container from '@/components/common/Container';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

const CaseStudies: React.FC = () => {
  const [ref, isInView] = useInView();

  // Client images
  const clientImages = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <motion.h2 variants={staggerItem} className="heading-2 mb-4">
            Client Success Stories
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-lg text-neutral-500 max-w-2xl mx-auto"
          >
            Real results for real businesses
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {CLIENTS.map((client, idx) => (
            <motion.div key={client.id} variants={staggerItem}>
              <Card className="h-full flex flex-col">
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img
                    src={clientImages[idx]}
                    alt={client.name}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {client.name}
                </h3>
                <p className="text-sm text-neutral-500 mb-3">{client.industry}</p>

                <div className="mb-4">
                  <p className="text-sm font-medium text-neutral-700 mb-1">Project:</p>
                  <p className="text-sm text-neutral-600">{client.project}</p>
                </div>

                <div className="bg-success/10 border border-success/20 rounded-lg p-3 mb-4">
                  <p className="text-success font-semibold text-sm">
                    📈 {client.result}
                  </p>
                </div>

                <blockquote className="text-sm text-neutral-600 italic border-l-4 border-accent pl-4 mb-4 flex-grow">
                  "{client.testimonial}"
                </blockquote>

                <p className="text-xs text-neutral-500">— {client.contact}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Button as={Link} to="/clients" variant="primary" size="lg" className="group">
            View All Case Studies
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default CaseStudies;
