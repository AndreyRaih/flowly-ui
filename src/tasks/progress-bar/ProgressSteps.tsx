import { ProgressLine } from '@/components/ProgressLine';
import { arrayRange } from '@/utils/array';


const StepIcon = ({ checked, bg = '#eee', size = 18 }: { size?: number; checked?: boolean; bg?: string; color?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 19 18" fill="none">
      <circle cx="9.66718" cy="9.00043" r="9.00043" fill={bg} />
      { checked && <path d="M12.1019 6.77649L9.69507 10.6541C9.46084 11.0315 8.94045 11.1014 8.61497 10.7991L7.01953 9.31766" stroke={'currentColor'} stroke-width="2" stroke-linecap="round" /> } 
    </svg>
  );
};

const Steps = ({ progress, count, color, completedBg, bg, size = 18 }: { 
  size?: number; 
  bg?: string; 
  completedBg?: string; 
  color?: string;
  progress: number; 
  count: number;
}) => {
  const steps = arrayRange(count);
  const segmentMaxProgress = 100 / (count - 1);

  return (
    <div
      class='flex gap-2 items-center justify-between absolute z-10'
      style={{
        color,
        left: '-2px',
        width: 'calc(100% + 4px)',
      }}
    >
      { steps.map((_, i) => {
        const completed = progress >= i * segmentMaxProgress;
        const isPreviouslyCompleted = completed && (progress < (i + 1) * segmentMaxProgress);

        return (
          <div>
            <StepIcon
              size={size}
              checked={i !== 0 && isPreviouslyCompleted}
              bg={completed ? completedBg : bg }
            />
          </div>
        );
      }) }
    </div>
  );
};

export const ProgressSteps = ({ progress, size = 4, steps, colors }: {
  progress: number;
  steps: number;
  colors: {
    lineStart?: string;
    lineEnd?: string;
    step?: string;
    stepBg?: string;
    stepBgCompleted?: string;
  }
  colorStart?: string;
  colorEnd?: string;
  size?: number;
}) => {
  return (
    <div class={'relative flex items-center'} style={{ height: size * 3 }}>
      <Steps 
        progress={progress}
        count={steps}
        size={size * 3}
        color={colors.step}
        bg={colors.stepBg}
        completedBg={colors.stepBgCompleted}
      />
      <ProgressLine 
        fromColor={colors.lineStart}
        toColor={`${colors.lineEnd} ${100 * 100/progress}%`}
        value={progress}
        size={size}
      />
    </div>
  );
};
