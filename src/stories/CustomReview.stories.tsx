import { CustomerReview } from '@/tasks/customer-review';
import { getAssetUrl } from '@/utils/handleAssets';


export default {
  title: 'Components/Customer Review',
  component: CustomerReview,
  argTypes: {
  },
};

export const Default = {
  args: {
    title: 'Sticking to a schedule can be hard, but Rise makes it easy',
    imgUrl: getAssetUrl('images/preview/sheena.png'),
    review: {
      rate: 4,
      text: 'Customer review',
      author: 'Sheena',
      date: 'July 10th, 2023',
    },
  },
};
