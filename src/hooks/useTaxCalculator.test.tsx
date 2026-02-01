import { describe, expect, test } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useTaxCalculator } from './useTaxCalculator';

describe('useTaxCalculator', () => {
   const wrapper = ({ children }: { children: React.ReactNode }) => (
      <>{children}</>
   );
   test('should return initial default state (loading, error, result)', () => {
      const { result } = renderHook(() => useTaxCalculator());

      expect(result).toBeDefined();
      expect(result.current.error).toBeNull();
      expect(result.current.loading).toBeFalsy();
      expect(result.current.result).toBeNull();
      expect(result.current.calculation).toBeDefined();
   });
   test('should return correct value when year is correct', async () => {
      const { result } = renderHook(() => useTaxCalculator(), { wrapper });
      const income = 100000;
      const totalTax = 17739.165;
      const effectiveRate = 0.17739165;

      await act(async () => {
         await result.current.calculation(income, 2022);
      });
      expect(result.current.result?.taxesPerBracket).toContainEqual({
         min: 50197,
         max: 100392,
         rate: 0.205,
         tax: 10209.615,
      });

      expect(result.current.result?.totalTax).toBe(totalTax);
      expect(result.current.result?.effectiveRate).toBe(effectiveRate);
   });
});
