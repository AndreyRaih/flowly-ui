import { Currency } from './common/constants';
import { PaymentPeriod } from './tasks/plan-picker';
import { getIconUrl } from './utils/handleAssets';
import colors from './common/colors.json';


export const list = {
  title: 'Your personal\nstyle elevating plan',
  items: [
    {
      icon: { url: getIconUrl('app'), bg: '#FFEFD8' },
      text: 'Highlight your natural beauty with a personal color palette',
    },
    { 
      icon: { url: getIconUrl('shirt'), bg: '#EDE2FF' },
      text: 'Get inspired with outfits suggestions tailored to your color and style types',
    },
    {
      icon: { url: getIconUrl('wear'), bg: '#FFDFE1' },
      text: 'Maximize your wardrobe with suggestions on how mix and match items you own',
    },
    {
      icon: { url: getIconUrl('comment'), bg: '#E7F5D5' },
      text: 'Personalized tips for your color, style and body type',
    },
    {
      icon: { url: getIconUrl('bag'), bg: '#D8EEFF' },
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

export const progressBar = {
  simple: {
    current: 12,
    total: 28,
    title: 'Simple progress bar',
    hasCounter: true,
    colorStart: colors.orange[400],
    colorEnd: colors.red[350],
    onGoBack: () => alert('go back'),
  },
  segmented: {
    current: 12,
    total: 28,
    segments: 4,
    title: 'Segmented Progress Bar',
    hasCounter: true,
    // colorStart: colors.orange[400],
    // colorEnd: colors.red[350],
    onGoBack: () => alert('go back'),
  },
  steps: {
    current: 12,
    total: 28,
    segments: 3,
    steps: true,
    size: 6,
    title: 'Progress Bar with steps',
    hasCounter: true,
    colorStart: colors.orange[400],
    colorEnd: colors.red[350],
    onGoBack: () => alert('go back'),
  },
};
