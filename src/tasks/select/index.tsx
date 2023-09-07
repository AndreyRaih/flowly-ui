import { ListOptionsPicker } from '@/components/OptionPicker';


type SelectProps = {
  title: string
  isMultiple?: boolean
  options: {
    label: string
    value: string
    image?: string
    icons?: string[]
  }[],
} & Actionable<string | string[]>

export function Select({ title, ...rest }: SelectProps) {
  return (
    <div class={'flex flex-col gap-6'}>
      <div class={'text-xl font-bold text-center'}>
        { title }
      </div>
      <ListOptionsPicker {...rest} />
    </div>
  );
}
