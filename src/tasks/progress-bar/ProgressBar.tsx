import { ProgressHeader } from './ProgressHeader';
import { ProgressLine } from '@/components/ProgressLine';
import { ProgressSegments } from './ProgressSegments';
import { ProgressSteps } from './ProgressSteps';
import colors from '../../common/colors.json';


export type ProgressBarProps = {
  title: string
  total: number
  current: number
  size?: number
  segments?: number
  steps?: boolean
  hasCounter?: boolean
  onGoBack?: () => void
  colorStart?: string;
  colorEnd?: string;
}

type ProgressProps = {
  value: number;
  segments?: number;
  steps?: boolean;
  colorStart?: string;
  colorEnd?: string;
  size?: number;
}

const Progress = ({ value, size = 4, segments, steps, colorStart = 'currentColor', colorEnd = 'currentColor' }: ProgressProps) => {
  if (segments) {
    return steps ? (
      <ProgressSteps
        colors={{
          lineStart: colorStart,
          lineEnd: colorEnd,
          stepBg: colors.gray['200'],
          stepBgCompleted: colorEnd,
          step: 'white',
        }}
        progress={value}
        size={size}
        steps={segments + 1}
      />
    ) : (
      <ProgressSegments 
        colorStart={colorStart}
        colorEnd={colorEnd}
        progress={value}
        size={size}
        segments={segments}
        steps={steps}
      />
    );
  }

  return (
    <ProgressLine 
      fromColor={colorStart}
      toColor={`${colorEnd} ${100 * 100/value}%`}
      value={value}
    />
  );
};

export function ProgressBar({
  title,
  total,
  current,
  steps,
  size,
  segments,
  hasCounter,
  colorStart,
  colorEnd,
  onGoBack,
}: ProgressBarProps) {
  current = Math.max(0, current);
  const progress = Math.round(current / total * 100);

  return (
    <div class='flex flex-col gap-4'>
      <ProgressHeader 
        title={title}
        onGoBack={onGoBack}
        hasCounter={hasCounter}
        current={current}
        total={total}
      />

      <Progress 
        value={progress}
        steps={steps}
        size={size}
        segments={segments}
        colorStart={colorStart}
        colorEnd={colorEnd}
      />
    </div>
  );
}
