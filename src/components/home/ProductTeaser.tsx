import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeInUp, slideInRight } from '@/utils/animations';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';

const ProductTeaser: React.FC = () => {
  const [ref, isInView] = useInView();

  const features = [
    'AI-powered automation for business processes',
    'Real-time analytics and reporting dashboard',
    'Seamless integration with existing tools',
  ];

  return (
    <section
      ref={ref}
      className="section-padding bg-gradient-to-br from-accent/5 to-accent2/5"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Coming Soon 🚀
            </span>
            <h2 className="heading-2 mb-4">Next-Gen Business Management Platform</h2>
            <p className="text-lg text-neutral-600 mb-6">
              We're building an all-in-one platform to help small businesses manage
              operations, automate workflows, and scale efficiently.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button as={Link} to="/product" variant="primary" size="lg" className="group">
              Join Waitlist
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
          </motion.div>

          {/* Right Mockup */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={slideInRight}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 border border-neutral-200">
              {/* Dashboard Mockup Image */}
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="Business Dashboard Preview"
                className="w-full h-auto rounded-lg"
              />

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-accent2/20 rounded-2xl blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ProductTeaser;
