import { colors } from '@/common/constants';
import { Loader } from '@/components/Loader';


export type LoaderProps = {
  label: string
  duration?: number;
  compact?: boolean
  onDone: () => void
  active?: boolean;
}

export function LoaderComponent({ label, compact, onDone, duration = 3, active = true }: LoaderProps) {
  return (
    <div>
      <Loader 
        duration={duration}
        compact={compact}
        title={label}
        active={active}
        onDone={onDone}
        colors={{ lineBg: colors.gray[250], lineStart: colors.orange[400], lineEnd: colors.red[350] }}
      />
    </div>
  );
}
