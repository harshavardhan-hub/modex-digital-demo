import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  BarChart3,
  Palette,
  Code2,
  Rocket,
  ArrowRight,
} from 'lucide-react';
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  scaleIn,
  staggerContainer,
} from '@/utils/animations';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  stepNumber: string;
}

const OurProcess: React.FC = () => {
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: 'Discovery',
      description: 'Understand your business goals & pain points',
      details: [
        'Research your market & competitors',
        'Identify key business objectives',
        'Define target audience & user personas',
        'Establish project scope & timelines',
      ],
      icon: <Search className="w-8 h-8" />,
      stepNumber: '01',
    },
    {
      id: 2,
      title: 'Strategy',
      description: 'Define roadmap & tech stack',
      details: [
        'Create detailed project roadmap',
        'Select optimal technology stack',
        'Plan architecture & infrastructure',
        'Establish success metrics & KPIs',
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      stepNumber: '02',
    },
    {
      id: 3,
      title: 'Design',
      description: 'Create engaging, user-focused UI/UX',
      details: [
        'Wireframe user flows & interfaces',
        'Design high-fidelity mockups',
        'Implement responsive design system',
        'Conduct usability testing & iterations',
      ],
      icon: <Palette className="w-8 h-8" />,
      stepNumber: '03',
    },
    {
      id: 4,
      title: 'Development',
      description: 'Build with modern frameworks',
      details: [
        'Code with best practices & standards',
        'Implement features & functionality',
        'Integrate APIs & third-party services',
        'Conduct code reviews & testing',
      ],
      icon: <Code2 className="w-8 h-8" />,
      stepNumber: '04',
    },
    {
      id: 5,
      title: 'Launch & Support',
      description: 'Test, deploy, and maintain',
      details: [
        'Perform QA & security testing',
        'Deploy to production environment',
        'Monitor performance & user feedback',
        'Provide ongoing maintenance & updates',
      ],
      icon: <Rocket className="w-8 h-8" />,
      stepNumber: '05',
    },
  ];

  // Animation variants for each step
  const stepAnimations = [
    slideInLeft,
    fadeInUp,
    slideInRight,
    scaleIn,
    fadeInUp,
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
      <div className="px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <motion.div
            className="inline-block px-4 py-2 mb-4 bg-accent/10 rounded-full"
            variants={fadeInUp}
          >
            <span className="text-accent text-sm font-semibold">
              Our Proven Methodology
            </span>
          </motion.div>

          <h2 className="heading-2 mb-4">Our Process</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            We follow a structured, transparent approach to deliver exceptional
            results. Every project goes through these proven stages.
          </p>
        </motion.div>

        {/* Process Steps Grid - Desktop/Tablet Only */}
        <motion.div
          className="hidden lg:grid grid-cols-5 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="group relative"
              variants={stepAnimations[index] || fadeInUp}
            >
              {/* Connecting Line (visible on lg screens) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent to-accent/30" />
              )}

              {/* Card */}
              <div className="card p-6 h-full flex flex-col relative z-10 hover:bg-accent/5">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.stepNumber}
                </div>

                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  {step.icon}
                </motion.div>

                {/* Title */}
                <h3 className="heading-3 mb-2 text-lg">{step.title}</h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 mb-4 flex-grow">
                  {step.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2 mb-4">
                  {step.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-neutral-600"
                    >
                      <ArrowRight className="w-3 h-3 mt-0.5 text-accent flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Progress Indicator */}
                <div className="w-full h-1 bg-neutral-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent to-accent/60"
                    initial={{ width: '0%' }}
                    whileInView={{ width: `${(step.id / processSteps.length) * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline View - Mobile/Tablet Only */}
        <div className="lg:hidden space-y-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={stepAnimations[index] || fadeInUp}
            >
              {/* Timeline */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/60 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {step.stepNumber}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="w-0.5 h-24 bg-gradient-to-b from-accent to-accent/20" />
                )}
              </div>

              {/* Content */}
              <div className="pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                    {step.icon}
                  </div>
                  <h3 className="heading-3 text-lg">{step.title}</h3>
                </div>
                <p className="text-neutral-600 mb-3">{step.description}</p>
                <ul className="space-y-1">
                  {step.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-neutral-600"
                    >
                      <ArrowRight className="w-3 h-3 mt-0.5 text-accent flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
