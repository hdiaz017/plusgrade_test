import type { TaxBracket, TaxResult } from '@/types/tax';

export const calculateTaxes = (
   income: number,
   brackets: TaxBracket[],
): TaxResult => {
   let remainingIncome = income;
   let totalTax = 0;

   const taxesPerBracket = brackets.map((bracket) => {
      if (remainingIncome <= 0) {
         return { ...bracket, tax: 0 };
      }

      const upperLimit = bracket.max ?? income;
      const taxable = Math.min(remainingIncome, upperLimit - bracket.min);
      const tax = taxable * bracket.rate;

      remainingIncome -= taxable;
      totalTax += tax;

      return {
         min: bracket.min,
         max: bracket.max,
         rate: bracket.rate,
         tax,
      };
   });

   return {
      totalTax,
      effectiveRate: income > 0 ? totalTax / income : 0,
      taxesPerBracket,
   };
};
