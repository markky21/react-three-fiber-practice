import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'

export const Extrude: React.FC = () => {
  const mesh = useRef()

  const outline = new THREE.Shape(
    [
      [-2, -0.5],
      [2, -0.5],
      [2, 0.5],
      [-2, 0.5],
    ].map(p => new THREE.Vector2(...p))
  )

  const x = -0
  const y = -0
  const shape = new THREE.CurvePath()

  const points = [
    [x + 2.5, y + 2.5],
    [x + 2.5, y + 2.5],
    [x + 2, y],
    [x, y],
    [x - 3, y],
    [x - 3, y + 3.5],
    [x - 3, y + 3.5],
    [x - 3, y + 5.5],
    [x - 1.5, y + 7.7],
    [x + 2.5, y + 9.5],
    [x + 6, y + 7.7],
    [x + 8, y + 4.5],
    [x + 8, y + 3.5],
    [x + 8, y + 3.5],
    [x + 8, y],
    [x + 5, y],
    [x + 3.5, y],
    [x + 2.5, y + 2.5],
    [x + 2.5, y + 2.5],
  ].map(p => new THREE.Vector3(...p, 0))
  for (let i = 0; i < points.length; i += 3) {
    // @ts-ignore
    shape.add(new THREE.CubicBezierCurve3(...points.slice(i, i + 4)))
  }

  const extrudeSettings = {
    steps: 250,
    bevelEnabled: false,
    extrudePath: shape,
  }

  return (
    <mesh ref={mesh}>
      <extrudeBufferGeometry attach="geometry" args={[outline, extrudeSettings] as any} />
      <meshStandardMaterial attach="material" color={'0xe5d54d'} roughness={0.6} metalness={0.1} />
    </mesh>
  )
}
