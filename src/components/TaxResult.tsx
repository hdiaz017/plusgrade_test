import React from 'react';

export const TaxResult = () => {
   return (
      <section>
         <h2>Tax Calculation Result</h2>

         <div>
            {/* <strong>Total Taxes:</strong> {formatCurrency(result.totalTax)} */}
            <strong>Total Taxes:</strong> {500}
         </div>

         <div>
            <strong>Effective Rate:</strong>{' '}
            {/* {formatPercentage(result.effectiveRate)} */}
            {17.7}
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
               {/* {result.taxesPerBracket.map((bracket, index) => (
                  <tr key={index}>
                     <td>
                        {formatCurrency(bracket.min)} –{' '}
                        {bracket.max
                           ? formatCurrency(bracket.max)
                           : 'and above'}
                     </td>
                     <td>{formatPercentage(bracket.rate)}</td>
                     <td>{formatCurrency(bracket.tax)}</td>
                  </tr>
               ))} */}
            </tbody>
         </table>
      </section>
   );
};
