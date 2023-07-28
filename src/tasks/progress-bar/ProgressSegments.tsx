import { ProgressLine } from '@/components/ProgressLine';


export const ProgressSegments = ({ progress, size, segments, steps, colorStart, colorEnd }: {
  progress: number;
  segments: number;
  steps?: boolean;
  colorStart?: string;
  colorEnd?: string;
  size?: number;
}) => {
  const items = Array(segments).fill(null);
  const itemMaxProgress = 100 / segments;

  return (
    <div class='flex gap-2 relative'>
      { items.map((_, i) => {
        const absoluteProgressStart = i * itemMaxProgress;
        const absoluteProgress = Math.min(Math.max(0, progress - absoluteProgressStart), itemMaxProgress);
        const itemProgress = absoluteProgress / itemMaxProgress * 100;

        return (
          <ProgressLine
            size={size} 
            value={itemProgress}
            fromColor={`${colorStart} -${i * 100}%`}
            toColor={`${colorEnd} ${100 * 100/(absoluteProgressStart + absoluteProgress)}%`}
          />
        );
      }) }
    </div>
  );
};
