import { getAssetUrl } from '@/utils/handleAssets';
import { RadioButton } from '@/components/RadioButton';
import { colors } from '@/common/constants';
import { PrimaryButton } from '@/components/Button';


export enum PaymentMethod {
  APPLE_PAY = 'applePay',
  STRIPE = 'stripe',
  PAYPAL = 'paypal',
} 

export type PaymentMethodProps = {
  defaultValue?: PaymentMethod
  onNext: () => void;
} & Actionable<PaymentMethod>

const paymentMethods = [
  { name: 'Apple Pay', id: PaymentMethod.APPLE_PAY, image: getAssetUrl('images/applePay.svg') },
  { name: 'Paypal', id: PaymentMethod.PAYPAL, image: getAssetUrl('images/paypal.svg') },
  { name: 'Stripe', id: PaymentMethod.STRIPE, image: getAssetUrl('images/visa-mastercard.svg') },
];

export function PaymentMethodComponent({ value, defaultValue, onUpdate, onNext }: PaymentMethodProps) {
  value = value ?? defaultValue;

  return (
    <div class='flex flex-col gap-2.5 cursor-pointer'>
      { paymentMethods.map(({ name, id, image }) => {
        return (
          <div
            key={id}
            class='flex gap-4 px-6 py-4 rounded-sm bg-white border border-solid border-[rgba(5, 29, 51, 0.10)]'
            onClick={() => onUpdate(id)}
          >
            <RadioButton color={colors.red[400]} selected={value === id} />
            <img src={image} alt={name} />
          </div>
        );
      }) }
      <PrimaryButton onClick={() => onNext()}>CONTINUE</PrimaryButton>
    </div>
  );
}
