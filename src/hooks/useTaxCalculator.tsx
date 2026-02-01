import { getTaxBrackets } from '@/api/action/getTaxBrackets.api';
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
      setResult(null);

      try {
         const data = await getTaxBrackets(year);
         const calculatedTaxes = calculateTaxes(income, data.tax_brackets);
         setResult(calculatedTaxes);
      } catch {
         setError('Something went wrong. Please try again later.');
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
