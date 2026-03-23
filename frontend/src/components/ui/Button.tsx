import React from 'react';
import { motion } from 'framer-motion';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}
export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  fullWidth = false,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center font-semibold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary:
    'bg-ureport-blue text-white hover:bg-[#158bb8] focus:ring-ureport-blue shadow-md hover:shadow-lg',
    secondary:
    'bg-ureport-gold text-white hover:bg-[#d97706] focus:ring-ureport-gold shadow-md hover:shadow-lg',
    outline:
    'border-2 border-ureport-blue text-ureport-blue hover:bg-ureport-light focus:ring-ureport-blue',
    ghost: 'text-ureport-blue hover:bg-ureport-light focus:ring-ureport-blue'
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  const widthClass = fullWidth ? 'w-full' : '';
  return (
    <motion.button
      whileHover={{
        scale: 1.02
      }}
      whileTap={{
        scale: 0.98
      }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...(props as any)}>
      
      {children}
    </motion.button>);

}