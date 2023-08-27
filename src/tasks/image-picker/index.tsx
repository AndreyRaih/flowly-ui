import { OptionItem, type Option } from './OptionItem';


type ImagePickerProps = {
  title: string
  isMultiple: boolean
  // values should be unique
  options: Option[]
} & Actionable<string | string[]>

const Options = ({
  options,
  value,
  onUpdate,
  isMultiple,
}: Omit<ImagePickerProps, 'title'>) => {
  const handleChange = (optionValue: string, selected: boolean) => {
    let newValue;

    if (isMultiple) {
      const arrValue = (value || []) as [];
      newValue = selected ? [...arrValue, optionValue] : arrValue.filter(v => v !== optionValue);
    } else {
      newValue = optionValue;
    }

    onUpdate(newValue);
  };

  return (
    <>
      { options.map(option => {
        const selected = isMultiple ? value?.includes(option.value) : option.value === value;

        return (
          <div key={option.value} style={{ width: 'calc(50% - 8px)' }}>
            <OptionItem 
              selected={selected}
              onSelect={() => handleChange(option.value, !selected)}
              option={option}
            />
          </div>
        );
      }) }
    </>
  );
};

export function ImagePicker({ title, ...optionsProps }: ImagePickerProps) {
  return (
    <div class={'max-w-sm flex flex-col gap-6'}>
      <div class={'text-xl font-bold text-center'}>
        { title }
      </div>
      <div class={'flex flex-wrap gap-4 justify-center'}>
        <Options {...optionsProps} />
      </div>
    </div>
  );
}
