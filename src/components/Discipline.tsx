import { motion } from 'motion/react';
import { TrendingUp, BarChart3, Database } from 'lucide-react';

const curriculumCategories = [
  {
    name: 'Analiză și Modelare',
    count: '15',
    label: 'Analiză și Modelare',
    icon: BarChart3,
    gradient: 'bg-[#7209B7]',
    link: 'https://www.csie.ase.ro/licenta/plan-invatamant/'
  },
  {
    name: 'Pregătire Economică',
    count: '10',
    label: 'Pregătire Economică',
    icon: TrendingUp,
    gradient: 'bg-[#F72585]',
    link: 'https://www.csie.ase.ro/licenta/plan-invatamant/'
  },
  {
    name: 'Computer Science',
    count: '11',
    label: 'Computer Science',
    icon: Database,
    gradient: 'bg-[#4CC9F0]',
    link: 'https://www.csie.ase.ro/licenta/plan-invatamant/'
  },
];

export function Discipline() {
  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#3A0CA3] dark:text-[#4CC9F0] mb-6">
            Curriculum-ul Nostru
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Explorează toate cele <a href="https://www.csie.ase.ro/licenta/plan-invatamant/" target="_blank" rel="noopener noreferrer" className="text-[#4361EE] dark:text-[#A5B8FF] font-semibold hover:underline">36 de discipline</a> din programul de licență. Apasă pe oricare curs pentru a vedea descrierea detaliată.
          </p>
        </motion.div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {curriculumCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <motion.a
                key={index}
                href={category.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                }}
                className={`relative overflow-hidden rounded-3xl p-8 text-white cursor-pointer ${category.gradient} shadow-xl`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <IconComponent className="w-16 h-16" strokeWidth={1.5} />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-2">{category.count}</div>
                    <div className="text-lg font-medium opacity-90">{category.label}</div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-white/10 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
