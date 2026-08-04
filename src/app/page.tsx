'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import PillarsSection from '@/components/PillarsSection'
import StepsSection from '@/components/StepsSection'
import MetricsSection from '@/components/MetricsSection'
import ChallengesSection from '@/components/ChallengesSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <HeroSection />

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

        <PillarsSection />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

        <StepsSection />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

        <MetricsSection />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

        <ChallengesSection />
      </main>
      <Footer />
    </div>
  )
}
