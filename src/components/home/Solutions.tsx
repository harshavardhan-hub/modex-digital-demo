import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Zap, Target, TrendingUp } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/utils/animations';
import Container from '@/components/common/Container';
import Card from '@/components/common/Card';

const Solutions: React.FC = () => {
  const [ref, isInView] = useInView();

  const solutions = [
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: 'Digital Transformation',
      description: 'Modernize your business operations with cutting-edge digital solutions.',
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: 'Innovative Solutions',
      description: 'Custom-built technology that solves your unique business challenges.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: 'Get More Leads',
      description: 'Data-driven strategies to attract and convert your ideal customers.',
    },
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
            Our Solutions For You
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-lg text-neutral-500 max-w-3xl mx-auto"
          >
            We deliver comprehensive digital solutions that drive real business results
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="text-center h-full">
                <div className="flex justify-center mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {solution.title}
                </h3>
                <p className="text-neutral-500">{solution.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Solutions;
