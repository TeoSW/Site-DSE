import { motion } from 'motion/react';
import { Brain, Database, LineChart, Code } from 'lucide-react';

export function Master() {
  const programs = [
    {
      icon: Brain,
      title: 'Machine Learning & AI',
      duration: '2 ani',
      description: 'Program avansat de studii în învățare automată, rețele neuronale, și inteligență artificială aplicată în business și cercetare.',
      skills: ['Deep Learning', 'NLP', 'Computer Vision', 'Reinforcement Learning']
    },
    {
      icon: Database,
      title: 'Big Data Analytics',
      duration: '2 ani',
      description: 'Specializare în analiza și procesarea seturilor masive de date folosind tehnologii moderne cloud și distributed computing.',
      skills: ['Hadoop', 'Spark', 'NoSQL', 'Cloud Computing']
    },
    {
      icon: LineChart,
      title: 'Econometrie Avansată',
      duration: '2 ani',
      description: 'Studii aprofundate în modelarea econometrică, analiză financiară și forecasting pentru decizii strategice în business.',
      skills: ['Time Series', 'Panel Data', 'Causal Inference', 'Financial Modeling']
    }
  ];

  return (
    <section id="master" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#7209B7] text-white px-4 py-2 rounded-full mb-4">
            <Brain className="w-4 h-4" />
            <span className="text-sm">Programe Master</span>
          </div>
          <h2 className="text-[#3A0CA3] mb-4">Studii de Master</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Aprofundează-ți cunoștințele în data science, machine learning și econometrie prin programele noastre de master acreditate internațional.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm transition-all duration-300 overflow-hidden group border border-[#4CC9F0]/20 dark:border-gray-700"
            >
              {/* Icon Header */}
              <div className="bg-[#7209B7] p-8 text-white">
                <program.icon className="w-12 h-12 mb-4 transition-transform duration-300" />
                <h3 className="mb-2">{program.title}</h3>
                <div className="flex items-center gap-2 text-[#4361EE] dark:text-[#4CC9F0]">
                  <Code className="w-4 h-4" />
                  <span className="text-sm">{program.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6">{program.description}</p>
                
                <div className="space-y-2">
                  <div className="text-sm text-[#7209B7] dark:text-[#DDB8FF] mb-3">Competențe cheie:</div>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-[#4361EE]/10 text-[#3A0CA3] px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#7209B7] rounded-3xl p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="mb-6">De ce să alegi masteratul la DSE?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4CC9F0] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Acreditare internațională și recunoaștere în toată Europa</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4CC9F0] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Colaborare cu companii multinaționale pentru proiecte practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4CC9F0] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Programe Erasmus+ și schimburi academice internaționale</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4CC9F0] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Laboratoare moderne echipate cu tehnologie de ultimă generație</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4CC9F0] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Posibilități de burse și finanțare pentru cercetare</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl mb-2">98%</div>
                <p className="text-sm">Rată de promovare</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl mb-2">€3500+</div>
                <p className="text-sm">Salariu mediu absolvenți</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl mb-2">30+</div>
                <p className="text-sm">Universități partenere</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl mb-2">100%</div>
                <p className="text-sm">Acces la cercetare</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}