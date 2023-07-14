type PlanItem = {
    id: string
    label: string
    oldPrice?: number
    price: number,
    planBadgeText: string,
    priceBadge: {
        currency: string
        period: 'day' | 'week' | 'month' | 'year'
        price: number
        oldPrice?: number
    }
}

export type PlanPickerProps = {
    title?: string
    defaultPlan?: PlanItem["id"]
    plans: PlanItem[]
} & Actionable

export function PlanPickerComponent(props: PlanPickerProps) {
    return <div></div>
}
