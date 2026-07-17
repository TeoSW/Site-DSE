import { useState, useEffect, JSX } from 'react';
import HomePage from './pages/HomePage';
import IstoricPage from './pages/IstoricPage';
import CadreDidacticePage from './pages/CadreDidacticePage';
import MisiunePage from './pages/MisiunePage';
import DisciplinePage from './pages/DisciplinePage';
import MasterPage from './pages/MasterPage';
import MasterADAPage from './pages/MasterADAPage';
import DoctoratPage from './pages/DoctoratPage';
import CareerPage from './pages/CareerPage';
import DatabasesPage from './pages/DatabasesPage';
import InstrumenteAnalizaPage from './pages/InstrumenteAnalizaPage';
import AnunturiPage from './pages/AnunturiPage';
import ProfesoriCoordonatoriPage from './pages/ProfesoriCoordonatoriPage';
import TestimonialePage from './pages/TestimonialePage';
import CercetarePage from './pages/CercetarePage';
import ListeProfesoriPage from './pages/ListeProfesoriPage';
import ActivitatePage from './pages/ActivitatePage';
import { StudentiColaboratoriPage } from './pages/StudentiColaboratoriPage';
import CursuriPostuniversitarePage from './pages/CursuriPostuniversitarePage';
import { getProfesorPage } from './pages/profesori/ProfesorRouter';

export function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash;
      
      // Redirect #/orar to external link in new tab
      if (newHash === '#/orar') {
        window.open('https://csie.ase.ro/orar-2025-2026-semestrul-ii/', '_blank');
        // Reset hash to home to avoid staying on #/orar
        window.location.hash = '#/';
        return;
      }
      
      setCurrentPath(newHash);
      
      // Check if this is a section anchor on the home page 
      const sectionAnchors = ['#acasa', '#noutati', '#cercetare', '#contact'];
      const isSectionAnchor = sectionAnchors.some(anchor => newHash === `/${anchor}` || newHash === anchor);
      
      // Check if this is a research section anchor (e.g., #/icas, #/jses, #/centrul-sondaje)
      const researchAnchors = ['#/icas', '#/jses', '#/centrul-sondaje'];
      const isResearchAnchor = researchAnchors.includes(newHash);
      
      // Anchors on the unified Activitate page (old routes land on their section)
      const activitateAnchors = ['#/activitati-viitoare', '#/evenimente-trecute'];
      const isActivitateAnchor = activitateAnchors.includes(newHash);
      
      if (isSectionAnchor) {
        // First navigate to home page
        const cleanHash = newHash.replace('#/', '#').replace('##', '#');
        
        // Scroll to top first - use multiple methods for mobile compatibility
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Then scroll to section after a small delay to ensure page is loaded
        setTimeout(() => {
          const element = document.querySelector(cleanHash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else if (isResearchAnchor || isActivitateAnchor) {
        // For research/activitate sections, scroll to the specific element
        const sectionId = newHash.replace('#/', '');
        
        // Scroll to top first - use multiple methods for mobile compatibility
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Then scroll to section after a small delay to ensure page is loaded
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // For page routes, just scroll to top - use multiple methods for mobile compatibility
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Also handle initial load
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Route mapping
  const routes: Record<string, JSX.Element> = {
    '': <HomePage />,
    '#/': <HomePage />,
    '#/acasa': <HomePage />,
    '/#acasa': <HomePage />,
    '#/istoric': <IstoricPage />,
    '#/cadre-didactice': <CadreDidacticePage />,
    '#/misiune': <MisiunePage />,
    '#/discipline': <DisciplinePage />,
    '#/master-asds': <MasterPage />,
    '#/master-ada': <MasterADAPage />,
    '#/doctorat': <DoctoratPage />,
    '#/cariera': <CareerPage />,
    '#/databases': <DatabasesPage />,
    '#/instrumente-analiza': <InstrumenteAnalizaPage />,
    '#/anunturi': <AnunturiPage />,
    '#/profesori-coordonatori': <ProfesoriCoordonatoriPage />,
    '#/testimoniale': <TestimonialePage />,
    '#/cercetare': <CercetarePage />,
    '#/icas': <CercetarePage />,
    '#/jses': <CercetarePage />,
    '#/centrul-sondaje': <CercetarePage />,
    '#/liste-profesori': <ListeProfesoriPage />,
    '#/activitate': <ActivitatePage />,
    '#/activitati-viitoare': <ActivitatePage />,
    '#/evenimente-trecute': <ActivitatePage />,
    '#/studenti-colaboratori': <StudentiColaboratoriPage />,
    '#/cursuri-postuniversitare': <CursuriPostuniversitarePage />,
    // Home page section anchors
    '/#noutati': <HomePage />,
    '/#contact': <HomePage />,
  };

  // Check for dynamic profesor routes
  if (currentPath.startsWith('#/profesor/')) {
    const slug = currentPath.replace('#/profesor/', '');
    const ProfesorPage = getProfesorPage(slug);
    if (ProfesorPage) {
      return <ProfesorPage />;
    }
  }

  // Return the component for the current route, or the home page
  return routes[currentPath] || <HomePage />;
}