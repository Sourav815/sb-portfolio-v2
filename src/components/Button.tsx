import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-zinc-900 text-white hover:bg-zinc-800 border-transparent',
      secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 border-transparent',
      outline: 'bg-transparent text-zinc-900 border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300',
      ghost: 'bg-transparent text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 border-transparent',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-6 py-3 text-base',
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900/20 border',
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
