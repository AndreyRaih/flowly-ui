import { TileOption, TilesOptionsPicker } from '@/components/OptionPicker';
import { Title } from '@/components/Title';


type ImagePickerProps<T> = {
  title: string
  isMultiple: boolean
  // values should be unique
  options: TileOption<T>[]
} & Actionable<T | T[]>

export function ImagePicker<T>({ title, ...optionsProps }: ImagePickerProps<T>) {
  return (
    <div class={'max-w-sm flex flex-col gap-6'}>
      <Title>
        { title }
      </Title>
      <TilesOptionsPicker {...optionsProps} />
    </div>
  );
}
