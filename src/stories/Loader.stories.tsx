import { LoaderComponent } from '@/tasks';


export default {
  title: 'Components/Loader',
  component: LoaderComponent,
  argTypes: {
    onDone: { action: 'Done!' },
  },
};

export const Default = {
  args: {
    label: 'Loading the quiz',
    compact: false,
  },
};

export const Segmented = {
  args: {
    label: 'Subtitle',
    compact: true,
  },
};
