'use client';

import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export function Tooltip({ children, content, position = 'top' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: position === 'top' ? 5 : -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: position === 'top' ? 5 : -5 }}
            transition={{ duration: 0.15 }}
            className={clsx(
              'absolute z-50 pointer-events-none',
              positions[position]
            )}
          >
            <div className="px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl backdrop-blur-sm">
              <p className="text-xs text-zinc-300 whitespace-nowrap font-medium">
                {content}
              </p>
            </div>
            
            {/* Arrow */}
            <div className={clsx(
              'absolute w-2 h-2 bg-zinc-900 border border-zinc-800 rotate-45',
              {
                'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border-t-0 border-l-0': position === 'top',
                'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-b-0 border-r-0': position === 'bottom',
                'right-0 top-1/2 -translate-y-1/2 translate-x-1/2 border-t-0 border-r-0': position === 'left',
                'left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 border-b-0 border-l-0': position === 'right',
              }
            )} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function clsx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}