import { CustomerReview } from '@/tasks/customer-review';
import { getAssetUrl } from '@/utils/handleAssets';


export default {
  title: 'Components/Reviews/Single',
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
      text: 'I was surprised my wardrobe lacked the colors the app identified for me, but when I pulled out a jacket in my palette, I was amazed at how it made my skin, hair, and eyes pop.',
      author: 'Sheena',
      date: 'July 10th, 2023',
    },
  },
};
