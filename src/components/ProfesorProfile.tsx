import { motion } from "motion/react";
import {
  Mail,
  GraduationCap,
  BookOpen,
  Users,
  Home,
  ExternalLink,
  FileText,
  Briefcase,
} from "lucide-react";
import { SimpleHeader } from "./SimpleHeader";
import { Footer } from "./Footer";

interface Publication {
  title: string;
  journal?: string;
  year: number;
  authors?: string;
  link?: string;
}

interface TezaDoctorat {
  autor: string;
  titlu: string;
  status?: string;
  an?: number;
}

interface CVProfil {
  tip: string;
  url: string;
}

interface ProfesorData {
  name: string;
  photo?: string;
  initials: string;
  role: string;
  specializations: string[];
  email: string;
  birou?: string;
  facultate?: string;
  activitateDidactica: string[];
  domeniiCercetare: string[];
  tezeDoctorat: (string | TezaDoctorat)[]; // Accept both formats
  publicatiiRelevante: (Publication | string)[]; // Accept both formats
  proiecteCercetare: string[];
  cvProfiluri: (string | CVProfil)[]; // Accept both string and object format
}

interface ProfesorProfileProps {
  data: ProfesorData;
}

export function ProfesorProfile({ data }: ProfesorProfileProps) {
const getInitialsColor = (initials: string) => {
    const colors = [
      "bg-[#7209B7]",
      "bg-[#4361EE]",
      "bg-[#4895EF]",
      "bg-[#4CC9F0]",
    ];
    return colors[initials.charCodeAt(0) % colors.length];
  };

  // Helper function to check if data is valid (not empty, not placeholder)
  const hasValidData = (arr: any[] | undefined) => {
    if (!arr || arr.length === 0) return false;

    // Check if all items are placeholder text
    const placeholders = ["Va urma", "De completat", "—", "-"];
    return arr.some((item) => {
      if (typeof item === "string") {
        return !placeholders.includes(item.trim());
      }
      return true; // For objects (like publications)
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <SimpleHeader />

      <main className="flex-grow">
        <section className="pt-[0.8cm] pb-24 bg-white dark:bg-gray-900">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 sm:mb-8 flex justify-center"
            >
              <a
                href="#/cadre-didactice"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#7209B7] text-white rounded-full transition-all duration-300 text-sm sm:text-base"
              >
                <Home className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-semibold">Înapoi la Echipa noastră</span>
              </a>
            </motion.div>

            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-[#4CC9F0]/20 dark:border-gray-700 mb-8"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Avatar */}
                {data.photo ? (
                  <img
                    src={data.photo}
                    alt={data.name}
                    className="rounded-full w-32 h-32 object-cover flex-shrink-0 border-4 border-[#4361EE]/30"
                  />
                ) : (
                  <div
                    className={`${getInitialsColor(data.initials)} rounded-full w-32 h-32 flex items-center justify-center text-white flex-shrink-0`}
                  >
                    <span className="text-5xl font-bold">{data.initials}</span>
                  </div>
                )}

                {/* Info */}
                <div className="flex-grow text-center md:text-left">
                  <h1 className="text-4xl text-[#3A0CA3] dark:text-[#4CC9F0] mb-2">
                    {data.name}
                  </h1>
                  <p className="text-xl text-[#B45309] dark:text-[#F59E0B] mb-4">{data.role}</p>

                  <a
                    href={`mailto:${data.email}`}
                    className="inline-flex items-center gap-2 text-[#4361EE] dark:text-[#A5B8FF] hover:text-[#7209B7] dark:text-[#DDB8FF] dark:hover:text-[#7209B7] dark:text-[#DDB8FF] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{data.email}</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Activitate Didactică - doar dacă există date valide */}
              {hasValidData(data.activitateDidactica) && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-[#4CC9F0]/20 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-[#4361EE] dark:text-[#A5B8FF]" />
                    <h2 className="text-xl text-[#3A0CA3] dark:text-[#4CC9F0]">
                      Activitate didactică
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {(data.activitateDidactica || []).map((activitate, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-[#4361EE] dark:text-[#A5B8FF] mt-1">•</span>
                        <span>{activitate}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Domenii de Cercetare - doar dacă există date valide */}
              {hasValidData(data.domeniiCercetare) && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-[#4CC9F0]/20 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-[#4361EE] dark:text-[#A5B8FF]" />
                    <h2 className="text-xl text-[#3A0CA3] dark:text-[#4CC9F0]">
                      Domenii de cercetare
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(data.domeniiCercetare || []).map((domeniu, idx) => (
                      <span
                        key={idx}
                        className="bg-[#7209B7]/10 text-[#3A0CA3] dark:text-[#4CC9F0] px-3 py-2 rounded-lg text-sm border border-[#4361EE]/20 dark:border-[#4CC9F0]/20 dark:bg-[#7209B7]/20"
                      >
                        {domeniu}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Teze de Doctorat Coordonate - doar dacă există */}
              {hasValidData(data.tezeDoctorat) && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-[#4CC9F0]/20 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-5 h-5 text-[#4361EE] dark:text-[#A5B8FF]" />
                    <h2 className="text-xl text-[#3A0CA3] dark:text-[#4CC9F0]">
                      Teze de doctorat coordonate
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {data.tezeDoctorat.map((teza, idx) => {
                      // Suportăm atât string-uri simple, cât și obiecte
                      if (typeof teza === "string") {
                        return (
                          <li
                            key={idx}
                            className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
                          >
                            <span className="text-[#4361EE] dark:text-[#A5B8FF] mt-1">•</span>
                            <span>{teza}</span>
                          </li>
                        );
                      }

                      // Format obiect
                      return (
                        <li
                          key={idx}
                          className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
                        >
                          <span className="text-[#4361EE] dark:text-[#A5B8FF] mt-1">•</span>
                          <span>
                            {teza.titlu} ({teza.autor})
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}

              {/* Proiecte de Cercetare - doar dacă există date valide */}
              {hasValidData(data.proiecteCercetare) && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-[#4CC9F0]/20 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-[#4361EE] dark:text-[#A5B8FF]" />
                    <h2 className="text-xl text-[#3A0CA3] dark:text-[#4CC9F0]">
                      Proiecte de cercetare
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {(data.proiecteCercetare || []).map((proiect, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-[#4361EE] dark:text-[#A5B8FF] mt-1">•</span>
                        <span>{proiect}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* CV și Profiluri Academice - doar dacă există date valide */}
              {hasValidData(data.cvProfiluri) && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-[#4CC9F0]/20 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="w-5 h-5 text-[#4361EE] dark:text-[#A5B8FF]" />
                    <h2 className="text-xl text-[#3A0CA3] dark:text-[#4CC9F0]">
                      Profiluri academice
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {(data.cvProfiluri || []).map((profil, idx) => {
                      // Suportăm atât string-uri simple, cât și obiecte
                      if (typeof profil === "string") {
                        return (
                          <li
                            key={idx}
                            className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
                          >
                            <span className="text-[#4361EE] dark:text-[#A5B8FF] mt-1">•</span>
                            <span>{profil}</span>
                          </li>
                        );
                      }

                      // Format obiect
                      return (
                        <li
                          key={idx}
                          className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
                        >
                          <span className="text-[#4361EE] dark:text-[#A5B8FF] mt-1">•</span>
                          <a
                            href={profil.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#4361EE] dark:text-[#A5B8FF] hover:text-[#7209B7] dark:text-[#DDB8FF] transition-colors inline-flex items-center gap-1"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>{profil.tip}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Publicații Relevante - doar dacă există date valide */}
            {hasValidData(data.publicatiiRelevante) && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-[#4CC9F0]/20 dark:border-gray-700 mt-8"
              >
                <div className="flex items-center gap-2 mb-6">
                  <BookOpen className="w-5 h-5 text-[#4361EE] dark:text-[#A5B8FF]" />
                  <h2 className="text-xl text-[#3A0CA3] dark:text-[#4CC9F0]">
                    Publicații relevante
                  </h2>
                </div>
                <div className="space-y-4">
                  {(data.publicatiiRelevante || []).map((pub, idx) => {
                    // Suportăm atât string-uri simple, cât și obiecte
                    if (typeof pub === "string") {
                      return (
                        <div
                          key={idx}
                          className="border-l-4 border-[#4361EE] dark:border-[#4CC9F0] pl-4 py-2"
                        >
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {pub}
                          </p>
                        </div>
                      );
                    }

                    // Format obiect
                    return (
                      <div
                        key={idx}
                        className="border-l-4 border-[#4361EE] dark:border-[#4CC9F0] pl-4 py-2"
                      >
                        <h3 className="text-[#3A0CA3] dark:text-[#4CC9F0] mb-1">
                          {pub.title}
                        </h3>
                        {pub.authors && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                            {pub.authors}
                          </p>
                        )}
                        <div className="flex items-center gap-4">
                          {pub.journal && (
                            <span className="text-sm text-gray-600 dark:text-gray-300 italic">
                              {pub.journal}
                            </span>
                          )}
                          {pub.year && (
                            <span className="text-sm text-[#4361EE] dark:text-[#A5B8FF]">
                              {pub.year}
                            </span>
                          )}
                          {pub.link && (
                            <a
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-[#4361EE] dark:text-[#A5B8FF] hover:text-[#7209B7] dark:text-[#DDB8FF] transition-colors inline-flex items-center gap-1"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span>Vezi publicația</span>
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
