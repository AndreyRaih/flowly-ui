import { asActionable } from './decorators';
import { LikeActionComponent } from '@/tasks/like-action';


export default {
  title: 'Components/LikeAction',
  component: asActionable(LikeActionComponent),
  argTypes: {
    onUpdate: { action: 'onUpdate' },
  },
};

export const Default = {
};
