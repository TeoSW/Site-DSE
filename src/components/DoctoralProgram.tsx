import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, TrendingUp, Globe, Database, ExternalLink } from 'lucide-react';

const doctoralSchool = {
  title: 'Cibernetică și Statistică Economică',
  director: 'Prof. univ. dr. Emilia ȚIȚAN',
  link: 'https://doctorat.ase.ro/programe/cibernetica-si-statistica-economica/',
  council: [
    { name: 'Prof. univ. dr. Emilia ȚIȚAN', role: 'Director' },
    { name: 'Prof. univ. dr. Daniel-Traian PELE', role: 'Membru' },
    { name: 'Prof. univ. dr. Stelian STANCU', role: 'Membru' },
    { name: 'Acad. Liviu Lucian ALBU', role: 'Membru' },
    { name: 'Cerc. șt. I Valentina VASILE', role: 'Membru' }
  ]
};

export function DoctoralProgram() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <div ref={sectionRef} className="py-20 bg-white dark:bg-gray-900" id="doctorat" style={{ scrollMarginTop: 'calc(20vh - 3.5cm)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          
        >
          <div className="inline-block px-6 py-2 rounded-full mb-6 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
            <span className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-300 font-medium">
              Școala Doctorală
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="text-[#3A0CA3] dark:text-[#4CC9F0]">
              Doctorat în Cibernetică și Statistică
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Excelență în cercetare avansată și contribuții științifice de impact internațional
          </p>
        </motion.div>

        {/* Doctoral Program */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-8 md:p-12 border border-gray-200 dark:border-gray-600 shadow-sm"
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="p-4 bg-[#7209B7] rounded-xl">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <span className="text-sm text-[#7209B7] dark:text-[#DDB8FF] uppercase tracking-wider">Școala Doctorală</span>
              <h3 className="text-3xl mt-2 mb-3 dark:text-white">{doctoralSchool.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mb-4">
                Școala doctorală își propune să își mențină și să își consolideze statutul de lider al cercetării doctorale 
                în domeniul ciberneticii și statisticii din România și să devină recunoscută la nivel internațional.
              </p>
            </div>
          </div>

          {/* Buton Vezi Școala Doctorală - deasupra consiliului */}
          <div className="mb-8 text-center">
            <a
              href="#/doctorat"
              className="inline-flex items-center gap-2 text-sm bg-[#7209B7] text-white px-6 py-2.5 rounded-full transition-all duration-300"
            >
              Mai multe informații despre doctorat
              <Award className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Consiliul Școlii Doctorale</h4>
              <div className="space-y-3">
                {doctoralSchool.council.map((member, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#7209B7] rounded-full mt-1.5"></div>
                    <div>
                      <p className="text-sm dark:text-gray-300">{member.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Obiective principale</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#7209B7] dark:text-[#DDB8FF] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">Creșterea performanței științifice și academice a cercetătorilor</p>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-[#7209B7] dark:text-[#DDB8FF] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">Pregătirea doctoranzilor pentru cercetare de vârf în comunitatea internațională</p>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-[#7209B7] dark:text-[#DDB8FF] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">Dezvoltarea de produse și servicii inovative bazate pe cercetare avansată</p>
                </div>
              </div>
            </div>
          </div>

          <a
            href={doctoralSchool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#7209B7] dark:text-[#DDB8FF] hover:text-[#F72585] dark:hover:text-[#F72585] transition-colors group mt-4"
          >
            Vezi Școala Doctorală CSE
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </div>
  );
}