import type { TaxBracket, TaxResult } from '@/types/tax';

export const calculateTaxes = (
   income: number,
   brackets: TaxBracket[],
): TaxResult => {
   let remainingIncome = income;
   let totalTax = 0;

   const taxesPerBracket = brackets.map((bracket) => {
      // No more income to tax
      if (remainingIncome <= 0) {
         return { ...bracket, tax: 0 };
      }

      // Select rate.max if available or total income
      const upperLimit = bracket.max ?? income;

      // Select minimum  between rate.in and remaining income to tax
      const taxable = Math.min(remainingIncome, upperLimit - bracket.min);
      // Apply taxes
      const tax = taxable * bracket.rate;

      // Subtract income and add taxes
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
