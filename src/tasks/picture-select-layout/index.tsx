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
        <div class={'flex-[10]'}>
          <img class={'max-w-[100%]'} src={pictureUrl} alt={title} />
        </div>
        <div class={'flex-[8] pt-[50px]'}>
          <ListOptionsPicker itemClass='text-center' {...rest} />
        </div>
      </div>
    </div>
  );
}
