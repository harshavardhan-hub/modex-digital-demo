import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { STATS } from '@/utils/constants';
import { staggerContainer, staggerItem } from '@/utils/animations';
import Container from '@/components/common/Container';

const Stats: React.FC = () => {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="section-padding bg-primary text-white">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="text-center"
            >
              <div className="text-5xl mb-2">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                <CountUp end={parseInt(stat.value)} suffix={stat.value.replace(/[0-9]/g, '')} isInView={isInView} />
              </div>
              <div className="text-neutral-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted By Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-300 text-lg">Trusted by Leading Businesses</p>
        </motion.div>
      </Container>
    </section>
  );
};

// Simple CountUp Component
const CountUp: React.FC<{ end: number; suffix: string; isInView: boolean }> = ({
  end,
  suffix,
  isInView,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, isInView]);

  return <>{count}{suffix}</>;
};

export default Stats;
