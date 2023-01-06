import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Waving from "../../components/Home/Waving3";

interface IWavingProps {
  waving?: boolean;
  loading: boolean;
}

export default function Model({ loading }: IWavingProps) {
  const [isWaving, setIsWaving] = useState(false);

  const wave = () => {
    if (!isWaving) {
      setIsWaving(true);
      setTimeout(() => {
        setIsWaving(false);
      }, 5200);
    }
  };

  useEffect(() => {
    setIsWaving(true);
    setTimeout(() => {
      setIsWaving(false);
    }, 7200); // To account for 2s loading time

    function handleScroll() {
      if (window.scrollY === 0) {
        wave();
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Canvas
      camera={{ position: [1, 2, 12.25], fov: 15 }}
      style={{
        backgroundColor: "#111a21",
        width: "50vw",
        maxWidth: "450px",
        height: "100vh",
        marginTop: "-10%",
        marginLeft: "10px",
      }}
      onMouseOver={wave}
      onClick={wave}
    >
      <ambientLight intensity={0.75} />
      <ambientLight intensity={0.2} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Waving position={[0, -0.9, 0]} waving={isWaving} loading={loading} />
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
  );
}
