'use client';

import { HTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, children, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200',
          {
            // Variants
            'bg-zinc-800/80 text-zinc-300 border border-zinc-700/50': variant === 'default',
            'bg-purple-500/10 text-purple-400 border border-purple-500/20': variant === 'primary',
            'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20': variant === 'success',
            'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20': variant === 'warning',
            'bg-red-500/10 text-red-400 border border-red-500/20': variant === 'danger',
            
            // Sizes
            'px-2 py-0.5 text-[10px] gap-1': size === 'sm',
            'px-2.5 py-1 text-xs gap-1.5': size === 'md',
            'px-3 py-1.5 text-sm gap-2': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';