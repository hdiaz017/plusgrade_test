import { Button } from '@/components/ui/button';
import {
   Field,
   FieldDescription,
   FieldGroup,
   FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export const TaxForm = () => {
   return (
      <FieldGroup className='w-1/4 '>
         <Field>
            <FieldLabel htmlFor='fieldgroup-income'>Annual Income</FieldLabel>
            <Input id='fieldgroup-income' placeholder='$' type='number' />
         </Field>
         <Field>
            <FieldLabel htmlFor='fieldgroup-year'>Tax Year</FieldLabel>
            <Input id='fieldgroup-year' type='number' />
            <FieldDescription>
               Please enter a year from 2019 to 2022.
            </FieldDescription>
         </Field>
         <Field orientation='horizontal'>
            <Button type='submit' className='border hover:bg-slate-800'>
               Submit
            </Button>
         </Field>
      </FieldGroup>
   );
};
