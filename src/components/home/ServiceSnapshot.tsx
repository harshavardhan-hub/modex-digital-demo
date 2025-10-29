import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { SERVICES } from '@/utils/constants';
import Card from '@/components/common/Card';
import Container from '@/components/common/Container';
import { Link } from 'react-router-dom';

const ServiceSnapshot: React.FC = () => {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="section-padding bg-neutral-100">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <motion.h2 variants={staggerItem} className="heading-2 mb-4">
            Our Services
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.id} variants={staggerItem}>
              <Link to={`/services/${service.id}`}>
                <Card className="h-full">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 text-sm">
                    {service.shortDescription}
                  </p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default ServiceSnapshot;
