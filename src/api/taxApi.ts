import axios from 'axios';

const BASE_URL = 'http://localhost:5001/tax-calculator';

export const taxApi = axios.create({
   // baseURL: BASE_URL
   baseURL: `${BASE_URL}/tax-year/`,
});
