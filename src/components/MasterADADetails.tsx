import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { GraduationCap, Users, Brain, BookOpen, ExternalLink, Globe} from 'lucide-react';

const masterInfo = {
  title: 'Applied Data Analytics',
  subtitle: 'ADA',
  type: 'Professional Master\'s Program',
  language: 'Taught entirely in English',
  duration: '2 years (4 semesters)',
  year: 'Established in 2024',
  coordinator: 'Prof. Claudiu HERȚELIU, PhD',
  link: 'https://asds-csie.ase.ro/',
  description: 'An innovative English-taught program preparing you for an international career in data analytics, combining theory with intensive practice.'
};

const highlights = [
  {
    title: 'Modern Data Science',
    description: 'Learn the latest Machine Learning, Big Data, and AI techniques applied in economic statistics.',
  },
  {
    title: 'Applied Research',
    description: 'Participate in real research projects and publish scientific papers in international journals.',
  },
  {
    title: 'Professional Software',
    description: 'Master R, Python, SPSS, SAS, and other tools used in industry and research.',
  },
  {
    title: 'Career Opportunities',
    description: 'Graduates work as Data Scientists, researchers, consultants, and analysts in top companies.',
  },
];

// Types for subjects
interface Subject {
  name: string;
  nameEn: string;
  year: number;
  semester: number;
  credits: number;
  examType: 'Exam' | 'Assessment' | 'Colloquium' | '-';
  optional: 'M' | 'E' | 'I';
  syllabusLink: string;
}

// Complete data for all Master ADA subjects
const allSubjects: Subject[] = [
  // YEAR 1 - SEMESTER I
  { name: 'Matematici aplicate – teoria probabilităților', nameEn: 'Applied Mathematics – Probabilities Theory', year: 1, semester: 1, credits: 7, examType: 'Exam', optional: 'M', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112533&IDF=7&IDL=EN' },
  { name: 'Știința datelor cu Python', nameEn: 'Data Science with Python', year: 1, semester: 1, credits: 6, examType: 'Exam', optional: 'M', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112534&IDF=7&IDL=EN' },
  { name: 'Principii pentru Data Mining', nameEn: 'Data Mining Principles', year: 1, semester: 1, credits: 6, examType: 'Exam', optional: 'M', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112535&IDF=7&IDL=EN' },
  { name: 'Abordări specifice științei datelor pentru evaluarea prețurilor activelor', nameEn: 'Data Science approach to Asset Pricing', year: 1, semester: 1, credits: 5, examType: 'Assessment', optional: 'M', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112536&IDF=7&IDL=EN' },
  { name: 'Metodologia sondajului și a măsurării', nameEn: 'Survey and Measurement Methodology', year: 1, semester: 1, credits: 6, examType: 'Assessment', optional: 'E', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112537&IDF=7&IDL=EN' },
  { name: 'Managementul datelor pentru știința datelor', nameEn: 'Data Management for Data Science', year: 1, semester: 1, credits: 6, examType: 'Assessment', optional: 'E', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112538&IDF=7&IDL=EN' },
  
  // YEAR 1 - SEMESTER II
  { name: 'Machine Learning și analitici predictive', nameEn: 'Machine Learning and Predictive Analytics', year: 1, semester: 2, credits: 6, examType: 'Exam', optional: 'M', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112539&IDF=7&IDL=EN' },
  { name: 'Soft Computing', nameEn: 'Soft Computing', year: 1, semester: 2, credits: 6, examType: 'Assessment', optional: 'M', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112540&IDF=7&IDL=EN' },
  { name: 'Text Mining', nameEn: 'Text Mining', year: 1, semester: 2, credits: 5, examType: 'Exam', optional: 'M', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112541&IDF=7&IDL=EN' },
  { name: 'Tehnici de vizualizarea datelor', nameEn: 'Data Visualisation Techniques', year: 1, semester: 2, credits: 6, examType: 'Exam', optional: 'M', syllabusLink: 'http://fisadisciplina.ase.ro/Default.aspx?IDD=112542&IDF=7&IDL=EN' },
  { name: 'Analitici specifice sănătății', nameEn: 'Health Analytics', year: 1, semester: 2, credits: 7, examType: 'Assessment', optional: 'E', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112543&IDF=7&IDL=EN' },
  { name: 'Rețele Neuronale Artificiale', nameEn: 'Artificial Neural Networks', year: 1, semester: 2, credits: 7, examType: 'Assessment', optional: 'E', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112544&IDF=7&IDL=EN' },
  { name: 'Analiza Rețelelor Sociale', nameEn: 'Social Network Analysis', year: 1, semester: 2, credits: 7, examType: 'Assessment', optional: 'E', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112545&IDF=7&IDL=EN' },
  { name: 'Scientometrie și bibliometrie', nameEn: 'Scientometrics and Bibliometrics', year: 1, semester: 2, credits: 7, examType: 'Assessment', optional: 'E', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112546&IDF=7&IDL=EN' },
  
  // YEAR 2 - SEMESTER I
  { name: 'Sisteme complexe', nameEn: 'Complex Systems', year: 2, semester: 1, credits: 5, examType: 'Assessment', optional: 'M', syllabusLink: 'http://fisadisciplina.ase.ro/Default.aspx?IDD=112547&IDF=7&IDL=EN' },
  { name: 'Spunând o poveste digitală', nameEn: 'Digital Storytelling', year: 2, semester: 1, credits: 6, examType: 'Exam', optional: 'M', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112548&IDF=7&IDL=EN' },
  { name: 'Platforme Big Data', nameEn: 'Big Data Platforms', year: 2, semester: 1, credits: 7, examType: 'Exam', optional: 'E', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112549&IDF=7&IDL=EN' },
  { name: 'Sisteme Informaționale Geografice (GIS)', nameEn: 'Geographical Information Systems (GIS)', year: 2, semester: 1, credits: 7, examType: 'Exam', optional: 'E', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112550&IDF=7&IDL=EN' },
  { name: 'Analiza seriilor de timp și previziune', nameEn: 'Time Series Analysis and Forecasting', year: 2, semester: 1, credits: 6, examType: 'Exam', optional: 'E', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112551&IDF=7&IDL=EN' },
  { name: 'Modele liniare și non-liniare cu aplicații în domeniul afacerilor', nameEn: 'Linear and Nonlinear Models for Business Application', year: 2, semester: 1, credits: 6, examType: 'Exam', optional: 'E', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112552&IDF=7&IDL=EN' },
  { name: 'Metode de optimizare și simulare pentru domeniul analitic', nameEn: 'Optimization and Simulation Methods for Analytics', year: 2, semester: 1, credits: 6, examType: 'Assessment', optional: 'E', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112553&IDF=7&IDL=EN' },
  { name: 'Metode Bayesiene', nameEn: 'Bayesian Methods', year: 2, semester: 1, credits: 6, examType: 'Assessment', optional: 'E', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112554&IDF=7&IDL=EN' },
  
  // YEAR 2 - SEMESTER II
  { name: 'Practică de specialitate', nameEn: 'Internship', year: 2, semester: 2, credits: 15, examType: 'Colloquium', optional: 'M', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112555&IDF=7&IDL=EN' },
  { name: 'Seminar științific', nameEn: 'Scientific Seminar', year: 2, semester: 2, credits: 5, examType: 'Assessment', optional: 'M', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112556&IDF=7&IDL=EN' },
  { name: 'Etică și integritate academică', nameEn: 'Ethics and Academic Integrity', year: 2, semester: 2, credits: 5, examType: 'Assessment', optional: 'M', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112557&IDF=7&IDL=EN' },
  { name: 'Econometrie spațială', nameEn: 'Spatial Econometrics', year: 2, semester: 2, credits: 5, examType: 'Exam', optional: 'M', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112558&IDF=7&IDL=EN' },
  { name: 'Stagiu pentru elaborarea lucrării de disertație', nameEn: 'Preparation for defense of dissertation', year: 2, semester: 2, credits: 0, examType: '-', optional: 'I', syllabusLink: 'https://fisadisciplina.ase.ro/Default.aspx?IDD=112559&IDF=7&IDL=EN' },
];

export function MasterADADetails() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [selectedYear, setSelectedYear] = useState<number>(1);
  const [selectedSemester, setSelectedSemester] = useState<number>(1);

  // Filter subjects by year and semester
  const filteredSubjects = allSubjects.filter(
    s => s.year === selectedYear && s.semester === selectedSemester
  );

  const getOptionalityColor = (optional: string) => {
    switch(optional) {
      case 'M': return 'bg-[#4361EE] text-white';
      case 'E': return 'bg-[#4361EE] text-white';
      case 'I': return 'bg-[#7209B7] text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getOptionalityLabel = (optional: string) => {
    switch(optional) {
      case 'M': return 'Mandatory';
      case 'E': return 'Elective';
      case 'I': return 'Internship';
      default: return optional;
    }
  };

  const getExamTypeColor = (examType: string) => {
    switch(examType) {
      case 'Exam': return 'bg-[#7209B7] text-white';
      case 'Assessment': return 'bg-[#4361EE] text-white';
      case 'Colloquium': return 'bg-[#4361EE] text-white';
      default: return 'bg-gray-400 text-white';
    }
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-white dark:bg-gray-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Program Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          style={{ marginTop: "1.5cm" }}
        >
          <div className="inline-block px-6 py-2 rounded-full mb-6 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
            <span className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-300 font-medium">
              {masterInfo.type}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl mb-4 text-[#3A0CA3] dark:text-[#4CC9F0]">
            {masterInfo.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">{masterInfo.language}</p>
          <p className="text-gray-500 dark:text-gray-400">{masterInfo.description}</p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <GraduationCap className="w-5 h-5 text-[#4361EE] dark:text-[#4895EF]" />
              <span>{masterInfo.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Users className="w-5 h-5 text-[#4361EE] dark:text-[#4895EF]" />
              <span>Coordinator: {masterInfo.coordinator}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Globe className="w-5 h-5 text-[#4361EE] dark:text-[#4895EF]" />
              <span>{masterInfo.year}</span>
            </div>
          </div>
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl dark:text-white text-center mb-12">Why choose ADA?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4"
                style={{ borderColor: '#4895EF' }}
              >
                <h4 className="text-xl dark:text-white mb-2">{highlight.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Curriculum Section with Subjects Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#4361EE] text-white px-4 py-2 rounded-full mb-4">
              <Brain className="w-4 h-4" />
              <span className="text-sm">CURRICULUM</span>
            </div>
            <h2 className="text-[#3A0CA3] dark:text-white mb-4">Courses organized by semester</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Program structured over 4 semesters with advanced courses in data analytics, machine learning, and applied statistics.
            </p>
          </div>
          
          {/* Filters */}
          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            {/* Year Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedYear(1)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedYear === 1
                    ? 'bg-[#4361EE] text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Year 1
              </button>
              <button
                onClick={() => setSelectedYear(2)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedYear === 2
                    ? 'bg-[#4361EE] text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Year 2
              </button>
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
                Semester I
              </button>
              <button
                onClick={() => setSelectedSemester(2)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedSemester === 2
                    ? 'bg-[#4361EE] text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Semester II
              </button>
            </div>
          </div>

          {/* Subjects List */}
          <div className="grid gap-4 mb-12">
            {filteredSubjects.map((subject) => (
              <motion.div
                key={`${subject.nameEn}-${subject.year}-${subject.semester}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="master-subject-card-mobile bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-6 transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {subject.nameEn}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getExamTypeColor(subject.examType)}`}>
                        {subject.examType}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getOptionalityColor(subject.optional)}`}>
                        {getOptionalityLabel(subject.optional)}
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                        {subject.credits} credits
                      </span>
                    </div>
                  </div>

                  <a
                    href={subject.syllabusLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#4361EE] text-white rounded-lg transition-all"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span className="font-medium">Course Syllabus</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Legend:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">Exam Type:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#7209B7] text-white">Exam</span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#4361EE] text-white">Assessment</span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#4361EE] text-white">Colloquium</span>
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">Course Type:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#4361EE] text-white">Mandatory</span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#4361EE] text-white">Elective</span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#7209B7] text-white">Internship</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="rounded-xl p-8 md:p-12 text-white text-center"
          style={{ backgroundColor: "#4361EE" }}
        >
          <h3 className="text-3xl mb-4">Start your career in Data Analytics</h3>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Join the ADA master's program and become part of the next generation of data analysis experts.
          </p>
        </motion.div>

      </div>
    </div>
  );
}