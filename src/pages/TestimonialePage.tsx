import { SimpleHeader } from '../components/SimpleHeader';
import { Footer } from '../components/Footer';
import { MessageCircle, Quote, Award } from 'lucide-react';

// Imports imagini
import widsImage from '../assets/datathon_1.jpg.jpeg';
import vladImage from '../assets/vlad teleaba.png';
import adrianaImage from '../assets/Adriana Pedra.jpg';
import oanaImage from '../assets/Oana Pascalache.jpg';

export default function TestimonialePage() {
  const testimoniale = [
    {
      id: 1,
      text: `Specializarea Statistică și Previziune Economică, alături de Masteratul Statistică Aplicată și Data Science din cadrul CSIE - Departamentul de Statistică și Econometrie, a fost exact mediul de care aveam nevoie ca să ne depășim limitele și să ne transformăm pasiunea pentru date într-o carieră reală.

Profesorii ne-au susținut constant, ne-au provocat să gândim critic și ne-au îndrumat spre performanță, nu doar teoretic, ci și aplicat. Au existat numeroase momente în care ni s-au prezentat oportunități din piața muncii aducând persoane relevante din domeniul nostru, ne-au încurajat să participăm la concursuri, să ne punem la încercare creativitatea și să aplicăm teoria învățată. Totuși, un moment definitoriu a fost participarea la Women in Data Science Datathon, unde cu sprijinul și încrederea lor, echipa noastră a obținut recunoaștere la nivel global, câștigând WiDS Global Datathon 2025 (locul 5 internațional) și WiDS Datathon++ University Edition 2024 (locul 3 internațional).

Pe parcursul celor 5 ani de studiu am învățat să aplicăm statistica și data science dincolo de manuale, lucrând pe studii de caz concrete și seturi de date complexe, care reflectă provocările din lumea reală. În același timp, ni s-au oferit oportunități valoroase de networking și expunere profesională, unde am cunoscut oameni din industrie și mediul academic, am participat la conferințe, am fost invitate la radio și la diverse evenimente în calitate de speakeri. Toate aceste experiențe ne-au ajutat să ne construim încrederea în abilitățile noastre și vizibilitatea profesională.

Cursurile au fost bine structurate, actuale și orientate spre piața muncii, iar acest lucru s-a văzut prin tranziția naturală și rapidă către joburi în domeniul economic, data science și analiza datelor.

Un aspect esențial și important al acestei specializări a fost accentul pus pe colaborare și lucrul în echipă, într-un mediu care a încurajat schimbul de idei și abordările interdisciplinare. Proiectele realizate în echipă ne-au învățat să comunicăm eficient rezultatele tehnice, să ne asumăm roluri clare și să gestionăm responsabilitățile desemnate, exact așa cum se întâmplă în mediul profesional. Acest aspect a fost fundamental în formarea noastră pentru a lucra în medii dinamice.

Experiența dobândită urmând această specializare ne-a ajutat să devenim adaptabili într-un domeniu care se schimbă constant. Am învățat nu doar anumite instrumente sau tehnici, ci și cum să ne dezvoltăm continuu, să ținem pasul cu noile tehnologii și să ne perfecționăm pe termen lung.

Această specializare nu ne-a oferit doar competențe tehnice solide, ci și curajul de a ne asuma provocări și de a performa la nivel internațional.`,
      authors: ['Ioana Bîrlan', 'Bianca Conțolencu', 'Ana Oprea', 'Gianina Petrașcu'],
      subtitle: 'Absolvente CSIE și câștigătoare WiDS Datathon 2025 & 2024',
      image: widsImage,
      awards: ['WiDS Global Datathon 2025 - Locul 5 internațional', 'WiDS Datathon++ University Edition 2024 - Locul 3 internațional']
    },
    {
      id: 2,
      text: `Fac parte din promoția 2011 a facultății de Cibernetică Statistică și Informatică Economică. Am ales CSIE, la fel ca mulți alții, pentru că am ezitat între zona de economie/finanțe și cea de IT. Pe parcurs am descoperit un alt drum, cel de statistică/data science/machine learning, domenii care sunt și vor rămâne "pe val" în prezent și viitor. La 10 ani de la terminarea licenței, CSIE a însemnat pentru mine legarea unor prietenii de o viață, cele mai tari petreceri și baluri ale bobocilor, dar și deschiderea multor orizonturi profesionale, care ulterior mi-au adus proiecte în mai multe țări și pe mai multe continente.

Am continuat cu un master în Franța în Econometrie și Statistică Aplicată, am lucrat în consultanță 7 ani în Franța, iar din 2019 m-am întors în România, unde lucrez la Deloitte în Data Science pentru Gestiunea Riscului în bănci. CSIE deschide foarte multe uși în viață și cine este adaptabil și "pe fază" își va găsi cu siguranță propriul drum, cu numeroase satisfacții, în domenii care poate nici nu există în prezent.`,
      authors: ['Vlad Teleabă'],
      subtitle: 'Absolvent CSIE 2011, Data Science @ Deloitte',
      image: vladImage
    },
    {
      id: 3,
      text: `Cu 12 ani în urmă, am aplicat la 4 facultăți unde am intrat la buget, însă la CSIE îmi doream cel mai mult. Încă din primul semestru am știut că Statistica este specializarea care mi se potrivește cel mai bine. Pot spune că am ales cu inima, fiind influențată de pasiunea câtorva profesori de la această specializare și nu regret nicio secundă.

Am fost șefă de grupă și apoi de serie, din dorința de a fi liantul dintre colegi și profesori, de a ajuta cum pot mai bine la o comunicare și organizare eficientă. Am fost voluntar într-un ONG specializat pe educația liceenilor unde am făcut primele cercetări. Toate acestea m-au ajutat să găsesc mai ușor primul job, în cercetare de marketing, un domeniu dinamic, ce mi-a stârnit curiozitatea, m-a provocat să găsesc soluții pentru probleme complexe și unde am aplicat noțiuni teoretice învățate pe perioada facultății.

Mai apoi am experimentat domeniul imobiliar unde am folosit un tool complex de verificare a evaluărilor imobiliare, fiindu-mi ușor să înțeleg modelul statistic din spatele acestuia și să propun soluții de îmbunătățire a bazei de date folosite. La ultimele 2 job-uri, chiar dacă m-am depărtat puțin de specializarea absolvită, lucrând cu baze de date, consider că modul de gândire și abilitățile dobândite în timpul facultății și ulterior la master m-au ajutat să fac față cu brio provocărilor.

Pe voi, cei care ați putea urma această facultate, vă îndemn să profitați de orice oportunitate. Să vă distrați, să vă faceți prieteni, să munciți pentru ceea ce vă pasionează și să fiți perseverenți în împlinirea visurilor. Vă doresc să aveți trei ani memorabili, în urma cărora să dobândiți un bagaj de cunoștințe pe care să le folosiți la job-ul mult visat. Mult succes!`,
      authors: ['Adriana Preda'],
      subtitle: 'Absolventă CSIE, Specialist în Marketing Research și Baze de Date',
      image: adrianaImage
    },
    {
      id: 4,
      text: `Întotdeauna am fost pasionată de informatică dar cum nu m-am împrietenit prea tare cu fizica, ci eram mai degrabă atrasă de economie, am știut încă din clasa a X-a că voi urma CSIE în cadrul ASE, ba chiar aveam deja o îndrumare puternică spre specializarea de Statistică. Această afinitate a mea către statistică a fost confirmată după primul an de facultate când a trebuit să-mi aleg specializarea. Nu am avut niciun dubiu și am ales Statistica.

În anii petrecuți pe băncile Statisticii am avut ocazia de a urma cursurile domnului profesor Daniel Pele, care ulterior mi-a devenit îndrumător pentru lucrarea de licență. De asemenea, am avut șansa să urmez cursul doamnei profesor Constanța Mihăescu, care pentru mine a însemnat un model de urmat în viață. Cei doi profesori m-au inspirat enorm. Cred că uneori nici nu-și dau seama cât de importantă este energia pe care o transmit studenților. Eu am simțit-o din plin!

CSIE mi-a oferit șansa să încerc experiența de a studia și locui în altă țară (Franța, în cazul meu) prin intermediul burselor Erasmus. Experiența asta mi-a oferit multe lecții, dar mi-a arătat în primul rând că nivelul de educație pe care eu l-am primit îndeplinește criteriile internaționale.

După Erasmus, m-am întors în Franța, de data aceasta pentru o perioadă mai lungă. Mi-am terminat studiile în cadrul Universității Pantheon-Sorbonne, Paris. Și tot în Paris mi-am început cariera ca statistician econometrist în domeniul riscului de credit, iar timp de 7 ani am lucrat la băncile BPCE și Natixis. În prezent, locuiesc în Zurich și lucrez ca business analyst pe risc de credit la Credit Suisse.

Sunt foarte recunoscătoare pentru ce am învățat la CSIE. Anii de facultate au fost pentru mine ca o trambulină care mi-a arătat cât de sus pot să sar. Cea mai importantă lecție pe care am reținut-o este aceea de a urma pasiunea în tot ceea ce fac, așa că dacă aș avea un sfat pentru boboci ar fi să învețe, să fie consecvenți, să fie deschiși către noi oportunități și bineînțeles să își urmeze visele. Pasiunea, seriozitatea și munca sunt întotdeauna răsplătite :)`,
      authors: ['Oana Pascalache'],
      subtitle: 'Absolventă CSIE, Business Analyst @ Credit Suisse, Zurich',
      image: oanaImage
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <SimpleHeader />
      
      <main className="pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16" style={{ marginTop: "1.5cm" }}>
            <div className="inline-flex items-center gap-2 bg-[#7209B7] text-white px-4 py-2 rounded-full mb-8">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">TESTIMONIALE</span>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Povești de succes ale absolvenților noștri în domeniul statisticii și data science
            </p>
          </div>

          {/* Testimoniale */}
          <div className="space-y-12">
            {testimoniale.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-[#4CC9F0]/20 dark:border-gray-700 overflow-hidden"
              >
                {/* Image Section */}
                {testimonial.image && (
                  <>
                    {testimonial.awards && testimonial.awards.length > 0 ? (
                      <div className="relative w-full h-96 overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt="Echipa câștigătoare WiDS Datathon"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex flex-wrap gap-2">
                            {testimonial.awards.map((award, idx) => (
                              <div
                                key={idx}
                                className="inline-flex items-center gap-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-4 py-2 rounded-full border border-[#F59E0B]/30"
                              >
                                <Award className="w-4 h-4 text-[#B45309] dark:text-[#F59E0B]" />
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">{award}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-center pt-8">
                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#4361EE]/20 dark:border-[#4CC9F0]/30 shadow-sm">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.authors[0]}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Content Section */}
                <div className="p-8 md:p-12">
                  <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 bg-[#7209B7] rounded-full flex items-center justify-center">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none mb-8">
                    {testimonial.text.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-justify">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-[#4CC9F0]/20 dark:border-gray-700">
                    <div className="text-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Testimonial oferit de:</p>
                      <div className="mb-3">
                        {testimonial.authors.map((author, idx) => (
                          <span key={idx} className="inline-block">
                            <span className="font-semibold text-[#4361EE] dark:text-[#A5B8FF]">{author}</span>
                            {idx < testimonial.authors.length - 1 && <span className="text-gray-500 dark:text-gray-400 mx-2">•</span>}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        {testimonial.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}