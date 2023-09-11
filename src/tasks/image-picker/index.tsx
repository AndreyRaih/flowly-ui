import { TileOption, TilesOptionsPicker } from '@/components/OptionPicker';


type ImagePickerProps<T> = {
  title: string
  isMultiple: boolean
  // values should be unique
  options: TileOption<T>[]
} & Actionable<T | T[]>

export function ImagePicker<T>({ title, ...optionsProps }: ImagePickerProps<T>) {
  return (
    <div class={'max-w-sm flex flex-col gap-6'}>
      <div class={'text-xl font-bold text-center'}>
        { title }
      </div>
      <TilesOptionsPicker {...optionsProps} />
    </div>
  );
}
