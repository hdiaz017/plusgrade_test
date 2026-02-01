import { fetchTaxBrackets } from '@/api/taxApi';
import type { TaxResult } from '@/types/tax';
import { calculateTaxes } from '@/utils/calculateTaxes';
import { useState } from 'react';

export const useTaxCalculator = () => {
   const [result, setResult] = useState<TaxResult | null>(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);

   const calculation = async (income: number, year: number = 2022) => {
      setLoading(true);
      setError(null);

      try {
         const data = await fetchTaxBrackets(year);
         const calculatedTaxes = calculateTaxes(income, data.tax_brackets);
         setResult(calculatedTaxes);
         console.log(data);
         console.log(year);
      } catch {
         setError('Please try again later.');
      } finally {
         setLoading(false);
      }
   };

   return {
      result,
      loading,
      error,
      calculation,
   };
};
