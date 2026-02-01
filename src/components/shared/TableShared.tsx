import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from '@/components/ui/table';
import { formatCurrency } from '@/utils/formatUtilities';

interface Props {
   taxesPerBracket: {
      min: number;
      max?: number;
      tax: number;
      rate: number;
   }[];
}

export const TableShared = ({ taxesPerBracket }: Props) => {
   return (
      <Table>
         <TableHeader>
            <TableRow>
               <TableHead className=' text-gray-400'>Tax Bracket</TableHead>
               <TableHead className='text-center text-gray-400'>
                  Tax Rate
               </TableHead>
               <TableHead className='text-right text-gray-400'>
                  Tax Payable
               </TableHead>
            </TableRow>
         </TableHeader>
         <TableBody>
            {taxesPerBracket.map((bracket, i) => (
               <TableRow key={i}>
                  <TableCell className='font-medium '>
                     {' '}
                     {formatCurrency(bracket.min)} –{' '}
                     {bracket.max ? formatCurrency(bracket.max) : 'and above'}
                  </TableCell>
                  <TableCell>%{bracket.rate}</TableCell>
                  <TableCell className='text-right'>
                     {formatCurrency(bracket.tax)}
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};
