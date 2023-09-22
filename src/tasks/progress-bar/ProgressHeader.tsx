import { BackArrow } from '@/components/icons/BackArrow';


const Counter = ({ current, total }: {
  current: number;
  total: number;
}) => {
  return (
    <div class='flex gap-0.5 font-medium'>
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
    <div class={'flex h-6 items-center justify-center relative text-gray-550'}>
      <div class={'absolute left-0'}>
        { onGoBack && (
          <BackArrow class='cursor-pointer' onClick={() => onGoBack()} />
        ) }
      </div>
      <div class={'text-[15px] font-medium'} style={{ maxWidth: 'calc(100% - 120px)' }}>
        { title }
      </div>
      <div class={'absolute right-0 text-[15px]'}>
        { hasCounter && (
          <Counter current={current} total={total} />
        ) }
      </div>
    </div>
  );
};
