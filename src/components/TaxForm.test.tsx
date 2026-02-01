import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { TaxForm } from './TaxForm';

describe('TaxForm', () => {
   const calculation = vi.fn();

   test('should render AnnualIcome, Year and button inputs', () => {
      render(<TaxForm calculation={calculation} />);
      screen.debug();
      const annualIncome = screen.getByTestId('income-input');
      const year = screen.getByTestId('year-input');
      const button = screen.getByRole('button');
      expect(annualIncome).toBeDefined();
      expect(year).toBeDefined();
      expect(button).toBeDefined();
   });
   test('should match snapshot', () => {
      const { container } = render(<TaxForm calculation={calculation} />);
      expect(container).toMatchSnapshot();
   });
});
