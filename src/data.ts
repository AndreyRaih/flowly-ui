import { Currency } from './common/constants';
import { PaymentPeriod } from './tasks/plan-picker';


export const list = {
  title: 'Your personal\nstyle elevating plan',
  items: [
    {
      icon: 'app',
      text: 'Highlight your natural beauty with a personal color palette',
    },
    {
      icon: 'shirt',
      text: 'Get inspired with outfits suggestions tailored to your color and style types',
    },
    {
      icon: 'wear',
      text: 'Maximize your wardrobe with suggestions on how mix and match items you own',
    },
    {
      icon: 'comment',
      text: 'Personalized tips for your color, style and body type',
    },
    {
      icon: 'bag',
      text: 'Save money and time on shopping',
    },
  ],
};

export const planPicker = {
  title: 'Choose your plan',
  defaultPlan: '1',
  plans: [
    {
      id: '1',
      label: '12 Week plan',
      oldPrice: 9.99,
      price: 6.93,
      currency: Currency.USD,
      priceBadge: {
        period: 'day' as PaymentPeriod,
        price: 0.99,
        oldPrice: 1.42,
      },
    },
    {
      id: '2',
      label: 'Welcome Offer',
      oldPrice: 29.99,
      price: 17.99,
      currency: Currency.USD,
      planBadgeText: 'Most popular',
      priceBadge: {
        period: 'day' as PaymentPeriod,
        price: 0.58,
        oldPrice: 0.99,
      },
    },
    {
      id: '3',
      label: 'Annual plan',
      oldPrice: 59.99,
      price: 29.99,
      currency: Currency.USD,
      priceBadge: {
        period: 'day' as PaymentPeriod,
        price: 0.33,
        oldPrice: 0.71,
      },
    },
  ],
};
