import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace these with actual EmailJS credentials
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          setSubmitStatus('success');
          setIsSubmitting(false);
          form.current.reset();
      }, (error) => {
          console.error(error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-black-pure relative overflow-hidden">
      {/* Luxurious Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-0 rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
          
          {/* Left Side: The Studio (Information) */}
          <div className="lg:w-2/5 bg-charcoal relative p-10 md:p-16 flex flex-col justify-between overflow-hidden">
            {/* Artistic Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Architecture" 
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/80 to-transparent"></div>
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-gold-500 text-sm font-bold tracking-[0.3em] uppercase mb-6">Connect</h2>
                <h3 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-8">
                  Let's Define <br/> <span className="italic text-gold-400">Your Space.</span>
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-sm mb-12">
                  Our studio is dedicated to crafting environments that are as unique as the people who inhabit them.
                </p>
              </motion.div>

              <div className="space-y-10">
                {[
                  { icon: MapPin, label: "Studio", value: "123 Design Blvd, Suite 400" },
                  { icon: Phone, label: "Direct", value: "+1 (555) 123-4567" },
                  { icon: Mail, label: "Inquiry", value: "hello@arkitekt.com" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black-pure transition-all duration-500">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-1">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-16">
              <div className="flex gap-6 text-slate-500 text-xs font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-gold-500 transition-colors">Instagram</a>
                <a href="#" className="hover:text-gold-500 transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-gold-500 transition-colors">Pinterest</a>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:w-3/5 glass-dark p-10 md:p-16">
            <motion.form 
              ref={form} 
              onSubmit={sendEmail}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div variants={itemVariants} className="relative group">
                  <input 
                    type="text" 
                    id="user_name"
                    name="user_name" 
                    placeholder=" " 
                    className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold-500 transition-all duration-500"
                    required 
                  />
                  <label htmlFor="user_name" className="absolute left-0 top-3 text-slate-500 text-sm tracking-widest uppercase transition-all duration-500 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-gold-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">Full Name</label>
                </motion.div>

                <motion.div variants={itemVariants} className="relative group">
                  <input 
                    type="email" 
                    id="user_email"
                    name="user_email" 
                    placeholder=" " 
                    className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold-500 transition-all duration-500"
                    required 
                  />
                  <label htmlFor="user_email" className="absolute left-0 top-3 text-slate-500 text-sm tracking-widest uppercase transition-all duration-500 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-gold-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">Email Address</label>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="relative group">
                <select 
                  id="project_type"
                  name="project_type" 
                  defaultValue=""
                  className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold-500 transition-all duration-500 appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled className="bg-charcoal text-slate-500">Select Project Type</option>
                  <option value="Modular Kitchen" className="bg-charcoal text-white">Modular Kitchen</option>
                  <option value="Modular Wardrobe" className="bg-charcoal text-white">Modular Wardrobe</option>
                  <option value="Full Interior" className="bg-charcoal text-white">Full Interior Design</option>
                  <option value="Commercial" className="bg-charcoal text-white">Commercial Space</option>
                </select>
                <div className="absolute right-0 top-4 pointer-events-none text-slate-500">
                  <ArrowRight size={16} className="rotate-90" />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative group">
                <textarea 
                  id="message"
                  name="message" 
                  placeholder=" " 
                  rows="4"
                  className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold-500 transition-all duration-500 resize-none"
                  required
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-slate-500 text-sm tracking-widest uppercase transition-all duration-500 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-gold-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">Tell us about your vision</label>
              </motion.div>

              <motion.button 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden bg-gold-500 py-6 rounded-xl font-bold text-black-pure tracking-[0.2em] uppercase text-xs transition-all duration-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]"
              >
                <span className="relative z-10 flex justify-center items-center gap-3">
                  {isSubmitting ? 'Transmitting...' : (
                    <>Initialize Inquiry <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" /></>
                  )}
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              </motion.button>

              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-gold-400 text-center text-xs font-bold uppercase tracking-widest pt-4">
                    Connection Established. We will reach out shortly.
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
}
