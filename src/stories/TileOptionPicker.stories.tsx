import { getAssetUrl } from '@/utils/handleAssets';
import { asActionable } from './decorators';
import { ImagePicker } from '@/tasks/image-picker';


export default {
  title: 'Components/ImagePicker',
  component: asActionable(ImagePicker),
  argTypes: {
    onUpdate: { action: 'onUpdate' },
  },
};

const options = [
  {
    image: getAssetUrl('images/preview/imagepicker/option1.png'),
    value: 'value1',
    label: 'Option 1',
  },
  { 
    image: getAssetUrl('images/preview/imagepicker/option2.png'),
    value: 'value2',
    label: 'Option 2',
  },
  {
    image: getAssetUrl('images/preview/imagepicker/option3.png'),
    value: 'value3',
    label: 'Too long option',
  },
  // {
  //   imgSrc: getAssetUrl('images/preview/imagepicker/option4.png'),
  //   value: 'value4',
  //   label: 'Option 4',
  // },
];

export const Single = {
  args: {
    isMultiple: false,
    options,
    title: 'Question?',
    value: 'option3',
  },
};

export const Multiple = {
  args: {
    isMultiple: true,
    options,
    title: 'Question?',
  },
};
