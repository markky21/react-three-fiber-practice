import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { VectorUtils } from '../../utils/vectors.unitls'

export interface IWallPath {
  height?: number
  thickness?: number
  path?: Array<[number, number]>
}

export const Wall: React.FC<IWallPath> = ({ height = 3, thickness = 0.2, path }) => {
  const mesh = useRef<THREE.Object3D>()

  const shape = VectorUtils.getShapeFromVectors(
    [
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0, 10),
      new THREE.Vector2(4, 14),
      new THREE.Vector2(12, 14),
      new THREE.Vector2(12, 6),
      new THREE.Vector2(6, 6),
      new THREE.Vector2(6, 0),
      new THREE.Vector2(0, 0),
    ],
    0.1
  )

  const extrudeSettings = {
    steps: 2,
    depth: 3,
    bevelEnabled: false,
    bevelThickness: 1,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 1,
  }

  useEffect(() => {
    // mesh.current?.
  }, [])

  return (
    <mesh ref={mesh}>
      <extrudeBufferGeometry attach="geometry" args={[shape, extrudeSettings] as any} />
      <meshPhongMaterial attach="material" color={'red'} />
    </mesh>
  )
}
