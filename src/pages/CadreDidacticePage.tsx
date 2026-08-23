import { SimpleHeader } from '../components/SimpleHeader';
import { CadreDidactice } from '../components/CadreDidactice';
import { Footer } from '../components/Footer';

export default function CadreDidacticePage() {
return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <SimpleHeader/>
      
      <main className="flex-grow">
        <CadreDidactice />
      </main>

      <Footer />
    </div>
  );
}