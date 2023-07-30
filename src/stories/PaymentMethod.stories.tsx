import { PaymentMethod, PaymentMethodComponent } from '@/tasks/payment-method';
import { asActionable } from './decorators';


// More on how to set up stories at: https://storybook.js.org/docs/preact/writing-stories/introduction
export default {
  title: 'Components/PaymentMethod',
  component: asActionable(PaymentMethodComponent),
  tags: ['autodocs'],
  argTypes: {
    onUpdate: { action: 'onUpdate' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/preact/writing-stories/args
export const Default = {
  args: {
    defaultValue: PaymentMethod.APPLE_PAY,
  },
};
