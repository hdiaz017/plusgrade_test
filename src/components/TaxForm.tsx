import { Button } from '@/components/ui/button';
import {
   Field,
   FieldDescription,
   FieldGroup,
   FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';

import { useState } from 'react';

interface Props {
   calculation: (income: number, year: number) => Promise<void>;
}

export const TaxForm = ({ calculation }: Props) => {
   const [income, setIncome] = useState<string>('');
   const [year, setYear] = useState<string>('');

   return (
      <FieldGroup className='w-1/4 '>
         <Field>
            <FieldLabel htmlFor='fieldgroup-income'>Annual Income</FieldLabel>
            <Input
               id='fieldgroup-income'
               placeholder='$'
               type='number'
               value={income}
               onChange={(e) => setIncome(e.target.value)}
            />
         </Field>
         <Field>
            <FieldLabel htmlFor='fieldgroup-year'>Tax Year</FieldLabel>
            <Input
               id='fieldgroup-year'
               type='number'
               value={year}
               onChange={(e) => setYear(e.target.value)}
            />
            <FieldDescription>
               Please enter a year from 2019 to 2022.
            </FieldDescription>
         </Field>
         <Field orientation='horizontal'>
            <Button
               type='submit'
               className='border hover:bg-slate-800'
               onClick={() => calculation(+income, +year)}
            >
               Submit
            </Button>
         </Field>
      </FieldGroup>
   );
};
