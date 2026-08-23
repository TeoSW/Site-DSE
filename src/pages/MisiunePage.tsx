import { SimpleHeader } from '../components/SimpleHeader';
import { Misiune } from '../components/Misiune';
import { Footer } from '../components/Footer';

export default function MisiunePage() {
return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <SimpleHeader/>
      
      <main className="flex-grow">
        <Misiune />
      </main>

      <Footer />
    </div>
  );
}