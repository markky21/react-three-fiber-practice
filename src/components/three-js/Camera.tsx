import React, { useLayoutEffect } from 'react'
import { useFrame, useResource, useThree } from 'react-three-fiber'
import * as THREE from 'three'

export const Camera: React.FC = () => {
  const { size, setDefaultCamera } = useThree()
  const [ref, camera] = useResource()

  // #15929 (https://github.com/mrdoob/three.js/issues/15929)
  // The camera needs to be updated every frame
  // We give this frame a priority so that automatic rendering will be switched off right away
  useFrame(() => {
    camera.lookAt(new THREE.Vector3(0, 0, 0))
    camera.updateMatrixWorld()
  })
  useLayoutEffect(() => void setDefaultCamera(ref.current), [])

  return (
    <perspectiveCamera
      ref={ref}
      aspect={size.width / size.height}
      fov={100}
      position={[0, -10, 10]}
      onUpdate={self => self.updateProjectionMatrix()}
    />
  )
}
