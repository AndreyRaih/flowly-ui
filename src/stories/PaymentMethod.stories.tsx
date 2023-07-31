import { PaymentMethod, PaymentMethodComponent } from '@/tasks/payment-method';
import { asActionable } from './decorators';


export default {
  title: 'Components/PaymentMethod',
  component: asActionable(PaymentMethodComponent),
  argTypes: {
    onUpdate: { action: 'onUpdate' },
  },
};

export const Default = {
  args: {
    defaultValue: PaymentMethod.APPLE_PAY,
  },
};
