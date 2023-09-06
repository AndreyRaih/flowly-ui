type InputGroupProps = {
  title: string
  groups: {
    groupId: string,
    label: string,
    inputs: {
      placeholder: string,
      suffix: string
    }[]
  }[]
} & Actionable<{
  [groupId: string]: string[]
}>

export function InputGroup(props: InputGroupProps) {
  return (<div />);
}
