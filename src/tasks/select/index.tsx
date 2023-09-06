type SelectProps = {
  title: string
  isMultiple?: boolean
  options: {
    label: number
    value: string
    icon?: string
    iconSet?: string[]
  }[],
  duration?: number;
} & Actionable<string | string[]>

export function Select(props: SelectProps) {
  return (<div />);
}
