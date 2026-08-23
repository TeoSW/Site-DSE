import { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Users,
  Crown,
  FileText,
  ExternalLink,
  Search,
  X,
} from "lucide-react";
//---
// ── Poze profesori ────────────────────────────────────────────────────────────
import photoErikaMarin from "../assets/Poze Profesori/Erika-Marin.png";
import photoSimonaApostu from "../assets/Poze Profesori/Simona apostu.jfif.jpeg";
import photoCristinaBoboc from "../assets/Poze Profesori/Cristina Boboc.jpeg";
import photoConstantaMihaescu from "../assets/Poze Profesori/Mihaescu-Constanta.jpeg";
import photoMonicaRoman from "../assets/Poze Profesori/Monica Roman.jpg";
import photoNicholasAlexander from "../assets/Poze Profesori/Nicholas Alexander.jpg";
import photoAndreiTudorel from "../assets/Poze Profesori/Andrei Tudorel.jpg";
import photoRazvanBarbulescu from "../assets/Poze Profesori/Razvan Barbulescu LinkedIn Pic.jpg";
import photoBeguAndreea from "../assets/Poze Profesori/Begu Andreea Oana.jpg";
import photoSmarandaCimpoeru from "../assets/Poze Profesori/Smaranda_Cimpoeru_photo.jpeg";
import photoAdrianCostea from "../assets/Poze Profesori/adrian costea_LThumb.jpeg";
import photoCovrigMihaela from "../assets/Poze Profesori/Covrig Mihaela.png";
import photoSilviaCristache from "../assets/Poze Profesori/Silvia Cristache.jpg";
import photoAnielaDanciu from "../assets/Poze Profesori/Aniela Danciu.jpg";
import photoAdrianaDavidescu from "../assets/Poze Profesori/Adriana Davidescu.jpg";
import photoGinaDimian from "../assets/Poze Profesori/Gina Dimian.jpg";
import photoIrinaDragan from "../assets/Poze Profesori/Irina Dragan.jpg";
import photoSimonaGhita from "../assets/Poze Profesori/Simona Ghita.jpg";
import photoRodicaGogonea from "../assets/Poze Profesori/Rodica Gogonea.jpg";
import photoEmiliaGogu from "../assets/Poze Profesori/Emilia Gogu.png";
import photoGianiGradinaru from "../assets/Poze Profesori/Giani Gradinaru.jpg";
import photoClaudiuHerteliu from "../assets/Poze Profesori/Claudiu_Herteliu_2021.jpg";
import photoBogdanIleanu from "../assets/Poze Profesori/Bogdan Ileanu.jpg";
import photoDanielaManea from "../assets/Poze Profesori/Daniela Manea.jpg";
import photoEduardManta from "../assets/Poze Profesori/Eduard Manta.jpg";
import photoMarcuAnaMaria from "../assets/Poze Profesori/MARCU Ana-Maria.jpg";
import photoMaricut from "../assets/Poze Profesori/Maricut.jpg";
import photoMiruna from "../assets/Poze Profesori/MMazurencu.jpeg";
import photoMihaelaMihai from "../assets/Poze Profesori/Mihaela Mihai.jpg";
import photoAndreeaMirica from "../assets/Poze Profesori/Andreea Mirica.jpg";
import photoIleanaNiculescu from "../assets/Poze Profesori/Ileana Niculescu Aron.jpg";
import photoAdrianOtoiu from "../assets/Poze Profesori/Adrian Otoiu poza dse v2.jpg";
import photoAndreiParvan from "../assets/Poze Profesori/Andrei Parvan.jpg";
import photoDanielPele from "../assets/Poze Profesori/Daniel Pele.jpg";
import photoRoxanaPetcu from "../assets/Poze Profesori/Roxana Petcu.jpg";
import photoElenaPrada from "../assets/Poze Profesori/Elena Prada.jpg";
import photoMihaiSacala from "../assets/Poze Profesori/Mihai Sacala poza.jpeg";
import photoDanielaSerban from "../assets/Poze Profesori/Daniela Serban.jpg";
import photoVasileStrat from "../assets/Poze Profesori/Vasile Alecsandru STRAT.jpg";
import photoEmiliaTitan from "../assets/Poze Profesori/Emilia Titan.jpg";
import photoLaviniaTotan from "../assets/Poze Profesori/Lavinia Totan.jpg";
import photoRazvanVasile from "../assets/Poze Profesori/Razvan Vasile.jpg";
import photoDenisaVasilescu from "../assets/Poze Profesori/Denisa_Vasilescu.jpeg";
// ─────────────────────────────────────────────────────────────────────────────

// ── CV-uri (import static — obligatoriu pentru GitHub Pages) ─────────────────
import cvErikaMarin from "../assets/cv/Prof. Univ. Dr. Marin Erika CV.pdf";
import cvSimonaApostu from "../assets/cv/Lect. Univ. Dr. Apostu Simona Andreea CV.pdf";
import cvCristinaBoboc from "../assets/cv/Prof. Univ. dr. Cristina Boboc CV.pdf";
import cvConstantaMihaescu from "../assets/cv/Prof. univ. dr. Constanța Mihăescu CV.pdf";
import cvMonicaRoman from "../assets/cv/Prof. univ. dr. Monica Roman CV.pdf";
import cvNicholasAlexander from "../assets/cv/Alexander-Nicholas-Victor-Julius-cv.pdf";
import cvAndreiTudorel from "../assets/cv/Prof. Univ. Dr. Andrei Tudorel CV.pdf";
import cvRazvanBarbulescu from "../assets/cv/Lect univ dr Razvan Barbulescu CV.pdf";
import cvBeguAndreea from "../assets/cv/Asis. Univ. Dr. Begu Andreea-Oana CV.pdf";
import cvSmarandaCimpoeru from "../assets/cv/Conf. univ. dr. Smaranda Cimpoeru CV.pdf";
import cvAdrianCostea from "../assets/cv/Prof. univ. dr. Adrian Costea CV.pdf";
import cvCovrigMihaela from "../assets/cv/Conf. univ. dr. Mihaela Covrig CV.pdf";
import cvSilviaCristache from "../assets/cv/Prof. Univ. Dr. Cristache Silvia-Elena CV.pdf";
import cvAnielaDanciu from "../assets/cv/Conf. Univ. dr. Danciu Aniela CV.pdf";
import cvAdrianaDavidescu from "../assets/cv/Prof. univ. dr. Adriana Anamaria Davidescu CV.pdf";
import cvGinaDimian from "../assets/cv/Prof. Univ. Dr. Dimian Gina Cristina CV.pdf";
import cvIrinaDragan from "../assets/cv/Conf. Univ. Dr. Drăgan Irina-Maria CV.pdf";
import cvSimonaGhita from "../assets/cv/Prof. Univ. Dr. Ghiță Simona Ioana CV.pdf";
import cvRodicaGogonea from "../assets/cv/Conf. Univ. Dr. Gogonea Rodica-Manuela CV.pdf";
import cvEmiliaGogu from "../assets/cv/Conf. Univ. Dr. Gogu Emilia CV.pdf";
import cvGianiGradinaru from "../assets/cv/Prof. Univ. Dr. Grădinaru Giani Ionel CV.pdf";
import cvClaudiuHerteliu from "../assets/cv/Prof. Univ. Dr. Herțeliu Claudiu CV.pdf";
import cvBogdanIleanu from "../assets/cv/Ileanu-Bogdan-Vasile-cv.pdf";
import cvDanielaManea from "../assets/cv/Prof. univ. dr. Daniela Manea CV.pdf";
import cvEduardManta from "../assets/cv/Eduard_Manta CV.pdf";
import cvMarcuAnaMaria from "../assets/cv/MARCU ANA-MARIA CV.pdf";
import cvMaricut from "../assets/cv/Maricut-Alin-Cristian-cv.pdf";
import cvMiruna from "../assets/cv/Prof. univ. dr. Miruna Mazurencu CV.pdf";
import cvMihaelaMihai from "../assets/cv/Conf. Univ. Dr. Mihai Mihaela CV.pdf";
import cvAndreeaMirica from "../assets/cv/Lect. Univ. dr. Mirică Andreea CV.pdf";
import cvIleanaNiculescu from "../assets/cv/Prof. univ. dr. Ileana Gabriela Niculescu-Aron CV.pdf";
import cvAdrianOtoiu from "../assets/cv/Adrian Otoiu CV.pdf";
import cvDanielPele from "../assets/cv/Prof. univ. dr. Daniel Traian Pele CV.pdf";
import cvRoxanaPetcu from "../assets/cv/Lect. Univ. Dr. Petcu Ionela-Roxana CV.pdf";
import cvElenaPrada from "../assets/cv/Lect. Univ. Dr. Prada Elena-Maria CV.pdf";
import cvMihaiSacala from "../assets/cv/Prof. Univ. Dr. Sacală Mihai CV.pdf";
import cvDanielaSerban from "../assets/cv/Prof. Univ. Dr. Șerban Daniela CV.pdf";
import cvVasileStrat from "../assets/cv/Vasile Alecsandru STRAT_RO_2023.pdf";
import cvEmiliaTitan from "../assets/cv/Prof. univ. dr. Emilia Țițan CV.pdf";
import cvLaviniaTotan from "../assets/cv/Lect. Univ. Dr. Totan Lavinia-Ștefania CV.pdf";
import cvRazvanVasile from "../assets/cv/Asis. Univ. Dr. Vasile Razvan CV.pdf";
import cvDenisaVasilescu from "../assets/cv/Conf. Univ. Dr. Vasilescu Maria Denisa CV.pdf";
// ─────────────────────────────────────────────────────────────────────────────

const MemberAvatar = ({
  initials,
  photo,
  colorClass,
}: {
  initials: string;
  photo: string;
  colorClass: string;
}) => {
  const [imgError, setImgError] = useState(false);

  if (!photo || imgError) {
    return (
      <div
        className={`${colorClass} rounded-full w-16 h-16 flex items-center justify-center text-white mb-4 flex-shrink-0`}
      >
        <span className="text-xl">{initials}</span>
      </div>
    );
  }

  return (
    <img
      src={photo}
      alt={initials}
      onError={() => setImgError(true)}
      className="rounded-full w-16 h-16 object-cover mb-4 border-2 border-[#4361EE]/30 flex-shrink-0"
    />
  );
};

export function CadreDidactice() {
  const [query, setQuery] = useState("");

  const conducere = {
    name: "MARIN Erika",
    initials: "ME",
    role: "Director Departament",
    email: "erika.marin@csie.ase.ro",
    photo: photoErikaMarin,
    hasPage: true,
    cvUrl: cvErikaMarin,
  };

  const consiliu = [
    {
      name: "APOSTU Simona Andreea",
      initials: "AS",
      role: "Membru Consiliu",
      position: "Conferențiar Universitar",
      email: "simona.apostu@csie.ase.ro",
      photo: photoSimonaApostu,
      hasPage: true,
      cvUrl: cvSimonaApostu,
    },
    {
      name: "BOBOC Cristina Rodica",
      initials: "BC",
      role: "Membru Consiliu",
      position: "Profesor Universitar",
      email: "cristina.boboc@csie.ase.ro",
      photo: photoCristinaBoboc,
      hasPage: true,
      cvUrl: cvCristinaBoboc,
    },
    {
      name: "MIHAESCU Constanța",
      initials: "MC",
      role: "Membru Consiliu",
      position: "Profesor Universitar",
      email: "constanta.mihaescu@csie.ase.ro",
      photo: photoConstantaMihaescu,
      hasPage: true,
      cvUrl: cvConstantaMihaescu,
    },
    {
      name: "ROMAN Monica Mihaela",
      initials: "RM",
      role: "Membru Consiliu",
      position: "Profesor Universitar",
      email: "monica.roman@csie.ase.ro",
      photo: photoMonicaRoman,
      hasPage: true,
      cvUrl: cvMonicaRoman,
    },
  ];

  const cadre = [
    {
      name: "ALEXANDER Nicholas Victor Julius",
      initials: "AN",
      position: "Asistent Universitar",
      email: "nicholas.alexander@csie.ase.ro",
      photo: photoNicholasAlexander,
      hasPage: false,
      cvUrl: cvNicholasAlexander,
    },
    {
      name: "ANDREI Tudorel",
      initials: "AT",
      position: "Profesor Universitar",
      email: "tudorel.andrei@csie.ase.ro",
      photo: photoAndreiTudorel,
      hasPage: true,
      cvUrl: cvAndreiTudorel,
    },
    {
      name: "BĂRBULESCU Răzvan",
      initials: "BR",
      position: "Lector Universitar",
      email: "razvan.barbulescu@csie.ase.ro",
      photo: photoRazvanBarbulescu,
      hasPage: true,
      cvUrl: cvRazvanBarbulescu,
    },
    {
      name: "BEGU Andreea Oana",
      initials: "BA",
      position: "Asistent Universitar",
      email: "andreea.begu@csie.ase.ro",
      photo: photoBeguAndreea,
      hasPage: true,
      cvUrl: cvBeguAndreea,
    },
    {
      name: "CIMPOERU Smaranda",
      initials: "CS",
      position: "Conferențiar Universitar",
      email: "smaranda.cimpoeru@csie.ase.ro",
      photo: photoSmarandaCimpoeru,
      hasPage: true,
      cvUrl: cvSmarandaCimpoeru,
    },
    {
      name: "COSTEA Adrian",
      initials: "CA",
      position: "Profesor Universitar",
      email: "adrian.costea@csie.ase.ro",
      photo: photoAdrianCostea,
      hasPage: true,
      cvUrl: cvAdrianCostea,
    },
    {
      name: "COVRIG Mihaela",
      initials: "CM",
      position: "Conferențiar Universitar",
      email: "mihaela.covrig@csie.ase.ro",
      photo: photoCovrigMihaela,
      hasPage: true,
      cvUrl: cvCovrigMihaela,
    },
    {
      name: "CRISTACHE Silvia Elena",
      initials: "CS",
      position: "Profesor Universitar",
      email: "silvia.cristache@csie.ase.ro",
      photo: photoSilviaCristache,
      hasPage: true,
      cvUrl: cvSilviaCristache,
    },
    {
      name: "DANCIU Aniela Raluca",
      initials: "DA",
      position: "Conferențiar Universitar",
      email: "aniela.danciu@csie.ase.ro",
      photo: photoAnielaDanciu,
      hasPage: true,
      cvUrl: cvAnielaDanciu,
    },
    {
      name: "DAVIDESCU Adriana Anamaria",
      initials: "DA",
      position: "Profesor Universitar",
      email: "adriana.davidescu@csie.ase.ro",
      photo: photoAdrianaDavidescu,
      hasPage: true,
      cvUrl: cvAdrianaDavidescu,
    },
    {
      name: "DIMIAN Gina Cristina",
      initials: "DG",
      position: "Profesor Universitar",
      email: "gina.dimian@csie.ase.ro",
      photo: photoGinaDimian,
      hasPage: true,
      cvUrl: cvGinaDimian,
    },
    {
      name: "DRĂGAN Irina Maria",
      initials: "DI",
      position: "Conferențiar Universitar",
      email: "irina.dragan@csie.ase.ro",
      photo: photoIrinaDragan,
      hasPage: true,
      cvUrl: cvIrinaDragan,
    },
    {
      name: "GHIȚĂ Simona Ioana",
      initials: "GS",
      position: "Profesor Universitar",
      email: "ioana.ghita@csie.ase.ro",
      photo: photoSimonaGhita,
      hasPage: true,
      cvUrl: cvSimonaGhita,
    },
    {
      name: "GOGONEA Rodica Manuela",
      initials: "GR",
      position: "Profesor Universitar",
      email: "manuela.gogonea@csie.ase.ro",
      photo: photoRodicaGogonea,
      hasPage: true,
      cvUrl: cvRodicaGogonea,
    },
    {
      name: "GOGU Emilia",
      initials: "GE",
      position: "Conferențiar Universitar",
      email: "emilia.gogu@csie.ase.ro",
      photo: photoEmiliaGogu,
      hasPage: true,
      cvUrl: cvEmiliaGogu,
    },
    {
      name: "GRĂDINARU Giani Ionel",
      initials: "GG",
      position: "Profesor Universitar",
      email: "giani.gradinaru@csie.ase.ro",
      photo: photoGianiGradinaru,
      hasPage: true,
      cvUrl: cvGianiGradinaru,
    },
    {
      name: "HERȚELIU Claudiu",
      initials: "HC",
      position: "Profesor Universitar",
      email: "claudiu.herteliu@csie.ase.ro",
      photo: photoClaudiuHerteliu,
      hasPage: true,
      cvUrl: cvClaudiuHerteliu,
    },
    {
      name: "ILEANU Bogdan Vasile",
      initials: "IB",
      position: "Conferențiar Universitar",
      email: "bogdan.ileanu@csie.ase.ro",
      photo: photoBogdanIleanu,
      hasPage: false,
      cvUrl: cvBogdanIleanu,
    },
    {
      name: "MANEA Daniela Ioana",
      initials: "MD",
      position: "Profesor Universitar",
      email: "daniela.manea@csie.ase.ro",
      photo: photoDanielaManea,
      hasPage: true,
      cvUrl: cvDanielaManea,
    },
    {
      name: "MANTA Eduard Mihai",
      initials: "ME",
      position: "Asistent Universitar",
      email: "eduard.manta@csie.ase.ro",
      photo: photoEduardManta,
      hasPage: false,
      cvUrl: cvEduardManta,
    },
    {
      name: "MARCU Ana-Maria",
      initials: "MA",
      position: "Asistent Cercetare Științifică",
      email: "ana-maria.marcu@csie.ase.ro",
      photo: photoMarcuAnaMaria,
      hasPage: true,
      cvUrl: cvMarcuAnaMaria,
    },
    {
      name: "MARICUȚ Alin Cristian",
      initials: "MA",
      position: "Asistent Universitar",
      email: "alin.maricut@csie.ase.ro",
      photo: photoMaricut,
      hasPage: true,
      cvUrl: cvMaricut,
    },
    {
      name: "MAZURENCU-MARINESCU-PELE Miruna",
      initials: "MM",
      position: "Profesor Universitar",
      email: "marinescu.mazurencu@csie.ase.ro",
      photo: photoMiruna,
      hasPage: true,
      cvUrl: cvMiruna,
    },
    {
      name: "MIHAI Mihaela",
      initials: "MM",
      position: "Conferențiar Universitar",
      email: "mihaela.mihai@csie.ase.ro",
      photo: photoMihaelaMihai,
      hasPage: true,
      cvUrl: cvMihaelaMihai,
    },
    {
      name: "MIRICĂ Andreea",
      initials: "MA",
      position: "Lector Universitar",
      email: "andreea.mirica@csie.ase.ro",
      photo: photoAndreeaMirica,
      hasPage: true,
      cvUrl: cvAndreeaMirica,
    },
    {
      name: "NICULESCU ARON Ileana Gabriela",
      initials: "NI",
      position: "Profesor Universitar",
      email: "gabriela.niculescu@csie.ase.ro",
      photo: photoIleanaNiculescu,
      hasPage: true,
      cvUrl: cvIleanaNiculescu,
    },
    {
      name: "OȚOIU Adrian",
      initials: "OA",
      position: "Lector Universitar",
      email: "adrian.otoiu@csie.ase.ro",
      photo: photoAdrianOtoiu,
      hasPage: true,
      cvUrl: cvAdrianOtoiu,
    },
    {
      name: "PÂRVAN Andrei Teofil",
      initials: "PA",
      position: "Asistent Universitar",
      email: "andrei.parvan@csie.ase.ro",
      photo: photoAndreiParvan,
      hasPage: false,
    },
    {
      name: "PELE Daniel Traian",
      initials: "PD",
      position: "Profesor Universitar",
      email: "dan.pele@csie.ase.ro",
      photo: photoDanielPele,
      hasPage: true,
      cvUrl: cvDanielPele,
    },
    {
      name: "PETCU Roxana Ionela",
      initials: "PR",
      position: "Lector Universitar",
      email: "roxana.petcu@csie.ase.ro",
      photo: photoRoxanaPetcu,
      hasPage: true,
      cvUrl: cvRoxanaPetcu,
    },
    {
      name: "PRADA Elena Maria",
      initials: "PE",
      position: "Lector Universitar",
      email: "elena.prada@csie.ase.ro",
      photo: photoElenaPrada,
      hasPage: true,
      cvUrl: cvElenaPrada,
    },
    {
      name: "SACALĂ Mihai Dumitru",
      initials: "SM",
      position: "Profesor Universitar",
      email: "mihai.sacala@csie.ase.ro",
      photo: photoMihaiSacala,
      hasPage: true,
      cvUrl: cvMihaiSacala,
    },
    {
      name: "ȘERBAN Daniela",
      initials: "ȘD",
      position: "Profesor Universitar",
      email: "daniela.serban@csie.ase.ro",
      photo: photoDanielaSerban,
      hasPage: true,
      cvUrl: cvDanielaSerban,
    },
    {
      name: "STRAT Vasile Alexandru",
      initials: "SV",
      position: "Profesor Universitar",
      email: "vasile.strat@csie.ase.ro",
      photo: photoVasileStrat,
      hasPage: false,
      cvUrl: cvVasileStrat,
    },
    {
      name: "ȚIȚAN Emilia",
      initials: "ȚE",
      position: "Profesor Universitar",
      email: "emilia.titan@csie.ase.ro",
      photo: photoEmiliaTitan,
      hasPage: true,
      cvUrl: cvEmiliaTitan,
    },
    {
      name: "ȚOȚAN Lavinia Stefania",
      initials: "ȚL",
      position: "Lector Universitar",
      email: "lavinia.totan@csie.ase.ro",
      photo: photoLaviniaTotan,
      hasPage: true,
      cvUrl: cvLaviniaTotan,
    },
    {
      name: "VASILE Răzvan",
      initials: "VR",
      position: "Asistent Universitar",
      email: "razvan.vasile@csie.ase.ro",
      photo: photoRazvanVasile,
      hasPage: true,
      cvUrl: cvRazvanVasile,
    },
    {
      name: "VASILESCU Maria Denisa",
      initials: "VM",
      position: "Conferențiar Universitar",
      email: "maria.vasilescu@csie.ase.ro",
      photo: photoDenisaVasilescu,
      hasPage: true,
      cvUrl: cvDenisaVasilescu,
    },
  ];

  const secretar = {
    name: "BURCIU Diana",
    role: "Secretarul Departamentului",
    email: "diana.burciu@ase.ro",
    telefon: "+40 21 319 19 00",
  };

  const stats = [
    { number: "43", label: "Cadre didactice" },
    { number: "5", label: "Membri Consiliu" },
    { number: "100+", label: "Publicații" },
    { number: "20+", label: "Ani experiență medie" },
  ];

  const getInitialsColor = (initials: string) => {
    const colors = [
      "bg-[#7209B7]",
      "bg-[#4361EE]",
      "bg-[#4895EF]",
      "bg-[#4CC9F0]",
    ];
    return colors[initials.charCodeAt(0) % colors.length];
  };

  const nameToSlug = (name: string) => {
    if (conducere.name === name)
      return conducere.email.split("@")[0].replace(/\./g, "-");
    const cm = consiliu.find((m) => m.name === name);
    if (cm) return cm.email.split("@")[0].replace(/\./g, "-");
    const cadm = cadre.find((m) => m.name === name);
    if (cadm) return cadm.email.split("@")[0].replace(/\./g, "-");
    return name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/ă/g, "a")
      .replace(/â/g, "a")
      .replace(/î/g, "i")
      .replace(/ș/g, "s")
      .replace(/ț/g, "t")
      .replace(/[^a-z0-9-]/g, "");
  };

  const navigateToProfesor = (name: string) => {
    window.location.hash = `#/profesor/${nameToSlug(name)}`;
  };

  // ── Căutare ────────────────────────────────────────────────────────────────
  // Ignoră diacriticele, ca „barbulescu” să găsească „BĂRBULESCU”.
  const normalize = (text: string) =>
    text
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "") // combining marks
      .toLowerCase();

  const termeni = normalize(query).split(/\s+/).filter(Boolean);

  const matches = (m: {
    name: string;
    position?: string;
    role?: string;
    email: string;
  }) => {
    if (termeni.length === 0) return true;
    const haystack = normalize(
      [m.name, m.position ?? "", m.role ?? "", m.email].join(" "),
    );
    // toți termenii trebuie găsiți, în orice ordine
    return termeni.every((t) => haystack.includes(t));
  };

  const conducereVizibila = matches(conducere);
  const consiliuFiltrat = consiliu.filter(matches);
  const cadreFiltrate = cadre.filter(matches);
  const secretarVizibil = matches(secretar);

  const areCautare = termeni.length > 0;
  const totalRezultate =
    (conducereVizibila ? 1 : 0) +
    consiliuFiltrat.length +
    cadreFiltrate.length +
    (secretarVizibil ? 1 : 0);

  return (
    <section className="mt-3 pt-[1.5cm] bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-2 bg-[#7209B7] text-white px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8">
            <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">ECHIPA NOASTRĂ</span>
          </div>
        </div>

        {/* Căutare */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="dse-search-icon w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setQuery("");
              }}
              placeholder="Caută după nume, funcție sau email…"
              aria-label="Caută în cadrele didactice"
              autoComplete="off"
              className="dse-search-input"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Șterge căutarea"
                className="dse-search-clear absolute right-4 top-1/2 -translate-y-1/2"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {areCautare && (
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3">
              {totalRezultate === 0
                ? "Niciun rezultat"
                : `${totalRezultate} ${totalRezultate === 1 ? "rezultat" : "rezultate"}`}
            </p>
          )}
        </div>

        {/* Stats — ascunse cât timp se caută */}
        {!areCautare && (
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl text-[#4361EE] dark:text-[#A5B8FF] mb-1 sm:mb-2">
                {stat.number}
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        )}

        {/* Conducere */}
        {conducereVizibila && (
        <div
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Crown className="w-5 h-5 text-[#B45309] dark:text-[#F59E0B]" />
            <h3 className="text-[#3A0CA3] dark:text-[#DDB8FF] text-xl">
              Conducere
            </h3>
          </div>
          <div className="max-w-2xl mx-auto rounded-xl shadow-sm p-6 border transition-all duration-300 bg-white dark:bg-gray-800 border-[#4CC9F0]/20 dark:border-gray-700">
            <div
              id={nameToSlug(conducere.name)}
              className="flex flex-col items-center text-center"
            >
              <MemberAvatar
                initials={conducere.initials}
                photo={conducere.photo}
                colorClass={getInitialsColor(conducere.initials)}
              />
              <h4 className="text-[#3A0CA3] dark:text-[#4CC9F0] mb-1">
                {conducere.name}
              </h4>
              <p className="text-[#B45309] dark:text-[#F59E0B] text-sm mb-3">{conducere.role}</p>
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => navigateToProfesor(conducere.name)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#7209B7] text-white rounded-lg transition-all duration-200 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Mai mult despre</span>
                </button>
                {conducere.cvUrl && (
                  <a
                    href={conducere.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#047857] text-white rounded-lg transition-all duration-200 text-sm"
                  >
                    <FileText className="w-4 h-4" />
                    <span>CV</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Consiliul Departamentului */}
        {consiliuFiltrat.length > 0 && (
        <div
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Users className="w-6 h-6 text-[#4361EE] dark:text-[#A5B8FF]" />
            <h3 className="text-[#3A0CA3] dark:text-[#DDB8FF]">
              Consiliul Departamentului
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consiliuFiltrat.map((member, index) => (
              <div
                key={index}
                id={nameToSlug(member.name)}
                className="rounded-xl shadow-sm p-6 border transition-all duration-300 bg-white dark:bg-gray-800 border-[#4CC9F0]/20 dark:border-gray-700"
              >
                <div className="flex flex-col items-center text-center">
                  <MemberAvatar
                    initials={member.initials}
                    photo={member.photo}
                    colorClass={getInitialsColor(member.initials)}
                  />
                  <h4 className="text-[#3A0CA3] dark:text-[#4CC9F0] mb-1">
                    {member.name}
                  </h4>
                  <p className="text-[#4361EE] dark:text-[#A5B8FF] text-sm mb-1">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mb-3">
                    {member.position}
                  </p>
                  <div className="flex flex-col gap-2 w-full">
                    <button
                      onClick={() => navigateToProfesor(member.name)}
                      className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-[#7209B7] text-white rounded-lg transition-all duration-200 text-xs w-full"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Mai mult despre</span>
                    </button>
                    {member.cvUrl && (
                      <button
                        onClick={() =>
                          window.open(
                            member.cvUrl,
                            "_blank",
                            "noopener,noreferrer",
                          )
                        }
                        className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-[#047857] text-white rounded-lg transition-all duration-200 text-xs w-full"
                      >
                        <FileText className="w-3 h-3" />
                        <span>CV</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}

        {/* Toate Cadrele Didactice */}
        {cadreFiltrate.length > 0 && (
        <div
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <BookOpen className="w-6 h-6 text-[#4361EE] dark:text-[#A5B8FF]" />
            <h3 className="text-[#3A0CA3] dark:text-[#DDB8FF]">
              Cadrele Didactice
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cadreFiltrate.map((member, index) => (
              <div
                key={index}
                id={nameToSlug(member.name)}
                className="rounded-xl shadow-sm p-6 border transition-all duration-300 bg-white dark:bg-gray-800 border-[#4CC9F0]/20 dark:border-gray-700"
              >
                <div className="flex flex-col items-center text-center">
                  <MemberAvatar
                    initials={member.initials}
                    photo={member.photo}
                    colorClass={getInitialsColor(member.initials)}
                  />
                  <h4 className="text-[#3A0CA3] dark:text-[#4CC9F0] mb-1">
                    {member.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mb-3">
                    {member.position}
                  </p>
                  <div className="flex flex-col gap-2 w-full">
                    <button
                      onClick={() => navigateToProfesor(member.name)}
                      className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-[#7209B7] text-white rounded-lg transition-all duration-200 text-xs w-full"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Mai mult despre</span>
                    </button>
                    {member.cvUrl && (
                      <a
                        href={member.cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-[#047857] text-white rounded-lg transition-all duration-200 text-xs w-full"
                      >
                        <FileText className="w-3 h-3" />
                        <span>CV</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}

        {/* Secretarul Departamentului */}
        {secretarVizibil && (
        <div
          className="mt-16 mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <BookOpen className="w-5 h-5 text-[#4361EE] dark:text-[#4895EF]" />
            <h3 className="text-[#3A0CA3] dark:text-[#DDB8FF] text-xl">
              Secretarul Departamentului
            </h3>
          </div>
          <div className="max-w-2xl mx-auto rounded-xl shadow-sm p-6 border transition-all duration-300 bg-white dark:bg-gray-800 border-[#4CC9F0]/20 dark:border-gray-700">
            <div className="flex flex-col items-center text-center gap-1">
              <h4 className="text-[#3A0CA3] dark:text-[#4CC9F0]">
                {secretar.name}
              </h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {secretar.email}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {secretar.telefon}
              </p>
            </div>
          </div>
        </div>
        )}

        {/* Niciun rezultat */}
        {areCautare && totalRezultate === 0 && (
          <div className="text-center py-16 mb-16">
            <Search className="w-6 h-6 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300 mb-1">
              Niciun rezultat pentru „{query}”
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Încearcă un alt nume, o altă funcție sau un email.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
