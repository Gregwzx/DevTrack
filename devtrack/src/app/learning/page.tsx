'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Plus, BookOpen, Tag } from 'lucide-react';

export default function LearningPage() {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <Container>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-zinc-100 mb-2">
            Aprendi Hoje 📚
          </h1>
          <p className="text-zinc-400">
            Registre seus aprendizados diários
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Button onClick={() => setIsAdding(!isAdding)}>
            <Plus className="w-4 h-4 mr-2" />
            Novo aprendizado
          </Button>
        </motion.div>
      </div>

      {/* Add Form */}
      {isAdding && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-8"
        >
          <Card>
            <h3 className="font-semibold text-zinc-100 mb-4">Adicionar aprendizado</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  O que você aprendeu?
                </label>
                <Input placeholder="Ex: React Server Components" />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  Categoria
                </label>
                <Input placeholder="Ex: React, TypeScript..." />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  Notas (opcional)
                </label>
                <textarea
                  className="w-full px-4 py-2.5 bg-[#16181d] border border-zinc-800/50 rounded-lg text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-colors min-h-[100px]"
                  placeholder="Descreva o que aprendeu..."
                />
              </div>

              <div className="flex gap-3 justify-end">
                <Button variant="ghost" onClick={() => setIsAdding(false)}>
                  Cancelar
                </Button>
                <Button>Salvar</Button>
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Learning List */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-purple-400" />
          Histórico de aprendizados
        </h2>

        <div className="grid gap-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="hover:border-purple-500/30 cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-zinc-100 mb-2">
                      React Server Components
                    </h3>
                    <p className="text-sm text-zinc-400 mb-3">
                      Aprendi sobre o funcionamento dos Server Components no Next.js 14 e como eles melhoram a performance.
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20">
                        <Tag className="w-3.5 h-3.5 text-purple-400" />
                        <span className="text-xs font-medium text-purple-400">React</span>
                      </div>
                      <span className="text-xs text-zinc-500">Hoje às 14:30</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}