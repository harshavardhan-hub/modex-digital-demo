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
      icon: <Code className="w-8 h-8 lg:w-10 lg:h-10 text-accent" />,
      title: 'Web Development',
      problem: "Outdated websites that don't convert visitors into customers",
      approach: 'Modern, responsive design with conversion optimization',
      deliverables: 'Fast, SEO-friendly websites that drive results',
      image: 'https://res.cloudinary.com/drit9nkha/image/upload/v1761921841/unnamed_2_tnw8lo.jpg',
    },
    {
      icon: <Smartphone className="w-8 h-8 lg:w-10 lg:h-10 text-accent" />,
      title: 'App Development',
      problem: "Need to reach customers on mobile but don't have an app",
      approach: 'User-centric design with seamless functionality',
      deliverables: 'Native and cross-platform apps that users love',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    },
    {
      icon: <Briefcase className="w-8 h-8 lg:w-10 lg:h-10 text-accent" />,
      title: 'Business Consulting',
      problem: 'Unclear digital strategy and inefficient processes',
      approach: 'Data-driven analysis and strategic roadmap',
      deliverables: 'Actionable insights and implementation support',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    },
    {
      icon: <Palette className="w-8 h-8 lg:w-10 lg:h-10 text-accent" />,
      title: 'Branding & Design',
      problem: 'Inconsistent brand identity and poor visual presence',
      approach: 'Cohesive brand strategy and visual identity',
      deliverables: 'Professional brand assets and guidelines',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    },
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <Container>
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <motion.h2 
            variants={staggerItem} 
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary mb-3 sm:mb-4"
          >
            What We Do
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto px-4"
          >
            We solve real business problems with practical digital solutions
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12 sm:space-y-16 lg:space-y-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
            >
              {/* Image Section */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 sm:h-64 lg:h-80 xl:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex items-center space-x-3 sm:space-x-4 mb-5 sm:mb-6">
                  <div className="p-2.5 sm:p-3 bg-accent/10 rounded-lg sm:rounded-xl flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">
                    {service.title}
                  </h3>
                </div>

                <div className="space-y-4 sm:space-y-5">
                  {/* Problem */}
                  <div className="bg-error/5 border-l-4 border-error rounded-r-lg p-3 sm:p-4">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <span className="text-error text-lg sm:text-xl flex-shrink-0 mt-0.5">✕</span>
                      <div>
                        <h4 className="font-semibold text-error mb-1 text-sm sm:text-base">
                          Problem
                        </h4>
                        <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed">
                          {service.problem}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Our Approach */}
                  <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-3 sm:p-4">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <span className="text-accent text-lg sm:text-xl flex-shrink-0 mt-0.5">✦</span>
                      <div>
                        <h4 className="font-semibold text-accent mb-1 text-sm sm:text-base">
                          Our Approach
                        </h4>
                        <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed">
                          {service.approach}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="bg-success/5 border-l-4 border-success rounded-r-lg p-3 sm:p-4">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <span className="text-success text-lg sm:text-xl flex-shrink-0 mt-0.5">✓</span>
                      <div>
                        <h4 className="font-semibold text-success mb-1 text-sm sm:text-base">
                          Deliverables
                        </h4>
                        <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed">
                          {service.deliverables}
                        </p>
                      </div>
                    </div>
                  </div>
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
