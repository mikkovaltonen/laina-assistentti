'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

interface CoinProps {
  position: [number, number, number]
  color: string
}

const Coin = ({ position, color }: CoinProps) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const [vel] = useState(() => new THREE.Vector3(
    (Math.random() - 0.5) * 0.1,
    (Math.random() - 0.5) * 0.1,
    (Math.random() - 0.5) * 0.1
  ))

  useEffect(() => {
    if (!meshRef.current) return

    const animate = () => {
      if (!meshRef.current) return

      meshRef.current.position.add(vel)

      // Heijastus seinistä
      if (Math.abs(meshRef.current.position.x) > 2) vel.x *= -1
      if (Math.abs(meshRef.current.position.y) > 1.5) vel.y *= -1
      if (Math.abs(meshRef.current.position.z) > 1.5) vel.z *= -1
    }

    const intervalId = setInterval(animate, 16)
    return () => clearInterval(intervalId)
  }, [vel])

  return (
    <mesh ref={meshRef} position={position}>
      <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </mesh>
  )
}

const PiggyBank = () => {
  return (
    <group>
      {/* Possun runko */}
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="#2563eb" metalness={0.2} roughness={0.8} />
      </mesh>
      
      {/* Possun kuono */}
      <mesh position={[1.5, -0.3, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="#2563eb" metalness={0.2} roughness={0.8} />
      </mesh>

      {/* Kolikkoaukko */}
      <mesh position={[0, 1.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.3, 32]} />
        <meshStandardMaterial color="#1e40af" metalness={0.2} roughness={0.8} />
      </mesh>
    </group>
  )
}

const ThreePiggyBank = () => {
  const coins = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2
    ] as [number, number, number],
    color: `hsl(${Math.random() * 360}, 70%, 70%)`
  }))

  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <PiggyBank />
      {coins.map((coin) => (
        <Coin key={coin.id} position={coin.position} color={coin.color} />
      ))}
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default ThreePiggyBank 