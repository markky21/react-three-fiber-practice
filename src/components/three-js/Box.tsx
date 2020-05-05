import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'

export const Box: React.FC = () => {
  const mesh = useRef()
  const time = useRef(0)

  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const color = isHovered ? 0xe5d54d : 0xf95b3c

  const isActiveRef = useRef(isActive)

  const timeMod = useMemo(() => Math.random() * 4, [])

  // position
  const position = useMemo(() => {
    return [Math.random() * 6 - 3, Math.random() * 6 - 3, Math.random() * 6 - 3]
  }, [])

  useEffect(() => {
    isActiveRef.current = isActive
  }, [isActive])

  const onHover = useCallback(
    (e, value) => {
      e.stopPropagation()
      setIsHovered(value)
    },
    [setIsHovered]
  )

  const onClick = useCallback(
    e => {
      e.stopPropagation()
      setIsActive(v => !v)
    },
    [setIsActive]
  )

  useFrame((...props) => {
    if (!mesh?.current) return
    // @ts-ignore
    mesh.current.rotation.y += 0.01 * timeMod
    if (isActiveRef.current) {
      // a ref is needed because useFrame creates a "closure" on the state
      time.current += 0.03
      // @ts-ignore
      mesh.current.position.y = position[1] + Math.sin(time.current) * 0.4
    }
  })

  return (
    <mesh
      ref={mesh}
      onPointerOver={e => onHover(e, true)}
      onPointerOut={e => onHover(e, false)}
      onClick={e => onClick(e)}>
      <boxBufferGeometry attach="geometry" args={[4, 5, 10]} />
      <meshStandardMaterial attach="material" color={color} roughness={0.6} metalness={0.1} />
    </mesh>
  )
}
