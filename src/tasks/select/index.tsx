import { ListOptionsPicker } from '@/components/OptionPicker';
import { Title } from '@/components/Title';


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
      <Title>
        { title }
      </Title>
      <ListOptionsPicker {...rest} />
    </div>
  );
}
