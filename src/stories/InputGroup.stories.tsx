import { asActionable } from './decorators';
import { InputGroup } from '@/tasks/input-group';


export default {
  title: 'Components/InputGroup',
  component: asActionable(InputGroup),
  argTypes: {
    onUpdate: { action: 'onUpdate' },
  },
};

export const Default = {
  args: {
    title: 'Your height',
    groups: [
      {
        groupId: 'inch',
        label: 'inch',
        inputs: [
          {
            placeholder: '',
            suffix: 'ft',
          },
          {
            placeholder: '',
            suffix: 'in',
          },
        ],
      },
      {
        groupId: 'cm',
        label: 'cm',
        inputs: [
          {
            placeholder: '',
            suffix: 'cm',
          },
        ],
      },
    ],
  },
};
