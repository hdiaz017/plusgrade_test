import { Button } from '@/components/ui/button';
import {
   Field,
   FieldDescription,
   FieldError,
   FieldGroup,
   FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useTaxForm } from '@/hooks/useTaxForm';

interface Props {
   calculation: (income: number, year?: number) => Promise<void>;
}

export const TaxForm = ({ calculation }: Props) => {
   const { errors, handleSubmit, income, setIncome, setYear, year } =
      useTaxForm({ calculation });

   return (
      <form onSubmit={handleSubmit} className='w-1/4 '>
         <FieldGroup className=''>
            <Field>
               <FieldLabel htmlFor='fieldgroup-income'>
                  Annual Income
               </FieldLabel>
               <Input
                  id='fieldgroup-income'
                  placeholder='$'
                  type='number'
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  required
               />
               <FieldError>{errors.incomeError}</FieldError>
            </Field>
            <Field>
               <FieldLabel htmlFor='fieldgroup-year'>Tax Year</FieldLabel>
               <Input
                  id='fieldgroup-year'
                  type='number'
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
               />
               <FieldDescription>
                  Please enter a year from 2019 to 2022.
               </FieldDescription>
               <FieldError>{errors.yearError}</FieldError>
            </Field>
            <Field orientation='horizontal'>
               <Button type='submit' className='border hover:bg-slate-800'>
                  Submit
               </Button>
            </Field>
         </FieldGroup>
      </form>
   );
};
