import { motion } from "motion/react";
import { Code } from "lucide-react";
import { SimpleHeader } from "../components/SimpleHeader";
import { Footer } from "../components/Footer";

export function StudentiColaboratoriPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <SimpleHeader />

      <div className="pt-14 pb-20 flex-grow">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#4CC9F0] rounded-full mb-6">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-[#4361EE] dark:text-[#A5B8FF]">
              Studenții noștri colaboratori
            </h1>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border-2 border-gray-200 dark:border-gray-700">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-3">
                  Departamentul nostru colaborează activ cu studenți și
                  absolvenți implicați în diverse proiecte academice și de
                  dezvoltare instituțională. Le mulțumim pentru contribuțiile
                  lor valoroase.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-0">
                  * Pentru mai multe informații despre studenți, apăsați pe
                  numele lor pentru a accesa profilurile LinkedIn.
                </p>
              </div>
            </div>
            {/* Dezvoltarea platformei web */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border-2 border-[#4361EE] dark:border-[#4CC9F0]">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <h3 className="text-2xl font-semibold text-[#4361EE] dark:text-[#A5B8FF] mb-4 mt-0">
                  Dezvoltarea platformei web a departamentului
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  <a
                    href="https://www.linkedin.com/in/teodor-vasile-constantin123/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-xl text-[#047857] dark:text-[#34D399] hover:underline transition-all"
                  >
                    Constantin Teodor-Vasile
                  </a>{" "}
                  – student, program Master - Statistică aplicată și Data
                  Science: a dezvoltat integral platforma web a departamentului.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  <a
                    href="https://www.linkedin.com/in/andreea-ologu-467b5b340/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-xl text-[#7209B7] dark:text-[#DDB8FF] hover:underline transition-all"
                  >
                    Ologu Andreea Elena
                  </a>{" "}
                  – studentă, Communication and Multimedia Design, Universitatea
                  din Leeuwarden: a realizat identitatea vizuală a
                  departamentului (logo și elemente grafice).
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  <a
                    href="https://www.linkedin.com/in/caragea-iliana/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-xl text-[#4361EE] dark:text-[#A5B8FF] hover:underline transition-all"
                  >
                    Iliana Caragea
                  </a>{" "}
                  – studentă doctorandă Școala Doctorală Cibernetică și
                  Statistică Economică: contribuie la actualizarea și
                  întreținerea paginii web a departamentului.
                </p>
              </div>
            </div>
            {/* Organizarea seminarului Data&Lunch */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border-2 border-[#7209B7] dark:border-[#B5179E]">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <h3 className="text-2xl font-semibold text-[#7209B7] dark:text-[#DDB8FF] mb-4 mt-0">
                  Organizarea și desfășurarea seminarului doctoral „Data&Lunch"
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-0">
                  <a
                    href="https://www.linkedin.com/in/ioana-birlan-86b30a203/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-xl text-[#7209B7] dark:text-[#DDB8FF] hover:underline transition-all"
                  >
                    Ioana Bîrlan
                  </a>
                  ,{" "}
                  <a
                    href="https://www.linkedin.com/in/denisa-tr%C4%83%C8%99can-455583234/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-xl text-[#7209B7] dark:text-[#DDB8FF] hover:underline transition-all"
                  >
                    Denisa Trascan
                  </a>
                  ,{" "}
                  <a
                    href="https://www.linkedin.com/in/camelia-dan-589244245/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-xl text-[#7209B7] dark:text-[#DDB8FF] hover:underline transition-all"
                  >
                    Camelia Dan
                  </a>{" "}
                  – studente doctorande Școala Doctorală Cibernetică și
                  Statistică Economică: contribuie la organizarea și
                  desfășurarea seminarului doctoral{" "}
                  <a
                    href="https://csie.ase.ro/data-lunch-seria-2-unde-ideile-devin-cunoastere/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#7209B7] dark:text-[#DDB8FF] hover:underline transition-all"
                  >
                    „Data&Lunch"
                  </a>
                  .
                </p>
              </div>
            </div>
            {/* Comunicare și promovare pe social media */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border-2 border-[#4CC9F0] dark:border-[#4361EE]">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <h3 className="text-2xl font-semibold text-[#4361EE] dark:text-[#4CC9F0] mb-4 mt-0">
                  Comunicare și promovare pe platforme de social media
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-0">
                  <a
                    href="https://www.linkedin.com/in/eduard-manta-755695117/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-xl text-[#4361EE] dark:text-[#4CC9F0] hover:underline transition-all"
                  >
                    Eduard Manta
                  </a>
                  ,{" "}
                  <a
                    href="https://www.linkedin.com/in/ioana-birlan-86b30a203/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-xl text-[#4361EE] dark:text-[#4CC9F0] hover:underline transition-all"
                  >
                    Ioana Bîrlan
                  </a>
                  ,{" "}
                  <a
                    href="https://www.linkedin.com/in/maria-bianca-bolboa%C8%99%C4%83-389b95290/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-xl text-[#4361EE] dark:text-[#4CC9F0] hover:underline transition-all"
                  >
                    Maria Bolboașă
                  </a>
                  ,{" "}
                  <a
                    href="https://www.linkedin.com/in/camelia-dan-589244245/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-xl text-[#4361EE] dark:text-[#4CC9F0] hover:underline transition-all"
                  >
                    Camelia Dan
                  </a>{" "}
                  – studenți doctoranzi Școala Doctorală Cibernetică și
                  Statistică Economică: contribuie la crearea de conținut și
                  administrarea paginilor de social media ale departamentului.
                </p>
              </div>
            </div>
            {/* Studiu Național */}
            <div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8"
              style={{ border: "2px solid #10B981" }}
            >
              <div className="max-w-none">
                <h3 className="text-2xl font-semibold text-[#047857] dark:text-[#34D399] mb-2 mt-0">
                  STUDIU NAȚIONAL
                </h3>
                <h4 className="text-xl font-semibold text-[#047857] dark:text-[#34D399] mb-2 mt-2">
                  Experiența Bacalaureatului în România și Republica Moldova –
                  fapte, trăiri și date statistice
                </h4>
                <p className="text-base italic text-gray-600 dark:text-gray-400 mb-4">
                  100 de ani de la reintroducerea Bacalaureatului în România
                  (1925–2025)
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Studenți voluntari alături de cadre didactice din România și
                  Moldova – uniți de pasiunea pentru educație și de dorința de a
                  înțelege, prin date statistice și mărturii istorice, rolul
                  fundamental al examenului de Bacalaureat în modelarea
                  generațiilor prezente și viitoare:
                </p>

                {/* First 6 names in 2 columns */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {[
                    {
                      name: "ANGHEL Ilinca",
                      link: "https://www.linkedin.com/in/ilincaanghel",
                    },
                    {
                      name: "ENESCU Antonia",
                      link: "https://www.linkedin.com/in/antonia-enescu-b3034825a",
                    },
                    {
                      name: "PETRE Vlad",
                      link: "https://www.linkedin.com/in/vlad-andrei-petre-aaab25232",
                    },
                    {
                      name: "ROMAN Andrei",
                      link: "https://ro.linkedin.com/in/andrei-roman-b6ab0b386",
                    },
                    {
                      name: "SARAEV Alexandru",
                      link: "https://www.linkedin.com/in/alexandru-saraev/",
                    },
                    {
                      name: "SOUEIDAN Edward Philipe",
                      link: "https://www.linkedin.com/in/philipe-soueidan",
                    },
                  ].map((student, index) => (
                    <div key={index} className="text-left">
                      <a
                        href={student.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-lg text-[#047857] dark:text-[#34D399] hover:underline transition-all"
                      >
                        {student.name}
                      </a>
                    </div>
                  ))}
                </div>

                {/* Last name centered */}
                <div className=" mt-2">
                  <a
                    href="https://www.linkedin.com/in/maria-soare-9b6669381"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-lg text-[#047857] dark:text-[#34D399] hover:underline transition-all"
                  >
                    SOARE-IONETE G G Maria-Gabriela
                  </a>
                </div>
              </div>
            </div>{" "}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
