type PictureSelectLayoutProps = {
  title: string
  isMultiple?: boolean
  options: {
    label: number
    value: string
  }[],
  pictureUrl: string
} & Actionable<string | string[]>

export function PictureSelectLayout(props: PictureSelectLayoutProps) {
  return (<div />);
}
