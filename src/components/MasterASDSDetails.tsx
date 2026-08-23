import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  GraduationCap,
  Users,
  Brain,
  BookOpen,
  ExternalLink,
} from "lucide-react";

const masterInfo = {
  title: "Statistică Aplicată și Data Science",
  subtitle: "ASDS",
  type: "Master de cercetare",
  duration: "2 ani (4 semestre)",
  coordinator: "Prof. univ. dr. Cristina BOBOC",
  link: "https://asds-csie.ase.ro/",
  description:
    "Programul de master ASDS combină teoria statistică avansată cu tehnicile moderne de data science, pregătindu-te pentru o carieră de succes în analiza datelor și cercetare.",
};

const highlights = [
  {
    title: "🏅 Acreditat EMOS",
    description:
      "Programul deține certificarea European Master in Official Statistics (EMOS), recunoscută la nivel european, oferind acces la stagii și rețele profesionale din statistica oficială.",
  },
  {
    title: "Data Science Modern",
    description:
      "Învață cele mai noi tehnici de Machine Learning, Big Data și AI aplicat în statistică economică.",
  },
  {
    title: "Cercetare Aplicată",
    description:
      "Participă la proiecte de cercetare reale și publică lucrări științifice în reviste internaționale.",
  },
  {
    title: "Software Profesional",
    description:
      "Stăpânește R, Python, SPSS, SAS și alte instrumente folosite în industrie și cercetare.",
  },
  {
    title: "Oportunități de Carieră",
    description:
      "Absolvenții lucrează ca Data Scientists, cercetători, consultanți și analisti în top companies.",
  },
];

// Tipuri pentru discipline
interface Subject {
  name: string;
  nameEn: string;
  year: number;
  semester: number;
  credits: number;
  examType: "Examen" | "Verificare" | "Colocviu" | "-";
  optional: "O" | "A" | "S";
  syllabusLink: string;
}

// Date complete pentru toate disciplinele Master ASDS
const allSubjects: Subject[] = [
  // ANUL 1 - SEMESTRUL I
  {
    name: "Sistemul statistic european",
    nameEn: "The European Statistical System",
    year: 1,
    semester: 1,
    credits: 9,
    examType: "Examen",
    optional: "O",
    syllabusLink:
      "https://fisadisciplina.ase.ro/Default.aspx?IDD=112513&IDF=7&IDL=RO",
  },
  {
    name: "Econometrie spațială",
    nameEn: "Spatial analysis",
    year: 1,
    semester: 1,
    credits: 7,
    examType: "Examen",
    optional: "O",
    syllabusLink:
      "https://fisadisciplina.ase.ro/Default.aspx?IDD=112514&IDF=7&IDL=RO",
  },
  {
    name: "Analitică științei",
    nameEn: "Science Analytics",
    year: 1,
    semester: 1,
    credits: 4,
    examType: "Examen",
    optional: "O",
    syllabusLink:
      "https://fisadisciplina.ase.ro/Default.aspx?IDD=112515&IDF=7&IDL=RO",
  },
  {
    name: "Software open source pentru statistică și data science",
    nameEn: "Software open source for statistics and data science",
    year: 1,
    semester: 1,
    credits: 7,
    examType: "Verificare",
    optional: "A",
    syllabusLink:
      "https://fisadisciplina.ase.ro/Default.aspx?IDD=112521&IDF=7&IDL=RO",
  },
  {
    name: "Machine Learning în Python",
    nameEn: "Machine Learning with Python",
    year: 1,
    semester: 1,
    credits: 7,
    examType: "Verificare",
    optional: "A",
    syllabusLink:
      "https://fisadisciplina.ase.ro/Default.aspx?IDD=112522&IDF=7&IDL=RO",
  },
  {
    name: "Vizualizarea datelor",
    nameEn: "Data Visualisation",
    year: 1,
    semester: 1,
    credits: 3,
    examType: "Verificare",
    optional: "O",
    syllabusLink:
      "https://fisadisciplina.ase.ro/Default.aspx?IDD=112516&IDF=7&IDL=RO",
  },

  // ANUL 1 - SEMESTRUL II
  {
    name: "Sondaje - teorie și aplicații",
    nameEn: "Special techniques in sampling theory",
    year: 1,
    semester: 2,
    credits: 8,
    examType: "Examen",
    optional: "O",
    syllabusLink:
      "https://fisadisciplina.ase.ro/Default.aspx?IDD=112517&IDF=7&IDL=RO",
  },
  {
    name: "Econometrie avansată",
    nameEn: "Advanced Econometrics",
    year: 1,
    semester: 2,
    credits: 8,
    examType: "Examen",
    optional: "O",
    syllabusLink:
      "https://fisadisciplina.ase.ro/Default.aspx?IDD=112518&IDF=7&IDL=RO",
  },
  {
    name: "Analiza avansată a seriilor de timp și previziune",
    nameEn: "Advanced time series and forecasting",
    year: 1,
    semester: 2,
    credits: 7,
    examType: "Examen",
    optional: "O",
    syllabusLink:
      "https://fisadisciplina.ase.ro/Default.aspx?IDD=112519&IDF=7&IDL=RO",
  },
  {
    name: "Procese și modele stochastice",
    nameEn: "Stochastic processes and models",
    year: 1,
    semester: 2,
    credits: 7,
    examType: "Examen",
    optional: "O",
    syllabusLink:
      "https://fisadisciplina.ase.ro/Default.aspx?IDD=112520&IDF=7&IDL=RO",
  },

  // ANUL 2 - SEMESTRUL I
  {
    name: "Data mining și Big Data",
    nameEn: "Data mining and Big Data",
    year: 2,
    semester: 1,
    credits: 8,
    examType: "Verificare",
    optional: "O",
    syllabusLink:
      "https://fisadisciplina.ase.ro/Default.aspx?IDD=112523&IDF=7&IDL=RO",
  },
  {
    name: "Statistică computațională și econofizică",
    nameEn: "Computational statistics and econophysics",
    year: 2,
    semester: 1,
    credits: 8,
    examType: "Verificare",
    optional: "O",
    syllabusLink:
      "https://fisadisciplina.ase.ro/Default.aspx?IDD=112524&IDF=7&IDL=RO",
  },
  {
    name: "Modelarea piețelor financiare",
    nameEn: "Financial Modelling",
    year: 2,
    semester: 1,
    credits: 7,
    examType: "Examen",
    optional: "O",
    syllabusLink:
      "https://fisadisciplina.ase.ro/Default.aspx?IDD=112526&IDF=7&IDL=RO",
  },
  {
    name: "Demografie aplicată pentru luarea deciziilor",
    nameEn: "Applied Demography for Decision Making",
    year: 2,
    semester: 1,
    credits: 7,
    examType: "Examen",
    optional: "O",
    syllabusLink:
      "https://fisadisciplina.ase.ro/Default.aspx?IDD=112525&IDF=7&IDL=RO",
  },

  // ANUL 2 - SEMESTRUL II
  {
    name: "Consultanță statistică",
    nameEn: "Statistical Consulting",
    year: 2,
    semester: 2,
    credits: 7,
    examType: "Verificare",
    optional: "O",
    syllabusLink:
      "https://fisadisciplina.ase.ro/Default.aspx?IDD=112527&IDF=7&IDL=RO",
  },
  {
    name: "Etică și integritate academică",
    nameEn: "Ethics and Academic Integrity",
    year: 2,
    semester: 2,
    credits: 6,
    examType: "Verificare",
    optional: "O",
    syllabusLink:
      "https://fisadisciplina.ase.ro/Default.aspx?IDD=112528&IDF=7&IDL=RO",
  },
  {
    name: "Seminar științific",
    nameEn: "Scientific Seminar",
    year: 2,
    semester: 2,
    credits: 5,
    examType: "Verificare",
    optional: "O",
    syllabusLink:
      "https://fisadisciplina.ase.ro/Default.aspx?IDD=112529&IDF=7&IDL=RO",
  },
  {
    name: "Practică",
    nameEn: "Internship",
    year: 2,
    semester: 2,
    credits: 12,
    examType: "Colocviu",
    optional: "O",
    syllabusLink:
      "https://fisadisciplina.ase.ro/Default.aspx?IDD=112530&IDF=7&IDL=RO",
  },
  {
    name: "Stagiu pentru elaborarea lucrării de disertație",
    nameEn: "Preparation for defense of dissertation",
    year: 2,
    semester: 2,
    credits: 0,
    examType: "-",
    optional: "S",
    syllabusLink:
      "https://fisadisciplina.ase.ro/Default.aspx?IDD=112531&IDF=7&IDL=RO",
  },
];

export function MasterASDSDetails() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedYear, setSelectedYear] = useState<number>(1);
  const [selectedSemester, setSelectedSemester] = useState<number>(1);

  // Filtrare discipline după an și semestru
  const filteredSubjects = allSubjects.filter(
    (s) => s.year === selectedYear && s.semester === selectedSemester,
  );

  const getOptionalityColor = (optional: string) => {
    switch (optional) {
      case "O":
        return "bg-[#4361EE] text-white";
      case "A":
        return "bg-[#4361EE] text-white";
      case "S":
        return "bg-[#7209B7] text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getOptionalityLabel = (optional: string) => {
    switch (optional) {
      case "O":
        return "Obligatoriu";
      case "A":
        return "Alegere";
      case "S":
        return "Stagiu";
      default:
        return optional;
    }
  };

  const getExamTypeColor = (examType: string) => {
    switch (examType) {
      case "Examen":
        return "bg-[#7209B7] text-white";
      case "Verificare":
        return "bg-[#4361EE] text-white";
      case "Colocviu":
        return "bg-[#4361EE] text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-white dark:bg-gray-900 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Program Header */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.6 }}
  className="text-center mb-16"
  style={{ marginTop: "1.5cm" }}
>
  <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
    <div className="inline-block px-6 py-2 rounded-full border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
      <span className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-300 font-medium">
        {masterInfo.type}
      </span>
    </div>
    
    {/* MODIFICARE AICI: Div-ul a devenit tag <a> */}
    <a 
      href="https://asds-csie.ase.ro/acreditari-si-parteneriate/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-[#7209B7] bg-[#7209B7] text-white transition-transform duration-200 cursor-pointer shadow-md"
    >
      <span className="text-sm font-semibold uppercase tracking-wider">
        🏅 Certificat EMOS
      </span>
      <ExternalLink className="w-3 h-3" /> {/* Opțional: am adăugat o iconiță mică de link extern */}
    </a>
  </div>
          <h1 className="text-5xl md:text-6xl mb-4 text-[#3A0CA3] dark:text-[#4CC9F0]">
            {masterInfo.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            {masterInfo.type}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            {masterInfo.description}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <GraduationCap className="w-5 h-5 text-[#7209B7] dark:text-[#DDB8FF]" />
              <span>{masterInfo.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Users className="w-5 h-5 text-[#7209B7] dark:text-[#DDB8FF]" />
              <span>Coordonator: {masterInfo.coordinator}</span>
            </div>
          </div>
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl dark:text-white text-center mb-12">
            De ce să alegi ASDS?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4"
                style={{ borderColor: "#7209B7" }}
              >
                <h4 className="text-xl dark:text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Curriculum Section with Subjects Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#7209B7] text-white px-4 py-2 rounded-full mb-4">
              <Brain className="w-4 h-4" />
              <span className="text-sm">CURRICULUM</span>
            </div>
            <h2 className="text-[#3A0CA3] dark:text-white mb-4">
              Discipline organizate pe semestre
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Program structurat pe 4 semestre cu discipline avansate în data
              analytics, machine learning și statistică aplicată.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            {/* Year Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedYear(1)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedYear === 1
                    ? "bg-[#7209B7] text-white shadow-sm"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                Anul 1
              </button>
              <button
                onClick={() => setSelectedYear(2)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedYear === 2
                    ? "bg-[#7209B7] text-white shadow-sm"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                Anul 2
              </button>
            </div>

            {/* Semester Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedSemester(1)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedSemester === 1
                    ? "bg-[#4361EE] text-white shadow-sm"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                Semestrul I
              </button>
              <button
                onClick={() => setSelectedSemester(2)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedSemester === 2
                    ? "bg-[#4361EE] text-white shadow-sm"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                Semestrul II
              </button>
            </div>
          </div>

          {/* Subjects List */}
          <div className="grid gap-4 mb-12">
            {filteredSubjects.map((subject) => (
              <motion.div
                key={`${subject.name}-${subject.year}-${subject.semester}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="master-subject-card-mobile bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-6 transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {subject.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {subject.nameEn}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getExamTypeColor(subject.examType)}`}
                      >
                        {subject.examType}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getOptionalityColor(subject.optional)}`}
                      >
                        {getOptionalityLabel(subject.optional)}
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                        {subject.credits} credite
                      </span>
                    </div>
                  </div>

                  <a
                    href={subject.syllabusLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#7209B7] text-white rounded-lg transition-all"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span className="font-medium">Fișa disciplinei</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Legendă:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tip examen:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#7209B7] text-white">
                    Examen
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#4361EE] text-white">
                    Verificare
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#4361EE] text-white">
                    Colocviu
                  </span>
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Opționalitate:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#4361EE] text-white">
                    Obligatoriu
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#4361EE] text-white">
                    Alegere
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#7209B7] text-white">
                    Stagiu
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="rounded-xl p-8 md:p-12 text-white text-center"
          style={{ backgroundColor: "#7209B7" }}
        >
          <h3 className="text-3xl mb-4">Începe-ți cariera în Data Science</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Aplică pentru admitere la masterul ASDS și fii parte din următoarea
            generație de experți în analiza datelor.
          </p>
          <a
            href={masterInfo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#7209B7] px-8 py-4 rounded-full transition-all duration-300"
          >
            <span className="text-lg">Vizitează site-ul oficial</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
