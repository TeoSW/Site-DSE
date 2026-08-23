import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-24 bg-white dark:bg-gray-900" id="contact">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#4361EE] text-white px-4 py-2 rounded-full mb-4">
            <Mail className="w-4 h-4" />
            <span className="text-sm">Contact</span>
          </div>
          <h2 className="text-[#3A0CA3] dark:text-white mb-4">Contactează-ne</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Suntem aici pentru a răspunde la întrebările tale și pentru a te ajuta să faci primul pas către cariera ta în statistică și econometrie.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm transition-all duration-300 border border-[#4CC9F0]/20 dark:border-gray-700"
          >
            <div className="bg-[#4361EE] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-[#3A0CA3] dark:text-[#4CC9F0] mb-4">Adresă</h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Calea Dorobanţilor nr. 15-17,<br />
              Etajul 6, Sala 2606<br />
              Sector 1, București<br />
              Cod Poștal 010552
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm transition-all duration-300 border border-[#4CC9F0]/20 dark:border-gray-700"
          >
            <div className="bg-[#4CC9F0] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-[#3A0CA3] dark:text-[#4CC9F0] mb-4">Email</h4>
            <a href="mailto:dse@ase.ro" className="text-gray-600 dark:text-gray-300 hover:text-[#4361EE] dark:text-[#A5B8FF] transition-colors text-lg block mb-2">
              dse@ase.ro
            </a>
            <a href="mailto:diana.burciu@ase.ro" className="text-gray-600 dark:text-gray-300 hover:text-[#4361EE] dark:text-[#A5B8FF] transition-colors text-lg block">
              diana.burciu@ase.ro
            </a>
          </motion.div>

          {/* Secretariat (Phone) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm transition-all duration-300 border border-[#4CC9F0]/20 dark:border-gray-700"
          >
            <div className="bg-[#4895EF] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-[#3A0CA3] dark:text-[#4CC9F0] mb-4">Telefon</h4>
            <a href="tel:+40213191900" className="text-gray-600 dark:text-gray-300 hover:text-[#4361EE] dark:text-[#A5B8FF] transition-colors text-lg">
              +40 21 319 19 00 / interior 383
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Secretar Diana Burciu<br />
              Luni - Vineri, 07:30 - 15:30
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}