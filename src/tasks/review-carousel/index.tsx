type ReviewCarouselProps = {
  title: string
  reviews: {
    rate: number
    text: string
    author: string
  }[],
  duration?: number;
}

export function ReviewCarousel(props: ReviewCarouselProps) {
  return (<div />);
}
