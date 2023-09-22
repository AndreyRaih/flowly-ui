import { OptionsContainer, OptionsContainerProps } from '../OptionsContainer';
import { ListItem, ListItemOption } from './ListItem';


type ListItemOptionData = {
  image?: string;
  icons?: string[];
}

export function ListOptionsPicker<T>({ itemClass, ...props }: OptionsContainerProps<T, ListItemOptionData>) {
  return (
    <div class={'flex gap-2 flex-col'}>
      <OptionsContainer {...props}>
        { ({ selected, onSelect, option }) => (
          <ListItem 
            option={option as ListItemOption<T>}
            selected={selected}
            onSelect={onSelect}
            checkbox={props.isMultiple}
            className={itemClass}
          />
        ) }
      </OptionsContainer>
    </div>
  );
}
