'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import * as THREE from 'three'

// --- Particle field around the globe ---
function Particles() {
  const count = 600
  const mesh = useRef<THREE.Points>(null)

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 1.6 + Math.random() * 0.4
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
      // green to cyan gradient
      const t = Math.random()
      col[i * 3] = 0.06 + t * 0.2
      col[i * 3 + 1] = 0.7 + t * 0.3
      col[i * 3 + 2] = 0.5 + t * 0.3
    }
    return [pos, col]
  }, [])

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.y = state.clock.elapsedTime * 0.05
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.015} vertexColors transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}

// --- Wireframe Globe ---
function GlobeWireframe() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.08
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 4]} />
        <meshBasicMaterial
          color="#10b981"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </Float>
  )
}

// --- Inner solid globe with gradient feel ---
function InnerGlobe() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.08
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.48, 4]} />
      <meshPhongMaterial
        color="#064e3b"
        transparent
        opacity={0.4}
        shininess={30}
        emissive="#047857"
        emissiveIntensity={0.15}
      />
    </mesh>
  )
}

// --- Glowing rings around the globe ---
function OrbitalRing({ radius, color, speed, tilt }: { radius: number; color: string; speed: number; tilt: number }) {
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ringRef.current) return
    ringRef.current.rotation.z = state.clock.elapsedTime * speed
  })

  return (
    <mesh ref={ringRef} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.005, 8, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.5} />
    </mesh>
  )
}

// --- Connection arcs (simplified as lines) ---
function ConnectionArcs() {
  const linesRef = useRef<THREE.Group>(null)

  const curves = useMemo(() => {
    const arcs: THREE.Vector3[][] = []
    const points = [
      [0, 0.8, 1.2], [-1, 0.3, 0.5], [0.8, -0.5, 0.9],
      [-0.5, -0.8, -0.7], [1, 0.6, -0.4], [-0.3, 1, -0.5]
    ]
    for (let i = 0; i < points.length; i++) {
      const start = new THREE.Vector3(...points[i]).normalize().multiplyScalar(1.52)
      const end = new THREE.Vector3(...points[(i + 1) % points.length]).normalize().multiplyScalar(1.52)
      const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(2.0)
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end)
      arcs.push(curve.getPoints(30))
    }
    return arcs
  }, [])

  useFrame((state) => {
    if (!linesRef.current) return
    linesRef.current.rotation.y = state.clock.elapsedTime * 0.06
  })

  return (
    <group ref={linesRef}>
      {curves.map((pts, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array(pts.flatMap(p => [p.x, p.y, p.z])), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#f59e0b" transparent opacity={0.3} />
        </line>
      ))}
    </group>
  )
}

// --- Main Scene ---
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 3, 5]} intensity={0.8} color="#34d399" />
      <pointLight position={[-5, -3, -5]} intensity={0.4} color="#f59e0b" />

      <InnerGlobe />
      <GlobeWireframe />
      <Particles />
      <ConnectionArcs />

      <OrbitalRing radius={1.9} color="#10b981" speed={0.15} tilt={Math.PI / 6} />
      <OrbitalRing radius={2.1} color="#34d399" speed={-0.1} tilt={-Math.PI / 4} />
      <OrbitalRing radius={2.3} color="#f59e0b" speed={0.08} tilt={Math.PI / 3} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
      />
    </>
  )
}

// --- Exported Canvas wrapper ---
export default function EarthGlobe() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}