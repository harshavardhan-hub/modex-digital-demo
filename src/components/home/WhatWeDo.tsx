import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Code, Smartphone, Briefcase, Palette } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/utils/animations';
import Container from '@/components/common/Container';

const WhatWeDo: React.FC = () => {
  const [ref, isInView] = useInView();

  const services = [
    {
      icon: <Code className="w-12 h-12 text-accent" />,
      title: 'Web Development',
      problem: "Outdated websites that don't convert visitors into customers",
      approach: 'Modern, responsive design with conversion optimization',
      deliverables: 'Fast, SEO-friendly websites that drive results',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop',
    },
    {
      icon: <Smartphone className="w-12 h-12 text-accent" />,
      title: 'App Development',
      problem: "Need to reach customers on mobile but don't have an app",
      approach: 'User-centric design with seamless functionality',
      deliverables: 'Native and cross-platform apps that users love',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    },
    {
      icon: <Briefcase className="w-12 h-12 text-accent" />,
      title: 'Business Consulting',
      problem: 'Unclear digital strategy and inefficient processes',
      approach: 'Data-driven analysis and strategic roadmap',
      deliverables: 'Actionable insights and implementation support',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    },
    {
      icon: <Palette className="w-12 h-12 text-accent" />,
      title: 'Branding & Design',
      problem: 'Inconsistent brand identity and poor visual presence',
      approach: 'Cohesive brand strategy and visual identity',
      deliverables: 'Professional brand assets and guidelines',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={staggerItem} className="heading-2 mb-4">
            What We Do
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-lg text-neutral-500 max-w-2xl mx-auto"
          >
            We solve real business problems with practical digital solutions
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center space-x-4 mb-6">
                  {service.icon}
                  <h3 className="heading-3">{service.title}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-error mb-2">❌ Problem</h4>
                    <p className="text-neutral-600">{service.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-accent mb-2">✨ Our Approach</h4>
                    <p className="text-neutral-600">{service.approach}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-success mb-2">
                      ✅ Deliverables
                    </h4>
                    <p className="text-neutral-600">{service.deliverables}</p>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default WhatWeDo;
