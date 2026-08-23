import { SimpleHeader } from '../components/SimpleHeader';
import { Cercetare } from '../components/Cercetare';
import { Footer } from '../components/Footer';

export default function CercetarePage() {
return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <SimpleHeader/>
      
      <main className="flex-1">
        <Cercetare />
      </main>

      <Footer />
    </div>
  );
}