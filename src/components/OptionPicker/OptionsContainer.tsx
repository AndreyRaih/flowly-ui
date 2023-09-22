import { ComponentChild } from 'preact';


export interface OptionsContainerProps<Value, OptionData> extends Actionable <Value | Value[]>{
  isMultiple?: boolean;
  options: Array<Option<Value, OptionData>>;
  itemClass?: string;
}

type OptionRenderer<Value, OptionData> = ({
  selected,
  onSelect,
  option,
}: {
  selected: boolean
  onSelect: () => void
  option: Option<Value, OptionData>
}) => ComponentChild

export type Option<Value, OptionData = {}> = {
  label: string;
  value: Value;
} & {
  [K in keyof OptionData]: OptionData[K];
}

export type OptionsPickerProps<T, OptionData> = OptionsContainerProps<T, OptionData>;

export function OptionsContainer<Value, OptionData>({
  options,
  value,
  onUpdate,
  isMultiple,
  children,
}: OptionsContainerProps<Value, OptionData> & {
  children: OptionRenderer<Value, OptionData>;
}) {
  const handleChange = (optionValue: Value, selected: boolean) => {
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
        const selected = isMultiple ? (value as Value[])?.includes(option.value) : option.value === value;

        return children({ 
          option, 
          selected, 
          onSelect: () => handleChange(option.value, !selected),
        });
      }) }
    </>
  );
}
