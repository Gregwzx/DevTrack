'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  delay?: number;
  gradient?: boolean;
}

export function StatsCard({ title, value, icon: Icon, trend, delay = 0, gradient = false }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={clsx(
        'rounded-xl p-6 border transition-all duration-300 relative overflow-hidden group',
        gradient 
          ? 'bg-gradient-to-br from-[#16181d] to-[#1a1c22] border-zinc-800/50 hover:border-purple-500/30'
          : 'bg-[#16181d] border-zinc-800/50 hover:border-zinc-700/50',
        'hover:shadow-xl hover:shadow-purple-500/10'
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex items-start justify-between">
        <div className="flex-1">
          <p className="text-zinc-400 text-sm font-medium mb-2 tracking-wide uppercase">
            {title}
          </p>
          <motion.p 
            className="text-4xl font-bold text-zinc-100 mb-1"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {value}
          </motion.p>
          
          {trend && (
            <motion.div 
              className="flex items-center gap-1.5"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.2 }}
            >
              <div className={clsx(
                'flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold',
                trend.isPositive 
                  ? 'bg-emerald-500/10 text-emerald-400' 
                  : 'bg-red-500/10 text-red-400'
              )}>
                <span className="text-base leading-none">
                  {trend.isPositive ? '↑' : '↓'}
                </span>
                {Math.abs(trend.value)}%
              </div>
              <span className="text-xs text-zinc-500">vs. último mês</span>
            </motion.div>
          )}
        </div>

        <motion.div 
          className="relative"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={clsx(
            'w-14 h-14 rounded-xl flex items-center justify-center relative',
            'bg-gradient-to-br from-purple-500/10 to-purple-600/10',
            'ring-1 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all'
          )}>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <Icon className="w-7 h-7 text-purple-400 relative z-10" strokeWidth={2.5} />
          </div>
        </motion.div>
      </div>
      
      {/* Bottom shine effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}