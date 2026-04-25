import { motion } from 'framer-motion';

const products = [
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
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function Products() {
  return (
    <section id="products" className="py-24 bg-black-pure relative overflow-hidden">
      {/* Decorative background gradients for premium feel */}
      <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-gold-900/10 via-slate-900/5 to-transparent blur-3xl rounded-full z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-slate-800/20 to-transparent blur-3xl rounded-full z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-xs sm:text-sm font-bold text-gold-500 tracking-[0.2em] uppercase mb-3">Our Collection</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">Premium Products</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6 rounded-full opacity-70"></div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          {products.map((product, index) => (
            <motion.div 
              key={product.id} 
              variants={itemVariants}
              className={`group relative rounded-2xl overflow-hidden glass-dark border border-white/5 hover:border-gold-500/40 shadow-lg hover:shadow-2xl hover:shadow-gold-500/20 transition-all duration-500 ${index === 3 || index === 4 ? 'lg:col-span-1.5' : ''}`}
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
              
              {/* Overlay gradient that rises on hover */}
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a href="/products" className="inline-flex items-center gap-3 bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black-pure px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 transform hover:scale-105">
            View All Products
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
