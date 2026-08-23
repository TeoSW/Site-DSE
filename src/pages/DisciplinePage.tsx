import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BookOpen, ExternalLink, Brain } from 'lucide-react';
import { SimpleHeader } from '../components/SimpleHeader';
import { Footer } from '../components/Footer';

// Tipuri pentru discipline
interface Subject {
  name: string;
  nameEn: string;
  year: number;
  semester: number;
  credits: number;
  examType: 'Examen' | 'Verificare' | 'Colocviu';
  optional: 'O' | 'A' | 'F' | 'S' | 'P'; // Obligatoriu, Alegere, Facultativ, Sport, Practică
  description?: string;
  syllabusLink?: string;
}

// Date complete pentru toate disciplinele
const allSubjects: Subject[] = [
  // AN 1 - SEMESTRUL I
  { name: 'Economie', nameEn: 'Economics', year: 1, semester: 1, credits: 3, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=111994&IDF=7&IDL=RO' },
  { name: 'Algebră', nameEn: 'Algebra', year: 1, semester: 1, credits: 4, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=111995&IDF=7&IDL=RO' },
  { name: 'Statistică', nameEn: 'Statistics', year: 1, semester: 1, credits: 5, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=111996&IDF=7&IDL=RO' },
  { name: 'Bazele tehnologiei informației', nameEn: 'Information Technology Basics', year: 1, semester: 1, credits: 4, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=111998&IDF=7&IDL=RO' },
  { name: 'Bazele programării calculatoarelor', nameEn: 'Basics of Programming', year: 1, semester: 1, credits: 4, examType: 'Verificare', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=111999&IDF=7&IDL=RO' },
  { name: 'Bazele cercetărilor operaționale', nameEn: 'Basics of Operational Research', year: 1, semester: 1, credits: 5, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=111997&IDF=7&IDL=RO' },
  { name: 'Introducere în contabilitate', nameEn: 'Introduction to Accounting', year: 1, semester: 1, credits: 3, examType: 'Verificare', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=117900&IDF=7&IDL=RO' },
  { name: 'Limba engleză și comunicare de specialitate 1', nameEn: 'English and Professional Communication 1', year: 1, semester: 1, credits: 2, examType: 'Verificare', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112000&IDF=7&IDL=RO' },
  { name: 'Limba franceză și comunicare de specialitate 1', nameEn: 'French and Professional Communication 1', year: 1, semester: 1, credits: 2, examType: 'Verificare', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112001&IDF=7&IDL=RO' },
  { name: 'Limba română și comunicare de specialitate 1', nameEn: 'Romanian and Professional Communication 1', year: 1, semester: 1, credits: 2, examType: 'Verificare', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112002&IDF=7&IDL=RO' },
  { name: 'Educație fizică și sport 1', nameEn: 'Physical Training and Sport 1', year: 1, semester: 1, credits: 1, examType: 'Verificare', optional: 'S', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112003&IDF=7&IDL=RO' },
  
  // AN 1 - SEMESTRUL II
  { name: 'Analiză matematică', nameEn: 'Mathematical Analysis', year: 1, semester: 2, credits: 5, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112004&IDF=7&IDL=RO' },
  { name: 'Statistică inferențială', nameEn: 'Inferential Statistics', year: 1, semester: 2, credits: 4, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112005&IDF=7&IDL=RO' },
  { name: 'Algoritmi și tehnici de programare', nameEn: 'Programming Techniques and Algorithms', year: 1, semester: 2, credits: 4, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112006&IDF=7&IDL=RO' },
  { name: 'Sisteme de operare', nameEn: 'Computer Operating Systems', year: 1, semester: 2, credits: 4, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112007&IDF=7&IDL=RO' },
  { name: 'Bazele ciberneticii economice', nameEn: 'Basics of Economic Cybernetics', year: 1, semester: 2, credits: 4, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112008&IDF=7&IDL=RO' },
  { name: 'Finanțe', nameEn: 'Finance', year: 1, semester: 2, credits: 3, examType: 'Verificare', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=117902&IDF=7&IDL=RO' },
  { name: 'Management', nameEn: 'Management', year: 1, semester: 2, credits: 3, examType: 'Verificare', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112009&IDF=7&IDL=RO' },
  { name: 'Marketing', nameEn: 'Marketing', year: 1, semester: 2, credits: 3, examType: 'Verificare', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112010&IDF=7&IDL=RO' },
  { name: 'Educație fizică și sport 2', nameEn: 'Physical Training and Sport 2', year: 1, semester: 2, credits: 1, examType: 'Verificare', optional: 'S', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112011&IDF=7&IDL=RO' },
  
  // AN 2 - SEMESTRUL I
  { name: 'Programare orientată obiect', nameEn: 'Object-Oriented Programming', year: 2, semester: 1, credits: 5, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112012&IDF=7&IDL=RO' },
  { name: 'Baze de date', nameEn: 'Databases', year: 2, semester: 1, credits: 5, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112013&IDF=7&IDL=RO' },
  { name: 'Statistică macroeconomică', nameEn: 'Macroeconomic Statistics', year: 2, semester: 1, credits: 5, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112014&IDF=7&IDL=RO' },
  { name: 'Probabilități și statistică matematică', nameEn: 'Probability and Mathematical Statistics', year: 2, semester: 1, credits: 5, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112015&IDF=7&IDL=RO' },
  { name: 'Microeconomie cantitativă', nameEn: 'Quantitative Microeconomics', year: 2, semester: 1, credits: 5, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112016&IDF=7&IDL=RO' },
  { name: 'Managementul riscului în afacerile internaționale', nameEn: 'Risk Management in International Business', year: 2, semester: 1, credits: 5, examType: 'Verificare', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=117904&IDF=7&IDL=RO' },
  { name: 'Negociere, contractare și operațiuni comerciale internaționale', nameEn: 'Negotiation, Contracting and International Trade Operations', year: 2, semester: 1, credits: 5, examType: 'Verificare', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=117905&IDF=7&IDL=RO' },
  { name: 'Practică de specialitate 1', nameEn: 'Traineeship 1', year: 2, semester: 1, credits: 0, examType: 'Verificare', optional: 'P', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=118073&IDF=7&IDL=RO' },
  { name: 'Educație fizică și sport 3', nameEn: 'Physical Training and Sport 3', year: 2, semester: 1, credits: 1, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=117906&IDF=7&IDL=RO' },
  { name: 'Construcție și depanare PC', nameEn: 'Computer Configuring and Service', year: 2, semester: 1, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112020&IDF=7&IDL=RO' },
  { name: 'Modele regionale de economie', nameEn: 'Regional Models of Economy', year: 2, semester: 1, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112021&IDF=7&IDL=RO' },
  { name: 'Istoria economiei', nameEn: 'History of Economics', year: 2, semester: 1, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112022&IDF=7&IDL=RO' },
  { name: 'Comunicare în limba engleză 1', nameEn: 'Communication in English 1', year: 2, semester: 1, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112023&IDF=7&IDL=RO' },
  { name: 'Comunicare în limba franceză 1', nameEn: 'Communication in French 1', year: 2, semester: 1, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112024&IDF=7&IDL=RO' },
  { name: 'Comunicare în limba rusă 1', nameEn: 'Communication in Russian 1', year: 2, semester: 1, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112025&IDF=7&IDL=RO' },
  { name: 'Comunicare în limba spaniolă 1', nameEn: 'Communication in Spanish 1', year: 2, semester: 1, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112026&IDF=7&IDL=RO' },
  { name: 'Comunicare în limba italiană 1', nameEn: 'Communication in Italian 1', year: 2, semester: 1, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112027&IDF=7&IDL=RO' },
  { name: 'Comunicare în limba germană 1', nameEn: 'Communication in German 1', year: 2, semester: 1, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112028&IDF=7&IDL=RO' },
  { name: 'Comunicare în limba turcă 1', nameEn: 'Communication in Turkish1', year: 2, semester: 1, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112029&IDF=7&IDL=RO' },
  { name: 'Comunicare în limba japoneză 1', nameEn: 'Communication in Japanese1', year: 2, semester: 1, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112030&IDF=7&IDL=RO' },
  { name: 'Comunicare în limba chineză 1', nameEn: 'Communication in Chinese1', year: 2, semester: 1, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112031&IDF=7&IDL=RO' },
  
  // AN 2 - SEMESTRUL II
  { name: 'Pachete software', nameEn: 'Software Packages', year: 2, semester: 2, credits: 4, examType: 'Verificare', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112032&IDF=7&IDL=RO' },
  { name: 'Statistică neparametrică', nameEn: 'Nonparametric Statistics', year: 2, semester: 2, credits: 4, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112033&IDF=7&IDL=RO' },
  { name: 'Econometrie', nameEn: 'Econometrics', year: 2, semester: 2, credits: 4, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112034&IDF=7&IDL=RO' },
  { name: 'Analiză datelor panel și cauzalitate inferențială', nameEn: 'Panel Data Analysis and Causal Inference', year: 2, semester: 2, credits: 3, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112035&IDF=7&IDL=RO' },
  { name: 'Testarea ipotezelor statistice', nameEn: 'Statistical Hypothesis Testing', year: 2, semester: 2, credits: 4, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112036&IDF=7&IDL=RO' },
  { name: 'Macroeconomie cantitativă', nameEn: 'Quantitative Macroeconomics', year: 2, semester: 2, credits: 4, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112037&IDF=7&IDL=RO' },
  { name: 'Antreprenoriat în comerț, turism și servicii', nameEn: 'Entrepreneurship in Commerce, Tourism and Services', year: 2, semester: 2, credits: 3, examType: 'Verificare', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112040&IDF=7&IDL=RO' },
  { name: 'Managementul proiectelor', nameEn: 'Project Management', year: 2, semester: 2, credits: 3, examType: 'Verificare', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=117912&IDF=7&IDL=RO' },
  { name: 'Finanțe corporative', nameEn: 'Corporate Finance', year: 2, semester: 2, credits: 3, examType: 'Verificare', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112041&IDF=7&IDL=RO' },
  { name: 'Managementul relațiilor cu clienții', nameEn: 'Customer relationship management', year: 2, semester: 2, credits: 3, examType: 'Verificare', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112043&IDF=7&IDL=RO' },
  { name: 'Etică și integritate academică', nameEn: 'Academic Ethics and Integrity', year: 2, semester: 2, credits: 3, examType: 'Verificare', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112044&IDF=7&IDL=RO' },
  { name: 'Economia informației digitale cu aplicații în afaceri', nameEn: 'Digital Information Economy with Applications', year: 2, semester: 2, credits: 3, examType: 'Verificare', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112045&IDF=7&IDL=RO' },
  { name: 'Analiză economico-financiară', nameEn: 'Economic- financial analysis', year: 2, semester: 2, credits: 3, examType: 'Verificare', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112047&IDF=7&IDL=RO' },
  { name: 'Dezvoltare durabilă', nameEn: 'Sustainable development', year: 2, semester: 2, credits: 3, examType: 'Verificare', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112046&IDF=7&IDL=RO' },
  { name: 'Contabilitate pentru afaceri', nameEn: 'Accounting for Business', year: 2, semester: 2, credits: 3, examType: 'Verificare', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112048&IDF=7&IDL=RO' },
  { name: 'Comunicare financiar-bancară', nameEn: 'Financial and Banking Communication', year: 2, semester: 2, credits: 3, examType: 'Verificare', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=117909&IDF=7&IDL=RO' },
  { name: 'Practică de specialitate 2', nameEn: 'Traineeship 2', year: 2, semester: 2, credits: 4, examType: 'Colocviu', optional: 'P', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112038&IDF=7&IDL=RO' },
  { name: 'Doctrine economice', nameEn: 'Economic Doctrines', year: 2, semester: 2, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112049&IDF=7&IDL=RO' },
  { name: 'Competiție și competitivitate', nameEn: 'Competition and Competitiveness', year: 2, semester: 2, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112050&IDF=7&IDL=RO' },
  { name: 'Comunicare în limba engleză 2', nameEn: 'Communication In English 2', year: 2, semester: 2, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112051&IDF=7&IDL=RO' },
  { name: 'Comunicare în limba germană 2', nameEn: 'Communication in German 2', year: 2, semester: 2, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112052&IDF=7&IDL=RO' },
  { name: 'Comunicare în limba turcă 2', nameEn: 'Communication in Turkish 2', year: 2, semester: 2, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112053&IDF=7&IDL=RO' },
  { name: 'Comunicare în limba japoneză 2', nameEn: 'Communication in Japanese 2', year: 2, semester: 2, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112054&IDF=7&IDL=RO' },
  { name: 'Comunicare în limba chineză 2', nameEn: 'Communication In Chinese 2', year: 2, semester: 2, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112055&IDF=7&IDL=RO' },
  { name: 'Comunicare în limba franceză 2', nameEn: 'Communication In French 2', year: 2, semester: 2, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112056&IDF=7&IDL=RO' },
  { name: 'Comunicare în limba rusă 2', nameEn: 'Communication Russian 2', year: 2, semester: 2, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112057&IDF=7&IDL=RO' },
  { name: 'Comunicare în limba spaniolă 2', nameEn: 'Communication In Spanish 2', year: 2, semester: 2, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112058&IDF=7&IDL=RO' },
  { name: 'Comunicare în limba italiană 2', nameEn: 'Communication In Italian 2', year: 2, semester: 2, credits: 4, examType: 'Verificare', optional: 'F', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112059&IDF=7&IDL=RO' },
  
  // AN 3 - SEMESTRUL I
  { name: 'Modelarea și vizualizarea geospațială a datelor statistice', nameEn: 'Modeling and Geospatial Visualization of Statistical Data', year: 3, semester: 1, credits: 4, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112060&IDF=7&IDL=RO' },
  { name: 'Serii de timp', nameEn: 'Time Series', year: 3, semester: 1, credits: 4, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112061&IDF=7&IDL=RO' },
  { name: 'Statistică spațială', nameEn: 'Spatial Statistics', year: 3, semester: 1, credits: 4, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112062&IDF=7&IDL=RO' },
  { name: 'Sondaje și anchete statistice', nameEn: 'Surveys and statistical surveys', year: 3, semester: 1, credits: 4, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112063&IDF=7&IDL=RO' },
  { name: 'Demografie', nameEn: 'Demography', year: 3, semester: 1, credits: 3, examType: 'Examen', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112064&IDF=7&IDL=RO' },
  { name: 'Teoria jocurilor', nameEn: 'Game Theory', year: 3, semester: 1, credits: 3, examType: 'Examen', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112065&IDF=7&IDL=RO' },
  { name: 'Cercetări operaționale', nameEn: 'Operations Research', year: 3, semester: 1, credits: 3, examType: 'Examen', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112066&IDF=7&IDL=RO' },
  { name: 'Dinamica sistemelor economice', nameEn: 'Dynamics of economic systems', year: 3, semester: 1, credits: 3, examType: 'Examen', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112067&IDF=7&IDL=RO' },
  { name: 'Programarea aplicațiilor Windows', nameEn: 'Programming Windows Applications', year: 3, semester: 1, credits: 3, examType: 'Examen', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112068&IDF=7&IDL=RO' },
  { name: 'Tehnologii Web', nameEn: 'Web Technologies', year: 3, semester: 1, credits: 3, examType: 'Examen', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112069&IDF=7&IDL=RO' },
  { name: 'SGBD Oracle', nameEn: 'Oracle DBMS', year: 3, semester: 1, credits: 3, examType: 'Examen', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112070&IDF=7&IDL=RO' },
  { name: 'Robotică', nameEn: 'Robotics', year: 3, semester: 1, credits: 3, examType: 'Examen', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112071&IDF=7&IDL=RO' },
  { name: 'Modelare stocastică în domeniul economic', nameEn: 'Stochastic Modeling in Economics', year: 3, semester: 1, credits: 3, examType: 'Examen', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112072&IDF=7&IDL=RO' },
  { name: 'Tehnici de învățare academică și învățare eficientă', nameEn: 'Effective learning techniques', year: 3, semester: 1, credits: 1, examType: 'Colocviu', optional: 'S', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=117920&IDF=7&IDL=RO' },
  { name: 'Elaborarea lucrării de licență 1', nameEn: 'Working on the Bachelor Thesis 1', year: 3, semester: 1, credits: 4, examType: 'Colocviu', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=117917&IDF=7&IDL=RO' },
  
  // AN 3 - SEMESTRUL II
  { name: 'Tehnici utilizate în Business Intelligence', nameEn: 'Techniques Used in Business Intelligence', year: 3, semester: 2, credits: 4, examType: 'Verificare', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112073&IDF=7&IDL=RO' },
  { name: 'Statistica piețelor financiare', nameEn: 'Financial Market Statistics', year: 3, semester: 2, credits: 4, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112074&IDF=7&IDL=RO' },
  { name: 'Tehnici de analiză multidimensională și Data Mining', nameEn: 'Multidimensional Analysis and Data Mining Techniques', year: 3, semester: 2, credits: 4, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112075&IDF=7&IDL=RO' },
  { name: 'Managementul datelor statistice', nameEn: 'Statistical Data Management', year: 3, semester: 2, credits: 5, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112076&IDF=7&IDL=RO' },
  { name: 'Proiectarea sistemelor informatice în statistică', nameEn: 'Design of Information Systems in Statistics', year: 3, semester: 2, credits: 5, examType: 'Examen', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112078&IDF=7&IDL=RO' },
  { name: 'Dreptul afacerilor', nameEn: 'Business Law', year: 3, semester: 2, credits: 3, examType: 'Verificare', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112080&IDF=7&IDL=RO' },
  { name: 'Drept', nameEn: 'Law', year: 3, semester: 2, credits: 3, examType: 'Verificare', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112081&IDF=7&IDL=RO' },
  { name: 'Sociologie', nameEn: 'Sociology', year: 3, semester: 2, credits: 3, examType: 'Verificare', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=117928&IDF=7&IDL=RO' },
  { name: 'Sociologie economică', nameEn: 'Economic Sociology', year: 3, semester: 2, credits: 3, examType: 'Verificare', optional: 'A', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=117929&IDF=7&IDL=RO' },
  { name: 'Elaborare lucrare licență 2', nameEn: "Bachelor's Thesis Preparation 2", year: 3, semester: 2, credits: 2, examType: 'Colocviu', optional: 'O', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112077&IDF=7&IDL=RO' },
];

export default function DisciplinePage() {
  const [selectedYear, setSelectedYear] = useState<number>(1);
  const [selectedSemester, setSelectedSemester] = useState<number>(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filtrare discipline după an și semestru
  const filteredSubjects = allSubjects.filter(
    s => s.year === selectedYear && s.semester === selectedSemester
  );

  const getOptionalityColor = (optional: string) => {
    switch(optional) {
      case 'O': return 'bg-[#4361EE] text-white';
      case 'A': return 'bg-[#4361EE] text-white';
      case 'F': return 'bg-[#B5179E] text-white';
      case 'S': return 'bg-[#7209B7] text-white';
      case 'P': return 'bg-[#FF9F1C] text-[#1F2937]';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getOptionalityLabel = (optional: string) => {
    switch(optional) {
      case 'O': return 'Obligatoriu';
      case 'A': return 'Alegere';
      case 'F': return 'Facultativ';
      case 'S': return 'Sport';
      case 'P': return 'Practică';
      default: return optional;
    }
  };

  const getExamTypeColor = (examType: string) => {
    switch(examType) {
      case 'Examen': return 'bg-[#7209B7] text-white';
      case 'Verificare': return 'bg-[#4361EE] text-white';
      case 'Colocviu': return 'bg-[#4361EE] text-white';
      default: return 'bg-gray-400 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SimpleHeader/>
      
      <main className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 discipline-header"
              style={{ marginTop: "1.5cm" }}
            >
            <div className="inline-block px-6 py-2 rounded-full mb-6 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
              <span className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-300 font-medium">
                Program Licență
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl mb-4 discipline-title text-[#3A0CA3] dark:text-[#4CC9F0]">
              Plan de Învățământ Complet
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2 discipline-subtitle">Licență în Statistică Economică și Data Science</p>
            <p className="text-gray-500 dark:text-gray-400">
              Explorează toate disciplinele din programul de licență organizate pe semestre.
            </p>
          </motion.div>

          {/* Curriculum Section with Subjects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#4361EE] text-white px-4 py-2 rounded-full mb-4">
                <Brain className="w-4 h-4" />
                <span className="text-sm">CURRICULUM</span>
              </div>
            </div>
            
            {/* Filters */}
            <div className="mb-8 flex flex-wrap gap-4 justify-center">
              {/* Year Filter */}
              <div className="flex gap-2">
                {[1, 2, 3].map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-6 py-2 rounded-lg font-medium transition-all ${
                      selectedYear === year
                        ? 'bg-[#4361EE] text-white shadow-lg'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    Anul {year}
                  </button>
                ))}
              </div>

              {/* Semester Filter */}
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedSemester(1)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    selectedSemester === 1
                      ? 'bg-[#4361EE] text-white shadow-lg'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  Semestrul I
                </button>
                <button
                  onClick={() => setSelectedSemester(2)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    selectedSemester === 2
                      ? 'bg-[#4361EE] text-white shadow-lg'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  Semestrul II
                </button>
              </div>
            </div>

            {/* Subjects List */}
            <div className="grid gap-4 mb-12">
              {filteredSubjects.map((subject) => (
                <motion.div
                  key={`${subject.name}-${subject.year}-${subject.semester}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-6 transition-all discipline-card"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 discipline-card-content">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 discipline-card-title">
                        {subject.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-3 discipline-card-subtitle">
                        {subject.nameEn}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4 discipline-badges">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium discipline-badge ${getExamTypeColor(subject.examType)}`}>
                          {subject.examType}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium discipline-badge ${getOptionalityColor(subject.optional)}`}>
                          {getOptionalityLabel(subject.optional)}
                        </span>
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 discipline-badge">
                          {subject.credits} credite
                        </span>
                      </div>
                    </div>

                    {subject.syllabusLink && (
                      <a
                        href={subject.syllabusLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#4361EE] text-white rounded-lg transition-all discipline-link"
                      >
                        <BookOpen className="w-5 h-5 discipline-link-icon" />
                        <span className="font-medium">Fișa disciplinei</span>
                        <ExternalLink className="w-4 h-4 discipline-link-icon-small" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Legend */}
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Legendă:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">Tip examen:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#7209B7] text-white">Examen</span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#4361EE] text-white">Verificare</span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#4361EE] text-white">Colocviu</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">Opționalitate:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#4361EE] text-white">Obligatoriu</span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#4361EE] text-white">Alegere</span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#B5179E] text-white">Facultativ</span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#7209B7] text-white">Sport</span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#FF9F1C] text-[#1F2937]">Practică</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}