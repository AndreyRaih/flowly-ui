import { useSignal } from '@preact/signals';


export interface StateDecoratorProps {
  
}

export const asActionable = (Component: any) => (props: any) => {
  const state = useSignal(null);

  return (
    <div>
      <Component
        {...props}
        value={state.value}
        onUpdate={(value: any) => {
          props.onUpdate?.(value);
          state.value = value;
        }}
      />
    </div>
  );
};
