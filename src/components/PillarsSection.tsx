'use client'

import { motion } from 'framer-motion'
import PillarCard from './PillarCard'
import { Users, Building2, Globe } from 'lucide-react'

const pillars = [
  {
    title: 'Personas',
    subtitle: 'Bienestar y Equidad',
    icon: Users,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-400/30',
    shapeType: 'icosahedron' as const,
    items: [
      'Condiciones de trabajo seguras con salarios justos y desarrollo profesional continuo',
      'Entorno libre de discriminación que promueva equidad de género, etnia y capacidades',
      'Programas integrales de salud física, mental y apoyo psicológico',
      'Apoyo a iniciativas educativas, culturales y sociales en comunidades locales',
      'Respeto a derechos humanos en toda la cadena de valor incluyendo proveedores',
    ],
  },
  {
    title: 'Empresas',
    subtitle: 'Gobernanza Ética',
    icon: Building2,
    color: 'text-amber-400',
    borderColor: 'border-amber-400/30',
    shapeType: 'torus' as const,
    items: [
      'Código de conducta claro con mecanismos de cumplimiento y transparencia total',
      'Relaciones justas con proveedores, evitando monopolios y prácticas desleales',
      'Decisiones orientadas a generar valor a largo plazo, no solo rentabilidad inmediata',
      'Desarrollo de productos y servicios que contribuyan al bienestar social y ambiental',
      'Políticas estrictas contra el soborno, fraude y lavado de dinero',
    ],
  },
  {
    title: 'Planeta',
    subtitle: 'Sostenibilidad Ambiental',
    icon: Globe,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-400/30',
    shapeType: 'octahedron' as const,
    items: [
      'Metas medibles con cronograma para reducir la huella de carbono corporativa',
      'Transición a energías renovables y optimización del consumo energético',
      'Economía circular (reducir, reutilizar, reciclar) en toda la cadena productiva',
      'Reducción del consumo hídrico y tratamiento de aguas residuales',
      'Protección de biodiversidad y uso de materias primas certificadas sostenibles',
    ],
  },
]

export default function PillarsSection() {
  return (
    <section id="pillars" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">Nuestros Tres Pilares</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Personas · Empresas · <span className="gradient-text">Planeta</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Nuestra política de RSC se articula en torno a tres pilares interconectados que forman la base de un modelo de negocio verdaderamente sostenible y responsable.
          </p>
        </motion.div>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} {...pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
