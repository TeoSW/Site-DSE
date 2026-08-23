import { motion } from 'motion/react';
import { SimpleHeader } from '../components/SimpleHeader';
import { Footer } from '../components/Footer';
import { ExternalLink, Database } from 'lucide-react';

const macrodata = [
  {
    name: 'Eurostat',
    description: 'Baza de date oficială a Uniunii Europene cu statistici economice, sociale și demografice pentru toate țările membre.',
    url: 'https://ec.europa.eu/eurostat',
    color: 'bg-[#7209B7]',
    icon: '🇪🇺'
  },
  {
    name: 'Tempo Online',
    description: 'Baza de date a INS România cu serii de timp și statistici naționale actualizate. Acces gratuit la date macroeconomice și demografice.',
    url: 'http://statistici.insse.ro:8077/tempo-online/',
    color: 'bg-[#7209B7]',
    icon: '📈'
  },
  {
    name: 'BNR - Baza de Date Interactivă',
    description: 'Banca Națională a României oferă acces la indicatori economici și financiari. Date despre rata dobânzii, inflație, cursuri de schimb și statistici monetare.',
    url: 'https://www.bnr.ro/1074-baza-de-date-interactiva',
    color: 'bg-[#4361EE]',
    icon: '🏦'
  },
  {
    name: 'World Bank Data',
    description: 'Cea mai comprehensivă colecție de date de dezvoltare la nivel global. Indicatori economici, sociali și de mediu pentru peste 200 de țări.',
    url: 'https://data.worldbank.org/',
    color: 'bg-[#7209B7]',
    icon: '🌍'
  },
  {
    name: 'FMI — Fondul Monetar Internațional',
    description: 'Platforma de date a FMI oferă acces la statistici financiare internaționale, previziuni economice, date privind balanța de plăți și indicatori de stabilitate financiară pentru peste 190 de țări membre.',
    url: 'https://data.imf.org/en',
    color: 'bg-[#3F37C9]',
    icon: '💱'
  },
  {
    name: 'BCE — Banca Centrală Europeană',
    description: 'Banca Centrală Europeană publică date statistice privind politica monetară, ratele dobânzilor, agregaatele monetare, cursurile de schimb și stabilitatea financiară în zona euro.',
    url: 'https://www.ecb.europa.eu/home/html/index.en.html',
    color: 'bg-[#4895EF]',
    icon: '🏛️'
  },
  {
    name: 'Data Sweep',
    description: 'Platformă pentru colectarea și analiza datelor din surse multiple. Instrumente pentru prelucrarea și vizualizarea datelor economice.',
    url: 'https://datasweep.app/',
    color: 'bg-[#7209B7]',
    icon: '🧹'
  }
];

const microdata = [
  {
    name: 'European Social Survey',
    description: 'Sondaj academic bienal care măsoară atitudinile, credințele și comportamentele populației europene. Date individuale anonimizate pentru cercetare.',
    url: 'https://www.europeansocialsurvey.org/',
    color: 'bg-[#4895EF]',
    icon: '👥'
  }
];

export default function DatabasesPage() {
return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SimpleHeader />

      <main className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            style={{ marginTop: '1.5cm' }}
          >
            <div className="inline-flex items-center gap-2 bg-[#7209B7] text-white px-4 py-2 rounded-full mb-4">
              <Database className="w-4 h-4" />
              <span className="text-sm">DATABASES</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Accesează cele mai importante baze de date pentru cercetarea și practica ta în statistică și econometrie
            </p>
          </motion.div>

          {/* Macrodata Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#7209B7] rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <div>
                <h2 className="text-3xl text-[#3A0CA3] dark:text-[#4CC9F0]">Macrodate</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Date agregate și statistici la nivel național și internațional</p>
              </div>
            </div>

            {/* First 6 in 2-col grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {macrodata.slice(0, 6).map((db, index) => (
                <motion.a
                  key={db.name}
                  href={db.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-2 border border-[#4CC9F0]/20 dark:border-gray-700"
                >
                  <div className={`absolute inset-0 ${db.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className="p-8 relative">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${db.color} mb-6 transition-transform duration-300`}>
                      <span className="text-3xl">{db.icon}</span>
                    </div>
                    <h3 className="text-2xl mb-4 text-gray-900 dark:text-white group-hover:text-[#4361EE] dark:text-[#A5B8FF] dark:group-hover:text-[#4CC9F0] transition-colors">
                      {db.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed min-h-[80px]">
                      {db.description}
                    </p>
                    <div className="flex items-center gap-2 group-hover:gap-3 transition-all text-[#4361EE] dark:text-[#A5B8FF] font-semibold">
                      <span>Vizitează platforma</span>
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                  <div className={`absolute top-0 right-0 w-20 h-20 ${db.color} opacity-10 rounded-bl-full`}></div>
                </motion.a>
              ))}
            </div>

            {/* Last item centered */}
            <div className="flex justify-center">
              <motion.a
                href={macrodata[6].url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-2 border border-[#4CC9F0]/20 dark:border-gray-700 w-full md:w-[calc(50%-0.75rem)]"
              >
                <div className={`absolute inset-0 ${macrodata[6].color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="p-8 relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${macrodata[6].color} mb-6 transition-transform duration-300`}>
                    <span className="text-3xl">{macrodata[6].icon}</span>
                  </div>
                  <h3 className="text-2xl mb-4 text-gray-900 dark:text-white group-hover:text-[#4361EE] dark:text-[#A5B8FF] dark:group-hover:text-[#4CC9F0] transition-colors">
                    {macrodata[6].name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed min-h-[80px]">
                    {macrodata[6].description}
                  </p>
                  <div className="flex items-center gap-2 group-hover:gap-3 transition-all text-[#4361EE] dark:text-[#A5B8FF] font-semibold">
                    <span>Vizitează platforma</span>
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
                <div className={`absolute top-0 right-0 w-20 h-20 ${macrodata[6].color} opacity-10 rounded-bl-full`}></div>
              </motion.a>
            </div>
          </motion.div>

          {/* Microdata Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#4895EF] rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl">👥</span>
              </div>
              <div>
                <h2 className="text-3xl text-[#3A0CA3] dark:text-[#4CC9F0]">Microdate</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Date individuale anonimizate pentru cercetare avansată</p>
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              {microdata.map((db, index) => (
                <motion.a
                  key={db.name}
                  href={db.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-2 border border-[#4CC9F0]/20 dark:border-gray-700"
                >
                  <div className={`absolute inset-0 ${db.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className="p-8 relative">
                    <div className="flex items-start gap-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${db.color} transition-transform duration-300 flex-shrink-0`}>
                        <span className="text-3xl">{db.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl mb-4 text-gray-900 dark:text-white group-hover:text-[#4361EE] dark:text-[#A5B8FF] dark:group-hover:text-[#4CC9F0] transition-colors">
                          {db.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {db.description}
                        </p>
                        <div className="flex items-center gap-2 group-hover:gap-3 transition-all text-[#4361EE] dark:text-[#A5B8FF] font-semibold">
                          <span>Vizitează platforma</span>
                          <ExternalLink className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`absolute top-0 right-0 w-20 h-20 ${db.color} opacity-10 rounded-bl-full`}></div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-[#4361EE]/10 border-l-4 border-[#4361EE] rounded-r-2xl p-8 dark:bg-[#4361EE]/20"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#4361EE] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl">💡</span>
              </div>
              <div>
                <h4 className="text-xl mb-2 text-[#3A0CA3] dark:text-[#4CC9F0]">Sfat pentru utilizare</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Macrodate</strong> sunt ideale pentru analize economice, demografice și comparații internaționale. <strong>Microdate</strong> permit cercetări la nivel individual și analiza comportamentului economic. Consultă profesorii pentru recomandări specifice în funcție de proiectul tău.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}