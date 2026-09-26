import products from '@/data/products.json'; import {Product} from './types'; export const initialProducts=products as Product[];
export const money=(n:number)=>new Intl.NumberFormat('uz-UZ').format(n)+" so‘m";
