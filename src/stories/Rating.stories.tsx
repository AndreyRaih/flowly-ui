import { Rating, RatingProps } from '@/tasks/rating';
import { asActionable } from './decorators';


export default {
  title: 'Components/Rating',
  component: asActionable(Rating),
  argTypes: {
    onUpdate: { action: 'onUpdate' },
  },
};

export const Default = {
  args: {
    minRate: 1,
    maxRate: 5,
    minRateLabel: 'Not at all',
    maxRateLabel: 'Yes',
  } as RatingProps,
};
