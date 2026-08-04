'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ShieldAlert, DollarSign, Link, Eye, BarChart3, Scale, Users, Cpu, ChevronRight } from 'lucide-react'

const challenges = [
  {
    title: 'Resistencia Interna',
    icon: ShieldAlert,
    desc: 'Empleados o gerentes pueden percibir la RSC como una carga o desvío de prioridades operativas.',
    mitigation: 'Capacitación constante, liderazgo desde la alta dirección, vincular RSC con incentivos de desempeño y evaluar contribuciones.',
    color: '#ef4444',
  },
  {
    title: 'Costos Elevados Iniciales',
    icon: DollarSign,
    desc: 'La inversión en tecnología limpia, certificaciones y capacitación puede resultar significativa al inicio.',
    mitigation: 'Planificar por fases, buscar financiamiento sostenible (green bonds), demostrar el ROI a largo plazo con datos concretos.',
    color: '#f59e0b',
  },
  {
    title: 'Complejidad en la Cadena de Valor',
    icon: Link,
    desc: 'Garantizar el cumplimiento de estándares ASG en proveedores distribuidos en distintos países y jurisdicciones.',
    mitigation: 'Auditorías externas, cláusulas contractuales ASG obligatorias, programas de calificación de proveedores preferentes.',
    color: '#10b981',
  },
  {
    title: 'Riesgo de Greenwashing',
    icon: Eye,
    desc: 'Que las acciones comunicadas sean percibidas como superficiales, exageradas o engañosas ante el público.',
    mitigation: 'Exigir certificaciones de terceros independientes, usar datos verificables y auditables, evitar declaraciones vagas.',
    color: '#06b6d4',
  },
  {
    title: 'Medición Deficiente',
    icon: BarChart3,
    desc: 'Dificultad para cuantificar el impacto real de las iniciativas de RSC en todas las dimensiones.',
    mitigation: 'Adoptar estándares internacionales (GRI, SASB), contratar expertos en sostenibilidad, invertir en plataformas de datos.',
    color: '#8b5cf6',
  },
  {
    title: 'Regulaciones Cambiantes',
    icon: Scale,
    desc: 'Las normativas ambientales y sociales evolucionan con rapidez en diferentes jurisdicciones.',
    mitigation: 'Monitoreo legislativo continuo, asesoría legal especializada, diseño de políticas adaptativas y flexibles.',
    color: '#a78bfa',
  },
  {
    title: 'Falta de Involucramiento',
    icon: Users,
    desc: 'Consumidores o inversores pueden no percibir el valor real de las iniciativas de RSC de la empresa.',
    mitigation: 'Diálogo activo con stakeholders, encuestas de percepción, participación en foros de sostenibilidad y reportes abiertos.',
    color: '#f43f5e',
  },
  {
    title: 'Brechas Tecnológicas',
    icon: Cpu,
    desc: 'Falta de herramientas adecuadas para medir, gestionar o comunicar el impacto de manera efectiva.',
    mitigation: 'Invertir en software ASG especializado, plataformas de gestión de datos, alianzas con startups verdes.',
    color: '#22d3ee',
  },
]

export default function ChallengesSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="challenges" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.03)_0%,_transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">Gestión de Riesgos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Desafíos y <span className="gradient-text">Mitigación</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Anticipar, identificar y mitigar los obstáculos comunes durante la implementación de una política de RSC robusta.
          </p>
        </motion.div>

        <div className="space-y-4">
          {challenges.map((ch, i) => {
            const Icon = ch.icon
            const isOpen = expanded === i

            return (
              <motion.div
                key={ch.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div
                  className={`glass rounded-2xl overflow-hidden transition-all duration-500 ${
                    isOpen ? 'ring-1' : ''
                  }`}
                  style={isOpen ? { ringColor: `${ch.color}30` } : {}}
                >
                  {/* Header - clickable */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 p-5 text-left cursor-pointer group"
                  >
                    <div
                      className="p-2.5 rounded-xl flex-shrink-0 transition-colors duration-300"
                      style={{ backgroundColor: `${ch.color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: ch.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base group-hover:text-emerald-400 transition-colors">
                        {ch.title}
                      </h3>
                      <p className="text-sm text-muted-foreground truncate">{ch.desc}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  </button>

                  {/* Expanded content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pl-[4.5rem]">
                      <div
                        className="p-4 rounded-xl border-l-2"
                        style={{
                          backgroundColor: `${ch.color}08`,
                          borderLeftColor: ch.color,
                        }}
                      >
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: ch.color }}>
                          Estrategia de Mitigación
                        </p>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {ch.mitigation}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Guiding principle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 glass rounded-2xl p-6 sm:p-8 text-center"
        >
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed italic">
            &ldquo;La mitigación exitosa requiere <span className="text-emerald-400 font-semibold not-italic">anticipación, flexibilidad</span> y un <span className="text-amber-400 font-semibold not-italic">compromiso genuino</span> con la sostenibilidad. La RSC debe estar integrada en la cultura organizacional, no tratarse como un proyecto aislado.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}