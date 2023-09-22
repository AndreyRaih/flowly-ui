import { BackIcon } from '@/components/icons';


const Counter = ({ current, total }: {
  current: number;
  total: number;
}) => {
  return (
    <div class='flex gap-0.5 text-md font-medium'>
      <span class='text-red-350'>
        { current }
      </span>
      /
      <span>
        { total }
      </span>
    </div>
  );
};

export const ProgressHeader = ({ title, onGoBack, hasCounter, current, total }: {
  title: string;
  onGoBack?: () => void;
  hasCounter?: boolean;
  total: number;
  current: number;
}) => {
  return (
    <div class={'flex items-center justify-center relative'}>
      <div class={'absolute left-0'}>
        { onGoBack && (
          <BackIcon class='cursor-pointer' onClick={() => onGoBack()} />
        ) }
      </div>
      <div class={'text-md font-medium'} style={{ maxWidth: 'calc(100% - 120px)' }}>
        { title }
      </div>
      <div class={'absolute right-0'}>
        { hasCounter && (
          <Counter current={current} total={total} />
        ) }
      </div>
    </div>
  );
};
