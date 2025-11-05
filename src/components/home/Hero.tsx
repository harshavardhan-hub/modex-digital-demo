import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '@/utils/constants';
import { fadeInUp } from '@/utils/animations';
import Button from '@/components/common/Button';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#030712] via-[#0f172a] to-[#1e293b] text-white overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-10 py-20 lg:py-24 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Hero Badge */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium backdrop-blur-sm mb-6 sm:mb-8 hover:bg-accent/20 transition-all duration-300"
        >
          🚀 Empowering Businesses with AI
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-6 sm:mb-8"
        >
          {SITE_CONFIG.tagline}
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12"
        >
          {SITE_CONFIG.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mb-14 sm:mb-16"
        >
          <Button
            as={Link}
            to="/contact"
            variant="primary"
            size="md"
            className="group w-full sm:w-auto bg-accent text-white px-7 py-3 rounded-full text-base font-medium flex items-center justify-center shadow-md hover:scale-[1.03] transition-transform duration-200"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>

          <Button
            as={Link}
            to="/clients"
            variant="secondary"
            size="md"
            className="group w-full sm:w-auto border border-white/50 text-white bg-white/5 backdrop-blur-sm rounded-full px-7 py-3 text-base font-medium flex items-center justify-center hover:bg-white/10 transition-all duration-300"
          >
            <PlayCircle className="mr-2" size={18} />
            See Our Work
          </Button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md sm:max-w-lg mx-auto"
        >
          {[
            { label: 'Clients', value: '20+' },
            { label: 'Years', value: '3+' },
            { label: 'Projects', value: '10+' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -6,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.25)',
              }}
              className="backdrop-blur-sm bg-white/5 rounded-2xl py-5 px-3 sm:px-5 border border-white/10 hover:border-accent/40 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-accent">{stat.value}</div>
              <div className="text-xs sm:text-sm text-neutral-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-12 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 hover:border-accent transition-colors"
        >
          <motion.div className="w-1 h-2 bg-white rounded-full"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
