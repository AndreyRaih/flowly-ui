import { asActionable } from './decorators';
import { UnitsGroup } from '@/tasks/units-group';


export default {
  title: 'Components/UnitsGroup',
  component: asActionable(UnitsGroup),
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
