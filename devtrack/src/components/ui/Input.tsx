'use client';

import { InputHTMLAttributes, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error, icon, iconPosition = 'left', ...props }, ref) => {
    return (
      <div className="w-full">
        <div className="relative group">
          {icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-purple-400 transition-colors">
              {icon}
            </div>
          )}
          
          <input
            ref={ref}
            type={type}
            className={clsx(
              'w-full px-4 py-2.5 bg-[#16181d] border rounded-lg',
              'text-zinc-100 placeholder:text-zinc-500',
              'transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500',
              'hover:border-zinc-700/80',
              {
                'border-zinc-800/50': !error,
                'border-red-500/50 focus:ring-red-500/50 focus:border-red-500': error,
                'pl-10': icon && iconPosition === 'left',
                'pr-10': icon && iconPosition === 'right',
              },
              className
            )}
            {...props}
          />
          
          {icon && iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-purple-400 transition-colors">
              {icon}
            </div>
          )}
        </div>
        
        {error && (
          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';