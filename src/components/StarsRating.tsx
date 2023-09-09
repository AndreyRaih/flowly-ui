import { colors } from '@/common/constants';
import { arrayRange } from '@/utils/array';


const RatingStar = ({ filled = true }: { filled: boolean }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd" 
        d="M10.3378 14.3165C10.134 14.1777 9.86601 14.1777 9.66222 14.3165L5.50414 17.1488C5.03892 17.4657 4.43275 17.0253 4.59036 16.4849L5.99912 11.6551C6.06816 11.4184 5.98535 11.1636 5.79036 11.0126L1.81177 7.93329C1.36664 7.58877 1.59818 6.87617 2.1608 6.85908L7.18954 6.7064C7.43601 6.69891 7.6528 6.5414 7.73608 6.30932L9.43526 1.57388C9.62536 1.04407 10.3746 1.04407 10.5647 1.57388L12.2639 6.30932C12.3472 6.5414 12.564 6.69891 12.8105 6.7064L17.8392 6.85908C18.4018 6.87617 18.6334 7.58877 18.1882 7.93329L14.2096 11.0126C14.0146 11.1636 13.9318 11.4184 14.0009 11.6551L15.4096 16.4849C15.5672 17.0253 14.9611 17.4657 14.4959 17.1488L10.3378 14.3165Z"
        fill={filled ? colors.accent : colors.gray[350]}
        fillOpacity={filled ? 1 : '0.25'} 
      />
    </svg>
  );
};

export const StarsRating = ({ value = 5 }: { value: number}) => {
  const items = arrayRange(5).map((_, i) => value >= (i + 1));

  return (
    <div class={'flex'}>
      { items.map((item, i) => (
        <RatingStar key={`${i}`} filled={item} />
      )) }
    </div>
  );
};
