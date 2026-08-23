import { SimpleHeader } from '../components/SimpleHeader';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { Award, TrendingUp, BookOpen, Clock, Calendar } from 'lucide-react';

const sefiCatedre = [
  { perioada: '1951-1953', nume: 'Zoltan Csendeş', catedra: 'Statistică teoretică' },
  { perioada: '1951-1953', nume: 'Roman Moldovan', catedra: 'Statistică economică' },
  { perioada: '1951-1953', nume: 'Vasile Bratu', catedra: 'Statistica demografiei social-culturale' },
  { perioada: '1951-1953', nume: 'Gh. Fenyö', catedra: 'Statistică economică și Statistica desfacerii' },
  { perioada: '1953-1979', nume: 'Mircea Biji', catedra: 'Statistică teoretică și economică (Statistica Ramuri I+II)' },
  { perioada: '1979-1985', nume: 'Ion Capanu', catedra: 'Statistică teoretică și economică' },
  { perioada: '1985-1989', nume: 'Elena Maria Biji', catedra: 'Conducere planificată și Statistica economiei naționale' },
  { perioada: '1990-1999', nume: 'Tudor Baron', catedra: 'Statistică și Previziune Economică' },
  { perioada: '1993-2002', nume: 'Gheorghe Vasilescu', catedra: 'Analiza Statistică și Evaluare' },
  { perioada: '1999-2011', nume: 'Vergil Voineagu', catedra: 'Statistică și Previziune Economică' },
  { perioada: '2011-2012', nume: 'Constantin Mitruț', catedra: 'Statistică și Econometrie' },
  { perioada: '2012-2015', nume: 'Liviu Stelian Begu', catedra: 'Statistică și Econometrie' },
  { perioada: '2015-2019', nume: 'Liviu Stelian Begu', catedra: 'Statistică și Econometrie' },
  { perioada: '2019-prezent', nume: 'Erika Marin', catedra: 'Statistică și Econometrie' },
];

const cronologieDezvoltare = [
  { perioada: '1948-1949', facultate: 'Facultatea de Planificare și Administrație Economică', specializare: 'Statistică', durata: '3' },
  { perioada: '1949-1950', facultate: 'Facultatea de Planificare', specializare: 'Statistică', durata: '3' },
  { perioada: '1951-1957', facultate: 'Facultatea de Statistică', specializare: 'Statistică industrială', durata: '4' },
  { perioada: '1951-1957', facultate: 'Facultatea de Statistică', specializare: 'Statistică agricolă', durata: '4' },
  { perioada: '1951-1957', facultate: 'Facultatea de Statistică', specializare: 'Statistică comercială', durata: '4' },
  { perioada: '1951-1957', facultate: 'Facultatea de Statistică', specializare: 'Statistică demografică', durata: '4' },
  { perioada: '1958-1963', facultate: 'Facultatea de Economie Generală', specializare: 'Statistică economică', durata: '5' },
  { perioada: '1964-1966', facultate: 'Facultatea de Economie Generală', specializare: 'Statistica industriei, construcțiilor și transporturilor', durata: '5' },
  { perioada: '1964-1966', facultate: 'Facultatea de Economie Generală', specializare: 'Statistica agriculturii, circulației mărfurilor și populației', durata: '5' },
  { perioada: '1967-1970', facultate: 'Facultatea de Calcul Economic și Cibernetică Economică', specializare: 'Statistica industriei, construcțiilor și transporturilor', durata: '4 ½' },
  { perioada: '1967-1970', facultate: 'Facultatea de Calcul Economic și Cibernetică Economică', specializare: 'Statistica agriculturii, circulației mărfurilor și a populației', durata: '4 ½' },
  { perioada: '1971-1973', facultate: 'Facultatea de Calcul Economic și Cibernetică Economică', specializare: 'Statistică industrială', durata: '4 ½' },
  { perioada: '1971-1973', facultate: 'Facultatea de Calcul Economic și Cibernetică Economică', specializare: 'Statistică agrară', durata: '4 ½' },
  { perioada: '1974-1976', facultate: 'Facultatea de Cibernetică Economică și Statistică', specializare: 'Cibernetică economică și statistică', durata: '4' },
  { perioada: '1977-1989 (sem I)', facultate: 'Facultatea de Planificare și Cibernetică Economică', specializare: 'Planificare și cibernetică economică', durata: '4' },
  { perioada: '1989 (sem II)-1990', facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică', specializare: 'Statistică economică', durata: '4' },
  { perioada: '1991-2004', facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică', specializare: 'Statistică economică și socială', durata: '5' },
  { perioada: '2005-prezent', facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică', specializare: 'Statistică și previziune economică', durata: '3' },
];

const personalDidactic = [
  { nume: 'Cihoski Stanislas', disciplina: 'Statistică, în special economică', data: '2 iulie 1913' },
  { nume: 'Stănescu Ștefan', disciplina: 'Statistică, în special economică', data: '1925' },
  { nume: 'Hașeganu Dumitru', disciplina: 'Teoria statisticii', data: '1 noiembrie 1926' },
  { nume: 'Ivănescu Ion', disciplina: 'Statistică Ramuri II', data: '27 aprilie 1939' },
  { nume: 'Stănciulescu Ion', disciplina: 'Statistică Ramuri II', data: '27 noiembrie 1939' },
  { nume: 'Moldovan Roman', disciplina: 'Statistică economică', data: '1941' },
  { nume: 'Dorcioaică Ștefan', disciplina: 'Statistică economică', data: '1 octombrie 1947' },
  { nume: 'Mănescu Manea', disciplina: 'Teoria statisticii', data: '22 aprilie 1948' },
  { nume: 'Albu Longhin', disciplina: 'Statistică teoretică și economică', data: '1 decembrie 1948' },
  { nume: 'Biji Mircea Dragoș', disciplina: 'Teoria statisticii', data: '15 noiembrie 1948' },
  { nume: 'Rădulescu Gheorghe', disciplina: 'Statistică economică', data: '10 noiembrie 1948' },
  { nume: 'Balcaș Augustin', disciplina: 'Statistică economică', data: '1949' },
  { nume: 'Bocat Eugen', disciplina: 'Statistică Ramuri II', data: '14 februarie 1949' },
  { nume: 'Ferenbach Iosif', disciplina: 'Statistică economică', data: '20 ianuarie 1949' },
  { nume: 'Ghiulea N.', disciplina: 'Statistică', data: '1949' },
  { nume: 'Melica Ion', disciplina: 'Statistică Ramuri II', data: '30 noiembrie 1949' },
  { nume: 'Capanu Ion', disciplina: 'Statistică economică', data: '30 octombrie 1950' },
  { nume: 'Coraliu Lucia', disciplina: 'Teoria statisticii', data: '1 septembrie 1950' },
  { nume: 'Lescov Maria', disciplina: 'Teoria statisticii', data: '15 septembrie 1950' },
  { nume: 'Stoichiță Ion', disciplina: 'Teoria statisticii', data: '1 septembrie 1950' },
  { nume: 'Băjan Ana', disciplina: 'Teoria statisticii', data: '1 septembrie 1952' },
  { nume: 'Catană Vasile', disciplina: 'Statistică Ramuri II', data: '1952' },
  { nume: 'Florea Ștefan', disciplina: 'Statistică Ramuri II', data: '15 septembrie 1952' },
  { nume: 'Istrătescu Elena', disciplina: 'Statistică economică', data: '1 septembrie 1952' },
  { nume: 'Ițigan Constantin', disciplina: 'Statistică economică', data: '1 septembrie 1952' },
  { nume: 'Rădulescu Mircea', disciplina: 'Statistică Ramuri II', data: '1 septembrie 1952' },
  { nume: 'Biji Elena Maria', disciplina: 'Statistică economică', data: '1953' },
  { nume: 'Doboș Iosif', disciplina: 'Statistică economică', data: '1 februarie 1953' },
  { nume: 'Jivănescu Gheorghe', disciplina: 'Statistică economică', data: '15 septembrie 1953' },
  { nume: 'Pintilie Lucia', disciplina: 'Statistică teoretică și economică', data: '1953' },
  { nume: 'Raucu Niculae', disciplina: 'Teoria statisticii', data: '15 septembrie 1953' },
  { nume: 'Vasilescu Florea', disciplina: 'Statistică economică', data: '1 septembrie 1953' },
  { nume: 'Vasilescu Gheorghe', disciplina: 'Statistică economică', data: '1 septembrie 1953' },
  { nume: 'Vasilescu Marinache', disciplina: 'Statistică economică', data: '15 septembrie 1953' },
  { nume: 'Anastasescu Mihail', disciplina: 'Statistică', data: '1 septembrie 1954' },
  { nume: 'Bulgaru Mircea', disciplina: 'Teoria statisticii', data: '1 septembrie 1954' },
  { nume: 'Ciobanu Constantin', disciplina: 'Statistică Ramuri II', data: '1 septembrie 1954' },
  { nume: 'Falcea Simina', disciplina: 'Teoria statisticii', data: '1 octombrie 1954' },
  { nume: 'Gaspar Virgil', disciplina: 'Statistică economică', data: '1 septembrie 1954' },
  { nume: 'Grosu Călin Lidia', disciplina: 'Statistică Ramuri II', data: '1 septembrie 1954' },
  { nume: 'Ionescu Constantin', disciplina: 'Statistică Ramuri II', data: '1 septembrie 1954' },
  { nume: 'Mesaroș Emil', disciplina: 'Statistică Ramuri II', data: '1 septembrie 1954' },
  { nume: 'Severin Ion', disciplina: 'Teoria statisticii', data: '1 septembrie 1954' },
  { nume: 'Ștefănescu Ștefan', disciplina: 'Statistică Ramuri II', data: '1 septembrie 1954' },
  { nume: 'Tövissi Ludovic', disciplina: 'Teoria statisticii', data: '2 octombrie 1954' },
  { nume: 'Trebici Vladimir L.', disciplina: 'Statistică Ramuri II', data: '1 octombrie 1954' },
  { nume: 'Vieru Ioana', disciplina: 'Statistică Ramuri II', data: '1 mai 1954' },
  { nume: 'Cristureanu Titus', disciplina: 'Statistică comerțului exterior', data: '1955' },
  { nume: 'Munteanu Samoilă', disciplina: 'Statistică Ramuri II', data: '1 septembrie 1955' },
  { nume: 'Moineagu Constantin', disciplina: 'Teoria statisticii', data: '4 noiembrie 1955' },
  { nume: 'Onica Petre', disciplina: 'Statistică Ramuri II', data: '1 septembrie 1955' },
  { nume: 'Protopopescu V. V.', disciplina: 'Statistică economică', data: '1 februarie 1956' },
  { nume: 'Chivu Gheorghe', disciplina: 'Statistică Ramuri II', data: '16 martie 1957' },
  { nume: 'Petrovici Camenco', disciplina: 'Statistică Ramuri II', data: '1 februarie 1957' },
  { nume: 'Moldovan Roman', disciplina: 'Statistică teoretică și economică', data: '1959' },
  { nume: 'Bădiță Maria', disciplina: 'Statistică teoretică și economică', data: '1961' },
  { nume: 'Țigănescu Ion Eugen', disciplina: 'Planificare și cibernetică economică', data: '1962' },
  { nume: 'Sora Virgil', disciplina: 'Statistică și Econometrie', data: '1963' },
  { nume: 'Maftei Ion', disciplina: 'Statistică teoretică și economică', data: '1968' },
  { nume: 'Pârlog Cornelia', disciplina: 'Statistică și econometrie', data: '1968' },
  { nume: 'Pecican Eugen', disciplina: 'Statistică', data: '1968' },
  { nume: 'Stănescu Maria', disciplina: 'Statistică teoretică și economică', data: '1968' },
  { nume: 'Wagner Pavel', disciplina: 'Statistică teoretică și economică', data: '1968' },
  { nume: 'Wagner Florica', disciplina: 'Statistica industriei', data: '1968' },
  { nume: 'Korka Mihai', disciplina: 'Statistica comerțului exterior', data: '1969' },
  { nume: 'Lilea Eugenia', disciplina: 'Statistică', data: '1969' },
  { nume: 'Slăvescu Vasilica', disciplina: 'Planificare și cibernetică economică', data: '1969' },
  { nume: 'Stoica Gheorghe', disciplina: 'Statistică', data: '1969' },
  { nume: 'Tănăsoiu Ovidiu Emil', disciplina: 'Statistică și Econometrie', data: '1969' },
  { nume: 'Frățilă Gheorghe', disciplina: 'Economie și statistică agrară', data: '1971' },
  { nume: 'Isaic-Maniu Alexandru', disciplina: 'Statistică', data: '1971' },
  { nume: 'Porojan Dumitru', disciplina: 'Statistică și teoria sondajului', data: '1971' },
  { nume: 'Zaharia Octavian', disciplina: 'Statistică', data: '1972' },
  { nume: 'Anghelache Constantin', disciplina: 'Statistică', data: '1974' },
  { nume: 'Antonescu Constantin', disciplina: 'Statistică', data: '1973' },
  { nume: 'Caracota Dumitrache', disciplina: 'Statistică economică', data: '1973' },
  { nume: 'Niculescu Ilie', disciplina: 'Statistică și econometrie', data: '1975' },
  { nume: 'Tobultoc Valentin', disciplina: 'Planificare și cibernetică economică', data: '1967' },
  { nume: 'Mitruț Constantin', disciplina: 'Statistică și Econometrie', data: '15 septembrie 1979' },
  { nume: 'Voineagu Vergil', disciplina: 'Statistică și Econometrie', data: '1979' },
  { nume: 'Andrei Tudorel', disciplina: 'Statistică și Econometrie', data: '18 februarie 1991' },
  { nume: 'Turdean (Vană) Marinella', disciplina: 'Statistică', data: '1991' },
  { nume: 'Țițan Emilia', disciplina: 'Statistică și Econometrie', data: '16 februarie 1991' },
  { nume: 'Mihăescu Constanța', disciplina: 'Statistică și Econometrie', data: '5 octombrie 1992' },
  { nume: 'Begu Liviu-Stelian', disciplina: 'Statistică și Econometrie', data: '21 februarie 1994' },
  { nume: 'Cristache Silvia-Elena', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1994' },
  { nume: 'Roman Monica Mihaela', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1994' },
  { nume: 'Cărbunaru Băcescu Mihaela Angela', disciplina: 'Statistică și Econometrie', data: '20 februarie 1995' },
  { nume: 'Marin Erika', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1995' },
  { nume: 'Șerban Daniela', disciplina: 'Statistică și Econometrie', data: '20 februarie 1995' },
  { nume: 'Vătui Mihaela', disciplina: 'Statistică și Econometrie', data: '1995' },
  { nume: 'Iacob Andreea Iluzia', disciplina: 'Statistică și Econometrie', data: '1996' },
  { nume: 'Mazurencu-Marinescu Miruna', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1996' },
  { nume: 'Drăgan Irina-Maria', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1997' },
  { nume: 'Ghiță Simona Ioana', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1997' },
  { nume: 'Goschin Zizi', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1997' },
  { nume: 'Costea Adrian', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1998' },
  { nume: 'Covrig Mihaela', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1999' },
  { nume: 'Danciu Aniela Raluca', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1999' },
  { nume: 'Grădinaru Giani Ionel', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1999' },
  { nume: 'Boboc Cristina-Rodica', disciplina: 'Statistică și Econometrie', data: '19 februarie 2001' },
  { nume: 'Mitruț Andreea Cristina', disciplina: 'Statistică și Econometrie', data: '2001' },
  { nume: 'Pele Daniel Traian', disciplina: 'Statistică și Econometrie', data: '19 februarie 2001' },
  { nume: 'Herțeliu Claudiu', disciplina: 'Statistică și Econometrie', data: '25 februarie 2002' },
  { nume: 'Niculescu-Aron Ileana Gabriela', disciplina: 'Statistică și Econometrie', data: '28 februarie 2002' },
  { nume: 'Bărbulescu Răzvan', disciplina: 'Statistică și Econometrie', data: '1 octombrie 2003' },
  { nume: 'Manea Daniela-Ioana', disciplina: 'Statistică și Econometrie', data: '1 octombrie 2004' },
  { nume: 'Sacală Mihail-Dumitru', disciplina: 'Statistică și Econometrie', data: '1 octombrie 2004' },
  { nume: 'Dimian Gina Cristina', disciplina: 'Statistică și Econometrie', data: '21 februarie 2005' },
  { nume: 'Gogonea Rodica Manuela', disciplina: 'Statistică și Econometrie', data: '1 februarie 2005' },
  { nume: 'Davidescu Adriana Anamaria', disciplina: 'Statistică și Econometrie', data: '1 octombrie 2006' },
  { nume: 'Ileanu Bogdan-Vasile', disciplina: 'Statistică și Econometrie', data: '1 martie 2006' },
  { nume: 'Țoțan Lavinia-Ștefania', disciplina: 'Statistică și Econometrie', data: '1 noiembrie 2006' },
  { nume: 'Strat Vasile Alecsandru', disciplina: 'Statistică și Econometrie', data: '1 noiembrie 2007' },
  { nume: 'Popa Aura', disciplina: 'Statistică și Econometrie', data: '2009' },
  { nume: 'Cimpoeru Smaranda', disciplina: 'Statistică și Econometrie', data: '1 aprilie 2010' },
  { nume: 'Gogu (Luca) Emilia', disciplina: 'Statistică și Econometrie', data: '28 septembrie 2015' },
  { nume: 'Vasilescu Maria-Denisa', disciplina: 'Statistică și Econometrie', data: '28 septembrie 2015' },
  { nume: 'Apostu Simona Andreea', disciplina: 'Statistică și Econometrie', data: '3 octombrie 2016' },
  { nume: 'Căplescu Raluca Dana', disciplina: 'Statistică și Econometrie', data: '3 octombrie 2016' },
  { nume: 'Mihai Mihaela', disciplina: 'Statistică și Econometrie', data: '3 octombrie 2016' },
  { nume: 'Mirica Andreea', disciplina: 'Statistică și Econometrie', data: '2 octombrie 2017' },
  { nume: 'Oțoiu Adrian', disciplina: 'Statistică și Econometrie', data: '2 octombrie 2017' },
  { nume: 'Prada Elena Maria', disciplina: 'Statistică și Econometrie', data: '2 octombrie 2017' },
  { nume: 'Glăvan Ionela Roxana', disciplina: 'Statistică și Econometrie', data: '18 februarie 2019' },
];

const presidentiINS = [
  { nume: 'Manea Mănescu', perioada: '1955-1957' },
  { nume: 'Mircea Biji', perioada: '1990' },
  { nume: 'Constantin Ionescu', perioada: '1990-1992' },
  { nume: 'Pavel Wagner', perioada: '1992-1997' },
  { nume: 'Vergil Voineagu', perioada: '2009-2012' },
  { nume: 'Tudorel Andrei', perioada: '2012-2029' },
];

export default function ListeProfesoriPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <SimpleHeader />

      <main className="flex-grow pt-[1.5cm] pb-20">
        <div className="max-w-[1400px] mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-[#7209B7] text-white px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm">ISTORIC & CONDUCERE</span>
            </div>
            <h1 className="text-5xl mb-6">
              <span className="text-[#3A0CA3] dark:text-[#4CC9F0]">
                Liste Profesori și Conducători
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Istoricul complet al dezvoltării programului de statistică și membrii distinși ai departamentului (1913-prezent)
            </p>
          </motion.div>

          {/* Șefii Catedrelor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm p-8 md:p-12 border border-[#4CC9F0]/20 dark:border-gray-700 mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-[#4361EE] dark:text-[#A5B8FF]" />
              <div>
                <h2 className="text-2xl text-[#3A0CA3] dark:text-[#4CC9F0]">Șefii Catedrelor de Statistică / Departamentului de Statistică și Econometrie</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(1951-prezent)</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#4361EE] text-white">
                    <th className="border border-blue-300 dark:border-blue-700 px-4 py-3 text-left">Perioada</th>
                    <th className="border border-blue-300 dark:border-blue-700 px-4 py-3 text-left">Prenume și nume</th>
                    <th className="border border-blue-300 dark:border-blue-700 px-4 py-3 text-left">Denumirea catedrei/departamentului</th>
                  </tr>
                </thead>
                <tbody>
                  {sefiCatedre.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-blue-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 font-semibold text-[#4361EE] dark:text-[#A5B8FF]">{item.perioada}</td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">{item.nume}</td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">{item.catedra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Președinții INS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm p-8 md:p-12 border border-[#4CC9F0]/20 dark:border-gray-700 mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-[#4361EE] dark:text-[#A5B8FF]" />
              <div>
                <h2 className="text-2xl text-[#3A0CA3] dark:text-[#4CC9F0]">Președinți ai Institutului Național de Statistică</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Membri ai Departamentului care au condus INS</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#7209B7] text-white">
                    <th className="border border-purple-300 dark:border-purple-700 px-4 py-3 text-left">Perioada</th>
                    <th className="border border-purple-300 dark:border-purple-700 px-4 py-3 text-left">Prenume și nume</th>
                  </tr>
                </thead>
                <tbody>
                  {presidentiINS.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-purple-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 font-semibold text-[#7209B7] dark:text-[#DDB8FF]">{item.perioada}</td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">{item.nume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Cronologia dezvoltării */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm p-8 md:p-12 border border-[#4CC9F0]/20 dark:border-gray-700 mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-8 h-8 text-[#4361EE] dark:text-[#A5B8FF]" />
              <div>
                <h2 className="text-2xl text-[#3A0CA3] dark:text-[#4CC9F0]">Cronologia dezvoltării specializării/programului de Statistică în ISEP/ASE</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(1948-prezent)</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#4361EE] text-white">
                    <th className="border border-blue-300 dark:border-blue-700 px-4 py-3 text-left">Perioada</th>
                    <th className="border border-blue-300 dark:border-blue-700 px-4 py-3 text-left">Facultatea</th>
                    <th className="border border-blue-300 dark:border-blue-700 px-4 py-3 text-left">Specializarea de licență</th>
                    <th className="border border-blue-300 dark:border-blue-700 px-4 py-3 text-center">Durată (ani)</th>
                  </tr>
                </thead>
                <tbody>
                  {cronologieDezvoltare.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-blue-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 font-semibold text-[#4361EE] dark:text-[#A5B8FF]">{item.perioada}</td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">{item.facultate}</td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-gray-800 dark:text-gray-200">{item.specializare}</td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-center font-semibold text-[#7209B7] dark:text-[#DDB8FF]">{item.durata}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Personalul didactic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm p-8 md:p-12 border border-[#4CC9F0]/20 dark:border-gray-700 mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-8 h-8 text-[#4361EE] dark:text-[#A5B8FF]" />
              <div>
                <h2 className="text-2xl text-[#3A0CA3] dark:text-[#4CC9F0]">Personalul didactic încadrat la AISCI/ISEP/ASE domeniu de predare Statistica</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(1913-prezent) — 125 membri</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#7209B7] text-white">
                    <th className="border border-purple-300 dark:border-purple-700 px-4 py-3 text-left">Nume și prenume</th>
                    <th className="border border-purple-300 dark:border-purple-700 px-4 py-3 text-left">Disciplina / Catedra / Departamentul</th>
                    <th className="border border-purple-300 dark:border-purple-700 px-4 py-3 text-left">Data încadrării</th>
                  </tr>
                </thead>
                <tbody>
                  {personalDidactic.map((item, index) => (
                    <tr key={item.nume} className={index % 2 === 0 ? 'bg-purple-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">{item.nume}</td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">{item.disciplina}</td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-[#7209B7] dark:text-[#DDB8FF] font-semibold">{item.data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}