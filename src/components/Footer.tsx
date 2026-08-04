'use client'

import { motion } from 'framer-motion'
import { Leaf, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold">
              Green <span className="text-emerald-400">Earth</span> Enterprises
            </span>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Caso de Estudio RSC · Hecho con <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" /> para un futuro sostenible
          </p>

          <div className="flex gap-3">
            {['GRI', 'ISO 26000', 'ODS'].map((s) => (
              <span key={s} className="text-xs px-3 py-1 rounded-full glass text-emerald-400/70">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
