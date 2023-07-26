import { Currency } from '@/common/constants';


export const formatPrice = (price: number, currency: Currency) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price);
};
