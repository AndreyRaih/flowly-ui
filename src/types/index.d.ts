// Actionable is an optional type for adding 2-way-data binding to your own element
type Actionable = {
    value?: string | string[]
    onUpdate?: (payload: string | string[]) => void
}
