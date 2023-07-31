import cs from 'classnames';


export type RatingProps = {
  minRate?: number
  maxRate?: number
  minRateLabel?: string
  maxRateLabel?: string
} & Actionable<number>

export function Rating({ value, minRate = 1, maxRate = 5, minRateLabel, maxRateLabel, onUpdate }: RatingProps) {
  const items = Array(maxRate - minRate + 1).fill(0);

  return (
    <div>
      <div class={'flex gap-[10px]'}>
        { items.map((_, i) => {
          const item = i + minRate;
          const selected = item === value;
          const isFirst = i === 0;
          const isLast = i === items.length - 1;

          return (
            <div>
              <div
                onClick={() => onUpdate(item)}
                class={cs('flex items-center justify-center cursor-pointer text-lg w-[60px] h-[60px] rounded-xs bg-gray-150', {
                  ['bg-red-350 text-white']: selected,
                })}
              >
                { item }
              </div>
              { isFirst && minRateLabel && (
                <div class={'text-sm text-dark-300'}>
                  { minRateLabel }
                </div>
              ) }
              { isLast && maxRateLabel && (
                <div class={'text-sm text-right text-dark-300'}>
                  { maxRateLabel }
                </div>
              ) }
            </div>
          );
        }) }
      </div>
    </div>
  );
}
