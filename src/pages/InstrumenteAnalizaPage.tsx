import { motion } from 'motion/react';
import { SimpleHeader } from '../components/SimpleHeader';
import { Footer } from '../components/Footer';
import { ExternalLink, Code2, Download } from 'lucide-react';

interface Tool {
  name: string;
  description: string;
  url: string;
  color: string;
  icon: string;
  category: string;
}

const instrumente: Tool[] = [
  {
    name: 'RStudio',
    description: 'Mediu integrat de dezvoltare (IDE) pentru limbajul R, esențial pentru analiză statistică avansată și vizualizare de date. Include editor de cod, console, debugger și workspace manager.',
    url: 'https://posit.co/download/rstudio-desktop/',
    color: 'bg-[#7209B7]',
    icon: '📊',
    category: 'Statistică & R'
  },
  {
    name: 'PyCharm',
    description: 'IDE profesional pentru Python, perfect pentru data science și machine learning. Suport complet pentru biblioteci populare precum pandas, NumPy, scikit-learn și TensorFlow.',
    url: 'https://www.jetbrains.com/pycharm/download/?section=windows',
    color: 'bg-[#4361EE]',
    icon: '🐍',
    category: 'Python & Data Science'
  },
  {
    name: 'JASP',
    description: 'Software gratuit și open-source pentru analiză statistică cu interfață intuitivă. Ideal pentru analiza datelor, teste statistice și modele Bayesiene. Alternativă modernă la SPSS.',
    url: 'https://jasp-stats.org/',
    color: 'bg-[#7209B7]',
    icon: '📈',
    category: 'Analiză Statistică'
  },
  {
    name: 'GeoDa',
    description: 'Instrument specializat pentru analiza spațială și explorarea datelor geografice. Perfect pentru econometrie spațială și analize GIS. Dezvoltat de Center for Spatial Data Science.',
    url: 'https://geodacenter.github.io/',
    color: 'bg-[#4895EF]',
    icon: '🗺️',
    category: 'Analiză Spațială'
  },
  {
    name: 'EViews',
    description: 'Software econometric de referință pentru analiza seriilor de timp, modele VAR, ARCH/GARCH și previziuni macroeconomice. Utilizat extensiv în cercetare economică și instituții financiare internaționale.',
    url: 'https://www.eviews.com/home.html',
    color: 'bg-[#3F37C9]',
    icon: '📉',
    category: 'Econometrie'
  },
  {
    name: 'SPSS',
    description: 'Platformă statistică IBM de referință pentru cercetare socială și economică. Oferă analize descriptive, regresii, analize factoriale și clustering, cu interfață vizuală accesibilă.',
    url: 'https://www.ibm.com/spss',
    color: 'bg-[#4CC9F0]',
    icon: '🔬',
    category: 'Statistică Aplicată'
  },
  {
    name: 'JDemetra+',
    description: 'Instrument oficial recomandat de Eurostat și BCE pentru ajustarea sezonieră și analiza seriilor de timp. Implementează metodele X-13ARIMA-SEATS și TRAMO/SEATS, utilizat în statistică oficială.',
    url: 'https://jdemetra-new-documentation.netlify.app/',
    color: 'bg-[#B5179E]',
    icon: '📅',
    category: 'Serii de Timp'
  },
  {
    name: 'Stata',
    description: 'Software statistic complet pentru econometrie, analize panel, date longitudinale și modele cu variabile instrumentale. Foarte apreciat în cercetarea academică și publicațiile științifice de top.',
    url: 'https://www.stata.com/',
    color: 'bg-[#F72585]',
    icon: '📐',
    category: 'Econometrie & Panel'
  },
  {
    name: 'Excel Data Viz',
    description: 'Platformă cu resurse și tutoriale pentru vizualizarea datelor în Excel. Template-uri profesionale, grafice interactive și best practices pentru analiza și prezentarea datelor.',
    url: 'https://exceldataviz.com/',
    color: 'bg-[#4361EE]',
    icon: '📊',
    category: 'Vizualizare Date'
  }
];

function ToolCard({ tool, index }: { tool: Tool; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-2 border border-[#4CC9F0]/20 dark:border-gray-700"
    >
      <div className={`absolute inset-0 ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

      <div className="p-8 relative">
        <div className="flex items-start justify-between mb-6">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${tool.color} transition-transform duration-300`}>
            <span className="text-4xl">{tool.icon}</span>
          </div>
          <span className="text-xs bg-[#4CC9F0]/20 dark:bg-[#4CC9F0]/10 text-[#4361EE] dark:text-[#A5B8FF] px-3 py-1 rounded-full font-medium">
            {tool.category}
          </span>
        </div>

        <h3 className="text-2xl mb-4 text-gray-900 dark:text-white group-hover:text-[#4361EE] dark:text-[#A5B8FF] dark:group-hover:text-[#4CC9F0] transition-colors">
          {tool.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed min-h-[100px]">
          {tool.description}
        </p>

        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#7209B7] text-white rounded-lg transition-all duration-300 font-semibold"
        >
          <Download className="w-5 h-5" />
          <span>Descarcă acum</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className={`absolute top-0 right-0 w-24 h-24 ${tool.color} opacity-10 rounded-bl-full`}></div>
    </motion.div>
  );
}

export default function InstrumenteAnalizaPage() {
const gridTools = instrumente.slice(0, 8);
  const centeredTool = instrumente[8];

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
          >
            <div className="inline-flex items-center gap-2 bg-[#7209B7] text-white px-4 py-2 rounded-full mb-8" style={{ marginTop: "1.5cm" }}>
              <Code2 className="w-4 h-8"/>
              <span className="text-sm">INSTRUMENTE</span>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Software-ul recomandat pentru cursurile de statistică, econometrie și data science
            </p>
          </motion.div>

          {/* Tool Cards - 2 col grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {gridTools.map((tool, index) => (
              <ToolCard key={tool.name} tool={tool} index={index} />
            ))}
          </div>

          {/* Excel Data Viz - Centered */}
          <div className="flex justify-center mb-16">
            <div className="w-full md:w-1/2">
              <ToolCard tool={centeredTool} index={8} />
            </div>
          </div>

          {/* Info Boxes */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-[#4361EE]/10 border-l-4 border-[#4361EE] rounded-r-2xl p-8 dark:bg-[#4361EE]/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4361EE] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">💡</span>
                </div>
                <div>
                  <h4 className="text-xl mb-2 text-[#3A0CA3] dark:text-[#4CC9F0]">Ghid de instalare</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Multe dintre instrumente sunt gratuite pentru studenți! Urmează instrucțiunile de instalare de pe site-urile oficiale. Pentru PyCharm, poți beneficia de licență educațională gratuită prin JetBrains Student Program.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-[#7209B7]/10 border-l-4 border-[#7209B7] rounded-r-2xl p-8 dark:bg-[#7209B7]/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#7209B7] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">📚</span>
                </div>
                <div>
                  <h4 className="text-xl mb-2 text-[#3A0CA3] dark:text-[#4CC9F0]">Utilizare în cursuri</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Aceste instrumente sunt utilizate în cadrul cursurilor de Statistică, Econometrie și Data Science. Profesorii noștri oferă suport și tutoriale pentru fiecare platformă în cadrul seminariilor.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}