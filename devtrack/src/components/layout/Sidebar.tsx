'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { LayoutDashboard, BookOpen, Code2 } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/learning', label: 'Aprendi Hoje', icon: BookOpen },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 h-screen bg-[#0f1117] border-r border-zinc-800/50 flex flex-col"
    >
      {/* Logo */}
      <div className="p-6 border-b border-zinc-800/50">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg text-zinc-100 group-hover:text-purple-400 transition-colors">
            DevTrack
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors relative group',
                isActive
                  ? 'text-purple-400 bg-purple-500/10'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50'
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-purple-500/10 rounded-lg border border-purple-500/20"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
              <Icon className="w-5 h-5 relative z-10" />
              <span className="font-medium text-sm relative z-10">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-zinc-800/50">
        <div className="px-3 py-2">
          <p className="text-xs text-zinc-500 font-mono">devtrack.dev</p>
        </div>
      </div>
    </motion.aside>
  );
}