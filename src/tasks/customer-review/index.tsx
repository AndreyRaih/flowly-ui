import { Title } from '@/components/Title';
import { Rating } from './Star';


type CustomerReviewProps = {
  title: string
  imgUrl: string
  review: {
    rate: number
    text: string
    author: string
    date: string
  }
}

const Review = ({ author, text, date, rate }: CustomerReviewProps['review']) => {
  return (
    <div class={'flex flex-col gap-2.5 py-3.5'}>
      <Rating value={rate} />
      <div class={'flex items-center justify-between'}>
        <div class={'font-medium'}>
          { author }
        </div>
        <div class={'text-gray-600 text-xs'}>
          { date }
        </div>
      </div>
      <div class={'text-blue-900 leading-[16px]'}>
        { text }
      </div>
    </div>
  );
};

export function CustomerReview({
  title,
  imgUrl,
  review,
}: CustomerReviewProps) {
  return (
    <div class={'flex flex-col gap-5'}>
      <Title class={'mb-1'}>
        { title }
      </Title>

      <div class={''}>
        <img src={imgUrl} alt={`${review.author}`} class={'rounded-sm overflow-hidden object-contain mx-auto'} />
      </div>

      <Review {...review} />
    </div>
  );
}
