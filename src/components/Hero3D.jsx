import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Float, PresentationControls } from '@react-three/drei';
import { motion } from 'framer-motion';

// A placeholder 3D Model representing a modular wardrobe/cabinet
function CabinetModel() {
  return (
    <group>
      {/* Main Body */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 2.5, 0.8]} />
        <meshStandardMaterial color="#1e293b" roughness={0.2} metalness={0.8} />
      </mesh>
      
      {/* Doors/Panels (Acrylic gloss look) */}
      <mesh castShadow receiveShadow position={[0.4, 0, 0.45]}>
        <boxGeometry args={[0.7, 2.4, 0.05]} />
        <meshStandardMaterial color="#d4af37" roughness={0.1} metalness={0.6} />
      </mesh>
      <mesh castShadow receiveShadow position={[-0.4, 0, 0.45]}>
        <boxGeometry args={[0.7, 2.4, 0.05]} />
        <meshStandardMaterial color="#d4af37" roughness={0.1} metalness={0.6} />
      </mesh>

      {/* Handle */}
      <mesh castShadow receiveShadow position={[0.1, 0, 0.5]}>
        <cylinderGeometry args={[0.02, 0.02, 0.6]} />
        <meshStandardMaterial color="#ffffff" metalness={1} roughness={0} />
      </mesh>
      <mesh castShadow receiveShadow position={[-0.1, 0, 0.5]}>
        <cylinderGeometry args={[0.02, 0.02, 0.6]} />
        <meshStandardMaterial color="#ffffff" metalness={1} roughness={0} />
      </mesh>
    </group>
  );
}

function TableModel() {
  return (
    <group>
      {/* Table Top */}
      <mesh castShadow receiveShadow position={[0, 1, 0]}>
        <boxGeometry args={[2.5, 0.1, 1.2]} />
        <meshStandardMaterial color="#8b5a2b" roughness={0.6} />
      </mesh>
      {/* Legs */}
      <mesh castShadow receiveShadow position={[-1.1, 0.5, -0.5]}>
        <cylinderGeometry args={[0.05, 0.05, 1]} />
        <meshStandardMaterial color="#333" metalness={0.8} />
      </mesh>
      <mesh castShadow receiveShadow position={[1.1, 0.5, -0.5]}>
        <cylinderGeometry args={[0.05, 0.05, 1]} />
        <meshStandardMaterial color="#333" metalness={0.8} />
      </mesh>
      <mesh castShadow receiveShadow position={[-1.1, 0.5, 0.5]}>
        <cylinderGeometry args={[0.05, 0.05, 1]} />
        <meshStandardMaterial color="#333" metalness={0.8} />
      </mesh>
      <mesh castShadow receiveShadow position={[1.1, 0.5, 0.5]}>
        <cylinderGeometry args={[0.05, 0.05, 1]} />
        <meshStandardMaterial color="#333" metalness={0.8} />
      </mesh>
    </group>
  );
}

function AluminiumWindowModel() {
  return (
    <group>
      {/* Glass Pane */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[2, 3, 0.05]} />
        <meshStandardMaterial color="#bae6fd" transparent opacity={0.4} metalness={0.1} roughness={0.1} />
      </mesh>

      {/* Frame Left */}
      <mesh castShadow receiveShadow position={[-1, 1.5, 0]}>
        <boxGeometry args={[0.1, 3.1, 0.1]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Frame Right */}
      <mesh castShadow receiveShadow position={[1, 1.5, 0]}>
        <boxGeometry args={[0.1, 3.1, 0.1]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Frame Top */}
      <mesh castShadow receiveShadow position={[0, 3, 0]}>
        <boxGeometry args={[2.1, 0.1, 0.1]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Frame Bottom */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[2.1, 0.1, 0.1]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.3} />
      </mesh>
      
      {/* Vertical Mullion */}
      <mesh castShadow receiveShadow position={[0, 1.5, 0]}>
        <boxGeometry args={[0.05, 3, 0.08]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Horizontal Mullion */}
      <mesh castShadow receiveShadow position={[0, 1.5, 0]}>
        <boxGeometry args={[2, 0.05, 0.08]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.3} />
      </mesh>
    </group>
  );
}

const models = [CabinetModel, TableModel, AluminiumWindowModel];

export default function Hero3D() {
  // Select a random model on mount
  const [ActiveModel, setActiveModel] = useState(null);

  useEffect(() => {
    const randomModel = models[Math.floor(Math.random() * models.length)];
    setActiveModel(() => randomModel);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full bg-black-pure overflow-hidden flex items-center">
      
      {/* Text Overlay */}
      <div className="absolute z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-white leading-tight mb-6 pointer-events-auto">
            Where Innovation <br/>
            <span className="text-gold-500 italic">Meets Craftsmanship.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg pointer-events-auto">
            Design dreams into reality with premium interior and exterior solutions. We craft spaces that reflect your unique style.
          </p>
          <div className="flex gap-4 pointer-events-auto">
            <a href="#products" className="bg-gold-500 hover:bg-gold-400 text-black-pure px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Explore Products
            </a>
            <a href="#contact" className="border border-white/20 hover:border-gold-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Get a Quote
            </a>
          </div>
        </motion.div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 w-full h-full lg:w-2/3 lg:left-1/3">
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <spotLight position={[-10, 10, -10]} angle={0.15} penumbra={1} intensity={0.5} castShadow />
          
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, -Math.PI / 4, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
              <Stage environment="city" intensity={0.6}>
                {ActiveModel && <ActiveModel />}
              </Stage>
            </Float>
          </PresentationControls>
        </Canvas>
      </div>

      {/* Gradient Overlay for blending */}
      <div className="absolute inset-0 bg-gradient-to-r from-black-pure via-black-pure/80 to-transparent pointer-events-none lg:w-2/3" />
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black-pure to-transparent pointer-events-none" />
    </section>
  );
}
