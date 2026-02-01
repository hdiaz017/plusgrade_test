import type { TaxResult as TaxResultType } from '@/types/tax';

interface Props {
   result: TaxResultType;
}

export const TaxResult = ({ result }: Props) => {
   const { effectiveRate, taxesPerBracket, totalTax } = result;

   return (
      <section>
         <h2>Tax Calculation Result</h2>

         <div>
            {/* <strong>Total Taxes:</strong> {formatCurrency(result.totalTax)} */}
            <strong>Total Taxes:</strong> {totalTax}
         </div>

         <div>
            <strong>Effective Rate:</strong>
            {effectiveRate}
         </div>

         <table>
            <thead>
               <tr>
                  <th>Income Range</th>
                  <th>Rate</th>
                  <th>Tax Owed</th>
               </tr>
            </thead>
            <tbody>
               {taxesPerBracket.map((bracket, index) => (
                  <tr key={index}>
                     <td>
                        {bracket.min} –{' '}
                        {bracket.max ? bracket.max : 'and above'}
                     </td>
                     <td>{bracket.rate}</td>
                     <td>{bracket.tax}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </section>
   );
};
