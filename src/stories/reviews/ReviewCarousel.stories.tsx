import { ReviewCarousel } from '@/tasks/review-carousel';


export default {
  title: 'Components/Reviews/Carousel',
  component: ReviewCarousel,
  argTypes: {
  },
};

export const Default = {
  args: {
    interval: 3,
    duration: 0.4,
    reviews: [
      {
        author: 'John Doe',
        text: 'Happy customer review1',
        rate: 1,
      },
      {
        author: 'John Doe',
        text: 'Happy customer review2',
        rate: 2,
      },
      {
        author: 'John Doe',
        text: 'Happy customer review3',
        rate: 3,
      },
      {
        author: 'John Doe',
        text: 'Happy customer review4',
        rate: 4,
      },
      {
        author: 'John Doe',
        text: 'Happy customer review5',
        rate: 5,
      },
    ],
    title: 'Trusted by XXX users',
  },
};
