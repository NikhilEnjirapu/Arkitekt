import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'Showroom', 
      href: '#',
      dropdown: [
        { name: 'Walkthrough', href: isHome ? '#home' : '/' },
        { name: 'About Us', href: isHome ? '#about' : '/#about' },
        { name: 'Products', href: '/products' },
        { name: 'Solutions', href: isHome ? '#solutions' : '/#solutions' },
        { name: 'Contact Us', href: isHome ? '#contact' : '/#contact' },
      ]
    },
  ];


  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 shadow-lg shadow-black/50' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href={isHome ? "#home" : "/"} className="font-serif text-2xl font-bold tracking-tighter text-white">
              Arkitekt<span className="text-gold-500">.</span>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <button className="flex items-center text-sm font-medium text-slate-300 group-hover:text-gold-400 transition-colors duration-200">
                  {link.name}
                  <svg className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                  {link.dropdown.map((sub) => (
                    sub.href.startsWith('/') ? (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="block px-4 py-3 text-xs font-medium text-slate-400 hover:text-gold-400 hover:bg-slate-800 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ) : (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-3 text-xs font-medium text-slate-400 hover:text-gold-400 hover:bg-slate-800 transition-colors"
                      >
                        {sub.name}
                      </a>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-2xl">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-1">
                  <div className="px-3 py-3 text-xs font-bold text-gold-500 uppercase tracking-widest">{link.name}</div>
                  {link.dropdown.map((sub) => (
                    sub.href.startsWith('/') ? (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-gold-400 hover:bg-slate-800 rounded-md transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ) : (
                      <a
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-gold-400 hover:bg-slate-800 rounded-md transition-colors"
                      >
                        {sub.name}
                      </a>
                    )
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
