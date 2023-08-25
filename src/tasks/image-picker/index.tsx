type ImagePickerProps = {
  title: string
  isMultiple: string
  options: {
    imgSrc: string
    value: string
  }[]
} & Actionable<string | string[]>

export function ImagePicker(props: ImagePickerProps) {
  return (<div />);
}
