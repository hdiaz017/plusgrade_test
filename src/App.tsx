import { TaxForm } from './components/TaxForm';
import { TaxResult } from './components/TaxResult';

export const App = () => {
   return (
      <div className='bg-gradient gap-15'>
         <TaxForm />
         <TaxResult />
      </div>
   );
};
