import { Spinner } from '@/components/Spinner';
import cn from 'classnames';


const defaultColors = {
  lineStart: 'gold',
  lineEnd: 'orange',
  lineBg: 'lightgray',
  progress: 'white',
};

export interface LoaderUIProps {
  progress: number;
  caption?: string;
  active?: boolean;
  compact?: boolean;
  colors?: {
    lineStart?: string;
    lineEnd?: string;
    lineBg?: string;
    progress?: string;
  }
}

export const LoaderUI = ({ progress, caption, compact = false, colors, active = true }: LoaderUIProps) => {
  colors = { ...defaultColors, ...colors };
  const progressText = Math.round(progress) + '%';

  return (
    <div class={'flex flex-col gap-1'}>
      { caption && (
        <div class={'flex justify-between text-sm text-blue-900'}>
          <span class={''}>
            { caption }
          </span>
          <div class={'flex items-center gap-1 h-[21px]'}>
            <div>
              { progress >= 100 ? '✅' : (active && <Spinner size='xs' />) }
            </div>
            <div class={'w-8 text-right'}>
              { progressText }
            </div>
          </div>
        </div>
      ) }
      <div
        class={cn('relative rounded-[6px] overflow-hidden', {
          ['h-[30px]']: !compact,
          ['h-[10px]']: compact,
        })}
        style={{ backgroundColor: colors?.lineBg }}
      >
        <div 
          class='w-0 h-full'
          style={{ width: progress + '%', background: `linear-gradient(to right, ${colors?.lineStart}, ${colors?.lineEnd})` }}
        />
        { !compact && (
          <div class={'absolute text-sm font-bold text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'}>
            { progressText }
          </div>
        ) }
      </div>
    </div>
  );
};
