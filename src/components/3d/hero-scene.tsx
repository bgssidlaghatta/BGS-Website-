"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment, Lightformer, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

// Individual abstract objects
function AbstractShapes() {
  const group = useRef<THREE.Group>(null);
  
  // Mouse parallax effect
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    // Gentle floating based on mouse position
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 4) / 10 + state.pointer.y / 10, 0.1);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 10 + state.pointer.x / 10, 0.1);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, Math.sin(t / 1.5) / 10, 0.1);
  });

  return (
    <group ref={group}>
      {/* Object 1: Icosahedron (Science/Math) - Saffron/Gold Glass */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={[2, 0.5, -2]}>
        <mesh>
          <icosahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial
            color="#E8871E"
            emissive="#5C1A1B"
            emissiveIntensity={0.2}
            roughness={0.1}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>

      {/* Object 2: Torus Knot (Physics/Complexity) - Dark Maroon Metallic */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5} position={[-2.5, -1, -1]}>
        <mesh>
          <torusKnotGeometry args={[0.7, 0.2, 128, 32]} />
          <meshPhysicalMaterial
            color="#3D0F10"
            roughness={0.3}
            metalness={0.9}
            clearcoat={0.5}
          />
        </mesh>
      </Float>

      {/* Object 3: Sphere (Holistic/Globe) - Cream/Gold */}
      <Float speed={2.5} rotationIntensity={1} floatIntensity={2.5} position={[1.5, -1.5, 1]}>
        <mesh>
          <sphereGeometry args={[0.6, 64, 64]} />
          <meshPhysicalMaterial
            color="#F2B705"
            roughness={0.2}
            metalness={1}
            clearcoat={1}
          />
        </mesh>
      </Float>

      {/* Object 4: Abstract Pyramid (Commerce/Structure) - Saffron */}
      <Float speed={1} rotationIntensity={1} floatIntensity={1} position={[-1, 1.5, -3]}>
        <mesh>
          <coneGeometry args={[0.8, 1.5, 4]} />
          <meshPhysicalMaterial
            color="#F5A84B"
            roughness={0.1}
            metalness={0.5}
            transmission={0.9}
            thickness={1}
          />
        </mesh>
      </Float>
    </group>
  );
}

// Rig for lighting and environment setup
function SceneRig() {
  return (
    <>
      <color attach="background" args={["#1a0708"]} /> {/* Deep dark maroon background */}
      
      {/* Core lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#FBF3E7" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#5C1A1B" />
      <spotLight position={[0, 5, 0]} intensity={3} color="#E8871E" penumbra={1} angle={0.5} />

      <AbstractShapes />

      {/* Environment reflections */}
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 4, -0.3, 0]}>
          <Lightformer intensity={20} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[10, 2, 1]} />
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
          <Lightformer type="ring" intensity={2} rotation-y={Math.PI / 2} position={[-0.1, -1, -5]} scale={10} />
        </group>
      </Environment>

      {/* Subtle ground shadow */}
      <ContactShadows position={[0, -3, 0]} opacity={0.5} scale={20} blur={2} far={4.5} color="#000000" />
    </>
  );
}

export default function HeroScene() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  // Do not render the 3D scene on the server or if reduced motion is preferred
  if (!mounted || prefersReducedMotion) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* We use pointer-events-none on the wrapper so it doesn't block clicks on the text. 
          The Canvas will still receive mouse events because we pass eventSource to the document body, 
          or we can just let it react to the state.pointer which works globally if configured. 
          Actually, R3F's state.pointer tracks the mouse over the canvas. To track it through DOM elements, 
          pointer-events-none works fine, it just means the canvas won't steal clicks. */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <SceneRig />
      </Canvas>
      {/* Gradient overlays to blend the 3D scene smoothly into the text and page */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-maroon-deep/95 via-brand-maroon-deep/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon-deep via-transparent to-transparent" />
    </div>
  );
}
