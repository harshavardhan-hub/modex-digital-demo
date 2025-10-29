import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Workflow, PhoneCall, MessageSquare } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/utils/animations';
import Container from '@/components/common/Container';
import Card from '@/components/common/Card';

const Automation: React.FC = () => {
  const [ref, isInView] = useInView();

  const workflows = [
    {
      icon: <Workflow className="w-10 h-10 text-accent" />,
      title: 'Automated Ticket Routing',
      description: 'Smart ticketing system that routes requests to the right team automatically.',
      step: '01',
    },
    {
      icon: <PhoneCall className="w-10 h-10 text-accent" />,
      title: 'Callback Scheduling',
      description: 'Automated callback system that ensures no lead goes unattended.',
      step: '02',
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-accent" />,
      title: 'Feedback Surveys',
      description: 'Automated customer feedback collection to improve service quality.',
      step: '03',
    },
  ];

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
            Automation & Workflow
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-lg text-neutral-500 max-w-2xl mx-auto"
          >
            Streamline your operations with intelligent automation
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {workflows.map((workflow, index) => (
            <motion.div key={index} variants={staggerItem} className="relative">
              <Card className="h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {workflow.step}
                </div>
                <div className="pt-4">
                  <div className="mb-4">{workflow.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {workflow.title}
                  </h3>
                  <p className="text-neutral-500">{workflow.description}</p>
                </div>
              </Card>
              
              {/* Connector Line */}
              {index < workflows.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Automation;
