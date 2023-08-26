import cs from 'classnames';
import { Checkbox } from '@/components/Checkbox';
import s from './style.module.css';


export type Option = {
  imgSrc: string
  value: string
  label?: string
}

export const OptionItem = ({ option, selected, onSelect }: {
  option: Option
  selected?: boolean
  onSelect: () => void
}) => {
  const { imgSrc, value, label = value } = option;
  const cls = cs(s.option, selected && s.checked, 'flex flex-col rounded-sm overflow-hidden bg-gray-100 cursor-pointer');
  
  return (
    <div class={cls} onClick={() => onSelect()}>
      <div class={'aspect-square bg-cover bg-center'} style={{ backgroundImage: `url(${imgSrc})` }} />
      <div class={'flex gap-1 items-center justify-center p-2 text-sm font-medium text-center'}>
        <Checkbox cls={s.checkbox} size={20} checked={selected} />
        { label }
      </div>
    </div>
  );
};
