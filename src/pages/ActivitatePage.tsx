import { motion } from "motion/react";
import { SimpleHeader } from "../components/SimpleHeader";
import { Footer } from "../components/Footer";
import {
  Calendar,
  CalendarClock,
  History,
  ArrowRight,
  Award,
  BookOpen,
  Users,
  GraduationCap,
  Globe,
} from "lucide-react";

interface Eveniment {
  id: number;
  titlu: string;
  descriere?: string;
  data: string; // textul afișat pe card
  dataStart: string; // ISO, folosit pentru sortare
  dataEnd: string; // ISO, folosit pentru clasificarea viitor/trecut
  link: string;
  categorie: string;
  icon: typeof Calendar;
}

/*
 * Un eveniment apare la "Activități viitoare" cât timp dataEnd nu a trecut,
 * apoi coboară automat la "Evenimente trecute". Pentru evenimente noi,
 * completează dataStart și dataEnd în format YYYY-MM-DD; pentru cele
 * de o singură zi, pune aceeași dată în ambele.
 */
const evenimente: Eveniment[] = [
  {
    id: 1,
    titlu: "🎓 Oportunitate pentru studenții ASDS – Programul EMOS",
    descriere:
      "Studenții masteranzi ASDS pot aplica pentru mobilități internaționale și participări la evenimente de prestigiu precum uRos 2026 sub egida EMOS.",
    data: "Sezonul 2025-2026",
    dataStart: "2025-10-01",
    dataEnd: "2026-09-30",
    link: "https://emosmobility.devstat.com/event/index?page=2&per-page=5",
    categorie: "Oportunitate",
    icon: GraduationCap,
  },
  {
    id: 2,
    titlu:
      "Programul de Mobilitate EMOS lansat: finanțare pentru stagii de practică transfrontaliere și evenimente de Statistică Oficială",
    data: "15 Decembrie 2025",
    dataStart: "2025-12-15",
    dataEnd: "2025-12-15",
    link: "https://asds-csie.ase.ro/emos-mobility-programme-launched-funding-for-cross-border-internships-and-official-statistics-events/",
    categorie: "Mobilitate",
    icon: Globe,
  },
  {
    id: 3,
    titlu: "Sesiunea de Comunicări Științifice 2026",
    data: "1-2 aprilie 2026",
    dataStart: "2026-04-01",
    dataEnd: "2026-04-02",
    link: "https://csie.ase.ro/sesiunea-de-comunicari-stiintifice-2026/",
    categorie: "Eveniment",
    icon: Users,
  },
  {
    id: 4,
    titlu: "Olimpiada de Statistică 2025-2026",
    data: "2025-2026",
    dataStart: "2025-11-01",
    dataEnd: "2026-06-30",
    link: "https://insse.ro/cms/ro/esc-olimpiada-2025-2026",
    categorie: "Competiție",
    icon: Award,
  },
  {
    id: 5,
    titlu:
      "Data&Lunch Seria 3 — ediție dedicată celor pasionați de date, analiză și știință aplicată",
    data: "Martie-Aprilie 2026",
    dataStart: "2026-03-01",
    dataEnd: "2026-04-30",
    link: "https://www.linkedin.com/posts/business-economics-data-science-lab_%F0%9D%97%97%F0%9D%97%94%F0%9D%97%A7%F0%9D%97%94%F0%9D%97%9F%F0%9D%97%A8%F0%9D%97%A1%F0%9D%97%96%F0%9D%97%9B-%F0%9D%97%A6%F0%9D%97%B2%F0%9D%97%BF%F0%9D%97%B6%F0%9D%97%AE-%F0%9D%9F%AF-%F0%9D%97%BA%F0%9D%97%AE%F0%9D%97%BF%F0%9D%98%81%F0%9D%97%B6%F0%9D%97%B2%F0%9D%97%AE%F0%9D%97%BD%F0%9D%97%BF%F0%9D%97%B6%F0%9D%97%B9%F0%9D%97%B6%F0%9D%97%B2-activity-7434870483466121216-WQHV?utm_source=share&utm_medium=member_desktop&rcm=ACoAABAgoqwB-mZfSkZL-dS5DSRsxVdSzdGN-Kw",
    categorie: "Data&Lunch",
    icon: BookOpen,
  },
  {
    id: 6,
    titlu: "Data & Lunch Seria 2: Unde ideile devin cunoaștere",
    data: "15 Noiembrie 2025",
    dataStart: "2025-11-15",
    dataEnd: "2025-11-15",
    link: "https://asds-csie.ase.ro/datalunch-seminar-stiintific-saptamanal-noiembrie-2025/",
    categorie: "Seminar",
    icon: BookOpen,
  },
  {
    id: 7,
    titlu:
      "Data&Lunch – Seria 1: Dacă vrei să înveți mai mult decât cursurile obișnuite",
    data: "10 Octombrie 2025",
    dataStart: "2025-10-10",
    dataEnd: "2025-10-10",
    link: "https://asds-csie.ase.ro/__trashed/",
    categorie: "Seminar",
    icon: BookOpen,
  },
  {
    id: 8,
    titlu:
      'Atelier de instruire aplicativă „Resurse educaționale interactive și inovative dedicate dezvoltării abilităților practice ale studenților în domeniul analizei datelor"',
    data: "14 Septembrie 2023",
    dataStart: "2023-09-14",
    dataEnd: "2023-09-14",
    link: "https://asds-csie.ase.ro/atelier-de-instruire-aplicativa-resurse-educationale-interactive-si-inovative-dedicate-dezvoltarii-abilitatilor-practice-ale-studentilor-in-domeniul-analizei-datelor-covasna-06/",
    categorie: "Workshop",
    icon: Users,
  },
  {
    id: 9,
    titlu:
      'Școala de Vară „Instrumente avansate de analiză a datelor aplicate în domeniul dezvoltării sustenabile"',
    data: "5 Octombrie 2022",
    dataStart: "2022-10-05",
    dataEnd: "2022-10-05",
    link: "https://asds-csie.ase.ro/scoala-de-vara-instrumente-avansate-de-analiza-a-datelor-aplicate-in-domeniul-dezvoltarii-sustenabile-covasna-31-august-2022-03-septembrie-2022/",
    categorie: "Școală de Vară",
    icon: GraduationCap,
  },
  {
    id: 10,
    titlu:
      'ASE ocupă podiumul competiției Datathon WiDS – Women in Data Science", ediția 2023',
    data: "13 Martie 2023",
    dataStart: "2023-03-13",
    dataEnd: "2023-03-13",
    link: "https://asds-csie.ase.ro/ase-ocupa-podiumul-competitiei-datathon-wids-women-in-data-science-editia-2023/",
    categorie: "Competiție",
    icon: Award,
  },
];

/* Card de eveniment, folosit în ambele secțiuni */
function EvenimentCard({
  eveniment,
  index,
  estompat,
}: {
  eveniment: Eveniment;
  index: number;
  estompat?: boolean;
}) {
  const IconComponent = eveniment.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#4CC9F0]/20 dark:border-gray-700 overflow-hidden group flex flex-col ${
        estompat ? "opacity-90 hover:opacity-100" : ""
      }`}
    >
      <div className="p-8 flex flex-col h-full">
        {/* Icon & Categorie */}
        <div className="flex items-center justify-between mb-4">
          <div
            className={`rounded-xl p-3 ${
              estompat
                ? "bg-gradient-to-br from-gray-500 to-gray-700 dark:from-gray-600 dark:to-gray-800"
                : "bg-gradient-to-br from-[#7209B7] to-[#4361EE]"
            }`}
          >
            <IconComponent className="w-5 h-5 text-white" />
          </div>
          <div className="inline-flex items-center gap-2 bg-[#4CC9F0]/10 dark:bg-[#4CC9F0]/20 text-[#4361EE] dark:text-[#4CC9F0] px-3 py-1 rounded-full text-xs font-semibold">
            {eveniment.categorie}
          </div>
        </div>

        {/* Titlu */}
        <h3 className="text-xl font-bold text-[#3A0CA3] dark:text-[#4CC9F0] mb-3 leading-tight">
          {eveniment.titlu}
        </h3>

        {/* Descriere (dacă există) */}
        {eveniment.descriere && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-4">
            {eveniment.descriere}
          </p>
        )}

        <div className="mt-auto">
          {/* Data */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <Calendar className="w-4 h-4" />
            <span>{eveniment.data}</span>
          </div>

          {/* Link */}
          <a
            href={eveniment.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#4361EE] hover:text-[#7209B7] dark:text-[#4CC9F0] dark:hover:text-[#4361EE] font-semibold transition-colors group-hover:gap-3 duration-300"
          >
            <span>Citește mai mult</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function ActivitatePage() {
  /* Clasificare automată: un eveniment e viitor cât timp dataEnd >= azi */
  const azi = new Date();
  azi.setHours(0, 0, 0, 0);

  const viitoare = evenimente
    .filter((e) => new Date(e.dataEnd) >= azi)
    .sort(
      (a, b) => new Date(a.dataStart).getTime() - new Date(b.dataStart).getTime()
    );

  const trecute = evenimente
    .filter((e) => new Date(e.dataEnd) < azi)
    .sort(
      (a, b) => new Date(b.dataEnd).getTime() - new Date(a.dataEnd).getTime()
    );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <SimpleHeader />

      <main className="pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header pagină */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            style={{ marginTop: "1.5cm" }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white px-4 py-2 rounded-full mb-8">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Activitate</span>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Oportunitățile și evenimentele care te așteaptă, plus activitățile
              și realizările noastre de până acum
            </p>
          </motion.div>

          {/* ============ ACTIVITĂȚI VIITOARE ============ */}
          <section aria-labelledby="activitati-viitoare" className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="bg-gradient-to-br from-[#7209B7] to-[#4361EE] rounded-xl p-2.5">
                <CalendarClock className="w-5 h-5 text-white" />
              </div>
              <h2
                id="activitati-viitoare"
                className="text-2xl font-bold text-gray-900 dark:text-white"
              >
                Activități viitoare
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-[#4361EE]/30 to-transparent" />
            </motion.div>

            {viitoare.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {viitoare.map((eveniment, index) => (
                  <EvenimentCard
                    key={eveniment.id}
                    eveniment={eveniment}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[#4CC9F0]/40 dark:border-gray-700 p-10 text-center">
                <p className="text-gray-500 dark:text-gray-400">
                  Momentan nu sunt activități viitoare anunțate. Revino curând!
                </p>
              </div>
            )}
          </section>

          {/* ============ EVENIMENTE TRECUTE ============ */}
          <section aria-labelledby="evenimente-trecute">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="bg-gradient-to-br from-gray-500 to-gray-700 dark:from-gray-600 dark:to-gray-800 rounded-xl p-2.5">
                <History className="w-5 h-5 text-white" />
              </div>
              <h2
                id="evenimente-trecute"
                className="text-2xl font-bold text-gray-900 dark:text-white"
              >
                Evenimente trecute
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-400/40 to-transparent" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trecute.map((eveniment, index) => (
                <EvenimentCard
                  key={eveniment.id}
                  eveniment={eveniment}
                  index={index}
                  estompat
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}