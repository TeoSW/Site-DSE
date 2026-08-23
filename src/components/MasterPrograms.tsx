import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Users, Globe, Award, Database, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';

const masterASDS = {
  title: 'Statistică Aplicată și Data Science',
  subtitle: '(predare în Română)',
  type: 'Master de cercetare',
  coordinator: 'Prof. univ. dr. Cristina BOBOC',
  link: 'https://asds-csie.ase.ro/',
  courses: [
    'Anchete și Sondaje',
    'Econometrie',
    'Tehnici de prezentare a datelor și arhitectura unei prezentări',
    'Data Mining',
    'Data Mining – Big Data',
    'SAS și SPSS – Software Statistic',
    'Business Statistics',
    'Statistică Socială'
  ]
};

const masterADA = {
  title: 'Applied Data Analytics',
  subtitle: '(taught entirely in English)',
  type: 'Professional Master\'s',
  year: '2024',
  coordinator: 'Prof. univ. dr. Claudiu HERȚELIU',
  link: 'https://asds-csie.ase.ro/'
};

export function MasterPrograms() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <div ref={sectionRef} className="py-20 bg-white dark:bg-gray-900" id="master" style={{ scrollMarginTop: 'calc(20vh - 3.5cm)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 rounded-full mb-6 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
            <span className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-100 font-medium">
              Programe de Master
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="text-[#3A0CA3] dark:text-[#4CC9F0]">
              Învățare avansată în analiza datelor
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
            Programe acreditate pentru formarea de specialiști în analiza avansată a datelor și statistică aplicată
          </p>
        </motion.div>

        {/* Master Programs */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Master ASDS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => window.location.hash = '#/master-asds'}
            className="bg-[#7209B7]/5 rounded-xl p-8 border border-[#7209B7]/20 transition-all cursor-pointer"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#7209B7] rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <span className="text-sm text-[#7209B7] dark:text-[#DDB8FF]">{masterASDS.type}</span>
                <h3 className="text-2xl mt-1 mb-2 text-gray-900 dark:text-white">
                  {masterASDS.title}
                  <span className="block text-sm text-gray-600 dark:text-gray-400 mt-1">{masterASDS.subtitle}</span>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4 inline mr-1" />
                  Coordonator: {masterASDS.coordinator}
                </p>
              </div>
            </div>

            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-4 h-4 text-[#7209B7] dark:text-[#DDB8FF]" />
                <span className="text-gray-700 dark:text-gray-300">Program de cercetare în statistică și analiză de date</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-[#7209B7] dark:text-[#DDB8FF]" />
                <span className="text-gray-700 dark:text-gray-300">Predare în limba română cu cursuri intensive</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-[#7209B7] dark:text-[#DDB8FF]" />
                <span className="text-gray-700 dark:text-gray-300">Focus pe data mining, econometrie și business statistics</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-sm text-[#7209B7] dark:text-[#DDB8FF] hover:text-[#F72585] transition-colors group">
              Detalii program
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Master ADA */}
          <motion.a
            href="#/master-ada"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#4895EF]/5 rounded-xl p-8 border border-[#4895EF]/20 transition-all cursor-pointer block"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#4895EF] rounded-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <span className="text-sm text-[#4361EE] dark:text-[#4895EF]">{masterADA.type}</span>
                <h3 className="text-2xl mt-1 mb-2 text-gray-900 dark:text-white">
                  {masterADA.title}
                  <span className="block text-sm text-gray-600 dark:text-gray-400 mt-1">{masterADA.subtitle}</span>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4 inline mr-1" />
                  Coordonator: {masterADA.coordinator}
                </p>
              </div>
            </div>

            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-4 h-4 text-[#4361EE] dark:text-[#4895EF]" />
                <span className="text-gray-700 dark:text-gray-300">Program established in {masterADA.year}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Globe className="w-4 h-4 text-[#4361EE] dark:text-[#4895EF]" />
                <span className="text-gray-700 dark:text-gray-300">Taught 100% in English</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Database className="w-4 h-4 text-[#4361EE] dark:text-[#4895EF]" />
                <span className="text-gray-700 dark:text-gray-300">Focused on applied analytics and modern technologies</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-sm text-[#4361EE] dark:text-[#4895EF] hover:text-[#4CC9F0] transition-colors group">
              Program details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
        </div>

      </div>
    </div>
  );
}