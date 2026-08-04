'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

interface PillarShape3DProps {
  type: 'icosahedron' | 'torus' | 'octahedron'
  color: string
}

function ShapeMesh({ type, color }: PillarShape3DProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const colorVal = color.includes('emerald') ? '#10b981' : color.includes('amber') ? '#f59e0b' : '#06b6d4'

  const particlesRef = useRef<THREE.Points>(null)
  const particlePositions = useMemo(() => {
    const arr = new Float32Array(120 * 3)
    for (let i = 0; i < 120; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 0.8 + Math.random() * 0.5
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.4
    if (particlesRef.current) {
      particlesRef.current.rotation.y = -state.clock.elapsedTime * 0.1
    }
  })

  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          {type === 'icosahedron' && <icosahedronGeometry args={[1, 1]} />}
          {type === 'torus' && <torusGeometry args={[0.8, 0.3, 16, 40]} />}
          {type === 'octahedron' && <octahedronGeometry args={[1.1, 0]} />}
          <meshPhongMaterial
            color={colorVal}
            wireframe
            transparent
            opacity={0.35}
            emissive={colorVal}
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.02} color={colorVal} transparent opacity={0.5} sizeAttenuation />
      </points>
    </>
  )
}

export default function PillarShape3D({ type, color }: PillarShape3DProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={0.6} color={color.includes('emerald') ? '#34d399' : color.includes('amber') ? '#fbbf24' : '#22d3ee'} />
      <ShapeMesh type={type} color={color} />
    </Canvas>
  )
}