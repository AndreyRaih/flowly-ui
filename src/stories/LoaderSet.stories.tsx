import { LoaderSetComponent } from '@/tasks';


export default {
  title: 'Components/LoaderSet',
  component: LoaderSetComponent,
  argTypes: {
    onDone: { action: 'Done!' },
    onLoaderDone: { action: 'Loader done!' },
  },
};

export const Default = {
  args: {
    loaders: [
      { label: 'Loader 1', duration: 4 },
      { label: 'Loader 2', duration: 1 },
      { label: 'Loader 3', duration: 3 },
      { label: 'Loader 4', duration: 1 },
    ],
  },
};
