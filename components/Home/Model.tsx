import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Waving from "../../components/Home/Waving";

export default function Model() {
  return (
    <Canvas
      camera={{ position: [-2, 4, 12.25], fov: 15 }}
      style={{
        backgroundColor: "#111a21",
        width: "50vw",
        height: "100vh",
      }}
    >
      <ambientLight intensity={0.75} />
      <ambientLight intensity={0.2} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Waving position={[0.025, -0.9, 0]} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={1.1}
        enableRotate={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  );
}
