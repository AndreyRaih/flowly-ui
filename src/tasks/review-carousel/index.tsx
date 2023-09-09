/* eslint-disable max-lines-per-function */
import { StarsRating } from '@/components/StarsRating';
import { InfiniteCarousel } from '@/components/InfiniteCarousel';


type ReviewCarouselProps = {
  title: string
  reviews: Review[],
  durationSec?: number;
  intervalSec?: number;
}

type Review = {
  rate: number
  text: string
  author: string
}

const ReviewItem = ({ author, text, rate }: Review) => {
  return (
    <div
      class={'flex flex-col gap-2.5 py-5 items-center rounded-xs flex-1'}
      style={{ boxShadow: '0 3.5px 20px 0px rgba(0, 0, 0, 0.10)' }}
    >
      <div>
        <StarsRating value={rate} />
      </div>
      <div class={'text-sm'}>
        { `${text}` }
      </div>
      <div class={'text-[15px] text-gray-550 font-bold uppercase mt-0.5'}>
        { author }
      </div>
    </div>
  );
};

export function ReviewCarousel({ title, reviews, intervalSec, durationSec }: ReviewCarouselProps) {
  return (
    <div class={'flex flex-col gap-5'}>
      <div class={'text-xl font-medium text-center'}>
        { title }
      </div>

      <InfiniteCarousel
        transitionDurationSec={durationSec} 
        count={reviews.length}
        gap={30}
        intervalSec={intervalSec}
        className='p-5 -m-5'
      >
        { (index: number) => (
          <ReviewItem key={reviews[index].text} {...reviews[index]} />
        ) }
      </InfiniteCarousel>
    </div>
  );
}
