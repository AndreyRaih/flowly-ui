import { Title } from '@/components/Title';
import { StarsRating } from '../../components/StarsRating';


type Review = {
  title: string,
  rate: number,
  text: string
  author: string,
  country: string
}

export type ReviewsProps = {
  title?: string
  reviews: Review[]
}

const ReviewItem = ({ title, rate, text, author, country }: Review) => {
  return (
    <div class={'flex flex-col py-4 px-5 bg-white rounded-md'} style={{ boxShadow: '0px 6px 24px 4px rgba(5, 29, 51, 0.08)' }}>
      <div class={'text-md mb-1.5'}>
        { title }
      </div>
      <StarsRating value={rate} />
      <div class={'mt-4 text-sm text-gray-600 leading-[120%]'}>
        { text }
      </div>
      <div class={'mt-4 text-sm'}>
        { author }
        { ', ' }
        { country }
      </div>
    </div>
  );
};

export function ReviewsComponent({ reviews, title }: ReviewsProps) {
  return (
    <div class={'flex flex-col gap-4'}>
      <Title>
        { title }
      </Title>
      <div class={'flex flex-col gap-4'}>
        { reviews.map(review => (
          <ReviewItem key={review.title} {...review} />
        )) }
      </div>
    </div>
  );
}
