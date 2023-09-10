import cs from 'classnames';

import s from './style.module.css';
import { JSXInternal } from 'preact/src/jsx';
import { cleanNumericString } from './utils';


type HTMLInputProps = JSXInternal.IntrinsicElements['input'];

interface InputProps extends Omit<HTMLInputProps, 'onChange' | 'pattern'> {
  onChange: (v: string) => string | void
  className?: string
  pattern?: string
  type?: string
  value?: string
  format?: (value: string) => string
}

export interface UnitInputProps extends InputProps {
  suffix: string
}

export const UnitInput = ({ suffix, className, value = '', onChange, ...rest }: UnitInputProps) => {
  const handleInput = (e: any) => {
    let value = cleanNumericString(e.target.value, { isPositive: true });
    
    e.target.value = value;

    onChange(value);
  };

  return (
    <div class={s.container}>
      <input
        {...rest}
        value={value}
        className={cs(s.input, className)}
        style={{ paddingRight: `${suffix.length * 12}px` }}
        min={rest.min || 0}
        onInput={handleInput}
        type={'tel'}
      />
      <div class={s.suffix}>
        { suffix }
      </div>
    </div>
  );
};
