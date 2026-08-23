import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Notă: am schimbat din "motion/react" în "framer-motion" conform standardului actual, modifică înapoi dacă folosești pachetul nou.
import {
  GraduationCap,
  BookOpen,
  Award,
  Search,
  X,
} from "lucide-react";
import DataLunch2 from "../assets/DataLunch2.jpg";
import DataLunch1 from "../assets/DataLunch1.png";

export function Doctorat() {
  const [popupImage, setPopupImage] = useState<string | null>(null);

  const editions = [
    {
      id: 0,
      title: "Ediția 11 martie 2026",
      status: "În curând",
      statusColor: "bg-[#7209B7]",
      image: DataLunch1,
    },
    {
      id: 1,
      title: "Ediția anterioară 2",
      status: "Arhivă",
      statusColor: "bg-[#4361EE]",
      image: DataLunch2,
    },
    {
      id: 2,
      title: "Ediția anterioară 1",
      status: "Arhivă",
      statusColor: "bg-gray-500",
      image: DataLunch1,
    },
  ];

  return (
    <section id="doctorat" className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-4 pb-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          style={{ marginTop: "1.5cm" }}
        >
          <div className="inline-flex items-center gap-2 bg-[#7209B7] text-white px-4 py-2 rounded-full mb-4">
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm">Studii Doctorale</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Devino parte din elita cercetătorilor în statistică și econometrie.
            Contribuie la avansarea științei prin cercetare inovatoare și rigoroasă.
          </p>
        </motion.div>

        {/* Main Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#7209B7] rounded-3xl p-12 text-white mb-16 shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Program Doctoral în Statistică și Econometrie</h3>
              <p className="text-lg mb-6">
                Programul nostru doctoral te pregătește să devii un cercetător
                independent, capabil să contribui la frontiera cunoașterii în
                statistică și econometrie.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#4CC9F0] rounded-full flex-shrink-0"></div>
                  <span>Burse de cercetare disponibile</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#4CC9F0] rounded-full flex-shrink-0"></div>
                  <span>Colaborări internaționale cu universități de top</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#4CC9F0] rounded-full flex-shrink-0"></div>
                  <span>Publicații în reviste de prestigiu (ISI, Scopus)</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <Search className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">50+</div>
                <p className="text-sm">Proiecte de cercetare active</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <Award className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">100+</div>
                <p className="text-sm">Publicații ISI anual</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <BookOpen className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">20+</div>
                <p className="text-sm">Conducători doctorali</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <GraduationCap className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">150+</div>
                <p className="text-sm">Doctori formați</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Data&Lunch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <BookOpen className="w-6 h-6 text-[#7209B7] dark:text-[#DDB8FF]" />
            <h3 className="text-2xl font-bold text-[#3A0CA3] dark:text-white">Data&amp;Lunch</h3>
          </div>

          <div className="bg-[#4361EE]/5 rounded-xl shadow-sm border border-[#4361EE]/30 dark:border-gray-700 p-8 dark:bg-[#4361EE]/20">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Seminar științific organizat sub îndrumarea școlii doctorale.</strong>
              <br /><br />
              Serie de seminare dedicate prezentării rezultatelor academice și a
              proiectelor de cercetare realizate de studenți, masteranzi și
              doctoranzi. Programul fiecărei ediții este completat de un invitat
              special din mediul de business.
            </p>

            <div className="mb-8">
              <h5 className="text-[#4361EE] dark:text-[#A5B8FF] font-bold mb-4">Ce aduce Data&amp;Lunch:</h5>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#7209B7] rounded-full mt-2"></div>
                  <span>articole științifice</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#7209B7] rounded-full mt-2"></div>
                  <span>proiecte aflate în curs de publicare</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#7209B7] rounded-full mt-2"></div>
                  <span>experiențe din domeniul proiectelor academice</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Scop:</strong> susținerea unei comunități academice
              dinamice și deschise, care să inspire noi direcții de cercetare și
              potențiale colaborări.
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-[#4CC9F0]/30 dark:border-gray-700 mb-10">
              <p className="text-[#3A0CA3] dark:text-white font-medium">Ediții viitoare:</p>
              <p className="text-gray-600 dark:text-gray-300">
                Va începe pe <strong>11 martie 2026</strong> o nouă ediție.
              </p>
            </div>

            {/* Ediții */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-[#7209B7] dark:text-[#DDB8FF]" />
                <h4 className="text-xl font-bold text-[#3A0CA3] dark:text-white">Ediții trecute</h4>
              </div>

              <div className="space-y-4">
                {editions.map((edition) => (
                  <motion.button
                    key={edition.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: edition.id * 0.1 }}
                    onClick={() => setPopupImage(edition.image)}
                    className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 text-left p-6"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${edition.statusColor} text-white text-sm font-semibold mb-3`}>
                          <Award className="w-3.5 h-3.5" />
                          {edition.status}
                        </div>
                        <h4 className="text-xl font-bold text-[#3A0CA3] dark:text-white">
                          {edition.title}
                        </h4>
                      </div>
                      <div className="flex-shrink-0 text-gray-500 dark:text-gray-400 text-sm">
                        Vezi foto →
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Directorul Școlii Doctorale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <GraduationCap className="w-6 h-6 text-[#7209B7] dark:text-[#DDB8FF]" />
            <h3 className="text-2xl font-bold text-[#3A0CA3] dark:text-white">Directorul Școlii Doctorale</h3>
          </div>

          <div className="bg-[#7209B7]/5 rounded-xl shadow-sm border border-[#7209B7]/30 dark:border-gray-700 p-8 dark:bg-[#7209B7]/20">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-[#3A0CA3] dark:text-white mb-2">
                Prof. univ. dr. Emilia ȚIȚAN
              </h4>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-[#4CC9F0]/20 dark:border-gray-700">
                <h5 className="text-[#4361EE] dark:text-[#A5B8FF] font-bold mb-4">Program audiențe</h5>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#7209B7] dark:bg-[#B5179E] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-[#3A0CA3] dark:text-white">ONLINE:</span>{" "}
                      <a
                        href="mailto:emilia.titan@csie.ase.ro"
                        className="text-[#4361EE] dark:text-[#A5B8FF] hover:text-[#7209B7] dark:text-[#DDB8FF] dark:hover:text-[#72EFDD] hover:underline transition-colors"
                      >
                        emilia.titan@csie.ase.ro
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#7209B7] dark:bg-[#B5179E] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Marți, ora 16.00, sala B706, cu anunț prin e-mail cu o zi înainte.</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-[#4CC9F0]/20 dark:border-gray-700">
                <h5 className="text-[#4361EE] dark:text-[#A5B8FF] font-bold mb-4">Contact</h5>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#7209B7] dark:bg-[#B5179E] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-[#3A0CA3] dark:text-white">Email:</span>{" "}
                      <a
                        href="mailto:emilia.titan@csie.ase.ro"
                        className="text-[#4361EE] dark:text-[#A5B8FF] hover:text-[#7209B7] dark:text-[#DDB8FF] dark:hover:text-[#72EFDD] hover:underline transition-colors"
                      >
                        emilia.titan@csie.ase.ro
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#7209B7] dark:bg-[#B5179E] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-[#3A0CA3] dark:text-white">Tel:</span>{" "}
                      <a
                        href="tel:+40213191901"
                        className="text-[#4361EE] dark:text-[#A5B8FF] hover:text-[#7209B7] dark:text-[#DDB8FF] dark:hover:text-[#72EFDD] hover:underline transition-colors"
                      >
                        +4 021 319 19 01, int. 324
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <a
            href="https://doctorat.ase.ro/programe/cibernetica-si-statistica-economica/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#7209B7] text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold"
          >
            Aplică acum pentru doctorat
          </a>
        </motion.div>

      </div>

      {/* Image Popup */}
      <AnimatePresence>
        {popupImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setPopupImage(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPopupImage(null)}
                className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-sm transition-transform"
              >
                <X className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              </button>
              <img
                src={popupImage}
                alt="Data&amp;Lunch"
                className="w-full rounded-xl shadow-sm object-contain"
                style={{ maxHeight: "80vh" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}