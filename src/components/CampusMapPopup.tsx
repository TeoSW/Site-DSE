import { motion } from 'motion/react';
import { MapPin, X, ExternalLink } from 'lucide-react';
import harta from '../assets/harta_ASE_nou.jpg';
interface CampusMapPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CampusMapPopup({ isOpen, onClose }: CampusMapPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 dark:bg-black/85 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#7209B7] text-white p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6" />
            <h3 className="text-2xl">Harta Campusului ASE</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Închide"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Map Image */}
        <div className="p-6">
          <div className="rounded-xl overflow-hidden shadow-sm mb-6">
            <img
              src={harta}
              alt="Harta Campusului ASE București"
              className="w-full h-auto"
            />
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border-l-4 border-[#7209B7] rounded-lg p-6 dark:bg-gray-700">
            <h4 className="text-lg mb-3 flex items-center gap-2">
              <span className="text-2xl">ℹ️</span>
              <span className="font-semibold text-gray-800 dark:text-white">Cum găsești sălile de curs?</span>
            </h4>
            <div className="space-y-3 text-gray-700 dark:text-gray-200">
              <p className="flex items-start gap-2">
                <span className="text-[#7209B7] dark:text-[#DDB8FF] mt-1">*</span>
                <span>
                  Codificarea sălilor: <strong className="text-[#7209B7] dark:text-[#DDB8FF]">primele cifre = numărul clădirii</strong>, <strong className="text-[#4361EE] dark:text-[#A5B8FF]">următoarea cifră = etajul</strong>, <strong className="text-[#F72585] dark:text-[#F72585]">ultimele două cifre = numărul sălii</strong>
                </span>
              </p>
              <p className="flex items-start gap-2 bg-white dark:bg-gray-800 rounded-lg p-4 border border-purple-200 dark:border-gray-600">
                <span className="text-2xl">💡</span>
                <span>
                  <strong className="dark:text-white">Exemplu:</strong> Sala <span className="bg-[#7209B7] text-white px-2 py-1 rounded">2303</span> înseamnă:{' '}
                  <span className="text-[#7209B7] dark:text-[#DDB8FF] font-semibold">Clădirea 2</span> (din hartă),{' '}
                  <span className="text-[#4361EE] dark:text-[#A5B8FF] font-semibold">Etajul 3</span>,{' '}
                  <span className="text-[#B5179E] dark:text-[#F72585] font-semibold">Sala 03</span>
                </span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                Toate clădirile ASE sunt marcate pe hartă cu numărul lor corespunzător. Folosește această legendă pentru a naviga cu ușurință în campus!
              </p>
            </div>
            
            {/* External Link to Official Campus Map */}
            <div className="mt-6 pt-4 border-t border-purple-200 dark:border-gray-600">
              <a
                href="https://ase.ro/universitatea/campus/harta-campus/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center gap-2 bg-[#7209B7] text-white px-6 py-3 rounded-lg transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Vezi mai multe informații</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}