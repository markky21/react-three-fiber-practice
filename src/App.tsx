import React from 'react'
import './App.css'
import { Canvas } from 'react-three-fiber'
import { AmbientLight } from './components/three-js/AmbientLight'
import { Camera } from './components/three-js/Camera'
import { Scene } from './components/three-js/Scene'
import { Floor } from './components/three-js/Floor'
import { Wall } from './components/three-js/Wall'

function App() {
  return (
    <Canvas style={{ background: 'radial-gradient(at 50% 60%, #873740 0%, #272730 40%, #171720 80%, #070710 100%)' }}>
      <AmbientLight />
      <Camera />
      <axesHelper args={[10]} />
      <Scene>
        <Floor />
        <Wall />
      </Scene>
    </Canvas>
  )
}

export default App
