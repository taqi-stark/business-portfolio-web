import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { useRef, Suspense } from "react";
import * as THREE from "three";

const screenLines = [1.6, 1.15, 1.4, 1.05, 1.55, 1.25, 1.35, 1.1];

const Laptop = ({ progress }: { progress: MotionValue<number> }) => {
  const group = useRef<THREE.Group>(null);
  const lid = useRef<THREE.Group>(null);

  useFrame((state) => {
    const p = progress.get();
    if (group.current) {
      // Base scroll rotation
      const baseRotY = -0.4 + p * 0.6;
      // Mouse offset
      const targetRotY = baseRotY + (state.pointer.x * 0.25);
      const targetRotX = (state.pointer.y * -0.2);
      
      // Smooth interpolation for momentum
      group.current.rotation.y += (targetRotY - group.current.rotation.y) * 0.05;
      group.current.rotation.x += (targetRotX - group.current.rotation.x) * 0.05;
      
      group.current.position.y = -0.1 + Math.sin(p * Math.PI) * 0.15;
    }
    if (lid.current) {
      // Open lid smoothly across first third of scroll
      const open = Math.min(p * 3, 1);
      lid.current.rotation.x = -Math.PI / 2 + open * (Math.PI / 2 - 0.15);
    }
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* Base */}
      <mesh castShadow receiveShadow position={[0, -0.05, 0]}>
        <boxGeometry args={[3, 0.12, 2]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.85} roughness={0.25} />
      </mesh>
      {/* Keyboard area */}
      <mesh position={[0, 0.012, 0]}>
        <boxGeometry args={[2.7, 0.005, 1.7]} />
        <meshStandardMaterial color="#0a0a1a" metalness={0.6} roughness={0.5} />
      </mesh>
      {/* Trackpad */}
      <mesh position={[0, 0.015, 0.55]}>
        <boxGeometry args={[1.1, 0.005, 0.7]} />
        <meshStandardMaterial color="#2a2a4a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Lid pivot */}
      <group ref={lid} position={[0, 0, -1]}>
        <mesh castShadow position={[0, 1, 0]}>
          <boxGeometry args={[3, 2, 0.08]} />
          <meshStandardMaterial color="#141432" metalness={0.85} roughness={0.25} />
        </mesh>
        {/* Screen */}
        <mesh position={[0, 1, 0.045]}>
          <planeGeometry args={[2.8, 1.8]} />
          <meshStandardMaterial
            color="#4f46e5"
            emissive="#7c6cff"
            emissiveIntensity={1.2}
            toneMapped={false}
          />
        </mesh>
        {/* Code lines on screen */}
        {screenLines.map((width, i) => (
          <mesh key={i} position={[-0.9 + (i % 2) * 0.3, 1.6 - i * 0.18, 0.05]}>
            <planeGeometry args={[width, 0.06]} />
            <meshBasicMaterial color={i % 3 === 0 ? "#a5f3fc" : "#c4b5fd"} />
          </mesh>
        ))}
      </group>
    </group>
  );
};

const CameraRig = ({ progress }: { progress: MotionValue<number> }) => {
  const { camera } = useThree();
  useFrame(() => {
    const p = progress.get();
    // Cinematic dolly: top-down close → orbit around → pull back high
    const angle = -Math.PI * 0.15 + p * Math.PI * 1.6;
    const radius = 4.5 + Math.sin(p * Math.PI) * 1.8;
    const height = 3.2 - p * 1.6 + Math.sin(p * Math.PI * 2) * 0.4;
    camera.position.x = Math.sin(angle) * radius;
    camera.position.z = Math.cos(angle) * radius;
    camera.position.y = height;
    camera.lookAt(0, 0.4, 0);
  });
  return null;
};

export const Laptop3D = ({ progress }: { progress: MotionValue<number> }) => {
  const opacity = useTransform(progress, [0, 0.05, 0.95, 1], [0, 0.9, 0.9, 0.2]);
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 -z-10 flex items-center justify-center"
      style={{ opacity }}
    >
      <div className="h-[80vh] w-full max-w-5xl">
        <Canvas
          shadows
          camera={{ position: [0, 3, 5.5], fov: 42 }}
          dpr={[0.75, 1.25]}
          gl={{ antialias: false, powerPreference: "high-performance" }}
          performance={{ min: 0.5 }}
        >
          <Suspense fallback={null}>
            <CameraRig progress={progress} />
            <ambientLight intensity={0.4} />
            <directionalLight
              position={[5, 6, 4]}
              intensity={1.2}
              castShadow
              shadow-mapSize-width={512}
              shadow-mapSize-height={512}
            />
            <pointLight position={[-4, 2, -2]} intensity={1.5} color="#7c6cff" />
            <pointLight position={[4, -2, 3]} intensity={1.2} color="#22d3ee" />
            <Float speed={1} rotationIntensity={0.05} floatIntensity={0.15}>
              <Laptop progress={progress} />
            </Float>
            <ContactShadows
              position={[0, -1.2, 0]}
              opacity={0.5}
              scale={8}
              blur={2.5}
              frames={1}
              resolution={256}
            />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>
    </motion.div>
  );
};
