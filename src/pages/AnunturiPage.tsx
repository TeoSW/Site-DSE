import { motion } from 'motion/react';
import { SimpleHeader } from '../components/SimpleHeader';
import { Footer } from '../components/Footer';
import { Bell, Megaphone } from 'lucide-react';

export default function AnunturiPage() {
return (
    <div className="min-h-screen bg-gray-50 flex flex-col dark:bg-gray-900">
      <SimpleHeader/>
      
      <main className="pt-32 pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#7209B7] text-white px-4 py-2 rounded-full mb-4">
              <Bell className="w-4 h-4" />
              <span className="text-sm">Anunțuri</span>
            </div>
            <h1 className="text-5xl mb-6">
              <span className="text-[#3A0CA3] dark:text-[#4CC9F0]">
                Anunțuri Departament
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Pagină în curs de dezvoltare
            </p>
          </motion.div>

          {/* Placeholder Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-12 border border-gray-100 dark:border-gray-700">
              <div className="w-20 h-20 bg-[#7209B7] rounded-full flex items-center justify-center mx-auto mb-6">
                <Megaphone className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl mb-4 text-gray-900 dark:text-white">
                Conținut în pregătire
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Secțiunea de anunțuri va fi disponibilă în curând. Aici vei găsi toate comunicările importante de la departament.
              </p>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}