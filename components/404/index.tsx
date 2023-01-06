import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Angry from "./Angry";
import Link from "next/link";

export default function Model() {
  return (
    <>
      <Canvas
        camera={{ position: [1, 2, 12.25], fov: 15 }}
        style={{
          backgroundColor: "#111a21",
          width: "100vw",
          height: "100vh",
        }}
      >
        <ambientLight intensity={0.75} />
        <ambientLight intensity={0.2} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Angry position={[0, -0.9, 0]} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          rotateSpeed={1.1}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          zIndex: 1,
          width: "100vw",
          padding: "1rem",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <div>Whoops looks like you&apos;re lost!</div>
        <button
          style={{
            padding: ".5rem 1rem",
            border: "1px solid white",
            width: "fit-content",
            marginTop: "1rem",
          }}
        >
          <Link href={"/"}>Home</Link>
        </button>
      </div>
    </>
  );
}
