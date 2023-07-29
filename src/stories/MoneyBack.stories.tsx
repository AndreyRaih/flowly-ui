import { MoneyBackComponent } from '@/tasks';


export default {
  title: 'Components/MoneyBack',
  component: MoneyBackComponent,
  argTypes: {
  },
};

const title = '100% Money-Back Guarantee';
const text = 'We are confident App will help you highlight your personal beauty and find your own style. If you are ready to elevate your style, it’s a risk-free offer. We guarantee you\'ll see visible results or you’ll receive a full refund within 30 days after your purchase.';

export const Default = {
  args: {
    text,
    title,
  },
};
