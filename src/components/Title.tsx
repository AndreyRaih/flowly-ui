import cs from 'classnames';
import { ComponentChild } from 'preact';
import { JSXInternal } from 'preact/src/jsx';


export const Title = ({ children, class: _class, className, ...props }: {
  children: ComponentChild
} & JSXInternal.IntrinsicElements['div']) => {
  const cls = (_class ?? className) as string;

  return (
    <div class={cs('text-lg text-center font-bold', cls)} {...props}>
      { children }
    </div>
  );
};
