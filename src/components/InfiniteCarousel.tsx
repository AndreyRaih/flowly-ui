import cs from 'classnames';
import { useSignal } from '@preact/signals';
import { RefObject, VNode } from 'preact';
import { useLayoutEffect, useRef } from 'preact/hooks';


export type Props = {
  className?: string
  gap?: number
  intervalSec?: number
  count: number
  transitionDurationSec?: number 
  children: (index: number) => VNode<any>
};

const useTransitions = ({ containerRef, count, gap, intervalSec, transitionDurationSec = 400 }: {
  count: number
  containerRef: RefObject<HTMLDivElement>
  gap: number
  intervalSec: number
  transitionDurationSec?: number
}) => {
  const activeIndex = useSignal(0);

  const itemWidth = useSignal(0);
  const wrapperOffset = useSignal(0);
  const isTransitionActive = useSignal(true);

  useLayoutEffect(() => {
    itemWidth.value = containerRef.current!.offsetWidth;
    let timerId: NodeJS.Timeout;

    const showNext = () => {
      timerId = setTimeout(() => {
        isTransitionActive.value = true;
        wrapperOffset.value = itemWidth.value + gap;
        
        timerId = setTimeout(() => {
          isTransitionActive.value = false;
          wrapperOffset.value = 0;
          activeIndex.value = (activeIndex.value + 1) % count;
          
          showNext();
        }, (transitionDurationSec + intervalSec / 2) * 1000);
      }, intervalSec * 1000);
    };

    showNext();

    return () => {
      clearTimeout(timerId);
    };
  }, [count]);

  return {
    isTransitionActive: isTransitionActive.value,
    wrapperOffset: wrapperOffset.value,
    activeIndex: activeIndex.value,
  };
};

export const InfiniteCarousel = ({ 
  children: renderItem, 
  count, 
  gap = 24, 
  intervalSec = 2, 
  transitionDurationSec = 0.4,
  className,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    activeIndex,
    isTransitionActive, 
    wrapperOffset,
  } = useTransitions({ containerRef, count, gap, intervalSec, transitionDurationSec });

  if (count <= 1) {
    return renderItem(0);
  }

  return (
    <div class={cs('overflow-x-hidden', className)}>
      <div ref={containerRef} class='w-full'>
        <div
          class={'flex'}
          style={{
            transitionProperty: 'transform',
            transitionTimingFunction: 'ease-in-out',
            width: `calc(200% + ${gap}px)`, 
            gap,
            transitionDuration: isTransitionActive ? `${transitionDurationSec}s` : '0ms',
            transform: `translateX(-${wrapperOffset}px)`,
          }}
        >
          { renderItem(activeIndex) }
          { renderItem((activeIndex + 1) % count) }
        </div>  
      </div>
    </div>
  );
};
