import { motion } from "motion/react";
import { useState } from "react";
import { CampusMapPopup } from "./CampusMapPopup";

export function CardsSection() {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <div
      className="relative bg-gray-50 py-16 dark:bg-gray-800"
      style={{ minHeight: "30vh" }}
    >
      <div className="w-full flex items-center justify-center">
        {/* Four Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex gap-16 px-8 cards-section-container"
        >
          {/* Programe de studii */}
          <div className="bg-white dark:bg-gray-800 shadow-sm p-12 w-[28rem] rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 card-section-item">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 pb-4 border-b-2 border-[#7209B7] text-center card-section-title">
              Programe de studii
            </h3>
            <ul className="space-y-5 text-gray-700 dark:text-gray-300 text-lg card-section-list">
              <li>
                <a
                  href="#licenta"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("licenta");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:text-[#7209B7] dark:text-[#DDB8FF] hover:translate-x-1 inline-block transition-all cursor-pointer"
                >
                  • <span className="font-medium">Licență:</span> Statistică
                  aplicată și Data Science
                </a>
              </li>
              <li>
                <a
                  href="#/master-asds"
                  className="hover:text-[#7209B7] dark:text-[#DDB8FF] hover:translate-x-1 inline-block transition-all"
                >
                  • <span className="font-medium">Master:</span> Statistică
                  aplicată și Data Science
                </a>
              </li>
              <li>
                <a
                  href="#/master-ada"
                  className="hover:text-[#7209B7] dark:text-[#DDB8FF] hover:translate-x-1 inline-block transition-all"
                >
                  • <span className="font-medium">Master:</span> Applied data
                  analytics
                </a>
              </li>
              <li>
                <a
                  href="#/cursuri-postuniversitare"
                  className="hover:text-[#7209B7] dark:text-[#DDB8FF] hover:translate-x-1 inline-block transition-all"
                >
                  •{" "}
                  <span className="font-medium">Cursuri postuniversitare</span>
                </a>
              </li>
              <li>
                <a
                  href="#/doctorat"
                  className="hover:text-[#7209B7] dark:text-[#DDB8FF] hover:translate-x-1 inline-block transition-all"
                >
                  • <span className="font-medium">Doctorat:</span> Cibernetică
                  și Statistică Economică
                </a>
              </li>
            </ul>
          </div>

          {/* Utile pentru studenți */}
          <div className="bg-white dark:bg-gray-800 shadow-sm p-12 w-[28rem] rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 card-section-item">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 pb-4 border-b-2 border-[#7209B7] hover:border-[#B5179E] transition-colors text-center card-section-title">
              Utile pentru studenți
            </h3>
            <ul className="space-y-4 card-section-list">
              <li>
                <a
                  href="#/cariera"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#7209B7] dark:text-[#DDB8FF] text-lg transition-colors block"
                >
                  • <span className="font-medium">Carieră</span> - Oportunități
                  și internship-uri
                </a>
              </li>
              <li>
                <a
                  href="#/orar"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#7209B7] dark:text-[#DDB8FF] text-lg transition-colors block"
                >
                  • <span className="font-medium">Orar</span> - Programa
                  cursurilor
                </a>
              </li>
              <li>
                <a
                  href="#/databases"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#7209B7] dark:text-[#DDB8FF] text-lg transition-colors block"
                >
                  • <span className="font-medium">Baze de date</span> - Resurse
                  pentru analiză
                </a>
              </li>
              <li>
                <a
                  href="#/instrumente-analiza"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#7209B7] dark:text-[#DDB8FF] text-lg transition-colors block"
                >
                  • <span className="font-medium">Instrumente</span> - Software
                  pentru analiză
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsMapOpen(true)}
                  className="text-gray-700 dark:text-gray-300 hover:text-[#7209B7] dark:text-[#DDB8FF] text-lg transition-colors block text-left w-full cursor-pointer"
                >
                  • <span className="font-medium">Campus ASE</span> - Locații și
                  săli
                </button>
              </li>
            </ul>
          </div>

          {/* Cercetare */}
          <div className="bg-white dark:bg-gray-800 shadow-sm p-12 w-[28rem] rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 card-section-item">
            <a href="#/cercetare">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 pb-4 border-b-2 border-[#7209B7] hover:border-[#B5179E] transition-colors text-center card-section-title">
                Cercetare
              </h3>
            </a>
            <ul className="space-y-4 card-section-list">
              <li>
                <a
                  href="#/cercetare"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#7209B7] dark:text-[#DDB8FF] text-lg transition-colors block"
                >
                  • <span className="font-medium">Conferința ICAS</span>
                </a>
              </li>
              <li>
                <a
                  href="#/cercetare"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#7209B7] dark:text-[#DDB8FF] text-lg transition-colors block"
                >
                  • <span className="font-medium">Revista JSES</span>
                </a>
              </li>
              <li>
                <a
                  href="#/cercetare"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#7209B7] dark:text-[#DDB8FF] text-lg transition-colors block"
                >
                  • <span className="font-medium">Centrul de sondaje</span>
                </a>
              </li>
              <li>
                <a
                  href="#/cercetare"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#7209B7] dark:text-[#DDB8FF] text-lg transition-colors block"
                >
                  • <span className="font-medium">Data Science Lab</span>
                </a>
              </li>
                            <li>
                <a
                  href="#/cercetare"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#7209B7] dark:text-[#DDB8FF] text-lg transition-colors block"
                >
                  • <span className="font-medium">Revista ECOCIB </span>
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <CampusMapPopup isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </div>
  );
}
