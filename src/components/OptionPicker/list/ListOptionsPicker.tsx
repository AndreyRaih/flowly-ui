import { OptionsContainer, OptionsContainerProps } from '../OptionsContainer';
import { ListItem, ListItemOption } from './ListItem';


type ListItemOptionData = {
  image?: string;
  icons?: string[];
}

export function ListOptionsPicker<T>(props: OptionsContainerProps<T, ListItemOptionData>) {
  return (
    <div class={'flex gap-4 flex-col'}>
      <OptionsContainer {...props}>
        { ({ selected, onSelect, option }) => (
          <ListItem 
            option={option as ListItemOption<T>}
            selected={selected}
            onSelect={onSelect}
            checkbox={props.isMultiple}
          />
        ) }
      </OptionsContainer>
    </div>
  );
}
