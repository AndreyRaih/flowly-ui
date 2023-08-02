import cn from 'classnames';

import s from './spinner.module.css';


export const Spinner = ({ size, className = '' }: {
  size?: 'xs' | 'sm' | 'md' | 'lg',
  className?: string;
}) => {
  return (
    <div class={cn(s.spinner, className, size && s[`size_${size}`])} />
  );
};
