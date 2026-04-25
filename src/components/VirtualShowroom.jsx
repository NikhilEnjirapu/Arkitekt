import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  ContactShadows, 
  useCursor, 
  Html, 
  Text
} from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { useConfigurator } from '../App';
import { Info, Sun, Moon } from 'lucide-react';

// --- Sub-Components ---

function CameraController() {
  const { isInside, currentRoom } = useConfigurator();
  const controlsRef = useRef();

  const roomCoords = {
    outside: { pos: [0, 10, 20], target: [0, 1.5, 0] },
    hallway: { pos: [0, 2.5, 6], target: [0, 1, -2] },
    living: { pos: [-5, 2, 4], target: [-5, 1, 1] },
    office: { pos: [5, 2, 4], target: [5, 1, 1] },
    kitchen: { pos: [-5, 2, -2], target: [-5, 1, -5] },
    bedroom: { pos: [5, 2, -2], target: [5, 1, -5] },
  };

  useFrame((state) => {
    if (!controlsRef.current) return;
    const target = roomCoords[isInside ? currentRoom : 'outside'];
    state.camera.position.lerp(new THREE.Vector3(...target.pos), 0.05);
    controlsRef.current.target.lerp(new THREE.Vector3(...target.target), 0.05);

    if (isInside) {
      controlsRef.current.minDistance = 0.01;
      controlsRef.current.maxDistance = 15;
      controlsRef.current.enablePan = false;
    } else {
      controlsRef.current.minDistance = 12;
      controlsRef.current.maxDistance = 40;
      controlsRef.current.enablePan = true;
    }
  });

  return <OrbitControls ref={controlsRef} makeDefault dampingFactor={0.05} />;
}

function ProductHotspot({ position, title, description }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  return (
    <group position={position}>
      <mesh onClick={(e) => { e.stopPropagation(); setOpen(!open); }} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color={open ? "#ffffff" : "#d4af37"} />
      </mesh>
      <Html center distanceFactor={8}>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
              className="w-48 bg-slate-900/95 border border-white/10 p-3 rounded-xl shadow-2xl pointer-events-auto text-white">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] font-bold uppercase">{title}</span>
                <button onClick={() => setOpen(false)} className="text-slate-500">×</button>
              </div>
              <p className="text-slate-400 text-[9px]">{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </Html>
    </group>
  );
}

function PremiumMaterials({ finish, color }) {
  const matProps = {
    acrylic: { roughness: 0.05, metalness: 0.5, color: color },
    laminate: { roughness: 0.9, metalness: 0.0, color: color },
    wood: { roughness: 0.4, metalness: 0.1, color: "#78350f" }
  };
  return matProps[finish];
}

function LivingRoom() {
  const { finish, color } = useConfigurator();
  const mat = PremiumMaterials({ finish, color });
  return (
    <group position={[-5, 0, 1]}>
      <mesh position={[0, 0.4, 0]} castShadow><boxGeometry args={[3, 0.6, 1.5]} /><meshStandardMaterial color="#1e293b" /></mesh>
      <mesh position={[0, 0.4, 1.5]} castShadow><boxGeometry args={[1.5, 0.1, 1]} /><meshStandardMaterial {...mat} /></mesh>
      <ProductHotspot position={[0, 0.6, 1.5]} title="Lounge Area" description="Premium upholstery and custom center table." />
    </group>
  );
}

function Kitchen() {
  const { finish, color } = useConfigurator();
  const mat = PremiumMaterials({ finish, color });
  return (
    <group position={[-5, 0, -5]}>
      <mesh position={[0, 0.45, 0]} castShadow><boxGeometry args={[4, 0.9, 1]} /><meshStandardMaterial color="#0f172a" /></mesh>
      {[-1.5, -0.5, 0.5, 1.5].map((x, i) => (
        <mesh key={i} position={[x, 0.45, 0.51]} castShadow><boxGeometry args={[0.9, 0.8, 0.05]} /><meshStandardMaterial {...mat} /></mesh>
      ))}
      <ProductHotspot position={[0, 1, 0.2]} title="Gourmet Kitchen" description="High-gloss acrylic panels and soft-close hardware." />
    </group>
  );
}

function Bedroom() {
  const { finish, color } = useConfigurator();
  const mat = PremiumMaterials({ finish, color });
  return (
    <group position={[5, 0, -5]}>
      <mesh position={[0, 0.3, 0]} castShadow><boxGeometry args={[2.5, 0.6, 3.5]} /><meshStandardMaterial color="#334155" /></mesh>
      <group position={[2.5, 1.5, 0]}>
        <mesh castShadow><boxGeometry args={[1, 3, 4]} /><meshStandardMaterial color="#1e293b" /></mesh>
        <mesh position={[-0.51, 0, 0]} castShadow><boxGeometry args={[0.05, 2.9, 3.8]} /><meshStandardMaterial {...mat} /></mesh>
      </group>
      <ProductHotspot position={[1.8, 1.5, 0]} title="Suite Wardrobe" description="Full-height sliding doors with customizable interiors." />
    </group>
  );
}

function Office() {
  const { finish, color } = useConfigurator();
  const mat = PremiumMaterials({ finish, color });
  return (
    <group position={[5, 0, 1]}>
      <mesh position={[0, 0.75, 0]} castShadow><boxGeometry args={[2.5, 0.05, 1.2]} /><meshStandardMaterial {...mat} /></mesh>
      <mesh position={[0, 0.35, -0.55]} castShadow><boxGeometry args={[2.5, 0.7, 0.1]} /><meshStandardMaterial color="#0f172a" /></mesh>
      <ProductHotspot position={[0, 0.8, 0]} title="Executive Desk" description="Ergonomic design for maximum productivity." />
    </group>
  );
}

export default function VirtualShowroom() {
  const { isInside, setIsInside, currentRoom, setCurrentRoom, finish, setFinish, color, setColor, lightingMode, setLightingMode } = useConfigurator();
  const [doorOpened, setDoorOpened] = useState(false);

  return (
    <div className="w-full h-screen bg-slate-950 relative overflow-hidden">
      <AnimatePresence>
        {isInside && (
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}
            className="absolute top-24 right-8 z-30 w-72 h-[calc(100vh-12rem)] flex flex-col gap-4">
            <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl flex-1 overflow-y-auto">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-white font-serif text-xl">Configurator</h2>
                <button onClick={() => setLightingMode(lightingMode === 'day' ? 'night' : 'day')} className="p-2 rounded-lg bg-white/5 text-gold-500">
                  {lightingMode === 'day' ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="text-slate-400 text-[10px] uppercase font-bold mb-3 block">Finish</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['acrylic', 'laminate', 'wood'].map((f) => (
                      <button key={f} onClick={() => setFinish(f)} className={`py-2 rounded-xl text-[9px] font-bold uppercase transition-all border-2 ${finish === f ? 'border-gold-500 bg-gold-500/10 text-white' : 'border-transparent bg-white/5 text-slate-500'}`}>{f}</button>
                    ))}
                  </div>
                </div>
                {finish !== 'wood' && (
                  <div>
                    <label className="text-slate-400 text-[10px] uppercase font-bold mb-3 block">Color</label>
                    <div className="grid grid-cols-4 gap-3">
                      {['#ffffff', '#f1f5f9', '#94a3b8', '#475569', '#1e293b', '#0f172a', '#7c2d12', '#451a03'].map((c) => (
                        <button key={c} onClick={() => setColor(c)} className={`w-full aspect-square rounded-full border-2 ${color === c ? 'border-gold-500 scale-110' : 'border-white/10'}`} style={{ backgroundColor: c }} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button onClick={() => { setIsInside(false); setDoorOpened(false); setCurrentRoom('hallway'); }} className="w-full py-4 bg-slate-900/60 border border-white/10 rounded-2xl text-[10px] font-bold text-slate-400 uppercase tracking-widest">Exit</button>
          </motion.div>
        )}
      </AnimatePresence>

      {isInside && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 bg-slate-950/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/5 shadow-2xl">
          {['living', 'kitchen', 'bedroom', 'office', 'hallway'].map((room) => (
            <button key={room} onClick={() => setCurrentRoom(room)} className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase transition-all ${currentRoom === room ? 'bg-gold-500 text-slate-950' : 'text-slate-500 hover:text-white'}`}>{room}</button>
          ))}
        </motion.div>
      )}

      <Canvas shadows camera={{ position: [0, 5, 15], fov: 45 }}>
        <color attach="background" args={['#020617']} />
        <Suspense fallback={null}>
          <Environment preset={lightingMode === 'day' ? "apartment" : "night"} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 20, 10]} intensity={10} castShadow />
          
          <group position={[0, -0.5, 0]}>
            {/* Structural */}
            <mesh rotation={[-Math.PI/2, 0, 0]} receiveShadow>
              <planeGeometry args={[50, 50]} />
              <meshStandardMaterial color="#0a0a0a" roughness={0.9} />
            </mesh>
            <gridHelper args={[50, 50, "#1e293b", "#0f172a"]} position={[0, 0.01, 0]} />
            
            {/* Outer Box */}

            <mesh position={[0, 1.6, -8]}><boxGeometry args={[20, 3.2, 0.2]} /><meshStandardMaterial color="#334155" /></mesh>
            <mesh position={[-10, 1.6, 0]} rotation={[0, Math.PI/2, 0]}><boxGeometry args={[16, 3.2, 0.2]} /><meshStandardMaterial color="#334155" /></mesh>
            <mesh position={[10, 1.6, 0]} rotation={[0, -Math.PI/2, 0]}><boxGeometry args={[16, 3.2, 0.2]} /><meshStandardMaterial color="#334155" /></mesh>
            <mesh position={[0, 3.3, 0]} visible={!isInside}><boxGeometry args={[20.2, 0.2, 16.2]} /><meshStandardMaterial color="#020617" /></mesh>

            {/* Entry Door */}
            {!doorOpened && (
              <Html position={[0, 1.5, 8]} center>
                <button onClick={() => { setDoorOpened(true); setIsInside(true); setCurrentRoom('hallway'); }} className="bg-gold-500 text-slate-950 px-8 py-4 rounded-full font-bold shadow-2xl">ENTER SHOWROOM</button>
              </Html>
            )}

            <LivingRoom />
            <Kitchen />
            <Bedroom />
            <Office />

            {/* Lights */}
            {isInside && (
              <group>
                <pointLight position={[-5, 3, 1]} intensity={5} color="#fef08a" />
                <pointLight position={[5, 3, 1]} intensity={5} color="#fef08a" />
                <pointLight position={[-5, 3, -5]} intensity={5} color="#fef08a" />
                <pointLight position={[5, 3, -5]} intensity={5} color="#fef08a" />
              </group>
            )}
          </group>
          <ContactShadows position={[0, -0.5, 0]} opacity={0.4} scale={30} blur={2} />
          <CameraController />
        </Suspense>
      </Canvas>
    </div>
  );
}
