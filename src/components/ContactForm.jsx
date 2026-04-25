import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

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

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Premium Decorative Lighting */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-slate-800/30 to-transparent blur-3xl rounded-full z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-xs sm:text-sm font-bold text-gold-500 tracking-[0.2em] uppercase mb-3">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">Start Your Project</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6 rounded-full opacity-70"></div>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/3 space-y-10"
          >
            <div>
              <h4 className="text-3xl font-serif font-bold text-white mb-6">Let's Create<br/>Something Beautiful.</h4>
              <p className="text-slate-400 mb-8 leading-relaxed text-base md:text-lg">
                Ready to transform your space? Reach out to us today to discuss your vision, and let our experts guide you through the process of bringing your dream interior to life.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-gold-500 border border-slate-800 group-hover:border-gold-500/50 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                </div>
                <div className="ml-6">
                  <h5 className="text-lg font-bold text-white tracking-wide">Office Location</h5>
                  <p className="text-slate-400 mt-2 leading-relaxed">123 Design Boulevard, Suite 400<br/>Creative City, ST 12345</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-gold-500 border border-slate-800 group-hover:border-gold-500/50 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all duration-300">
                    <Phone size={24} />
                  </div>
                </div>
                <div className="ml-6">
                  <h5 className="text-lg font-bold text-white tracking-wide">Phone Number</h5>
                  <p className="text-slate-400 mt-2 leading-relaxed">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-gold-500 border border-slate-800 group-hover:border-gold-500/50 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all duration-300">
                    <Mail size={24} />
                  </div>
                </div>
                <div className="ml-6">
                  <h5 className="text-lg font-bold text-white tracking-wide">Email Address</h5>
                  <p className="text-slate-400 mt-2 leading-relaxed">info@arkitekt.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-2/3"
          >
            <div className="bg-slate-900/50 backdrop-blur-xl p-8 md:p-14 rounded-3xl shadow-2xl border border-slate-800/80">
              <form ref={form} onSubmit={sendEmail} className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3 relative group">
                    <label htmlFor="user_name" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      id="user_name"
                      name="user_name" 
                      placeholder="John Doe" 
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all duration-300"
                      required 
                    />
                  </div>
                  <div className="space-y-3 relative group">
                    <label htmlFor="user_email" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      id="user_email"
                      name="user_email" 
                      placeholder="john@example.com" 
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all duration-300"
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-3 relative group">
                  <label htmlFor="project_type" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Project Type</label>
                  <select 
                    id="project_type"
                    name="project_type" 
                    defaultValue=""
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all duration-300 appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled className="text-slate-500">Select a project type</option>
                    <option value="Modular Kitchen">Modular Kitchen</option>
                    <option value="Modular Wardrobe">Modular Wardrobe</option>
                    <option value="Office Furniture">Office Furniture</option>
                    <option value="Acrylic/Ply Panels">Acrylic/Ply Panels</option>
                    <option value="Other">Other Interior/Exterior Work</option>
                  </select>
                </div>

                <div className="space-y-3 relative group">
                  <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Project Details</label>
                  <textarea 
                    id="message"
                    name="message" 
                    placeholder="Tell us about your space and requirements..." 
                    rows="6"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-slate-950 py-5 rounded-xl font-bold text-lg tracking-wide transition-all duration-300 flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>Send Inquiry <Send size={22} /></>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-400 text-center font-medium mt-6 bg-green-400/10 py-3 rounded-lg border border-green-400/20">Message sent successfully! We will get back to you soon.</motion.p>
                )}
                {submitStatus === 'error' && (
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-center font-medium mt-6 bg-red-400/10 py-3 rounded-lg border border-red-400/20">Failed to send message. Please try again later.</motion.p>
                )}

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
