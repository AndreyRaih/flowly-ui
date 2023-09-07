import { OptionsPicker, OptionPickerProps } from '../OptionsPicker';
import { TileItem, TileOption } from './TileItem';


type TileOptionData = {
  image?: string;
  icons?: string[];
  checkbox?: boolean;
}

export { type TileOption };

export function TilesOptionsPicker<T>(props: OptionPickerProps<T, TileOptionData>) {
  return (
    <div class={'flex flex-wrap gap-4 justify-center'}>
      <OptionsPicker {...props}>
        { ({ selected, onSelect, option }) => (
          <div style="width: calc(50% - 8px);">
            <TileItem 
              option={option as TileOption<T>}
              selected={selected}
              onSelect={onSelect}
            />
          </div>
        ) }
      </OptionsPicker>
    </div>
  );
}
