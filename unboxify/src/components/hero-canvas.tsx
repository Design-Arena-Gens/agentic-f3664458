'use client';

import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, PresentationControls } from '@react-three/drei';
import type { MeshStandardMaterial, Mesh } from 'three';
import { Color } from 'three';

const AnimatedTorus = () => {
  const mesh = useRef<Mesh>(null);
  const material = useRef<MeshStandardMaterial>(null);
  const baseColor = useMemo(() => new Color('#6f7dff'), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = t * 0.25;
      mesh.current.rotation.y = t * 0.32;
    }

    if (material.current) {
      const pulse = (Math.sin(t * 1.6) + 1) / 2;
      const hue = 0.6 + pulse * 0.1;
      const c = baseColor.clone().offsetHSL(hue - 0.6, 0.08, pulse * 0.1);
      material.current.color = c;
      material.current.emissive = c.clone().multiplyScalar(0.4 + pulse * 0.35);
    }
  });

  return (
    <Float floatIntensity={2.5} speed={2.5} rotationIntensity={0.2}>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[1.2, 0.42, 220, 32]} />
        <meshStandardMaterial
          ref={material}
          color="#6f7dff"
          metalness={0.8}
          roughness={0.2}
          emissiveIntensity={1.8}
        />
      </mesh>

      <mesh position={[0, 0, -3]}>
        <ringGeometry args={[2.4, 4.2, 64]} />
        <meshBasicMaterial color="#3a52ff" transparent opacity={0.1} />
      </mesh>
    </Float>
  );
};

export const HeroCanvas = () => {
  return (
    <div className="hero-canvas">
      <Canvas gl={{ antialias: true }} dpr={[1, 1.8]}>
        <color attach="background" args={['#040409']} />
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault fov={45} position={[0, 0, 6]} />
          <ambientLight intensity={0.8} />
          <pointLight position={[6, 10, 6]} intensity={12} color="#82a1ff" />
          <pointLight position={[-5, -6, -4]} intensity={6} color="#b069ff" />
          <PresentationControls
            global
            snap
            speed={1}
            zoom={0.9}
            rotation={[0.05, 0.4, 0]}
            polar={[-Math.PI / 8, Math.PI / 8]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <AnimatedTorus />
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  );
};
