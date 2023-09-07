import { ComponentChild } from 'preact';


export interface OptionPickerProps<Value, OptionData> extends Actionable <Value | Value[]>{
  isMultiple?: boolean;
  options: Array<Option<Value, OptionData>>;
  // value?: Value | Value[];
  onUpdate: (value: (Value | Value[]) | null) => void;
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

export function OptionsPicker<Value, OptionData>({
  options,
  value,
  onUpdate,
  isMultiple,
  children,
}: OptionPickerProps<Value, OptionData> & {
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
