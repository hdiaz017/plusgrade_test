import { beforeEach, describe, expect, test } from 'vitest';

import AxiosMockAdapter from 'axios-mock-adapter';
import { taxApi } from '../taxApi';
import { getTaxBrackets } from './getTaxBrackets.api';

describe('taxApi', () => {
   const bracketsMockApi = new AxiosMockAdapter(taxApi);
   beforeEach(() => {
      bracketsMockApi.reset();
   });
   test('should fetch and return tax brackets from endpoint', async () => {
      bracketsMockApi.onGet('/2022').reply(200, {
         tax_brackets: [
            {
               max: 50197,
               min: 0,
               rate: 0.15,
            },
            {
               max: 100392,
               min: 50197,
               rate: 0.205,
            },
            {
               max: 155625,
               min: 100392,
               rate: 0.26,
            },
            {
               max: 221708,
               min: 155625,
               rate: 0.29,
            },
            {
               min: 221708,
               rate: 0.33,
            },
         ],
      });
      const result = await getTaxBrackets(2022);

      expect(result).toBeDefined();
      expect(result.tax_brackets).toHaveLength(5);
      expect(result.tax_brackets).toContainEqual({
         min: 221708,
         rate: 0.33,
      });
   });
   test('should throw an error if year data is wrong', async () => {
      bracketsMockApi.onGet('/2022').reply(404, {
         errors: [{ message: 'Tax year is not supported.' }],
      });

      await getTaxBrackets(2022).catch((error) => {
         expect(error).toBeDefined();
         expect(error.response.data.errors[0].message).toBe(
            'Tax year is not supported.',
         );
         expect(error.message).toBe('Request failed with status code 404');
      });
   });
});
