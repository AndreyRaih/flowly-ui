import cs from 'classnames';
import type { Option } from '../OptionsContainer';
import { Checkbox } from '@/components/Checkbox';

import s from '../style.module.css';


export interface ListItemOption<T> extends Option<T> {
  image?: string
  icons?: string[]
}

export function ListItem<T>({ option: { image, label, icons }, className, checkbox, selected, onSelect }: { 
  option: ListItemOption<T>
  selected?: boolean
  onSelect: () => void
  checkbox?: boolean
  className?: string
}) {
  const handleClick = () => {
    onSelect();
  };

  return (
    <div class={cs(s.option, selected && s.checked, 'flex gap-4 items-center px-4', className)} onClick={handleClick}>
      { image && (
        <div class={'py-2 -ml-2'}>
          <img class={'w-full max-h-[64px] aspect-square rounded-xs'} src={image} alt={label} />
        </div>
      ) }
      <div class={'py-7 flex-1 font-medium'}>
        { label }
      </div>
      { icons && (
        <div class={'flex gap-1.5'}>
          { icons.map(icon => (
            <img key={icon} src={icon} alt={''} class={'rounded-full aspect-square max-w-[34px]'} />
          )) }
        </div>
      ) }
      { checkbox && <Checkbox cls={'s.checkbox'} size={20} checked={selected} /> }
    </div>
  );
}
