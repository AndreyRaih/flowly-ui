/* eslint-disable max-lines */
import { getAssetUrl } from '@/utils/handleAssets';
import { asActionable } from '../decorators';
import { PictureSelectLayout } from '@/tasks/picture-select-layout';


export default {
  title: 'Components/OptionPicker/ListWithImage',
  component: asActionable(PictureSelectLayout),
  argTypes: {
    onUpdate: { action: 'onUpdate' },
  },
};

export const Single = {
  args: {
    pictureUrl: getAssetUrl('images/preview/picture-select-layout/length-wise.png'),
    isMultiple: false,
    options: [
      { 
        label: 'Too short',
        value: 'Too short',
      },
      { 
        label: 'Just right',
        value: 'Just right',
      },
      { 
        label: 'Too long',
        value: 'Too long',
      },
    ],
    title: 'When you try on bottoms, how do they usually fit lenght-wise?',
    value: '1',
  },
};

export const Multiple = {
  args: {
    pictureUrl: getAssetUrl('images/preview/picture-select-layout/length-wise.png'),
    isMultiple: true,
    options: [
      { 
        label: 'Too short',
        value: 'Too short',
      },
      { 
        label: 'Just right',
        value: 'Just right',
      },
      { 
        label: 'Too long',
        value: 'Too long',
      },
    ],
    title: 'When you try on bottoms, how do they usually fit lenght-wise?',
    value: '1',
  },
};
