export interface TaxApiResponse {
   tax_brackets: TaxBracket[];
}

export interface TaxBracket {
   max?: number;
   min: number;
   rate: number;
}

export interface TaxResult {
   totalTax: number;
   effectiveRate: number;
   taxesPerBracket: {
      min: number;
      max?: number;
      tax: number;
      rate: number;
   }[];
}
