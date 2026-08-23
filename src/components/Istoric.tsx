import { motion } from 'motion/react';
import { Calendar, BookOpen, Users, Award } from 'lucide-react';
import istoricPhoto from "../assets/IStoric.png";

export function Istoric() {
  return (
    <section id="istoric" className="pt-[1.5cm] pb-24 bg-white dark:bg-gray-900">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#7209B7] text-white px-4 py-2 rounded-full mb-4">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Istoric</span>
          </div>
          <h2 className="text-[#3A0CA3] dark:text-[#4CC9F0] mb-4">Departamentul de Statistică și Econometrie</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Peste 100 de ani de experiență în formarea de specialiști în statistică și econometrie. Descoperă istoria noastră și evoluția domeniului în România.
          </p>
        </motion.div>
      </div>

      {/* Timeline Diagram Section - 80% Width Centered */}
      <div className="max-w-[1400px] mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-[100%] mx-auto bg-blue-50 rounded-3xl shadow-sm p-10 md:p-16 border border-[#4CC9F0]/20 dark:border-gray-700 overflow-hidden dark:bg-gray-800"
        >
          <h3 className="text-3xl md:text-4xl text-[#3A0CA3] dark:text-[#4CC9F0] mb-14 text-center font-bold">
            Cronologia dezvoltării specializării/programului de Statistică în ISEP/ASE în perioada 1948-prezent
          </h3>
          
          {/* Sinusoidal Timeline Image - Full Display */}
          <div className="relative w-full flex items-center justify-center py-10">
            <img 
              src= {istoricPhoto}
              alt="Cronologia dezvoltării specializării/programului de Statistică în ISEP/ASE în perioada 1948-prezent" 
              className="w-full h-auto max-w-full object-contain rounded-xl shadow-sm"
            />
          </div>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm p-8 md:p-12 border border-[#4CC9F0]/20 dark:border-gray-700 mb-12"
        >
          <div className="prose prose-lg max-w-none">
            {/* Istoric Departament */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <BookOpen className="w-8 h-8 text-[#4361EE] dark:text-[#A5B8FF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl text-[#3A0CA3] dark:text-[#4CC9F0] mb-4">Istoria Programului de Statistică</h3>
                </div>
              </div>

              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Activitatea în domeniul statisticii în cadrul Academiei de Studii Economice din București are o tradiție îndelungată, fiind strâns legată de evoluția învățământului economic românesc încă de la înființarea ASE, în anul <strong>1913</strong>.
                </p>

                <p>
                  Un moment definitoriu pentru dezvoltarea statisticii academice din România îl reprezintă anul <strong className="text-[#7209B7] dark:text-[#DDB8FF]">1948</strong>, când <strong className="text-[#7209B7] dark:text-[#DDB8FF]">prima specializare de Statistică din România</strong> a fost înființată de instituția noastră, în cadrul Facultății de Planificare și Administrație Economică. Importanța și dinamica acestui domeniu au condus, în numai trei ani, la necesitatea dezvoltării unei structuri academice dedicate.
                </p>

                <p>
                  Astfel, în <strong>1951</strong>, a fost înființată <strong className="text-[#4361EE] dark:text-[#A5B8FF]">Facultatea de Statistică</strong>, care cuprindea patru specializări distincte, cu durata de patru ani: Statistică industrială, Statistică agricolă, Statistică comercială și Statistică demografică, contribuind decisiv la consolidarea statisticii ca domeniu fundamental al formării economice.
                </p>

                <p>
                  Ulterior, în contextul reorganizării învățământului superior și al dezvoltării Facultății de Cibernetică, Statistică și Informatică Economică (CSIE), statisticii și econometriei li s-a consolidat rolul central în formarea cantitativă modernă. În acest cadru s-a dezvoltat <strong className="text-[#7209B7] dark:text-[#DDB8FF]">Departamentul de Statistică și Econometrie</strong>, ca structură academică distinctă, cu responsabilități didactice și de cercetare la nivel de licență, masterat și doctorat.
                </p>

                <p>
                  Prestigiul academic al departamentului este reflectat și de contribuția sa la nivel național, prin faptul că membri ai departamentului au ocupat funcția de <strong className="text-[#4361EE] dark:text-[#A5B8FF]">președinte al Institutului Național de Statistică</strong>, respectiv <strong>Manea Mănescu</strong>, <strong>Mircea Biji</strong>, <strong>Ionescu Constantin</strong>, <strong>Pavel Wagner</strong>, <strong>Virgil Voineagu</strong> și <strong>Tudorel Andrei</strong>, evidențiind rolul activ al școlii de statistică din ASE în dezvoltarea statisticii oficiale din România.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action - Vezi toate listele */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16 mb-12"
        >
          <a
            href="#/liste-profesori"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#4361EE] text-white rounded-full transition-all duration-300"
          >
            <Users className="w-5 h-5" />
            <span className="font-semibold">Vezi toate listele de profesori și conducători</span>
            <Award className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}