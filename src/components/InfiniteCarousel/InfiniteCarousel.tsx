/* eslint-disable max-lines-per-function */
import cs from 'classnames';
import { VNode } from 'preact';
import { useRef } from 'preact/hooks';
import { useTransitions } from './useTransitions';


export type Props = {
  count: number
  children: (index: number) => VNode<any>
  gap?: number
  className?: string
  interval?: seconds
  duration?: seconds
};

export const InfiniteCarousel = ({ 
  count, 
  gap = 24, 
  children: renderItem, 
  interval: intervalSec = 2, 
  duration: durationSec = 0.4,
  className,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    itemIndex,
    offset,
  } = useTransitions({ containerRef, count, gap, interval: intervalSec, duration: durationSec });

  if (count <= 1) {
    return renderItem(0);
  }

  return (
    <div class={cs('overflow-x-hidden', className)}>
      <div ref={containerRef} class='w-full'>
        <div
          class={'flex'}
          style={{
            width: `calc(200% + ${gap}px)`, 
            gap,
            transform: `translateX(-${offset}px)`,
          }}
        >
          { renderItem(itemIndex) }
          { renderItem((itemIndex + 1) % count) }
        </div>  
      </div>
    </div>
  );
};
