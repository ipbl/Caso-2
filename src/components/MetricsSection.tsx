'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingDown, Recycle, Smile, Users, BookOpen, DollarSign } from 'lucide-react'

type MetricItem = {
  label: string
  value: number
  suffix: string
  icon: React.ElementType
  color: string
  description: string
}

const metrics: MetricItem[] = [
  {
    label: 'Reducción CO₂',
    value: 42,
    suffix: '%',
    icon: TrendingDown,
    color: '#10b981',
    description: 'Reducción anual de emisiones de carbono en toneladas',
  },
  {
    label: 'Materiales Reciclados',
    value: 78,
    suffix: '%',
    icon: Recycle,
    color: '#34d399',
    description: 'Porcentaje de materiales reciclados en producción',
  },
  {
    label: 'Satisfacción Laboral',
    value: 91,
    suffix: '%',
    icon: Smile,
    color: '#f59e0b',
    description: 'Índice de satisfacción de empleados medido por encuestas',
  },
  {
    label: 'Diversidad en Liderazgo',
    value: 45,
    suffix: '%',
    icon: Users,
    color: '#fbbf24',
    description: 'Mujeres y minorías en puestos de dirección',
  },
  {
    label: 'Horas de Capacitación',
    value: 64,
    suffix: 'h',
    icon: BookOpen,
    color: '#06b6d4',
    description: 'Promedio de horas de formación por empleado al año',
  },
  {
    label: 'Inversión Social',
    value: 2.5,
    suffix: 'M',
    icon: DollarSign,
    color: '#22d3ee',
    description: 'Millones de USD invertidos en comunidades locales',
  },
]

function CircularMetric({ item, index }: { item: MetricItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)
  const Icon = item.icon
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const progress = (count / (item.value > 10 ? 100 : 10)) * circumference

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const increment = item.value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= item.value) {
        setCount(item.value)
        clearInterval(timer)
      } else {
        setCount(Math.round(current * 10) / 10)
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, item.value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group"
    >
      <div className="glass rounded-3xl p-6 hover:border-emerald-400/20 transition-all duration-300 h-full">
        {/* Circular progress */}
        <div className="relative w-36 h-36 mx-auto mb-4">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60" cy="60" r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-white/5"
            />
            <motion.circle
              cx="60" cy="60" r={radius}
              fill="none"
              stroke={item.color}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={isInView ? { strokeDashoffset: circumference - progress } : {}}
              transition={{ duration: 2, ease: 'easeOut', delay: index * 0.12 }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Icon className="w-5 h-5 mb-1" style={{ color: item.color }} />
            <span className="text-2xl font-bold" style={{ color: item.color }}>
              {item.value % 1 !== 0 ? count.toFixed(1) : count}
              <span className="text-sm font-normal opacity-70">{item.suffix}</span>
            </span>
          </div>
        </div>

        <h3 className="text-center text-base font-semibold mb-1">{item.label}</h3>
        <p className="text-center text-xs text-muted-foreground leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  )
}

export default function MetricsSection() {
  return (
    <section id="metrics" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.04)_0%,_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Impacto Medible</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Métricas y <span className="gradient-text">KPIs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Indicadores cuantitativos y cualitativos que permiten medir, monitorear y comunicar el impacto real de nuestra política de RSC.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <CircularMetric key={m.label} item={m} index={i} />
          ))}
        </div>

        {/* Standards badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {['GRI', 'ISO 26000', 'SASB', 'B Corp', 'ODS', 'DJSI'].map((std) => (
            <div
              key={std}
              className="px-5 py-2 rounded-full glass text-sm font-medium text-emerald-400 hover:bg-emerald-400/10 transition-colors cursor-default"
            >
              {std}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}