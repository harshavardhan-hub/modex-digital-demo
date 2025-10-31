import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '@/utils/constants';
import { fadeInUp, slideInRight } from '@/utils/animations';
import Button from '@/components/common/Button';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-neutral-900 text-white pt-20"
      style={{ 
        width: '100%',
        minWidth: '100%',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div 
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: '1280px', margin: '0 auto', boxSizing: 'border-box' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <span className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-medium">
                🚀 Trusted by 20+ businesses
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight"
            >
              {SITE_CONFIG.tagline}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg lg:text-xl text-neutral-300 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {SITE_CONFIG.description}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start"
            >
              <Button as={Link} to="/contact" variant="primary" size="md" className="group">
                Get Free Consultation
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </Button>
              <Button
                as={Link}
                to="/clients"
                variant="secondary"
                size="md"
                className="group border-white text-white hover:bg-white hover:text-primary"
              >
                <PlayCircle className="mr-2" size={18} />
                See Our Work
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 lg:mt-12 grid grid-cols-3 gap-4 lg:gap-6 max-w-md mx-auto lg:mx-0"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent">20+</div>
                <div className="text-xs sm:text-sm text-neutral-400 mt-1">Clients</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent">3+</div>
                <div className="text-xs sm:text-sm text-neutral-400 mt-1">Years</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent">10+</div>
                <div className="text-xs sm:text-sm text-neutral-400 mt-1">Projects</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual - Hero Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://res.cloudinary.com/drit9nkha/image/upload/v1761921398/unnamed_w45tsm.jpg"
                  alt="Digital Solutions Dashboard"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent2/20 mix-blend-overlay"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-20 h-20 lg:w-24 lg:h-24 bg-accent rounded-full opacity-20 blur-2xl"
              ></motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 w-24 h-24 lg:w-32 lg:h-32 bg-accent2 rounded-full opacity-20 blur-2xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white rounded-full"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
