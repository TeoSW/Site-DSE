import { SimpleHeader } from '../components/SimpleHeader';
import { Doctorat } from '../components/Doctorat';
import { Footer } from '../components/Footer';

export default function DoctoratPage() {
return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SimpleHeader/>
      
      <main>
        <Doctorat />
      </main>

      <Footer />
    </div>
  );
}