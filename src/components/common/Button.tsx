import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

interface ButtonAsLinkProps extends ButtonProps {
  as: typeof Link;
  to: string;
}

interface ButtonAsAnchorProps extends ButtonProps {
  as: 'a';
  href: string;
}

type AllButtonProps = ButtonProps | ButtonAsLinkProps | ButtonAsAnchorProps;

const Button: React.FC<AllButtonProps> = (props) => {
  const { variant = 'primary', size = 'md', children, className, ...rest } = props;

  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2';

  const variantClasses = {
    primary:
      'bg-accent text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-98',
    secondary:
      'border-2 border-accent text-accent hover:bg-accent hover:text-white',
    ghost: 'text-accent hover:text-accent2',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  // Render as Link
  if ('as' in props && props.as === Link) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  // Render as anchor
  if ('as' in props && props.as === 'a') {
    return (
      <a href={props.href} className={classes}>
        {children}
      </a>
    );
  }

  // Render as button
  const buttonProps = rest as ButtonProps;
  return (
    <motion.button
      className={classes}
      whileHover={{ scale: variant !== 'ghost' ? 1.03 : 1 }}
      whileTap={{ scale: variant !== 'ghost' ? 0.98 : 1 }}
      type={buttonProps.type}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled}
    >
      {children}
    </motion.button>
  );
};

export default Button;
