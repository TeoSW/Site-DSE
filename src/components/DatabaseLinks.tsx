import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const databases = [
  {
    name: 'Kaggle',
    description: 'Platformă globală pentru competiții de data science și seturi de date pentru practică',
    url: 'https://www.kaggle.com',
    color: 'bg-[#4895EF]',
  },
  {
    name: 'Eurostat',
    description: 'Datele officiale statistice ale Uniunii Europene - indispensabil pentru analiza economică',
    url: 'https://ec.europa.eu/eurostat',
    color: 'bg-[#B5179E]',
  },
  {
    name: 'Tempo Online',
    description: 'Baza de date a Institutului Național de Statistică - statistici detaliate despre România',
    url: 'http://statistici.insse.ro:8077/tempo-online/',
    color: 'bg-[#7209B7]',
  },
];

export function DatabaseLinks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <div id="cariera" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 dark:text-white">Resurse pentru Studenți</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Accesează cele mai importante baze de date pentru cercetarea și practica ta în statistică și econometrie
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {databases.map((db, index) => (
            <motion.a
              key={db.name}
              href={db.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className={`absolute inset-0 ${db.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${db.color} mb-4`}>
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-3 transition-colors dark:text-white" style={{ color: undefined }} onMouseEnter={(e) => (e.currentTarget as HTMLElement).parentElement?.parentElement?.classList.contains('group') && ((e.currentTarget as HTMLElement).style.color = '#4361EE')} onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = ''}>{db.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{db.description}</p>
                <span className="inline-flex items-center gap-2 group-hover:gap-3 transition-all" style={{ color: '#4361EE' }}>
                  Vizitează platforma
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Additional Info Section with Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center bg-white dark:bg-gray-800 rounded-xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-700"
        >
          <div>
            <h3 className="text-3xl mb-6 dark:text-white">Carieră și Oportunități</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Absolvenții programului nostru lucrează în companii de top precum:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-[#4CC9F0] mt-1">▸</span>
                  <span><strong className="dark:text-white">Bănci și Instituții Financiare:</strong> Analiști de risc, consultanți în investiții, modelare financiară</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-[#4CC9F0] mt-1">▸</span>
                  <span><strong className="dark:text-white">Tech Companies:</strong> Data Scientists, Business Analysts, ML Engineers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-[#4CC9F0] mt-1">▸</span>
                  <span><strong className="dark:text-white">Consultanță:</strong> Economic consultants, Market researchers, Strategy analysts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-[#4CC9F0] mt-1">▸</span>
                  <span><strong className="dark:text-white">Instituții Publice:</strong> INS, BNR, Ministerul Finanțelor, Comisia Europeană</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 dark:bg-gray-700 rounded-lg border-l-4 border-blue-500 dark:border-[#4CC9F0]">
                <p className="text-sm dark:text-gray-200">
                  <strong className="dark:text-white">Salariu mediu de debut:</strong> 3,500 - 5,000 RON net<br />
                  <strong className="dark:text-white">După 3-5 ani experiență:</strong> 8,000 - 15,000 RON net
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl">
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}