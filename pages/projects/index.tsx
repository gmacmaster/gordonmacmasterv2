import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
//import Model from './Waving';
import dynamic from 'next/dynamic'
const Model = dynamic(
    () => import('./Waving'),
    { ssr: false }
)


export default function App() {
    return (
        <Canvas
            camera={{ position: [2, 0, 12.25], fov: 15 }}
            style={{
                backgroundColor: '#111a21',
                width: '100vw',
                height: '100vh',
            }}
        >
            <ambientLight intensity={.75} />
            <ambientLight intensity={0.2} />
            <directionalLight intensity={0.4} />
            <Suspense fallback={null}>
                <Model position={[0.025, -0.9, 0]} />
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
}
