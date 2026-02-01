import type { TaxApiResponse } from '@/types/tax';

const BASE_URL = 'http://localhost:5001/tax-calculator';

export const fetchTaxBrackets = async (
   year: number = 2022,
   retries = 3,
): Promise<TaxApiResponse> => {
   console.log({ year, retries });
   console.log(`${BASE_URL}/tax-year/${year}`);

   try {
      const response = await fetch(BASE_URL);
      // const response = await fetch(`${BASE_URL}/tax-year/${year}`);
      return response.json();
   } catch (error) {
      if (retries > 0) {
         return fetchTaxBrackets(year, retries - 1);
      }
      console.log(error);
      throw error;
   }
};
