import cs from 'classnames';
import s from './style.module.css';


export const Checkbox = ({ checked = false, cls, size = 24 }: { 
  checked?: boolean
  hover?: boolean
  cls?: string
  size?: number
}) => {
  return (
    <svg class={cs(s.checkbox, checked && s.checked, cls)} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
      { checked ? (
        <rect class={s.rect} width='24px' height='24px' rx={size/4} />
      ) : (
        <rect class={s.rect} x="0.5" y="0.5" width="23" height="23" rx="5.5" />
      ) }
      <path 
        class={s.checkmark}
        d="M7 12.3476L10.4048 15.6476L17 9"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
