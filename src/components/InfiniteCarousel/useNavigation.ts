import { useSignal } from '@preact/signals';
import { useLayoutEffect } from 'preact/hooks';


export const useNavigation = ({ count, interval }: {
  count: number
  interval: seconds
}) => {
  const activeIndex = useSignal(0);

  useLayoutEffect(() => {
    const intervalId = setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % count;
    }, interval * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [count, interval]);

  return activeIndex;
};
