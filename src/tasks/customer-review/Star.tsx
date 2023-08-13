import { colors } from '@/common/constants';
import { arrayRange } from '@/utils/array';


const RatingStar = ({ filled = true }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
      <g clip-path="url(#clip0_203_44)">
        <path d="M0 0V17.0023H17V0H0ZM12.5556 14.74L8.5 12.6082L4.44672 14.74L5.21986 10.2156L1.93972 7.01319L6.47336 6.35441L8.5 2.24852L10.5266 6.35441L15.0603 7.01319L11.7801 10.2156L12.5556 14.74Z" fill={filled ? '#51B37F' : colors.gray['500']} />
      </g>
      <defs>
        <clipPath id="clip0_203_44">
          <rect width="17" height="17" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Rating = ({ value = 5 }: { value: number}) => {
  const items = arrayRange(5).map((_, i) => value >= (i + 1));

  return (
    <div class={'flex gap-[1px]'}>
      { items.map((item, i) => (
        <RatingStar key={`${i}`} filled={item} />
      )) }
    </div>
  );
};
