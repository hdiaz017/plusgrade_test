import { TaxForm } from './components/TaxForm';
import { TaxResult } from './components/TaxResult';
import { useTaxCalculator } from './hooks/useTaxCalculator';

export const App = () => {
   const { calculation, result, loading } = useTaxCalculator();

   return (
      <div className='bg-gradient gap-15'>
         <TaxForm calculation={calculation} />

         {loading ? <>Loading</> : null}

         {result && <TaxResult result={result} />}
      </div>
   );
};
