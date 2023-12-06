/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import * as Three from 'three';
import React, { Suspense, useRef } from "react";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF("/glass.glb");
  return (
    <group {...props} scale={0.8} position={[0,2,0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes["Material_005-material"].geometry}
          material={materials.Material_005}
          position={[-3.036, 1.725, -2.631]}
          rotation={[0.01, 0.002, 0]}
          scale={0.965}
        />
        <mesh
          geometry={nodes["Material_004-material"].geometry}
          material={materials.Material_004}
          position={[3.092, 1.321, -2.806]}
          rotation={[0.01, 0.002, 0]}
          scale={0.965}
        />
        <mesh
          geometry={nodes["Material_007-material"].geometry}
          material={materials.Material_007}
          position={[3.088, -2.221, -3.524]}
          rotation={[0.01, 0.002, 0]}
          scale={0.965}
        />
        <mesh
          geometry={nodes["Material_006-material"].geometry}
          material={materials.Material_006}
          position={[-2.969, -2.495, -3.916]}
          rotation={[0.01, 0.002, 0]}
          scale={0.965}
        />
        <mesh
          geometry={nodes["Material_003-material"].geometry}
          material={materials.Material_003}
          position={[0.008, -0.264, -2.226]}
          rotation={[0.01, 0.002, 0]}
          scale={1.466}
        />
        <mesh
          geometry={nodes["Material_002-material"].geometry}
          material={materials.Material_002}
          position={[0.027, 0.257, -10.022]}
          rotation={[0.01, 0.002, 0]}
          scale={[5.868, 5.868, 0.029]}
        />
        <mesh
          geometry={nodes["Material-material"].geometry}
          material={materials.Material}
          position={[0.027, 3.198, -2.38]}
          rotation={[1.581, 0.002, 0]}
          scale={[9.313, 10.055, 0.047]}
        />
      </group>
    </group>
  );
}



export default function Hero() {

    
  return (
    <>
    <Canvas>
      <Environment preset='sunset'/>
      <Suspense fallback={null}>
        <ambientLight intensity={5}/>
        <directionalLight intensity={25} position={[1,1,1]}/>
        <hemisphereLight intensity={15}/>
        <Model/>
        <OrbitControls autoRotate={true} />
      </Suspense>
    </Canvas>
    
    </>
  )
}
