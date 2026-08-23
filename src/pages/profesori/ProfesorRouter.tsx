import { AndreeaBeguPage } from './andreea-begu';
import { AnielaDanciuPage } from './aniela-danciu';
import { IrinaDraganPage } from './irina-dragan';
import { AnaMariaMarcuPage } from './ana-maria-marcu';
import { AlinMaricut } from './alin-maricut';
import { SimonaApostuPage } from './simona-apostu';
import { RazvanBarbulescuPage } from './razvan-barbulescu';
import { SmarandaCimpoeruPage } from './smaranda-cimpoeru';
import { AdrianCosteaPage } from './adrian-costea';
import { MihaelaCovrigPage } from './mihaela-covrig';
import { AdrianaDavidescuPage } from './adriana-davidescu';
import { ManuelaGogoneaPage } from './manuela-gogonea';
import { EmiliaGoguPage } from './emilia-gogu';
import { MihaelaMihaiPage } from './mihaela-mihai';
import { AndreeaMiricaPage } from './andreea-mirica';
import { AdrianOtoiuPage } from './adrian-otoiu';
import { RoxanaPetcuPage } from './roxana-petcu';
import { ElenaPradaPage } from './elena-prada';
import { LaviniaTotanPage } from './lavinia-totan';
import { CristinaBobocPage } from './cristina-boboc';
import { MariaVasilescuPage } from './maria-vasilescu';
import { TudorelAndreiPage } from './tudorel-andrei';
import { ConstantaMihaescuPage } from './constanta-mihaescu';
import { SilviaCristachePage } from './silvia-cristache';
import { DanPelePage } from './dan-pele';
import { DanielaManea } from './daniela-manea';
import { GinaDimianPage } from './gina-dimian';
import { EmiliaTitanPage } from './emilia-titan';
import { IoanaGhitaPage } from './ioana-ghita';
import { GianiGradinaruPage } from './giani-gradinaru';
import { ClaudiuHerteliuPage } from './claudiu-herteliu';
import { ErikaMarinPage } from './erika-marin';
import { MirunaMazurencuPage } from './marinescu-mazurencu';
import { MonicaRomanPage } from './monica-roman';
import { GabrielaNiculescuPage } from './gabriela-niculescu';
import { MihaiSacalaPage } from './mihai-sacala';
import { DanielaSerbanPage } from './daniela-serban';
import { RazvanVasilePage } from './razvan-vasile';
import { VasileStratPage } from './strat-vasile';
import { EduardMantaPage } from './eduard-manta';
import { NicholasAlexanderPage } from './nicholas-alexander';
import { IleanuBogdanPage } from './ileanu-bogdan';
import { JSX } from 'react';

// Component simplu pentru profesorii în așteptare (fără date false)
function ProfesorComingSoon({ name, email }: { name: string; email: string }) {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-6 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-12 text-center border border-[#4CC9F0]/20 dark:border-gray-700">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#7209B7] text-white text-2xl mb-4">
              {name.split(' ').slice(0, 2).map(n => n[0]).join('')}
            </div>
            <h1 className="text-3xl text-[#3A0CA3] dark:text-[#4CC9F0] mb-2">{name}</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{email}</p>
          </div>
          
          <div className="bg-[#4CC9F0]/10 rounded-xl p-8 mb-6 dark:bg-[#4CC9F0]/5">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              📄 Pagina profesorului este în curs de completare
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Informațiile detaliate vor fi disponibile în curând
            </p>
          </div>

          <button 
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-[#7209B7] text-white rounded-lg transition-all duration-200"
          >
            ← Înapoi la Cadre Didactice
          </button>
        </div>
      </div>
    </div>
  );
}

// Mapping slug -> component (DOAR profesorii cu pagini COMPLETE)
const profesorRoutes: Record<string, () => JSX.Element> = {
  // ===== PROFESORI CU PAGINI COMPLETE (36) =====
  'andreea-begu': () => <AndreeaBeguPage />,
  'aniela-danciu': () => <AnielaDanciuPage />,
  'irina-dragan': () => <IrinaDraganPage />,
  'ana-maria-marcu': () => <AnaMariaMarcuPage />,
  'alin-maricut': () => <AlinMaricut />,
  'simona-apostu': () => <SimonaApostuPage />,
  'razvan-barbulescu': () => <RazvanBarbulescuPage />,
  'smaranda-cimpoeru': () => <SmarandaCimpoeruPage />,
  'adrian-costea': () => <AdrianCosteaPage />,
  'mihaela-covrig': () => <MihaelaCovrigPage />,
  'adriana-davidescu': () => <AdrianaDavidescuPage />,
  'manuela-gogonea': () => <ManuelaGogoneaPage />,
  'emilia-gogu': () => <EmiliaGoguPage />,
  'mihaela-mihai': () => <MihaelaMihaiPage />,
  'andreea-mirica': () => <AndreeaMiricaPage />,
  'adrian-otoiu': () => <AdrianOtoiuPage />,
  'roxana-petcu': () => <RoxanaPetcuPage />,
  'elena-prada': () => <ElenaPradaPage />,
  'lavinia-totan': () => <LaviniaTotanPage />,
  'cristina-boboc': () => <CristinaBobocPage />,
  'maria-vasilescu': () => <MariaVasilescuPage />,
  'tudorel-andrei': () => <TudorelAndreiPage />,
  'constanta-mihaescu': () => <ConstantaMihaescuPage />,
  'silvia-cristache': () => <SilviaCristachePage />,
  'dan-pele': () => <DanPelePage />,
  'daniela-manea': () => <DanielaManea />,
  'gina-dimian': () => <GinaDimianPage />,
  'emilia-titan': () => <EmiliaTitanPage />,
  'ioana-ghita': () => <IoanaGhitaPage />,
  'giani-gradinaru': () => <GianiGradinaruPage />,
  'claudiu-herteliu': () => <ClaudiuHerteliuPage />,
  'erika-marin': () => <ErikaMarinPage />,
  'marinescu-mazurencu': () => <MirunaMazurencuPage />,
  'monica-roman': () => <MonicaRomanPage />,
  'gabriela-niculescu': () => <GabrielaNiculescuPage />,
  'mihai-sacala': () => <MihaiSacalaPage />,
  'daniela-serban': () => <DanielaSerbanPage />,
  'razvan-vasile': () => <RazvanVasilePage />,
  'nicholas-alexander': () => <NicholasAlexanderPage/>,
  'bogdan-ileanu': () => <IleanuBogdanPage/>,
  'eduard-manta': () => <EduardMantaPage/>,
  'andrei-parvan': () => <ProfesorComingSoon name="PÂRVAN Andrei" email="andrei.parvan@csie.ase.ro" />,
  'vasile-strat': () => <VasileStratPage/>,
};

// Export function pentru routing
export function getProfesorPage(slug: string): (() => JSX.Element) | null {
  return profesorRoutes[slug] || null;
}