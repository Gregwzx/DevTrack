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
    return (
      <motion.div
        ref={ref}
        whileHover={hoverable ? { y: -2 } : undefined}
        transition={{ duration: 0.2 }}
        className={clsx(
          'rounded-xl p-6 transition-all duration-300',
          {
            'bg-[#16181d] border border-zinc-800/50': variant === 'default',
            'bg-gradient-to-br from-[#16181d] to-[#1a1c22] border border-zinc-800/50 relative overflow-hidden':
              variant === 'gradient',
            'bg-zinc-900/30 backdrop-blur-xl border border-zinc-800/50':
              variant === 'glass',
          },
          className
        )}
        {...props}
      >
        {variant === 'gradient' && (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        )}

        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
