import { OptionsContainer, OptionsPickerProps } from '../OptionsContainer';
import { TileItem, TileOption } from './TileItem';


type TileOptionData = {
  image: string;
}

export { type TileOption };

export function TilesOptionsPicker<T>(props: OptionsPickerProps<T, TileOptionData>) {
  return (
    <div class={'flex flex-wrap gap-4 justify-center'}>
      <OptionsContainer {...props}>
        { ({ selected, onSelect, option }) => (
          <div style="width: calc(50% - 8px);">
            <TileItem 
              option={option}
              selected={selected}
              onSelect={onSelect}
              checkbox={props.isMultiple}
            />
          </div>
        ) }
      </OptionsContainer>
    </div>
  );
}
