import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';

// Context for global configuration state
export const ConfiguratorContext = createContext();

export const useConfigurator = () => useContext(ConfiguratorContext);

function App() {
  const [finish, setFinish] = useState('acrylic');
  const [color, setColor] = useState('#ffffff');
  const [lightingMode, setLightingMode] = useState('day');
  const [isInside, setIsInside] = useState(false);
  const [currentRoom, setCurrentRoom] = useState('hallway');

  const configValue = {
    finish,
    setFinish,
    color,
    setColor,
    lightingMode,
    setLightingMode,
    isInside,
    setIsInside,
    currentRoom,
    setCurrentRoom
  };


  return (
    <ConfiguratorContext.Provider value={configValue}>
      <Router>
        <div className="bg-black-pure min-h-screen font-sans selection:bg-gold-500 selection:text-slate-950">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<AllProducts />} />
          </Routes>
          
          {/* Footer */}
          <footer className="bg-black-pure py-16 border-t border-white/5 relative overflow-hidden">
+            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center">
                <p className="text-slate-500 font-serif mb-6 flex items-center gap-2">
                  <span className="text-2xl font-bold tracking-tighter text-white">Arkitekt<span className="text-gold-500">.</span></span> 
                  <span className="w-px h-4 bg-slate-700 mx-2"></span>
                  Arkitekt
                </p>
                <div className="flex gap-8 mb-8">
                  <a href="#about" className="text-xs text-slate-500 hover:text-gold-500 transition-colors uppercase tracking-widest">About</a>
                  <a href="/products" className="text-xs text-slate-500 hover:text-gold-500 transition-colors uppercase tracking-widest">Products</a>
                  <a href="#solutions" className="text-xs text-slate-500 hover:text-gold-500 transition-colors uppercase tracking-widest">Solutions</a>
                  <a href="#contact" className="text-xs text-slate-500 hover:text-gold-500 transition-colors uppercase tracking-widest">Contact</a>
                </div>
                <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em]">
                  &copy; {new Date().getFullYear()} Arkitekt. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </ConfiguratorContext.Provider>
  );
}

export default App;
