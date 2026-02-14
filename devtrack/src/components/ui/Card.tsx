'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'gradient' | 'glass';
  hoverable?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, variant = 'default', hoverable = true, ...props }, ref) => {
    const Component = hoverable ? motion.div : 'div';
    
    return (
      <Component
        ref={ref}
        {...(hoverable && {
          whileHover: { y: -2 },
          transition: { duration: 0.2 }
        })}
        className={clsx(
          'rounded-xl p-6 transition-all duration-300',
          {
            // Default variant
            'bg-[#16181d] border border-zinc-800/50': variant === 'default',
            
            // Gradient variant
            'bg-gradient-to-br from-[#16181d] to-[#1a1c22] border border-zinc-800/50 relative overflow-hidden': 
              variant === 'gradient',
            
            // Glass variant
            'bg-zinc-900/30 backdrop-blur-xl border border-zinc-800/50': 
              variant === 'glass',
            
            // Hover effects
            'hover:border-zinc-700/50 hover:shadow-lg hover:shadow-purple-500/5': 
              hoverable && variant === 'default',
            
            'hover:border-purple-500/20 hover:shadow-xl hover:shadow-purple-500/10': 
              hoverable && variant === 'gradient',
            
            'hover:border-zinc-700/50 hover:bg-zinc-900/40': 
              hoverable && variant === 'glass',
          },
          className
        )}
        {...props}
      >
        {/* Subtle gradient overlay for gradient variant */}
        {variant === 'gradient' && (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        )}
        
        <div className="relative z-10">
          {children}
        </div>
      </Component>
    );
  }
);

Card.displayName = 'Card';