import { ListComponent } from '@/tasks';
import { getIconUrl } from '@/utils/handleAssets';


// More on how to set up stories at: https://storybook.js.org/docs/preact/writing-stories/introduction
export default {
  title: 'Components/List',
  component: ListComponent,
  tags: ['autodocs'],
  argTypes: {
  },
};

const items = [
  {
    icon: { url: getIconUrl('app'), bg: '#FFEFD8' },
    text: 'Highlight your natural beauty with a personal color palette',
  },
  { 
    icon: { url: getIconUrl('shirt'), bg: '#EDE2FF' },
    text: 'Get inspired with outfits suggestions tailored to your color and style types',
  },
  {
    icon: { url: getIconUrl('wear'), bg: '#FFDFE1' },
    text: 'Maximize your wardrobe with suggestions on how mix and match items you own',
  },
  {
    icon: { url: getIconUrl('comment'), bg: '#E7F5D5' },
    text: 'Personalized tips for your color, style and body type',
  },
  {
    icon: { url: getIconUrl('bag'), bg: '#D8EEFF' },
    text: 'Save money and time on shopping',
  },
];

// More on writing stories with args: https://storybook.js.org/docs/preact/writing-stories/args
export const Primary = {
  args: {
    items,
    title: 'Your personal\nstyle elevating plan',
  },
};
