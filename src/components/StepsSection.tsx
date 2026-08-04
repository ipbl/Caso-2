'use client'

import { motion } from 'framer-motion'
import { Search, Target, FileText, ShieldCheck, Wallet, GraduationCap, Rocket, BarChart3, RefreshCw } from 'lucide-react'

const steps = [
  {
    num: 1,
    title: 'Análisis de la Situación Actual',
    desc: 'Auditoría interna sobre prácticas ASG. Identificación de brechas frente a estándares internacionales como ISO 26000, GRI y el Pacto Mundial de la ONU.',
    icon: Search,
    color: '#10b981',
  },
  {
    num: 2,
    title: 'Definición de Objetivos y Metas',
    desc: 'Establecimiento de metas SMART para cada pilar, alineadas con los Objetivos de Desarrollo Sostenible (ODS) de la ONU.',
    icon: Target,
    color: '#34d399',
  },
  {
    num: 3,
    title: 'Diseño de la Política Formal',
    desc: 'Redacción del documento con misión, visión, valores, responsabilidades, KPIs y mecanismos de seguimiento claramente definidos.',
    icon: FileText,
    color: '#6ee7b7',
  },
  {
    num: 4,
    title: 'Aprobación y Compromiso Directivo',
    desc: 'Respaldo formal del Directorio y la Alta Gerencia. Firma y difusión del compromiso de RSC a nivel interno y externo.',
    icon: ShieldCheck,
    color: '#f59e0b',
  },
  {
    num: 5,
    title: 'Asignación de Recursos',
    desc: 'Destinación de presupuesto, personal y tecnología específicos. Creación del Comité de RSC o nombramiento del Director de Sostenibilidad.',
    icon: Wallet,
    color: '#fbbf24',
  },
  {
    num: 6,
    title: 'Capacitación y Concientización',
    desc: 'Programas de capacitación para empleados en todos los niveles. Comunicación de la política a proveedores, socios y stakeholders externos.',
    icon: GraduationCap,
    color: '#06b6d4',
  },
  {
    num: 7,
    title: 'Implementación por Fases',
    desc: 'Ejecución gradual con proyectos piloto en áreas clave, seguido de escalamiento. Cronogramas trimestrales con hitos verificables.',
    icon: Rocket,
    color: '#22d3ee',
  },
  {
    num: 8,
    title: 'Monitoreo y Evaluación',
    desc: 'Medición continua de KPIs. Auditorías externas independientes para validar resultados y asegurar la transparencia del proceso.',
    icon: BarChart3,
    color: '#8b5cf6',
  },
  {
    num: 9,
    title: 'Mejora Continua',
    desc: 'Revisión anual de la política con base en resultados. Ajuste de estrategias conforme a nuevas normativas, tendencias y feedback.',
    icon: RefreshCw,
    color: '#a78bfa',
  },
]

export default function StepsSection() {
  return (
    <section id="steps" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(16,185,129,0.04)_0%,_transparent_70%)]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">Hoja de Ruta</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            9 Pasos hacia la <span className="gradient-text">Sostenibilidad</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Un camino estructurado y verificable para implementar la política de RSC de forma efectiva y medible.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-amber-500/30 to-violet-500/30 sm:-translate-x-px" />

          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Dot on the line */}
                  <div className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 z-10">
                    <motion.div
                      whileInView={{ scale: [0, 1.3, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${step.color}20`, border: `2px solid ${step.color}50` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: step.color }} />
                    </motion.div>
                  </div>

                  {/* Content card - mobile: all right of line, desktop: alternating */}
                  <div className={`ml-16 sm:ml-0 sm:w-[calc(50%-3rem)] ${
                    isLeft ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:ml-auto'
                  }`}
                  >
                    <div className="glass rounded-2xl p-5 hover:border-emerald-400/20 transition-all duration-300 group">
                      <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'sm:justify-end' : ''}`}
                      >
                        <span
                          className="text-xs font-bold px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: `${step.color}20`, color: step.color }}
                        >
                          Paso {step.num}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}