'use client';

import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();

  const getBreadcrumb = () => {
    if (pathname === '/dashboard') return 'devtrack.dev/dashboard.tsx';
    if (pathname === '/learning') return 'devtrack.dev/learning.tsx';
    return 'devtrack.dev';
  };

  return (
    <nav className="h-16 border-b border-zinc-800/50 bg-[#0f1117]/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="h-full px-8 flex items-center">
        <div className="flex items-center gap-2 text-sm font-mono">
          <span className="text-zinc-500">~/</span>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-700" />
          <span className="text-zinc-400">{getBreadcrumb()}</span>
        </div>
      </div>
    </nav>
  );
}