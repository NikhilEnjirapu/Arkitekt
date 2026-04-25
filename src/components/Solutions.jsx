import { motion } from 'framer-motion';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const solutions = [
  {
    id: 1,
    title: "Modular Kitchen Transformation",
    description: "From outdated and cluttered to sleek, functional, and modern. Our modular kitchens are designed for unparalleled efficiency and aesthetics.",
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    after: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Office Workspace Integration",
    description: "Revitalize your corporate environment. We turn empty commercial spaces into vibrant, productive zones with custom ergonomic furniture.",
    before: "https://images.unsplash.com/photo-1497215848122-330110d32f5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    after: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-charcoal relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs sm:text-sm font-bold text-gold-500 tracking-[0.2em] uppercase mb-4">Our Solutions</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
              Transforming Visions <br className="hidden md:block"/> into Reality.
            </h3>
          </div>
          <p className="text-slate-400 max-w-md text-base md:text-lg">
            Witness the power of premium design. Slide to see the stunning transformation from concept to completion.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {solutions.map((solution, index) => (
            <div key={solution.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-3/5 rounded-2xl overflow-hidden shadow-2xl border border-white/5 relative group"
              >
                <div className="absolute inset-0 bg-gold-500/20 blur-[100px] -z-10 group-hover:bg-gold-500/30 transition-colors duration-700"></div>
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={solution.before} alt="Before" />}
                  itemTwo={<ReactCompareSliderImage src={solution.after} alt="After" />}
                  className="h-[300px] sm:h-[400px] md:h-[500px] w-full"
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="w-full lg:w-2/5 space-y-6 md:space-y-8 glass-dark p-6 md:p-10 rounded-2xl border border-white/5"
              >
                <h4 className="text-3xl md:text-4xl font-serif font-bold text-white leading-snug">{solution.title}</h4>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed">{solution.description}</p>
                <ul className="space-y-4 pt-4 border-t border-white/5">
                  <li className="flex items-center text-slate-300">
                    <span className="w-2 h-2 bg-gold-500 rounded-full mr-4 shadow-[0_0_8px_rgba(234,179,8,0.8)]"></span>
                    Premium Materials
                  </li>
                  <li className="flex items-center text-slate-300">
                    <span className="w-2 h-2 bg-gold-500 rounded-full mr-4 shadow-[0_0_8px_rgba(234,179,8,0.8)]"></span>
                    Expert Installation
                  </li>
                  <li className="flex items-center text-slate-300">
                    <span className="w-2 h-2 bg-gold-500 rounded-full mr-4 shadow-[0_0_8px_rgba(234,179,8,0.8)]"></span>
                    Custom Tailored Design
                  </li>
                </ul>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
