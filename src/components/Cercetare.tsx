import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import {
  Microscope,
  Newspaper,
  BookOpen,
  Users,
  Award,
  ExternalLink,
  FlaskConical,
  Database,
  Trophy,
} from "lucide-react";
import pozaProiectInegalitatiSistemEducational from "../assets/pozaProiectInegalitatiSistemEducational.jpeg";

type CategoryId = "proiecte" | "conferinta" | "reviste" | "centre";

interface Category {
  id: CategoryId;
  label: string;
  tagline: string;
  icon: typeof Microscope;
  gradient: string;
}

const categories: Category[] = [
  {
    id: "proiecte",
    label: "Proiecte de cercetare",
    tagline: "Granturi și competiții câștigate",
    icon: Award,
    gradient: "bg-[#3F37C9]",
  },
  {
    id: "conferinta",
    label: "Conferința ICAS",
    tagline: "Manifestarea științifică anuală",
    icon: Newspaper,
    gradient: "bg-[#4361EE]",
  },
  {
    id: "reviste",
    label: "Reviste științifice",
    tagline: "Publicațiile departamentului",
    icon: BookOpen,
    gradient: "bg-[#4895EF]",
  },
  {
    id: "centre",
    label: "Centre de cercetare",
    tagline: "Sondaje, anchete și data science",
    icon: FlaskConical,
    gradient: "bg-[#4CC9F0]",
  },
];

/* Buton reutilizabil pentru linkuri externe */
function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4361EE] text-white shadow-md hover:from-[#7209B7] hover:to-[#4361EE] transition-all duration-300 group/link"
    >
      <span>{children}</span>
      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
    </a>
  );
}

/* Variante de animație pentru schimbarea de tab */
const panelVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
};

export function Cercetare() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("proiecte");

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
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#7209B7] text-white px-4 py-2 rounded-full mb-4">
            <Microscope className="w-4 h-4" />
            <span className="text-sm">CERCETARE</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Departamentul nostru este activ în cercetarea științifică prin
            conferințe internaționale, publicații de prestigiu și proiecte
            inovatoare în statistică și econometrie.
          </p>
        </motion.div>

        {/* Selector de categorii */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          role="tablist"
          aria-label="Categorii de cercetare"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative text-left p-5 rounded-2xl border transition-all duration-300 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4361EE] ${
                  isActive
                    ? "border-transparent shadow-sm"
                    : "bg-white dark:bg-gray-800 border-[#4CC9F0]/20 dark:border-gray-700 hover:-translate-y-0.5"
                }`}
              >
                {/* Fundal gradient animat pentru tab-ul activ */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className={`absolute inset-0 ${cat.gradient}`}
                    transition={{ type: "spring", stiffness: 350, damping: 32 }}
                  />
                )}
                <div className="relative z-10">
                  <Icon
                    className={`w-7 h-7 mb-3 ${
                      isActive ? "text-white" : "text-[#4361EE] dark:text-[#A5B8FF]"
                    }`}
                  />
                  <p
                    className={`font-bold leading-snug ${
                      isActive ? "text-white" : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {cat.label}
                  </p>
                  <p
                    className={`text-sm mt-1 ${
                      isActive
                        ? "text-white/80"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {cat.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Conținutul categoriei active */}
        <AnimatePresence mode="wait">
          {/* ============ PROIECTE DE CERCETARE ============ */}
          {activeCategory === "proiecte" && (
            <motion.div
              key="proiecte"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="rounded-3xl overflow-hidden border border-[#4CC9F0]/20 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
                <div className="grid lg:grid-cols-2">
                  {/* Imaginea proiectului */}
                  <div
                    className="relative h-64 sm:h-80 lg:h-auto"
                    style={{ minHeight: "16rem" }}
                  >
                    <img
                      src={pozaProiectInegalitatiSistemEducational}
                      alt="Echipa proiectului de cercetare"
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    <div className="absolute inset-0 bg-[#3F37C9]/60" />
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-white/95 dark:bg-gray-900/95 px-4 py-2 rounded-full shadow-sm">
                      <Trophy className="w-4 h-4 text-[#7209B7] dark:text-[#DDB8FF]" />
                    </div>
                  </div>

                  {/* Textul anunțului */}
                  <div className="p-8 lg:p-10">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Succes în cercetare pentru Departamentul de Statistică și
                      Econometrie!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-200 mb-4">
                      Suntem bucuroși să anunțăm câștigarea proiectului de
                      cercetare{" "}
                      <span className="font-semibold text-gray-900 dark:text-white">
                        „Inegalitățile de performanță și diviziunea digitală în
                        sistemul educațional românesc: modelarea statistică a
                        interacțiunilor cu factorii socio-demografici și
                        implicații pentru politicile publice”
                      </span>
                      , în cadrul competiției instituționale ASE (Ediția 2026).
                    </p>
                    <p className="text-gray-600 dark:text-gray-200">
                      Proiectul își propune să exploreze modul în care decalajele
                      tehnologice și noile instrumente de Inteligență Artificială
                      (AI) influențează parcursul academic al elevilor și
                      studenților, oferind soluții bazate pe date pentru politici
                      educaționale mai echitabile.
                    </p>
                  </div>
                </div>

                {/* Echipa */}
                <div className="border-t border-[#4CC9F0]/20 dark:border-gray-700 p-8 lg:p-10">
                  <div className="flex items-center gap-2 mb-6">
                    <Users className="w-5 h-5 text-[#4361EE] dark:text-[#A5B8FF]" />
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      Echipa proiectului
                    </h4>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="rounded-xl p-5 bg-[#3F37C9]/10 dark:bg-[#3F37C9]/25">
                      <p className="text-sm font-semibold text-[#7209B7] dark:text-[#DDB8FF] uppercase tracking-wide mb-2">
                        Director de proiect
                      </p>
                      <p className="text-gray-800 dark:text-gray-100">
                        Prof. univ. dr. Gina Cristina Dimian
                      </p>
                    </div>
                    <div className="rounded-xl p-5 bg-[#4361EE]/10 dark:bg-[#4361EE]/25">
                      <p className="text-sm font-semibold text-[#4361EE] dark:text-[#A5B8FF] uppercase tracking-wide mb-2">
                        Cercetători cu experiență
                      </p>
                      <p className="text-gray-800 dark:text-gray-100">
                        Prof. univ. dr. Erika Marin
                        <br />
                        Prof. univ. dr. Monica Mihaela Roman
                        <br />
                        Lect. univ. dr. Elena Maria Prada
                        <br />
                        Asist. univ. dr. Mihaela Minciu
                      </p>
                    </div>
                    <div className="rounded-xl p-5 bg-[#4895EF]/10 dark:bg-[#4895EF]/25">
                      <p className="text-sm font-semibold text-[#4361EE] dark:text-[#4895EF] uppercase tracking-wide mb-2">
                        Tineri cercetători
                      </p>
                      <p className="text-gray-800 dark:text-gray-100">
                        Drd. Ioana Emmanuelle Perța
                        <br />
                        Drd. Victor Mihai Roman
                        <br />
                        Leonardo Marcu (Masterand)
                        <br />
                        Matei Boboc (Student)
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-6 italic">
                    Mult succes întregii echipe în implementarea acestei
                    cercetări de impact!
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* ============ CONFERINȚA ICAS ============ */}
          {activeCategory === "conferinta" && (
            <motion.div
              key="conferinta"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="rounded-3xl overflow-hidden border border-[#4CC9F0]/20 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
                <div className="p-8 lg:p-10 bg-[#4361EE] text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <Newspaper className="w-8 h-8 shrink-0" />
                    <h3 className="text-2xl font-bold">
                      Conferința Internațională de Statistică Aplicată (ICAS)
                    </h3>
                  </div>
                  <p className="text-white/85">
                    A XVIII-a ediție · organizată anual de Departamentul de
                    Statistică și Econometrie
                  </p>
                </div>
                <div className="p-8 lg:p-10">
                  <p className="text-gray-600 dark:text-gray-200 mb-8 max-w-3xl">
                    Scopul principal al conferinței este de a oferi o
                    oportunitate cadrelor universitare, cercetătorilor,
                    doctoranzilor și profesioniștilor din mediul de afaceri de a
                    se întâlni și de a-și prezenta rezultatele cercetării pe teme
                    legate de analiză cantitativă și statistică aplicată.
                  </p>
                  <LinkButton href="https://simpstat.ase.ro/">
                    Vizitează site-ul ICAS
                  </LinkButton>
                </div>
              </div>
            </motion.div>
          )}

          {/* ============ REVISTE ȘTIINȚIFICE ============ */}
          {activeCategory === "reviste" && (
            <motion.div
              key="reviste"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid md:grid-cols-2 gap-8"
            >
              {/* JSES */}
              <div className="flex flex-col rounded-3xl overflow-hidden border border-[#4CC9F0]/20 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
                <div className="p-8 bg-[#4361EE] text-white">
                  <BookOpen className="w-8 h-8 mb-3" />
                  <h3 className="text-xl font-bold">
                    Journal of Social and Economic Statistics (JSES)
                  </h3>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-gray-600 dark:text-gray-200 mb-5">
                    Revistă electronică cu acces liber care publică lucrări
                    originale cu contribuții interesante și inedite la teoria
                    statistică și la aplicațiile acesteia la problemele din viața
                    reală. Publicație a Departamentului de Statistică și
                    Econometrie al ASE București, apare de două ori pe an
                    (numerele de vară și de iarnă).
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["EBSCO", "RePEc", "ERIHPLUS"].map((db) => (
                      <span
                        key={db}
                        className="px-3 py-1 rounded-full text-sm bg-[#4CC9F0]/15 text-[#4361EE] dark:text-[#A5B8FF] dark:bg-[#4CC9F0]/20 dark:text-[#4CC9F0] font-medium"
                      >
                        {db}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <LinkButton href="https://reference-global.com/journal/JSES">
                      Accesează JSES
                    </LinkButton>
                  </div>
                </div>
              </div>

              {/* EcoCyb */}
              <div className="flex flex-col rounded-3xl overflow-hidden border border-[#4CC9F0]/20 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
                <div className="p-8 bg-[#7209B7] text-white">
                  <BookOpen className="w-8 h-8 mb-3" />
                  <h3 className="text-xl font-bold">
                    EcoCyb — Revista Facultății CSIE
                  </h3>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-gray-600 dark:text-gray-200 mb-6">
                    Revista științifică a Facultății de Cibernetică, Statistică
                    și Informatică Economică din cadrul ASE București — revista
                    noastră a tuturor. Publicația reunește contribuții ale
                    cadrelor didactice, cercetătorilor și studenților facultății,
                    acoperind teme de econometrie, statistică, cibernetică
                    economică și informatică economică.
                  </p>
                  <div className="mt-auto">
                    <LinkButton href="https://ecocyb.ase.ro/">
                      Accesează EcoCyb
                    </LinkButton>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ============ CENTRE DE CERCETARE ============ */}
          {activeCategory === "centre" && (
            <motion.div
              key="centre"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-8"
            >
              {/* Centrul de Sondaje și Anchete */}
              <div className="rounded-3xl overflow-hidden border border-[#4CC9F0]/20 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
                <div className="p-8 lg:p-10 bg-[#4361EE] text-white">
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 shrink-0" />
                    <h3 className="text-2xl font-bold">
                      Centrul de Sondaje și Anchete
                    </h3>
                  </div>
                </div>
                <div className="p-8 lg:p-10">
                  <p className="text-gray-600 dark:text-gray-200 mb-4">
                    Centrul are ca principal obiectiv de activitate cercetarea
                    ştiințifică fundamentală şi aplicativă în domeniul
                    statisticii şi econometriei, propunându-şi să dezvolte
                    cercetări interdisciplinare în domeniul economic şi social
                    bazate pe folosirea metodelor şi modelelor
                    statistico-econometrice.
                  </p>
                  <p className="text-gray-600 dark:text-gray-200 mb-8">
                    Centrul desfăşoară studii şi cercetare fundamentală,
                    cercetare aplicativă, prestări servicii, formare continuă,
                    instruire şi perfecționare, consultanță, precum şi informare,
                    documentare şi diseminare în domeniul statisticii şi
                    econometriei şi în domenii conexe.
                  </p>

                  <p className="text-gray-600 dark:text-gray-200">
                    Începând cu anul 2004, Centrul de Cercetare Sondaje şi
                    Anchete a desfăşurat peste 40 de studii şi cercetări pentru
                    beneficiari externi, a derulat 28 de contracte de cercetare
                    câştigate prin competiție națională şi 9 contracte de
                    cercetare în parteneriat cu mediul de afaceri.
                  </p>
                </div>
              </div>

              {/* Data Science Lab */}
              <div className="rounded-3xl overflow-hidden border border-[#4CC9F0]/20 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
                <div className="p-8 lg:p-10 bg-[#3F37C9] text-white">
                  <div className="flex items-center gap-3">
                    <Database className="w-8 h-8 shrink-0" />
                    <h3 className="text-2xl font-bold">Data Science Lab</h3>
                  </div>
                </div>
                <div className="p-8 lg:p-10">
                  <p className="text-gray-600 dark:text-gray-200">
                    Data Science Lab este un centru de cercetare dedicat
                    explorării și dezvoltării metodelor avansate de analiză a
                    datelor, în special în domeniul statisticii și econometriei.
                    Laboratorul se concentrează pe aplicarea tehnicilor de data
                    science pentru a rezolva probleme complexe din mediul
                    economic și social, colaborând strâns cu mediul academic și
                    cu industria pentru a dezvolta soluții inovatoare bazate pe
                    date.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}