import type { TaxResult as TaxResultType } from '@/types/tax';
import { TableShared } from './shared/TableShared';
import { formatCurrency } from '@/utils/formatUtilities';

interface Props {
   result: TaxResultType;
}

export const TaxResult = ({ result }: Props) => {
   const { effectiveRate, taxesPerBracket, totalTax } = result;
   // Filter taxable brackets only
   const filteredBrackets = taxesPerBracket.filter((bracket) => {
      return bracket.tax !== 0;
   });

   return (
      <section>
         <h1 className='text-2xl pb-4'>Tax Calculation Result</h1>

         <div className='pb-2'>
            {/* <strong>Total Taxes:</strong> {formatCurrency(result.totalTax)} */}
            <strong>Total Taxes: </strong> {formatCurrency(totalTax)}
         </div>

         <div className='pb-2'>
            <strong>Effective Rate: </strong>%{effectiveRate.toFixed(3)}
         </div>

         <TableShared taxesPerBracket={filteredBrackets} />
      </section>
   );
};
