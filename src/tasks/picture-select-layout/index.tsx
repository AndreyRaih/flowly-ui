import { ListOptionsPicker } from '@/components/OptionPicker';


type PictureSelectLayoutProps = {
  title: string
  isMultiple?: boolean
  options: {
    label: string
    value: string
  }[],
  pictureUrl: string
} & Actionable<string | string[]>

export function PictureSelectLayout({ title, pictureUrl, ...rest }: PictureSelectLayoutProps) {
  return (
    <div class={'flex flex-col gap-6'}>
      <div class={'text-xl font-bold text-center'}>
        { title }
      </div>
      <div class={'flex gap-6'}>
        <img class={'max-w-[50%]'} src={pictureUrl} alt={title} />
        <div class={'flex-1 pt-[50px]'}>
          <ListOptionsPicker {...rest} />
        </div>
      </div>
    </div>
  );
}
