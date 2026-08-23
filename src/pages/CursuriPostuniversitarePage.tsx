import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Calendar, Users, Clock, Monitor, Award, BookOpen, BarChart3, Brain, Target, CheckCircle2, Mail, ChevronDown } from 'lucide-react';
import { SimpleHeader } from '../components/SimpleHeader';
import { Footer } from '../components/Footer';

export default function CursuriPostuniversitarePage() {
  const [expandedEdition, setExpandedEdition] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const editions = [
    {
      id: 0,
      title: 'Ediția Iunie-Iulie 2026',
      period: 'Iunie-Iulie 2026',
      schedule: 'Program flexibil (4-8 zile)',
      duration: '30 ore / 4-8 zile',
      credits: '3 ECT',
      status: 'În curând',
      statusColor: 'bg-[#7209B7]',
      format: 'La clasă sau online (în funcție de participanți)',
      participants: '10-20 cursanți',
      structure: [
        { day: 'Ziua 1', theory: '4 ore', practice: '3 ore', topic: 'Analiza Datelor de Business - Introducere', icon: BookOpen },
        { day: 'Ziua 2', theory: '3 ore', practice: '3 ore', topic: 'Analiza Datelor de Business - Aprofundare', icon: BarChart3 },
        { day: 'Ziua 3', theory: '3 ore', practice: '3 ore', topic: 'Analiza Datelor de Business - Aplicații', icon: Target },
        { day: 'Ziua 4', theory: '3 ore', practice: '2 ore', topic: 'Data Mining - Fundamentals', icon: Brain },
        { day: 'Ziua 5', theory: '2 ore', practice: '2 ore', topic: 'Data Mining - Metode avansate', icon: Brain },
        { day: 'Ziua 6', theory: '-', practice: '2 ore', topic: 'Evaluare finală și prezentare proiecte', icon: Award }
      ],
      gradient: 'bg-[#7209B7]',
      note: 'Structura pe 6 zile este un exemplu. Programul poate fi adaptat între 4-8 zile în funcție de preferințele participanților.'
    },
    {
      id: 1,
      title: 'Ediția Octombrie-Noiembrie 2026',
      period: 'Octombrie-Noiembrie 2026',
      schedule: 'Vineri - Duminică',
      duration: '30 ore / 4-6 zile',
      credits: '3 ECT',
      status: 'În curând',
      statusColor: 'bg-[#4361EE]',
      format: 'La clasă sau online (în funcție de participanți)',
      participants: '10-20 cursanți',
      structure: [
        { day: 'Ziua 1', theory: '4 ore', practice: '3 ore', topic: 'Analiza Datelor de Business - Introducere', icon: BookOpen },
        { day: 'Ziua 2', theory: '3 ore', practice: '3 ore', topic: 'Analiza Datelor de Business - Aprofundare', icon: BarChart3 },
        { day: 'Ziua 3', theory: '3 ore', practice: '3 ore', topic: 'Analiza Datelor de Business - Aplicații', icon: Target },
        { day: 'Ziua 4', theory: '3 ore', practice: '2 ore', topic: 'Data Mining - Fundamentals', icon: Brain },
        { day: 'Ziua 5', theory: '2 ore', practice: '2 ore', topic: 'Data Mining - Metode avansate', icon: Brain },
        { day: 'Ziua 6', theory: '-', practice: '2 ore', topic: 'Evaluare finală și prezentare proiecte', icon: Award }
      ],
      gradient: 'bg-[#4361EE]'
    },
    {
      id: 2,
      title: 'Ediția 2020-2021',
      period: 'Decembrie 2020 - Iulie 2021',
      schedule: '4-5 zile (flexibil)',
      duration: '30 ore',
      credits: '-',
      status: 'Arhivă',
      statusColor: 'bg-gray-500',
      format: 'Online',
      participants: '10-20 cursanți',
      structure: [
        { day: 'Prima zi', theory: '3 ore', practice: '3 ore', topic: 'Introducere în analiza datelor', icon: BookOpen },
        { day: 'A doua zi', theory: '4 ore', practice: '4 ore', topic: 'Analiza statistică aprofundată (poate fi împărțită pe 2 zile)', icon: BarChart3 },
        { day: 'A treia zi', theory: '3 ore', practice: '2 ore', topic: 'Metode avansate de analiză', icon: Target },
        { day: 'A patra zi', theory: '2 ore', practice: '3 ore', topic: 'Aplicații practice și proiecte', icon: Brain }
      ],
      gradient: 'bg-gray-500',
      availableMonths: 'Decembrie 2020, Ianuarie 2021, Februarie 2021, Mai 2021, Iunie 2021, Iulie 2021',
      note: 'Programare cu cel puțin 2 săptămâni după înscrierea cursanților.'
    }
  ];

  const curriculum = [
    {
      module: 'Analiza Datelor de Business',
      hours: '10 ore curs + 10 ore practică',
      credits: '2 credite',
      topics: [
        'Noțiuni introductive în analiza cantitativă a fenomenelor socio-economice',
        'Analiza univariată și bivariată a datelor',
        'Intensitatea legăturii între variabile, testarea ipotezelor',
        'Analiza dispersională',
        'Previziunea fenomenelor socio-economice prin regresie liniară (simplă și multiplă)',
        'Regresie logistică',
        'Aplicații practice în Excel, SPSS, SAS, R Studio sau Python'
      ],
      icon: BarChart3,
      color: 'bg-[#4361EE]'
    },
    {
      module: 'Data Mining',
      hours: '5 ore curs + 5 ore practică',
      credits: '1 credit',
      topics: [
        'Introducere în Data Mining',
        'Metode de clusterizare ierarhică și neierarhică',
        'Arbori de decizie',
        'Reguli de asociere',
        'Alte metode predictive',
        'Aplicații practice utilizând SPSS, SAS, R Studio sau Python'
      ],
      icon: Brain,
      color: 'bg-[#7209B7]'
    }
  ];

  const benefits = [
    {
      title: 'Tehnici moderne de analiză statistică',
      description: 'Univariată și multivariată',
      icon: BarChart3,
      color: 'bg-[#4361EE]'
    },
    {
      title: 'Lucru practic cu instrumente de top',
      description: 'Excel, SAS Studio, SPSS, R Studio sau Python',
      icon: Monitor,
      color: 'bg-[#7209B7]'
    },
    {
      title: 'Strategii de previzionare',
      description: 'Modelare econometrică aplicată',
      icon: Target,
      color: 'bg-[#4CC9F0]'
    },
    {
      title: 'Metode de Data Mining',
      description: 'Clusterizare, arbori de decizie, reguli de asociere',
      icon: Brain,
      color: 'bg-[#F72585]'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SimpleHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '1.5cm' }}>
        <div className="pb-20">
        
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 bg-[#4361EE] text-white shadow-sm">
              <GraduationCap className="w-6 h-6" />
              <span className="text-lg uppercase tracking-wider font-semibold">
                Program Postuniversitar
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl mb-6">
              <span className="text-[#3A0CA3] dark:text-[#4CC9F0]">
                BUSINESS ANALYSIS
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              Dezvoltă-ți competențele în analiza statistică univariată și multivariată a datelor din mediul de afaceri. 
              Învață să utilizezi instrumente software de top pentru prelucrarea și vizualizarea datelor.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700">
                <Clock className="w-5 h-5 text-[#4361EE] dark:text-[#A5B8FF]" />
                <span className="font-medium">30 ore intensive</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700">
                <Users className="w-5 h-5 text-[#7209B7] dark:text-[#DDB8FF]" />
                <span className="font-medium">10-20 cursanți</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700">
                <Monitor className="w-5 h-5 text-[#4361EE] dark:text-[#4CC9F0]" />
                <span className="font-medium">La clasă sau online</span>
              </div>
            </div>
          </motion.div>

          {/* Objectives */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#4361EE]/10 border-2 border-[#4361EE]/30 px-6 py-3 rounded-full mb-6">
                <Target className="w-5 h-5 text-[#4361EE] dark:text-[#A5B8FF]" />
                <span className="text-sm uppercase tracking-wider text-[#4361EE] dark:text-[#A5B8FF] font-semibold">Obiective</span>
              </div>
              <h2 className="text-4xl text-[#3A0CA3] dark:text-white mb-6">
                Ce vei învăța
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    <div className={`w-14 h-14 ${benefit.color} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg mb-2 text-[#3A0CA3] dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Editions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#7209B7]/10 border-2 border-[#7209B7]/30 px-6 py-3 rounded-full mb-6">
                <Calendar className="w-5 h-5 text-[#7209B7] dark:text-[#DDB8FF]" />
                <span className="text-sm uppercase tracking-wider text-[#7209B7] dark:text-[#DDB8FF] font-semibold">Ediții</span>
              </div>
              <h2 className="text-4xl text-[#3A0CA3] dark:text-white">
                Ediții disponibile
              </h2>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {editions.map((edition, index) => (
                <motion.div
                  key={edition.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  {/* Edition Header */}
                  <button
                    onClick={() => setExpandedEdition(expandedEdition === edition.id ? null : edition.id)}
                    className="w-full p-8 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${edition.statusColor} text-white text-sm font-semibold`}>
                            <Calendar className="w-4 h-4" />
                            {edition.status}
                          </div>
                        </div>
                        
                        <h3 className="text-3xl mb-3 text-[#3A0CA3] dark:text-white">
                          {edition.title}
                        </h3>
                        
                        <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300">
                          <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-[#4361EE] dark:text-[#A5B8FF]" />
                            <span>{edition.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-[#7209B7] dark:text-[#DDB8FF]" />
                            <span>{edition.schedule}</span>
                          </div>
                          {edition.credits !== '-' && (
                            <div className="flex items-center gap-2">
                              <Award className="w-5 h-5 text-[#4361EE] dark:text-[#4CC9F0]" />
                              <span>{edition.credits}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-[#B5179E] dark:text-[#F72585]" />
                            <span>{edition.participants}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full ${edition.gradient} flex items-center justify-center text-white transition-transform duration-300 ${expandedEdition === edition.id ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-6 h-6" />
                      </div>
                    </div>
                  </button>

                  {/* Edition Details */}
                  <AnimatePresence>
                    {expandedEdition === edition.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 pt-4 border-t border-gray-200 dark:border-gray-700">
                          {/* Format & Participants */}
                          <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">Format</p>
                                <p className="text-gray-900 dark:text-white font-medium">{edition.format}</p>
                              </div>
                              {edition.availableMonths && (
                                <div className="md:col-span-2">
                                  <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">Luni disponibile</p>
                                  <p className="text-gray-900 dark:text-white font-medium">{edition.availableMonths}</p>
                                </div>
                              )}
                            </div>
                            {edition.note && (
                              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                                <p className="text-sm text-blue-900 dark:text-blue-200">
                                  <span className="font-semibold">Notă:</span> {edition.note}
                                </p>
                              </div>
                            )}
                          </div>

                          {/* Structure */}
                          <h4 className="text-2xl mb-6 text-[#3A0CA3] dark:text-white">
                            Structura cursului
                          </h4>
                          <div className="space-y-3">
                            {edition.structure.map((day, dayIndex) => {
                              const Icon = day.icon;
                              return (
                                <div
                                  key={dayIndex}
                                  className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5 border border-gray-200 dark:border-gray-700"
                                >
                                  <div className="flex items-center gap-4">
                                    <div className={`flex-shrink-0 w-12 h-12 ${edition.gradient} rounded-lg flex items-center justify-center`}>
                                      <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    
                                    <div className="flex-1">
                                      <div className="flex items-center gap-4 mb-2">
                                        <h5 className="text-lg text-[#3A0CA3] dark:text-white font-semibold">
                                          {day.day}
                                        </h5>
                                        <div className="flex gap-2 text-sm text-gray-700 dark:text-gray-200">
                                          <span className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600">
                                            📚 {day.theory} curs
                                          </span>
                                          <span className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600">
                                            💻 {day.practice} practică
                                          </span>
                                        </div>
                                      </div>
                                      <p className="text-gray-600 dark:text-gray-300">
                                        {day.topic}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Curriculum */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#4CC9F0]/10 border-2 border-[#4CC9F0]/30 px-6 py-3 rounded-full mb-6">
                <BookOpen className="w-5 h-5 text-[#4361EE] dark:text-[#4CC9F0]" />
                <span className="text-sm uppercase tracking-wider text-[#4361EE] dark:text-[#4CC9F0] font-semibold">Curriculum</span>
              </div>
              <h2 className="text-4xl text-[#3A0CA3] dark:text-white">
                Plan de învățământ
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {curriculum.map((module, index) => {
                const Icon = module.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700"
                  >
                    <div className={`w-16 h-16 ${module.color} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl mb-3 text-[#3A0CA3] dark:text-white">
                      {module.module}
                    </h3>
                    
                    <div className="flex gap-4 mb-6 text-sm">
                      <span className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300">
                        {module.hours}
                      </span>
                      <span className="bg-[#4361EE]/10 border border-[#4361EE]/30 px-4 py-2 rounded-full text-[#4361EE] dark:text-[#A5B8FF] font-semibold">
                        {module.credits}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-[#4361EE] dark:text-[#A5B8FF] flex-shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Target Group */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="max-w-4xl mx-auto bg-[#F72585]/5 border-2 border-[#F72585]/20 rounded-xl p-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#F72585] rounded-xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl mb-4 text-[#3A0CA3] dark:text-white">
                    Cui i se adresează
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Programul este recomandat <span className="font-semibold text-[#B5179E] dark:text-[#F72585]">profesioniștilor și absolvenților</span> cu 
                    cunoștințe de bază în prelucrarea și analiza datelor, familiarizați cu utilizarea <span className="font-semibold">Excel</span> și/sau 
                    a altor aplicații de analiză statistică. Se recomandă un grup omogen din punctul de vedere al nivelului de pregătire pentru 
                    a asigura o experiență optimă de învățare.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact & Enrollment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-[#4361EE] rounded-xl p-12 text-center text-white shadow-sm">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl mb-6">
                  Informații și înscrieri
                </h2>
                <p className="text-xl mb-8 opacity-95">
                  Pentru detalii suplimentare despre program, adaptarea conținutului în funcție de profilul cursanților 
                  sau pentru a te înscrie, contactează coordonatorul cursului:
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/20">
                  <p className="text-2xl font-semibold mb-2">
                    Prof. univ. dr. Cristina Boboc
                  </p>
                  <p className="text-lg opacity-90 mb-4">
                    Departamentul de Statistică și Econometrie
                  </p>
                  <a 
                    href="mailto:cristina.boboc@csie.ase.ro"
                    className="inline-flex items-center gap-3 bg-white text-[#4361EE] px-8 py-4 rounded-full transition-all duration-300 text-lg font-semibold"
                  >
                    <Mail className="w-5 h-5" />
                    cristina.boboc@csie.ase.ro
                  </a>
                </div>

                <p className="text-lg opacity-90">
                  🔥 <span className="font-semibold">Locurile sunt limitate!</span> Nu rata ocazia de a învăța de la experți 
                  și de a obține competențe cerute pe piața muncii!
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  );
}