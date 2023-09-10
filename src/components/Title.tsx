import { ComponentChild } from 'preact';


export const Title = ({ children }: {
  children: ComponentChild
}) => {
  return (
    <div class={'text-xl text-center font-medium'}>
      { children }
    </div>
  );
};
