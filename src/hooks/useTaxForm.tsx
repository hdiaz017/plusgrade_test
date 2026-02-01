import React, { useState } from 'react';

type UseTaxFormParams = {
   calculation: (income: number, year?: number) => Promise<void>;
};

export const useTaxForm = ({ calculation }: UseTaxFormParams) => {
   const [income, setIncome] = useState<string>('');
   const [year, setYear] = useState<string>('');
   const [errors, setErrors] = useState<Record<string, string | null>>({
      incomeError: null,
      yearError: null,
   });

   const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      setErrors({
         incomeError: null,
         yearError: null,
      });

      const parsedIncome = Number(income.trim());
      const parsedYear = year.trim() === '' ? undefined : Number(year);

      if (isNaN(parsedIncome) || parsedIncome < 0) {
         setErrors((prev) => ({
            ...prev,
            incomeError: 'Please enter a valid annual income.',
         }));
         return;
      }

      if (parsedYear !== undefined) {
         if (
            isNaN(parsedYear) ||
            ![2019, 2020, 2021, 2022].includes(parsedYear)
         ) {
            setErrors((prev) => ({
               ...prev,
               yearError: 'Please enter a valid year tax.',
            }));
            return;
         }
      }

      calculation(parsedIncome, parsedYear);
   };
   return {
      // Variables
      income,
      year,
      errors,
      // Methods
      setYear,
      setIncome,
      handleSubmit,
   };
};
