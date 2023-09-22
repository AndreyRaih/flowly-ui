import { ListOptionsPicker } from '@/components/OptionPicker';
import { Title } from '@/components/Title';


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
      <Title>
        { title }
      </Title>
      <div class={'flex gap-6'}>
        <img class={'max-w-[50%]'} src={pictureUrl} alt={title} />
        <div class={'flex-1 pt-[50px]'}>
          <ListOptionsPicker {...rest} />
        </div>
      </div>
    </div>
  );
}
