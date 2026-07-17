import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Microscope,
  Newspaper,
  BookOpen,
  Users,
  Award,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import pozaProiectInegalitatiSistemEducational from "../assets/pozaProiectInegalitatiSistemEducational.jpeg";

interface Activity {
  title: string;
  description: string;
  link?: string;
  image?: string;
  team?: { rol: string; membri: string }[];
  icon: typeof Microscope;
  gradient: string;
}

export function Cercetare() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const activities: Activity[] = [
    {
      title: "Succes în cercetare pentru Departamentul de Statistică și Econometrie!",
      description:
        "Suntem bucuroși să anunțăm câștigarea proiectului de cercetare „Inegalitățile de performanță și diviziunea digitală în sistemul educațional românesc: modelarea statistică a interacțiunilor cu factorii socio-demografici și implicații pentru politicile publice”, în cadrul competiției instituționale ASE (Ediția 2026). Proiectul își propune să exploreze modul în care decalajele tehnologice și noile instrumente de Inteligență Artificială (AI) influențează parcursul academic al elevilor și studenților, oferind soluții bazate pe date pentru politici educaționale mai echitabile. Felicitări echipei noastre, care reunește cadre didactice experimentate și tineri cercetători. Mult succes întregii echipe în implementarea acestei cercetări de impact!",
      image: pozaProiectInegalitatiSistemEducational,
      team: [
        { rol: "Director de proiect", membri: "Prof. univ. dr. Gina Cristina Dimian" },
        {
          rol: "Cercetători cu experiență",
          membri:
            "Prof. univ. dr. Erika Marin, Prof. univ. dr. Monica Mihaela Roman, Lect. univ. dr. Elena Maria Prada, Asist. univ. dr. Mihaela Minciu",
        },
        {
          rol: "Tineri cercetători",
          membri:
            "Drd. Ioana Emmanuelle Perța, Drd. Victor Mihai Roman, Leonardo Marcu (Masterand), Matei Boboc (Student)",
        },
      ],
      icon: Award,
      gradient: "from-[#3F37C9] to-[#7209B7]",
    },
    {
      title: "Conferința Internațională de Statistică Aplicată (ICAS)",
      description:
        "Conferința Internațională de Statistică Aplicată (ICAS) este o manifestare științifică anuală organizată de Departamentul de Statistică și Econometrie, fiind la a XVIII-a ediție în anul 2025. Scopul principal al conferinței este de a oferi o oportunitate cadrelor universitare, cercetătorilor, doctoranzilor și profesioniștilor din mediul de afaceri de a se întâlni și de a-și prezenta rezultatele cercetării pe teme legate de analiză cantitativă și statistică aplicată.",
      link: "https://simpstat.ase.ro/",
      icon: Newspaper,
      gradient: "from-[#4361EE] to-[#4895EF]",
    },
    {
      title: "Journal of Social and Economic Statistics (JSES)",
      description:
        "Journal of Social and Economic Statistics (JSES) este o revistă electronică cu acces liber care își propune să publice lucrări originale care aduc contribuții interesante și inedite la teoria statistică și la aplicațiile acesteia la problemele din viața reală. JSES este o publicație a Departamentului de Statistică și Econometrică al Academiei de Studii Economice din București. Revista este publicată de două ori pe an (numerele de vară și de iarnă). Jurnalul este indexat în următoarele baze de date: EBSCO, RePEc și ERIHPLUS.",
      link: "https://reference-global.com/journal/JSES",
      icon: BookOpen,
      gradient: "from-[#4895EF] to-[#4CC9F0]",
    },
    {
      title: "Centrul de Sondaje și Anchete",
      description:
        "Centrul are ca principal obiectiv de activitate cercetarea ştiințifică fundamentală şi aplicativă în domeniul statisticii şi econometriei, propunându-şi să dezvolte cercetări interdisciplinare în domeniul economic şi social bazate pe folosirea metodelor şi modelelor statistico-econometrice. Centrul desfăşoara următoarele activități: studii şi cercetare fundamentală, cercetare aplicativă, prestări servicii, formare continuă, instruire şi perfecționare, consultanță, informare – documentare – diseminare în domeniul statisticii şi econometriei şi în domenii conexe. Începând cu anul 2004 Centrul de Cercetare Sondaje şi Anchete a desfăşurat peste 40 de studii şi cercetări pentru beneficiari externi, a derulat 28 de contracte de cercetare câştigate prin competiție națională şi 9 contracte de cercetare în parteneriat cu mediul de afaceri.",
      icon: Users,
      gradient: "from-[#4CC9F0] to-[#3F37C9]",
    },
    {
      title: "Data Science Lab",
      description:
        "Data Science Lab este un centru de cercetare dedicat explorării și dezvoltării metodelor avansate de analiză a datelor, în special în domeniul statisticii și econometriei. Laboratorul se concentrează pe aplicarea tehnicilor de data science pentru a rezolva probleme complexe din mediul economic și social, colaborând strâns cu mediul academic și cu industria pentru a dezvolta soluții inovatoare bazate pe date.",
      icon: Users,
      gradient: "from-[#4CC9F0] to-[#3F37C9]",
    },
    {
      title: "EcoCyb - Revista Facultății CSIE",
      description:
        "EcoCyb este revista științifică a Facultății de Cibernetică, Statistică și Informatică Economică din cadrul ASE București — revista noastră a tuturor. Publicația reunește contribuții ale cadrelor didactice, cercetătorilor și studenților facultății, acoperind teme de econometrie, statistică, cibernetică economică și informatică economică.",
      link: "https://ecocyb.ase.ro/",
      icon: BookOpen,
      gradient: "from-[#7209B7] to-[#4361EE]",
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="cercetare"
      className="pt-6 pb-24 bg-white dark:bg-gray-900"
      style={{ scrollMarginTop: "calc(20vh - 3.5cm)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white px-4 py-2 rounded-full mb-4">
            <Microscope className="w-4 h-4" />
            <span className="text-sm">CERCETARE</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Departamentul nostru este activ în cercetarea științifică prin
            conferințe internaționale, publicații de prestigiu și proiecte
            inovatoare în statistică și econometrie.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            const isExpandable = !activity.link;
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={isExpandable ? () => toggleExpand(index) : undefined}
                role={isExpandable ? "button" : undefined}
                tabIndex={isExpandable ? 0 : undefined}
                onKeyDown={
                  isExpandable
                    ? (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleExpand(index);
                        }
                      }
                    : undefined
                }
                className={`h-full flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-[#4CC9F0]/20 dark:border-gray-700 ${
                  isExpandable
                    ? "cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4361EE]"
                    : ""
                }`}
              >
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${activity.gradient}`}>
                  <div className="flex items-center gap-3 text-white">
                    <Icon className="w-8 h-8 shrink-0" />
                    <h3 className="text-xl font-bold">{activity.title}</h3>
                  </div>
                </div>

                {/* Imagine (vizibilă permanent, dacă există) */}
                {activity.image && (
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover"
                  />
                )}

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p
                    className={`text-gray-600 dark:text-gray-100 mb-4 transition-all ${
                      isExpandable && !isExpanded ? "line-clamp-4" : ""
                    }`}
                  >
                    {activity.description}
                  </p>

                  {/* Echipa (doar când cardul e extins) */}
                  <AnimatePresence initial={false}>
                    {isExpanded && activity.team && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mb-4 space-y-3 overflow-hidden"
                      >
                        {activity.team.map((grup) => (
                          <div key={grup.rol}>
                            <p className="text-sm font-semibold text-[#4361EE] dark:text-[#4CC9F0]">
                              {grup.rol}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-200">
                              {grup.membri}
                            </p>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Link extern DOAR dacă există */}
                  {activity.link && (
                    <a
                      href={activity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto self-start inline-flex items-center gap-2 text-[#4361EE] dark:text-[#4CC9F0] hover:text-[#7209B7] dark:hover:text-[#72EFDD] transition-colors group/link"
                    >
                      <span>Află mai multe</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  )}

                  {/* Toggle expand pentru cardurile fără link */}
                  {isExpandable && (
                    <span className="mt-auto self-start inline-flex items-center gap-2 text-[#4361EE] dark:text-[#4CC9F0] group-hover:text-[#7209B7] dark:group-hover:text-[#72EFDD] transition-colors select-none">
                      <span>{isExpanded ? "Restrânge" : "Citește mai mult"}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}