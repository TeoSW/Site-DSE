import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { BookOpen, Award, Briefcase, GraduationCap, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import EMOS from '../assets/salaEMOS.png';

// Hartă campus ASE din Figma

const curriculumCategories = [
  {
    name: 'Statistica',
    icon: BookOpen,
    gradient: 'bg-[#4361EE]',
    subjects: [
      'Statistică',
      'Statistică inferențială',
      'Statistică macroeconomică',
      'Statistică neparametrică',
      'Statistică spațială',
      'Statistica piețelor financiare',
      'Econometrie',
      'Testarea ipotezelor statistice',
      'Serii de timp',
      'Sondaje și anchete statistice',
      'Demografie',
      'Modelarea și vizualizarea geospațială a datelor statistice',
      'Tehnici de analiză multidimensională și Data Mining',
      'Analiză datelor panel și cauzalitate inferențială'
    ]
  },
  {
    name: 'Matematica și Cibernetica',
    icon: Award,
    gradient: 'bg-[#7209B7]',
    subjects: [
      'Algebră',
      'Analiză matematică',
      'Probabilități și statistică matematică',
      'Bazele cercetărilor operaționale',
      'Bazele ciberneticii economice',
      'Macroeconomie cantitativă',
      'Microeconomie cantitativă',
      'Teoria jocurilor'
    ]
  },
  {
    name: 'Informatica',
    icon: Briefcase,
    gradient: 'bg-[#4CC9F0]',
    subjects: [
      'Bazele tehnologiei informației',
      'Bazele programării calculatoarelor',
      'Algoritmi și tehnici de programare',
      'Sisteme de operare',
      'Programare orientată obiect',
      'Baze de date',
      'Pachete software',
      'Tehnici utilizate în Business Intelligence',
      'Managementul datelor statistice',
      'Proiectarea sistemelor informatice în statistică'
    ]
  },
  {
    name: 'Economie',
    icon: GraduationCap,
    gradient: 'bg-[#F72585]',
    subjects: [
      'Economie',
      'Introducere în contabilitate',
      'Finanțe',
      'Management',
      'Marketing'
    ]
  },
];

const advantages = [
  {
    title: 'Abilități Practice',
    description: 'Lucrezi cu date reale din primul an. Vei învăța să utilizezi instrumente profesionale precum R, Python, SPSS și Stata pentru analiza datelor economice.',
  },
  {
    title: 'Perspectivă Economică',
    description: 'Spre deosebire de informatică, te concentrezi pe aplicații economice concrete: previziuni de piață, analiza comportamentului consumatorilor, evaluarea riscurilor financiare.',
  },
  {
    title: 'Versatilitate în Carieră',
    description: 'Absolvenții noștri sunt solicitați în domenii variate: bănci, consultanță, marketing, instituții publice, tech companies - oriunde sunt necesare decizii bazate pe date.',
  },
  {
    title: 'Gândire Analitică',
    description: 'Dezvolți capacitatea de a transforma date brute în insights valoroase pentru business. Nu doar codezi - interpretezi, previzionezi și recomandă soluții.',
  },
];

export function ProgramSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-900" id="licenta" style={{ scrollMarginTop: 'calc(20vh - 3.5cm)' }}>
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
              Program Licență
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="text-[#3A0CA3] dark:text-[#4CC9F0]">
              Licență în Statistică Economică și Data Science
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Un program de studii echilibrat care combină statistica, matematica & cibernetica, informatica și economia pentru a forma specialiști în analiza datelor
          </p>
        </motion.div>

        {/* Curriculum Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {curriculumCategories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`${category.gradient === 'bg-[#7209B7]' ? 'bg-[#7209B7]/5 border-[#7209B7]/20' : category.gradient === 'bg-[#4361EE]' ? 'bg-[#4361EE]/5 border-[#4361EE]/20' : category.gradient === 'bg-[#F72585]' ? 'bg-[#F72585]/5 border-[#F72585]/20' : 'bg-[#4CC9F0]/5 border-[#4CC9F0]/20'} rounded-xl p-8 border transition-all`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 ${category.gradient} rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mt-1 mb-2 text-gray-900 dark:text-white">{category.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {category.subjects.length} {category.subjects.length === 1 ? 'curs' : 'cursuri'}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Discipline principale</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {(expandedCategories[category.name] ? category.subjects : category.subjects.slice(0, 3)).map((subject, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <div className={`w-1.5 h-1.5 rounded-full ${category.gradient}`}></div>
                        {subject}
                      </div>
                    ))}
                  </div>
                  {category.subjects.length > 3 && (
                    <button
                      className={`text-xs mt-3 flex items-center gap-1 transition-colors ${category.gradient.includes('7209B7') ? 'text-[#7209B7] dark:text-[#DDB8FF] hover:text-[#B5179E]' : category.gradient.includes('4361EE') ? 'text-[#4361EE] dark:text-[#A5B8FF] hover:text-[#4895EF]' : category.gradient.includes('F72585') ? 'text-[#B5179E] dark:text-[#F72585] hover:text-[#7209B7]' : 'text-[#4361EE] dark:text-[#4CC9F0] hover:text-[#3A0CA3]'}`}
                      onClick={() => toggleCategory(category.name)}
                    >
                      {expandedCategories[category.name] ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Ascunde
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          +{category.subjects.length - 3} alte cursuri
                        </>
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Details Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mb-20"
        >
          <a
            href="#/discipline"
            className="cursor-pointer inline-flex items-center gap-3 bg-[#4361EE] text-white px-8 py-4 rounded-full transition-all duration-300 group"
          >
            <GraduationCap className="w-5 h-5" />
            <span className="text-lg">Vezi toate disciplinele</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Why Choose Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
          id="despre"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl mb-6 text-gray-900 dark:text-white">
                De ce să alegi Statistică și Econometrie?
              </h3>
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={advantage.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4"
                    style={{ borderColor: '#4361EE' }}
                  >
                    <h4 className="text-xl mb-2 text-gray-900 dark:text-white">{advantage.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{advantage.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden shadow-sm">
                <img
                  src={EMOS}
                  alt="Studenți analizând date"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Statistică vs Informatică și Cibernetica */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-12"
        >
          <h3 className="text-3xl text-center mb-4 text-gray-900 dark:text-white">
            Ce specializare ți se potrivește?
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Compară diferențele dintre Statistică Economică și Data Science, Informatică și Cibernetica
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Statistică și Econometrie */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white dark:bg-gray-800 border-2 border-[#4361EE]/30 dark:border-[#4361EE]/50 rounded-xl p-8 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4361EE]/10 dark:bg-[#4361EE]/20 rounded-bl-full -mr-16 -mt-16"></div>
              
              <div className="relative">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="p-4 bg-[#4361EE] rounded-xl shadow-sm mb-4 transition-transform">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl text-[#3A0CA3] dark:text-[#4CC9F0]">
                    Statistică și Econometrie
                  </h4>
                </div>
                
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4361EE] mt-2 flex-shrink-0"></div>
                    <p><strong>Analiza și interpretarea</strong> datelor economice</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4361EE] mt-2 flex-shrink-0"></div>
                    <p>Modele statistice și <strong>econometrice</strong></p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4361EE] mt-2 flex-shrink-0"></div>
                    <p><strong>Previziuni de piață</strong> și evaluarea riscurilor</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4361EE] mt-2 flex-shrink-0"></div>
                    <p>Sondaje și <strong>cercetare de piață</strong></p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4361EE] mt-2 flex-shrink-0"></div>
                    <p>Roluri de <strong>data analyst și economist</strong></p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Informatică */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="bg-white dark:bg-gray-800 border-2 border-[#4CC9F0]/30 dark:border-[#4CC9F0]/50 rounded-xl p-8 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4CC9F0]/10 dark:bg-[#4CC9F0]/20 rounded-bl-full -mr-16 -mt-16"></div>
              
              <div className="relative">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="p-4 bg-[#4CC9F0] rounded-xl shadow-sm mb-4 transition-transform">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl text-[#3A0CA3] dark:text-[#4CC9F0]">
                    Informatică
                  </h4>
                </div>
                
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4CC9F0] mt-2 flex-shrink-0"></div>
                    <p><strong>Dezvoltarea de software</strong> și sisteme</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4CC9F0] mt-2 flex-shrink-0"></div>
                    <p><strong>Algoritmi</strong> și structuri de date</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4CC9F0] mt-2 flex-shrink-0"></div>
                    <p>Arhitectură de calculatoare și <strong>rețele</strong></p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4CC9F0] mt-2 flex-shrink-0"></div>
                    <p><strong>Inginerie software</strong> și aplicații</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4CC9F0] mt-2 flex-shrink-0"></div>
                    <p>Mai puțin accent pe <strong>aspectele economice</strong></p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cibernetica */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-white dark:bg-gray-800 border-2 border-[#7209B7]/30 dark:border-[#7209B7]/50 rounded-xl p-8 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7209B7]/10 dark:bg-[#7209B7]/20 rounded-bl-full -mr-16 -mt-16"></div>
              
              <div className="relative">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="p-4 bg-[#7209B7] rounded-xl shadow-sm mb-4 transition-transform">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl text-[#3A0CA3] dark:text-[#4CC9F0]">
                    Cibernetica
                  </h4>
                </div>
                
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7209B7] mt-2 flex-shrink-0"></div>
                    <p><strong>Sisteme informatice</strong> economice</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7209B7] mt-2 flex-shrink-0"></div>
                    <p>Modele de <strong>optimizare</strong> complexe</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7209B7] mt-2 flex-shrink-0"></div>
                    <p><strong>Inteligență artificială</strong> aplicată în economie</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7209B7] mt-2 flex-shrink-0"></div>
                    <p><strong>Automatizarea proceselor</strong> business</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7209B7] mt-2 flex-shrink-0"></div>
                    <p>Abordare <strong>tehnică</strong> cu sisteme complexe</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}