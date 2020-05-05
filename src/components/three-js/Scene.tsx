import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'

export const Scene: React.FC = props => {
  const scene = useRef<THREE.Object3D>()

  useFrame(() => {
    scene.current?.rotateZ(0.01)
  })

  return (
    <group ref={scene} position={[0, 0, 0]}>
      {props.children}
    </group>
  )
}
