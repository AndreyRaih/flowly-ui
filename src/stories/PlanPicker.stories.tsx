import { Currency } from '@/common/constants';
import { PlanPicker } from '@/tasks';
import { asActionable } from './decorators';
import { PaymentPeriod } from '@/tasks/plan-picker';


export default {
  title: 'Components/PlanPicker',
  component: asActionable(PlanPicker),
  argTypes: {
    onUpdate: { action: 'onUpdate' },
  },
};

export const Default = {
  args: {
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
  },
};
