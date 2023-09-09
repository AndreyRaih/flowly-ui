/* eslint-disable max-lines-per-function */
import cs from 'classnames';
import { VNode } from 'preact';
import { useRef } from 'preact/hooks';
import { useTransitions } from './useTransitions';


export type Props = {
  className?: string
  gap?: number
  intervalSec?: number
  count: number
  durationSec?: number 
  children: (index: number) => VNode<any>
};

export const InfiniteCarousel = ({ 
  children: renderItem, 
  count, 
  gap = 24, 
  intervalSec = 2, 
  durationSec = 0.4,
  className,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    itemIndex,
    offset,
  } = useTransitions({ containerRef, count, gap, intervalSec, durationSec });

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
