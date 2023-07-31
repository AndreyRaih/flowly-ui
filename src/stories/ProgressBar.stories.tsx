import { colors } from '@/common/constants';
import { ProgressBar } from '@/tasks';


export default {
  title: 'Components/Progress Bar',
  component: ProgressBar,
  argTypes: {
  },
};

export const Simple = {
  args: {
    current: 12,
    total: 28,
    title: 'Simple progress bar',
    hasCounter: true,
    colorStart: colors.orange[400],
    colorEnd: colors.red[350],
    onGoBack: () => alert('go back'),
  },
};

export const Segmented = {
  args: {
    current: 12,
    total: 28,
    segments: 4,
    title: 'Segmented Progress Bar',
    hasCounter: true,
    onGoBack: () => alert('go back'),
  },
};

export const WithSteps = {
  args: {
    current: 12,
    total: 28,
    segments: 3,
    steps: true,
    size: 6,
    title: 'Progress Bar with steps',
    hasCounter: true,
    colorStart: colors.orange[400],
    colorEnd: colors.red[350],
    onGoBack: () => alert('go back'),
  },
};
