import { Product } from '../types';
import { meatAndBakeryProducts } from './products/meatAndBakery';
import { snackAndConfectioneryProducts } from './products/snackAndConfectionery';
import { blendersAndPackersProducts } from './products/blendersAndPackers';
import { beveragesAndCoffeeProducts } from './products/beveragesAndCoffee';
import { processingAndPeelersProducts } from './products/processingAndPeelers';
import { coldAndCookingProducts } from './products/coldAndCooking';

export const PRODUCTS: Product[] = [
  ...meatAndBakeryProducts,
  ...snackAndConfectioneryProducts,
  ...blendersAndPackersProducts,
  ...beveragesAndCoffeeProducts,
  ...processingAndPeelersProducts,
  ...coldAndCookingProducts,
];
