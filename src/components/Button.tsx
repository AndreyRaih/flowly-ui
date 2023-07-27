import { JSXInternal } from 'preact/src/jsx';


export const PrimaryButton = ({ children, ...props }: JSXInternal.IntrinsicElements['div']) => {
  return (
    <div role='button' {...props} class='px-3 py-4 rounded-md text-xl text-white font-medium text-center bg-gradient-to-r from-orange-400 to-red-400'>
      { children }
    </div>
  );
};
