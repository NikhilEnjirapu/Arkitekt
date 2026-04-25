import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-900/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gold-500/20 blur-2xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Luxury Interior Design" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-8 -right-4 md:-right-8 glass p-6 rounded-2xl shadow-xl z-20 hidden sm:block"
              >
                <div className="text-4xl font-serif font-bold text-gold-500 mb-1">10+</div>
                <div className="text-xs text-slate-300 uppercase tracking-widest font-semibold">Years of<br/>Excellence</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 w-full space-y-8"
          >
            <div>
              <h2 className="text-xs sm:text-sm font-bold text-gold-500 tracking-[0.2em] uppercase mb-4">Our Story</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Crafting Spaces <br className="hidden md:block" /> That Inspire.
              </h3>
            </div>
            
            <div className="space-y-6 text-slate-400 text-base md:text-lg leading-relaxed">
              <p>
                At <span className="text-white font-medium">Arkitekt</span>, we believe that your environment profoundly impacts your quality of life. For over a decade, we have been at the forefront of combining innovative materials with master craftsmanship.
              </p>
              <p>
                From premium acrylic panels to bespoke modular kitchens, every project is a testament to our commitment to excellence. We don't just design spaces; we curate luxurious experiences that stand the test of time.
              </p>
            </div>
            
            <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-8 sm:hidden">
              {/* Mobile Stats (since badge is hidden on mobile) */}
              <div>
                <h4 className="text-3xl font-serif font-bold text-gold-500 mb-1">10+</h4>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Years Exp</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif font-bold text-gold-500 mb-1">500+</h4>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Projects</p>
              </div>
            </div>
            
            <div className="hidden sm:grid pt-4 grid-cols-2 gap-8 border-t border-white/5">
              <div>
                <div className="h-0.5 w-12 bg-gold-500 mb-4 rounded-full"></div>
                <h4 className="text-xl font-bold text-white mb-2">Master Craftsmanship</h4>
                <p className="text-slate-400 text-sm">Precision engineered components for perfect alignment.</p>
              </div>
              <div>
                <div className="h-0.5 w-12 bg-gold-500 mb-4 rounded-full"></div>
                <h4 className="text-xl font-bold text-white mb-2">Premium Materials</h4>
                <p className="text-slate-400 text-sm">Sourced globally to ensure durability and unmatched aesthetics.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
