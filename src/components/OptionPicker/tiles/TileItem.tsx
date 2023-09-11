import cs from 'classnames';
import { Checkbox } from '@/components/Checkbox';
import { Option } from '../OptionsContainer';

import s from '../style.module.css';


export interface TileOption<T> extends Option<T> {
  image: string
}

export function TileItem<T> ({ option, selected, onSelect }: {
  option: TileOption<T>
  selected?: boolean
  onSelect: () => void
}) {
  const { image, value, label = value } = option;
  const cls = cs(s.option, selected && s.checked, 'flex flex-col');
  
  return (
    <div class={cls} onClick={() => onSelect()}>
      <div class={'aspect-square bg-cover bg-center'} style={{ backgroundImage: `url(${image})` }} />
      <div class={'flex gap-1 items-center justify-center p-2 text-sm font-medium text-center'}>
        <Checkbox cls={s.checkbox} size={20} checked={selected} />
        { label }
      </div>
    </div>
  );
}
