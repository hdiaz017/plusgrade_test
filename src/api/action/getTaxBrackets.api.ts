import type { TaxApiResponse } from '@/types/tax';
import { taxApi } from '../taxApi';

export const getTaxBrackets = async (
   year: number = 2022,
   retries = 3,
): Promise<TaxApiResponse> => {
   try {
      const { data, status } = await taxApi.get<TaxApiResponse>(`/${year}`);

      if (status === 200) return data;
      if (status === 404) throw new Error('Tax year is not supported.');

      throw new Error('Database not found');
   } catch (error) {
      if (retries > 0) {
         return getTaxBrackets(year, retries - 1);
      }

      throw error;
   }
};
