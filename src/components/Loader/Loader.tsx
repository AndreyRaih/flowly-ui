import anime from 'animejs';
import { useEffect, useRef } from 'preact/hooks';

import { LoaderUI, LoaderUIProps } from './LoaderUI';
import { useSignal } from '@preact/signals';


const getSteps = () => {
  let steps = [anime.random(10, 30)];

  steps.push(anime.random(steps[0], 50));
  steps.push(anime.random(steps[1], 60));
  steps.push(anime.random(steps[2], 70));
  steps.push(anime.random(steps[3], 80));
  steps.push(anime.random(steps[4], 90));
  steps.push(100);

  return steps;
};

const steps = getSteps();

export interface LoaderProps {
  onDone?: () => void;
  active?: boolean;
  title?: string;
  compact?: boolean;
  duration?: number;
  colors?: LoaderUIProps['colors'];
}

export const Loader = ({ title, onDone, colors, active = true, duration = 3, compact = false }: LoaderProps) => {
  const progress = useSignal(0);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (!active) {
      return () => {};
    }

    const obj = { progress: progress.value };

    animationRef.current = anime({
      targets: obj,
      progress: steps,
      duration: duration * 1000,
      easing: 'cubicBezier(.37,.84,.59,.09)',
      complete: () => {
        onDone && onDone();
      },
      update: () => {
        progress.value = obj.progress;
      },
    });
    
    return () => animationRef.current.pause();
  }, [duration, active]);
  
  return (
    <div class={'flex flex-col gap-3'}>
      { title && !compact && (
        <div class={'text-sm text-center font-bold'}>
          { title }
        </div>
      ) }
      <LoaderUI 
        compact={compact}
        active={active}
        progress={progress.value}
        caption={compact ? title : ''}
        colors={colors}
      />
    </div>
  );
};
