'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { Card } from '@/components/ui/Card';
import { Flame, Target, TrendingUp, Calendar } from 'lucide-react';

export default function DashboardPage() {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Bom dia' : currentHour < 18 ? 'Boa tarde' : 'Boa noite';

  return (
    <Container>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-zinc-100 mb-2">
          {greeting}, Developer 👋
        </h1>
        <p className="text-zinc-400">
          Acompanhe sua evolução e conquistas
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard
          title="Dias de sequência"
          value={7}
          icon={Flame}
          trend={{ value: 12, isPositive: true }}
          delay={0.1}
        />
        <StatsCard
          title="Conteúdos aprendidos"
          value={42}
          icon={Target}
          trend={{ value: 8, isPositive: true }}
          delay={0.2}
        />
        <StatsCard
          title="Horas de estudo"
          value="28h"
          icon={TrendingUp}
          trend={{ value: 15, isPositive: true }}
          delay={0.3}
        />
      </div>

      {/* Activity Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-purple-400" />
          Atividade Recente
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-semibold text-zinc-100 mb-4">Últimos aprendizados</h3>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-zinc-300 font-medium truncate">
                      React Server Components
                    </p>
                    <p className="text-xs text-zinc-500 mt-0.5">Há {i} dia{i > 1 ? 's' : ''}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="font-semibold text-zinc-100 mb-4">Próximas metas</h3>
            <div className="space-y-3">
              {['Completar 30 dias seguidos', 'Estudar TypeScript avançado', 'Fazer deploy do projeto'].map((goal, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50">
                  <div className="w-5 h-5 rounded border-2 border-zinc-700 flex-shrink-0" />
                  <p className="text-sm text-zinc-300">{goal}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </motion.div>
    </Container>
  );
}