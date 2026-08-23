import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import imgCSIE from "../assets/CSIE.jpg";
import imgGradinaCSIE from "../assets/gradinacsie.jpg";
import imgASE from "../assets/ASE.jpg";
import imgGradinaCSIE2 from "../assets/gradina csie 2.jpg";
import examenAdmitere from "../assets/examen admitere.png";

const slideImages = [imgCSIE, imgGradinaCSIE, imgASE, imgGradinaCSIE2];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 6700);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? slideImages.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % slideImages.length);
  };

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 py-10 sm:py-16 lg:py-20 section-padding-mobile w-full max-w-full">
      <div className="relative z-10 px-4 w-full px-mobile-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 gap-mobile-4">
          {/* Left Side - Text + Simulare Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 text-center lg:text-left flex flex-col"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight hero-title">
              <span className="dark:hidden" style={{ color: "#22409a" }}>
                Departamentul de{" "}
                <span
                  style={{ color: "#7209B7" }}
                >
                  Statistică și Econometrie
                </span>
              </span>
              <span className="hidden dark:inline" style={{ color: "#ffffff" }}>
                Departamentul de{" "}
                <span
                  style={{ color: "#4CC9F0" }}
                >
                  Statistică și Econometrie
                </span>
              </span>
            </h1>

            <p
              className="text-xl leading-relaxed hero-subtitle mb-8"
              style={{
                color: "#22409a",
                lineHeight: "1.6",
                WebkitTextStroke: "0.5px rgba(255, 255, 255, 0.8)",
                paintOrder: "stroke fill",
              }}
            >
              <span className="dark:hidden">
                Educaţie, cercetare și analiză cantitativă pentru economia
                modernă
              </span>
              <span
                className="hidden dark:inline"
                style={{
                  WebkitTextStroke: "1px rgba(0, 0, 0, 0.6)",
                  color: "#e5e7eb",
                }}
              >
                Educaţie, cercetare și analiză cantitativă pentru economia
                modernă
              </span>
            </p>

            {/* Simulare Examen Button */}
            <div className="flex justify-center lg:justify-start mt-auto">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  /* adaugă navigarea dorită aici */
                }}
                className="focus:outline-none"
                aria-label="Examen Admitere 21 iulie 2026"
              >
                <img
                  src={examenAdmitere}
                  alt="Examen Admitere 21 iulie 2026"
                  className="object-contain drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                  style={{ width: "350px", height: "300px", marginTop: "50px" }}
                />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Image Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1 w-full slideshow-wrapper"
          >
            <div
              className="relative w-full rounded-xl overflow-hidden shadow-sm group slideshow-container"
              style={{ aspectRatio: "4/3" }}
            >
              {slideImages.map((image, index) => (
                <div
                  key={index}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    opacity: currentSlide === index ? 1 : 0,
                    transition: "opacity 1.2s ease-in-out",
                  }}
                >
                  <img
                    src={image}
                    alt={`ASE Slide ${index + 1}`}
                    className="w-full h-full object-contain bg-white dark:bg-gray-900"
                  />
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                aria-label="Imagine anterioară"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white btn-icon-mobile" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                aria-label="Imagine următoare"
              >
                <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white btn-icon-mobile" />
              </button>

              {/* Slideshow Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {slideImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className="h-2 rounded-full transition-all duration-500"
                    style={{
                      backgroundColor:
                        currentSlide === index
                          ? "#4CC9F0"
                          : "rgba(255, 255, 255, 0.5)",
                      width: currentSlide === index ? "24px" : "8px",
                    }}
                    aria-label={`Mergi la imaginea ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
