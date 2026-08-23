import { SimpleHeader } from '../components/SimpleHeader';
import { Cariera } from '../components/Cariera';
import { Footer } from '../components/Footer';

export default function CareerPage() {
return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SimpleHeader/>
      
      <main>
        <Cariera />
      </main>

      <Footer />
    </div>
  );
}