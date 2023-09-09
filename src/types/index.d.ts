// Actionable is an optional type for adding 2-way-data binding to your own element
type Actionable <T> = {
  value?: T | null
  onUpdate: (value: T | null) => void
}

type seconds = number;
