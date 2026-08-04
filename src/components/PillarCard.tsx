'use client'

import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'
import dynamic from 'next/dynamic'

// 3D shape components - each pillar has a unique 3D shape
const PillarShape3D = dynamic(() => import('./PillarShape3D'), { ssr: false })

interface PillarCardProps {
  title: string
  subtitle: string
  icon: LucideIcon
  color: string
  borderColor: string
  items: string[]
  shapeType: 'icosahedron' | 'torus' | 'octahedron'
  index: number
}

export default function PillarCard({
  title,
  subtitle,
  icon: Icon,
  color,
  borderColor,
  items,
  shapeType,
  index,
}: PillarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`group relative rounded-3xl overflow-hidden glass hover:${borderColor} transition-all duration-500`}
      whileHover={{ y: -8 }}
    >
      {/* Border glow on hover */}
      <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:${borderColor} transition-colors duration-500`} style={{ '--hover-color': color } as React.CSSProperties} />

      {/* 3D Shape */}
      <div className="h-48 relative overflow-hidden">
        <PillarShape3D type={shapeType} color={color} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--card)]" />
      </div>

      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-white/5">
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{subtitle}</p>
          </div>
        </div>

        {/* Items list */}
        <ul className="space-y-2.5">
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + i * 0.08, duration: 0.4 }}
              className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed"
            >
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${color} bg-current flex-shrink-0`} style={{ backgroundColor: color.includes('emerald') ? '#10b981' : color.includes('amber') ? '#f59e0b' : '#06b6d4' }} />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 w-full opacity-50" style={{ background: `linear-gradient(90deg, transparent, ${color.includes('emerald') ? '#10b981' : color.includes('amber') ? '#f59e0b' : '#06b6d4'}, transparent)` }} />
    </motion.div>
  )
}