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

export function ReviewsComponent(props: ReviewsProps) {
    return <div></div>
}
