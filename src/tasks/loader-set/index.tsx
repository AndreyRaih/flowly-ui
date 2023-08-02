import { useSignal } from '@preact/signals';
import { LoaderComponent, LoaderProps } from '../loader';


export type LoaderSetProps = {
  loaders: Pick<LoaderProps, 'label' | 'duration'>[];
  onLoaderDone?: (index: number) => void
  onDone?: () => void
}

export function LoaderSetComponent({ loaders, onLoaderDone, onDone }: LoaderSetProps) {
  const activeIndex = useSignal(0);

  return (
    <div class={'flex flex-col gap-4'}>
      { loaders.map(({ label, duration }, i) => (
        <LoaderComponent
          key={label}
          compact
          duration={duration}
          active={i <= activeIndex.value}
          label={label}
          onDone={() => {
            onLoaderDone?.(i);

            if (i === loaders.length - 1) {
              onDone?.();
            } else {
              activeIndex.value = i+1;
            }
          }}
        />
      )) }
    </div>
  );
}
