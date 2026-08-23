import { motion } from 'motion/react';
import { Newspaper, BookOpen, Users, ExternalLink } from 'lucide-react';
export function Noutati() {
  const news = [
    {
      title: 'Conferința Internațională de Statistică Aplicată (ICAS)',
      description: 'Conferința Internațională de Statistică Aplicată (ICAS) este o manifestare științifică anuală organizată de Departamentul de Statistică și Econometrie, fiind la a XVIII-a ediție în anul 2025. Scopul principal al conferinței este de a oferi o oportunitate cadrelor universitare, cercetătorilor, doctoranzilor și profesioniștilor din mediul de afaceri de a se întâlni și de a-și prezenta rezultatele cercetării pe teme legate de analiză cantitativă și statistică aplicată.',
      image: '/assets/images/research/.jpg',
      link: 'https://simpstat.ase.ro/',
      icon: Newspaper
    },
    {
      title: 'Journal of Social and Economic Statistics (JSES)',
      description: 'Journal of Social and Economic Statistics (JSES) este o revistă electronică cu acces liber care își propune să publice lucrări originale care aduc contribuții interesante și inedite la teoria statistică și la aplicațiile acesteia la problemele din viața reală. JSES este o publicație a Departamentului de Statistică și Econometrică al Academiei de Studii Economice din București. Revista este publicată de două ori pe an (numerele de vară și de iarnă). Jurnalul este indexat în următoarele baze de date: EBSCO, RePEc și ERIHPLUS.',
      image: '/assets/images/research/journal-jses.jpg',
      link: 'https://reference-global.com/journal/JSES',
      icon: BookOpen
    },
    {
      title: 'Centrul de Sondaje și Anchete',
      description: 'Centrul are ca principal obiectiv de activitate cercetarea ştiințifică fundamentală şi aplicativă în domeniul statisticii şi econometriei, propunându-şi să dezvolte cercetări interdisciplinare în domeniul economic şi social bazate pe folosirea metodelor şi modelelor statistico-econometrice. Centrul desfăşoara următoarele activități: studii şi cercetare fundamentală, cercetare aplicativă, prestări servicii, formare continuă, instruire şi perfecționare, consultanță, informare – documentare – diseminare în domeniul statisticii şi econometriei şi în domenii conexe. Începând cu anul 2004 Centrul de Cercetare Sondaje şi Anchete a desfăşurat peste 40 de studii şi cercetări pentru beneficiari externi, a derulat 28 de contracte de cercetare câştigate prin competiție națională şi 9 contracte de cercetare în parteneriat cu mediul de afaceri.',
      image: '/assets/images/research/survey-center.jpg',
      link: '#',
      icon: Users
    }
  ];

  return (
    <section id="noutati" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#7209B7] text-white px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8">
            <Newspaper className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">NOUTĂȚI ȘI ANUNȚURI</span>
          </div>
        </motion.div>

        {/* Featured News (First Item) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-[#4CC9F0]/20 dark:border-gray-700">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-80 md:h-auto overflow-hidden">
                <img
                  src={news[0].image}
                  alt={news[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#7209B7] text-white px-4 py-2 rounded-full text-sm">
                    Conferință
                  </span>
                </div>
              </div>
              <div className="p-10 flex flex-col justify-center">
                <h3 className="text-[#3A0CA3] mb-4">{news[0].title}</h3>
                <p className="text-gray-600 mb-6">{news[0].description}</p>
                <a
                  href={news[0].link}
                  className="inline-flex items-center gap-2 text-[#4361EE] dark:text-[#A5B8FF] hover:text-[#7209B7] dark:text-[#DDB8FF] transition-colors group"
                >
                  <span>Citește mai mult</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.slice(1).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm transition-all duration-300 overflow-hidden group border border-[#4CC9F0]/20"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#4361EE] text-white px-3 py-1 rounded-full text-sm">
                    {index === 0 ? 'Jurnal' : 'Centru'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-[#3A0CA3] mb-3 line-clamp-2">{item.title}</h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>
                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-[#4361EE] dark:text-[#A5B8FF] hover:text-[#7209B7] dark:text-[#DDB8FF] transition-colors group text-sm"
                >
                  <span>Citește mai mult</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}