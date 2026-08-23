import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react";
import { CampusMapPopup } from "./CampusMapPopup";
import { useDarkMode } from "../contexts/DarkModeContext";
import logo from "../assets/logo.png";

export function SimpleHeader() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1280,
  );
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 1024 : false,
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logoHeight =
    windowWidth <= 440
      ? "44px"
      : windowWidth <= 768
        ? "56px"
        : windowWidth <= 1024
          ? "64px"
          : "72px";

  const navigateAndScroll = (sectionId: string) => {
    setIsMenuOpen(false);
    window.location.hash = "#/";
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 shadow-sm"
        style={{
          height: isMobile ? "80px" : "12vh",
          backgroundColor: "#22409a",
          overflow: "visible",
          zoom: isMobile ? 1 : 0.9,
        }}
      >
        <div className="max-w-[85%] mx-auto px-2 sm:px-6 h-full">
          <div className="flex items-center justify-between h-full">
            {/* LEFT: Logo + Social */}
            <div className="flex items-center gap-2 sm:gap-8 flex-shrink-0">
              <a
                href="#/"
                className="cursor-pointer flex items-center flex-shrink-0"
                style={{ transition: "opacity 0.3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <img
                  src={logo}
                  alt="DSE Logo"
                  style={{
                    height: logoHeight,
                    minHeight: "36px",
                    maxHeight: "110px",
                    width: "auto",
                    display: "block",
                    transform: "none",
                    transition: "height 0.3s ease",
                    flexShrink: 0,
                  }}
                />
              </a>

              <div className="hidden lg:flex items-center gap-4 ml-4 pl-6 border-l-2 border-[whitesmoke]">
                <a
                  href="https://www.instagram.com/dse_ase/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@dse_ase?_r=1&_t=ZN-96how7lf5qY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.53V6.75a4.85 4.85 0 0 1-1.02-.06z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/departamentul-de-statistic%C4%83-%C8%99i-econometrie-0166403b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/Statistica.Econometrie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <div className="pl-4 ml-4 border-l-2 border-[whitesmoke]">
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2.5 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
                    aria-label="Toggle Dark Mode"
                  >
                    {darkMode ? (
                      <Moon className="w-7 h-7" />
                    ) : (
                      <Sun className="w-7 h-7" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT: Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <div className="relative group border-r border-[whitesmoke] pr-8">
                <button className="flex items-center gap-1 text-lg text-gray-300 hover:text-[#4CC9F0] transition-all duration-200">
                  Despre noi <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-sm py-2 border border-[whitesmoke] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a
                    href="#/istoric"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    Istoric
                  </a>
                  <a
                    href="#/cadre-didactice"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    Echipa noastră
                  </a>
                  <a
                    href="#/misiune"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    Misiune
                  </a>
                </div>
              </div>

              <div className="relative group border-r border-[whitesmoke] pr-8">
                <button className="flex items-center gap-1 text-lg text-gray-300 hover:text-[#4CC9F0] transition-all duration-200">
                  Programe studii <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-sm py-2 border border-[whitesmoke] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a
                    href="#/"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateAndScroll("licenta");
                    }}
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    Licență
                  </a>
                  <a
                    href="#/"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateAndScroll("master");
                    }}
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    Master
                  </a>
                  <a
                    href="#/cursuri-postuniversitare"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    Cursuri postuniversitare
                  </a>
                  <a
                    href="#/"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateAndScroll("doctorat");
                    }}
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    Doctorat
                  </a>
                </div>
              </div>

              <div className="relative group border-r border-[whitesmoke] pr-8">
                <button className="flex items-center gap-1 text-lg text-gray-300 hover:text-[#4CC9F0] transition-all duration-200">
                  Studenți <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-sm py-2 border border-[whitesmoke] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <a
                    href="#/activitati-viitoare"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    🚀 Activități viitoare
                  </a>
                  <a
                    href="#/evenimente-trecute"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    🕰️ Evenimente trecute
                  </a>

                  <div className="border-t border-gray-700 my-2"></div>
                  <a
                    href="https://biblioteca.ase.ro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    📖 Biblioteca ASE
                  </a>
                  <button
                    onClick={() => setIsMapOpen(true)}
                    className="w-full text-left px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    🏢 Campus ASE
                  </button>
                  <a
                    href="https://csie.ase.ro/wp-content/uploads/2025/10/Calendarul-Studentului-2025-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    📅 Calendarul Studentului
                  </a>
                  <a
                    href="#/orar"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    📚 Orar
                  </a>
                  <a
                    href="https://csie.ase.ro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    🏛️ Site CSIE
                  </a>
                  <div className="border-t border-gray-700 my-2"></div>
                  <a
                    href="#/databases"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    📊 Baze de date
                  </a>
                  <a
                    href="#/instrumente-analiza"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    💻 Instrumente de analiză
                  </a>
                  <div className="border-t border-gray-700 my-2"></div>
                  <a
                    href="#/studenti-colaboratori"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    🎓 Studenții noștri colaboratori
                  </a>
                  <a
                    href="#/cariera"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    💼 Carieră
                  </a>
                  <a
                    href="#/profesori-coordonatori"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    👨‍🏫 Profesori coordonatori
                  </a>
                  <a
                    href="#/testimoniale"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    💬 Testimoniale
                  </a>
                </div>
              </div>

              <a
                href="#/cercetare"
                className="text-lg text-gray-300 hover:text-[#4CC9F0] transition-all duration-200 border-r border-[whitesmoke] pr-8"
              >
                Cercetare
              </a>
              <a
                href="#/"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndScroll("contact");
                }}
                className="text-lg text-gray-300 hover:text-[#4CC9F0] transition-all duration-200 border-r border-[whitesmoke] pr-8 cursor-pointer"
              >
                Contact
              </a>
              <a
                href="https://csie.ase.ro/oferta-de-mobilitati-erasmus/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-white rounded-md transition-all duration-200 text-base font-medium"
                style={{ background: "#4361EE" }}
              >
                Erasmus+
              </a>
            </nav>

            {/* Mobile buttons */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? (
                  <Moon className="w-6 h-6" />
                ) : (
                  <Sun className="w-6 h-6" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-white hover:bg-white/10 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-white/20 py-4 max-h-[70vh] overflow-y-auto mobile-menu-container"
              style={{ backgroundColor: "#22409a" }}
            >
              <div className="flex flex-col gap-3 px-6">
                <div className="space-y-2">
                  <div className="py-2 text-white font-semibold text-center">
                    Despre noi
                  </div>
                  <div className="pl-4 space-y-2">
                    <a
                      href="#/istoric"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      Istoric
                    </a>
                    <a
                      href="#/cadre-didactice"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      Echipa noastră
                    </a>
                    <a
                      href="#/misiune"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      Misiune
                    </a>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="py-2 text-white font-semibold text-center">
                    Programe studii
                  </div>
                  <div className="pl-4 space-y-2">
                    <button
                      onClick={() => navigateAndScroll("licenta")}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center w-full"
                    >
                      Licență
                    </button>
                    <button
                      onClick={() => navigateAndScroll("master")}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center w-full"
                    >
                      Master
                    </button>
                    <a
                      href="#/cursuri-postuniversitare"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      Cursuri postuniversitare
                    </a>
                    <button
                      onClick={() => navigateAndScroll("doctorat")}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center w-full"
                    >
                      Doctorat
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="py-2 text-white font-semibold text-center">
                    Studenți
                  </div>
                  <div className="pl-4 space-y-2">
                    <a
                      href="#/activitati-viitoare"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      🚀 Activități viitoare
                    </a>
                    <a
                      href="#/evenimente-trecute"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      🕰️ Evenimente trecute
                    </a>
                    <a
                      href="https://biblioteca.ase.ro/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center w-full"
                    >
                      📖 Biblioteca ASE
                    </a>
                    <button
                      onClick={() => {
                        setIsMapOpen(true);
                        setIsMenuOpen(false);
                      }}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center w-full"
                    >
                      🏢 Campus ASE
                    </button>
                    <a
                      href="https://csie.ase.ro/wp-content/uploads/2025/10/Calendarul-Studentului-2025-2026.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      📅 Calendarul Studentului
                    </a>
                    <a
                      href="#/orar"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      📚 Orar
                    </a>
                    <a
                      href="https://csie.ase.ro/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      🏛️ Site CSIE
                    </a>
                    <a
                      href="#/databases"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      📊 Baze de date
                    </a>
                    <a
                      href="#/instrumente-analiza"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      💻 Instrumente de analiză
                    </a>
                    <a
                      href="#/studenti-colaboratori"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      🎓 Studenții noștri colaboratori
                    </a>
                    <a
                      href="#/cariera"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      💼 Carieră
                    </a>
                    <a
                      href="#/profesori-coordonatori"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      👨‍🏫 Profesori coordonatori
                    </a>
                    <a
                      href="#/testimoniale"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      💬 Testimoniale
                    </a>
                  </div>
                </div>
                <div className="border-t border-white/20 pt-3 mt-2 space-y-2">
                  <a
                    href="#/cercetare"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-white font-semibold hover:text-[#4CC9F0] transition-colors text-center"
                  >
                    Cercetare
                  </a>
                  <button
                    onClick={() => navigateAndScroll("contact")}
                    className="block py-2 text-white font-semibold hover:text-[#4CC9F0] transition-colors text-center w-full"
                  >
                    Contact
                  </button>
                  <a
                    href="https://csie.ase.ro/oferta-de-mobilitati-erasmus/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 px-4 text-center text-white rounded-md transition-all font-medium"
                    style={{ background: "#4361EE" }}
                  >
                    Erasmus+
                  </a>
                </div>
                <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/20 mt-2">
                  <a
                    href="https://www.instagram.com/dse_ase/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@dse_ase?_r=1&_t=ZN-96how7lf5qY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="TikTok"
                  >
                    <svg
                      className="w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.53V6.75a4.85 4.85 0 0 1-1.02-.06z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/departamentul-de-statistic%C4%83-%C8%99i-econometrie-0166403b9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/Statistica.Econometrie/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>

      <div style={{ height: isMobile ? "80px" : "12vh" }} />

      <CampusMapPopup isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </>
  );
}
