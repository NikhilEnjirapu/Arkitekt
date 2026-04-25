import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const extendedProducts = [
  {
    id: 1,
    name: "Acrylic Panels",
    description: "High-gloss, scratch-resistant panels offering a flawless mirror-like finish for a modern aesthetic.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    name: "Kitchen Shutters",
    description: "Durable, elegant, and precision-engineered shutters customized for your luxurious culinary space.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745a872e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    name: "Modular Wardrobes",
    description: "Smart, bespoke storage solutions that blend seamlessly with your high-end bedroom decor.",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    name: "Birch Ply Panels",
    description: "Premium quality, multi-layered plywood offering unmatched strength and a warm natural texture.",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    name: "Office Furniture",
    description: "Ergonomic, stylish, and executive-grade furniture designed for modern corporate workspaces.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    name: "Aluminium Windows",
    description: "Sleek, high-performance aluminium window frames maximizing natural light and offering superior durability.",
    image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    name: "Glass Partitions",
    description: "Elegant frameless glass partitions that create acoustic privacy without sacrificing open-plan aesthetics.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    name: "Luxury TV Units",
    description: "Custom-built media centers featuring integrated lighting, premium woodwork, and seamless cable management.",
    image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    name: "Solid Wood Doors",
    description: "Handcrafted, solid wood entryways and interior doors combining timeless elegance with modern security.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function AllProducts() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-black-pure relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-gold-900/10 via-slate-900/5 to-transparent blur-3xl rounded-full z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20">
        <div className="text-center mb-16 md:mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-sm font-bold text-gold-500 tracking-[0.2em] uppercase mb-4">Complete Catalog</h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">Our Premium Range</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6 rounded-full opacity-70"></div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          {extendedProducts.map((product) => (
            <motion.div 
              key={product.id} 
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden glass-dark border border-white/5 hover:border-gold-500/40 shadow-lg hover:shadow-2xl hover:shadow-gold-500/20 transition-all duration-500"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-30 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h4 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3 tracking-wide">{product.name}</h4>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                  {product.description}
                </p>
                <div className="mt-5 flex items-center text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span className="text-xs font-bold uppercase tracking-[0.15em]">Explore Details</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
