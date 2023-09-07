import { OptionsPicker, OptionPickerProps } from '../OptionsPicker';
import { ListItem, ListItemOption } from './ListItem';


type ListItemOptionData = {
  image?: string;
  icons?: string[];
}

export function ListOptionsPicker<T>(props: OptionPickerProps<T, ListItemOptionData>) {
  return (
    <div class={'flex gap-4 flex-col'}>
      <OptionsPicker {...props}>
        { ({ selected, onSelect, option }) => (
          <ListItem 
            option={option as ListItemOption<T>}
            selected={selected}
            onSelect={onSelect}
            checkbox={props.isMultiple}
          />
        ) }
      </OptionsPicker>
    </div>
  );
}
