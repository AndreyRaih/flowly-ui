import { useSignal } from '@preact/signals';
import { useLayoutEffect } from 'preact/hooks';


export const useNavigation = ({ count, intervalSec }: {
  count: number
  intervalSec: number
}) => {
  const activeIndex = useSignal(0);

  useLayoutEffect(() => {
    const intervalId = setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % count;
    }, intervalSec * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [count, intervalSec]);

  return activeIndex;
};
