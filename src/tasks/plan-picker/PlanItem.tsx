import cs from 'classnames';
import { Currency } from '@/common/constants';
import { formatPrice } from '@/utils/money';

import styles from './styles.module.css';
import { PriceBadge } from './PriceBadge';


export type PaymentPeriod = 'day' | 'week' | 'month' | 'year';

export type Plan = {
  id: string
  label: string
  oldPrice?: number
  price: number
  planBadgeText?: string
  currency: string
  priceBadge: {
    period: PaymentPeriod;
    price: number
    oldPrice?: number
  }
}

export interface PlanItemProps { 
  plan: Plan; 
  selected: boolean; 
  onSelect: () => void;
}

const Offer = ({ title, price, oldPrice, currency }: {
  title: string;
  price: number;
  oldPrice?: number;
  currency: Currency;
}) => {
  return (
    <div class='left flex flex-col gap-1.5'>
      <div class='font-bold leading-normal'>
        { title }
      </div>
      <div class='prices flex gap-1 text-sm'>
        { oldPrice && (
          <span class={styles.oldPrice}>
            { formatPrice(oldPrice, currency as Currency) }
          </span>
        ) }
        <span>
          { formatPrice(price, currency as Currency) }
        </span>
      </div>
    </div>
  );
};

const PeriodOffer = ({ period, price, oldPrice, currency }: {
  period: PaymentPeriod;
  price: number;
  oldPrice?: number;
  currency: Currency;
}) => {
  return (
    <div class='right flex items-end gap-1'>
      <div>
        { oldPrice && (
          <span class={cs(styles.oldPrice, styles.oldPeriodPrice)}>
            { formatPrice(oldPrice, currency as Currency) }
          </span>
        ) }
      </div>
      <PriceBadge price={price} period={period} currency={currency} />
    </div>
  );
};

export const PlanItem = ({ plan: {
  label, 
  oldPrice,
  price,
  priceBadge,
  planBadgeText,
  ...plan
}, onSelect, selected }: PlanItemProps) => {
  const currency = plan.currency as Currency;
  const hasBadge = !!planBadgeText;
  const handleClick = () => onSelect();
  
  return (
    <div
      onClick={selected ? undefined : handleClick}
      class={cs(styles.plan, 'flex relative cursor-pointer justify-between p-4 rounded-md border-solid', {
        [styles.withBadge]: hasBadge,
        [styles.selected]: selected,
      })}
    >
      { hasBadge && (
        <div
          class={cs('absolute bg-red-400 text-white py-1 px-4 -top-3 -left-0.5 rounded-lg rounded-bl-none uppercase font-bold text-[10px]', {
            ['bg-red-400']: !selected,
            ['bg-accent']: selected,
          })}
        >
          { planBadgeText }
        </div>
      ) }
      <Offer 
        title={label}
        price={price}
        oldPrice={oldPrice}
        currency={currency}
      />
      <PeriodOffer 
        period={priceBadge.period}
        price={priceBadge.price}
        oldPrice={oldPrice}
        currency={currency}
      />
    </div>
  );
};
