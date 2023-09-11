import { ReviewsComponent } from '@/tasks';


export default {
  title: 'Components/Reviews/List',
  component: ReviewsComponent,
  argTypes: {
  },
};

export const Default = {
  args: {
    title: 'Don\'t Take Our Word For It. Hear What Our Customers Say',
    reviews: [
      {
        title: 'This app changed my life!',
        rate: 5,
        text: 'I used to have a wardrobe full of clothes but nothing to wear. Now I get fresh new outfits from the things I already own.',
        author: 'Nancy Johnson',
        country: 'USA',
      },
      {
        title: 'Best shopping experience ever',
        rate: 4,
        text: 'This app has really demystified the shopping experience for me. I can now shop smarter, saving myself money and time',
        author: 'Carol Watson',
        country: 'USA',
      },
    ],
  },
};
