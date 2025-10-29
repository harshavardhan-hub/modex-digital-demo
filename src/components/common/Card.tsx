import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, hover = true }) => {
  return (
    <motion.div
      className={clsx(
        'bg-white rounded-card border border-neutral-200 shadow-card p-6',
        hover && 'transition-all duration-300',
        className
      )}
      whileHover={hover ? { y: -4, boxShadow: '0px 12px 24px rgba(15, 23, 42, 0.12)' } : {}}
    >
      {children}
    </motion.div>
  );
};

export default Card;
