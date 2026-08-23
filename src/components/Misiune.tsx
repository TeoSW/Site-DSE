import { motion } from 'motion/react';
import { Target, BookOpen, Lightbulb, Users, Check } from 'lucide-react';

export function Misiune() {
  const missions = [
    {
      icon: BookOpen,
      title: 'Misiunea educațională',
      intro: 'Formăm studenți capabili să gândească critic, analitic și constructiv, combinând:',
      bullets: [
        'o viziune sistemică, integrativă și de perspectivă asupra fenomenelor economice,',
        'cu analiza aprofundată a datelor, utilizând metode statistice și econometrice moderne.'
      ],
      footer: 'Procesul educațional este orientat spre dezvoltarea competențelor necesare adaptării la schimbările rapide ale economiei digitale și ale pieței muncii.'
    },
    {
      icon: Lightbulb,
      title: 'Misiunea de cercetare',
      intro: 'Departamentul contribuie activ la:',
      bullets: [
        'crearea, dezvoltarea și aplicarea cunoașterii științifice,',
        'stimularea creativității și a inovării,',
        'identificarea și rezolvarea unor probleme concrete ale economiei și societății, prin cercetare aplicată și interdisciplinară.'
      ],
      footer: 'Cercetarea este un pilon esențial în susținerea deciziilor bazate pe date și în promovarea excelenței academice.'
    },
    {
      icon: Users,
      title: 'Misiunea pentru comunitate',
      intro: 'Ne implicăm activ în viața comunității locale, naționale și regionale, prin:',
      bullets: [
        'înțelegerea provocărilor economice și sociale actuale,',
        'colaborarea cu instituții publice, mediul de afaceri și organizații academice,',
        'oferirea de soluții bazate pe analiză statistică și date, care să sprijine progresul durabil în era tehnologiei și globalizării.'
      ],
      footer: ''
    }
  ];

  return (
    <section id="misiune" className="pt-[1.2cm] pb-24 bg-white dark:bg-gray-900">
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
            <Target className="w-4 h-4" />
            <span className="text-sm">Misiune</span>
          </div>
          <h2 className="text-[#3A0CA3] dark:text-[#4CC9F0] mb-4">Misiunea noastră</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Formăm viitoarea generație de specialiști în statistică și data science, contribuim la dezvoltarea cunoașterii științifice și oferim soluții comunității bazate pe analiză de date.
          </p>
        </motion.div>

        {/* Main Mission Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-12 mb-16 shadow-2xl border border-[#4CC9F0]/20 dark:border-gray-700"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              Misiunea Departamentului de Statistică și Econometrie este de a forma, la un nivel înalt de excelență profesională, specialiști capabili să înțeleagă, să analizeze și să modeleze fenomenele economice și sociale, contribuind activ la dezvoltarea unei economii competitive și a unei societăți bazate pe cunoaștere și date.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Prin activitățile sale educaționale și de cercetare, departamentul urmărește dezvoltarea cercetării științifice de vârf, formarea elitelor mediului socio-economic și consolidarea competențelor cantitative în domeniul științelor economice, cu accent pe Statistica Economică, Econometrie și Analiza Datelor.
            </p>
          </div>
        </motion.div>

        {/* Three Mission Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-[#3A0CA3] dark:text-[#4CC9F0] text-center mb-12">Misiunea se referă la trei paliere:</h3>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm transition-all duration-300 border border-[#4CC9F0]/20 dark:border-gray-700"
            >
              <div className="flex flex-col">
                {/* Icon and Title */}
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="bg-[#7209B7] rounded-xl p-4 mb-4">
                    <mission.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-[#3A0CA3] dark:text-[#4CC9F0]">{mission.title}</h3>
                </div>
                
                {/* Content aligned left */}
                <div className="text-left">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{mission.intro}</p>
                  <ul className="space-y-2 mb-4">
                    {mission.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#4361EE] dark:text-[#A5B8FF] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-300 leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {mission.footer && <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{mission.footer}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}