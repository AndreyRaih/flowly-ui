/* eslint-disable max-lines-per-function */
import { useOrientation } from '@/hooks/useOrientation';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useSignal } from '@preact/signals';
import { RefObject } from 'preact';
import { useLayoutEffect } from 'preact/hooks';
import { useNavigation } from './useNavigation';
import anime from 'animejs';


const useContainerWidth = (containerRef: RefObject<HTMLDivElement>) => {
  const windowSize = useWindowSize();
  const orientation = useOrientation();
  const containerWidth = useSignal(0);

  useLayoutEffect(() => {
    containerWidth.value = containerRef.current!.offsetWidth;
  }, [windowSize.width, orientation.type, orientation.angle]);

  return containerWidth.value;
};

export const useTransitions = ({ containerRef, count, gap, interval, duration = 0.4 }: {
  count: number
  containerRef: RefObject<HTMLDivElement>
  gap: number
  interval: seconds
  duration?: seconds
}) => {
  const realIndex = useNavigation({ count, interval: interval - duration });
  const transitionIndex = useSignal(realIndex.value);
  const containerWidth = useContainerWidth(containerRef);
  const offset = useSignal(0);

  // Run animation first, then make the changes
  useLayoutEffect(() => {
    if (containerWidth <= 0 || transitionIndex.value === realIndex.value) {
      return;
    }

    anime({
      targets: offset,
      value: containerWidth + gap,
      easing: 'cubicBezier(0.46,0.03,0.52,0.96)',
      duration: duration * 1000,
      complete: function() {
        offset.value = 0;
        transitionIndex.value = realIndex.value;
      },
    });
  }, [realIndex.value, count, containerWidth]);

  return {
    itemIndex: transitionIndex.value,
    offset: offset.value,
  };
};
