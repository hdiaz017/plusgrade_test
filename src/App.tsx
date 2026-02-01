import { TaxForm } from './components/TaxForm';
import { TaxResult } from './components/TaxResult';
import { useTaxCalculator } from './hooks/useTaxCalculator';
import { Spinner } from '@/components/ui/spinner';

export const App = () => {
   const { calculation, result, loading, error } = useTaxCalculator();
   console.log(error);

   return (
      <div className='bg-gradient gap-15'>
         <TaxForm calculation={calculation} />

         {loading && (
            <div className='flex gap-2 items-center justify-center'>
               {' '}
               <Spinner className='size-8' data-icon='inline-start' />
               <span>Processing Data</span>
            </div>
         )}

         {result && <TaxResult result={result} />}
         {error && error}
      </div>
   );
};
