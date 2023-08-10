import cs from 'classnames';
import { CURRENCY_SIGN, Currency } from '@/common/constants';
import styles from './styles.module.css';


const PriceBadgeSVG = ({ bg = '#111111', bgOpacity = '0.08', className = '' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="104" height="46" viewBox="0 0 104 46" fill="none" class={className}>
      <path d="M13.5715 3.25036C15.0796 1.20634 17.4688 0 20.009 0H96C100.418 0 104 3.58172 104 8V38C104 42.4183 100.418 46 96 46H20.009C17.4689 46 15.0796 44.7937 13.5715 42.7496L2.50435 27.7496C0.420961 24.9259 0.420962 21.0741 2.50435 18.2504L13.5715 3.25036Z" fill={bg} fill-opacity={bgOpacity} />
    </svg>
  );
};

export const PriceBadge = ({ price, currency, period }: {
  price: number;
  period: string;
  currency: Currency;
}) => {
  const intPrice = Math.floor(price);
  const decimalDigits = String(price - intPrice).substring(2, 4);

  return (
    <div class={cs(styles.priceBadge, 'flex leading-none p-2 justify-end relative')}>
      <PriceBadgeSVG className={styles.priceBadgeShape} />

      <div class='font-bold'>
        { CURRENCY_SIGN[currency] }
      </div>
      <div class='text-4xl font-bold leading-[30px]'>
        { intPrice }
      </div>
      <div>
        <div class={'font-bold'}>
          { decimalDigits }
        </div>
        <div class='text-xxs'>
          { `per ${period}` }
        </div>
      </div>
    </div>
  );
};
