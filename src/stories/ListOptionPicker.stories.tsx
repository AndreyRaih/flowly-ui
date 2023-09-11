/* eslint-disable max-lines */
import { getAssetUrl } from '@/utils/handleAssets';
import { asActionable } from './decorators';
import { Select } from '@/tasks/select';


export default {
  title: 'Components/ListOptionPicker',
  component: asActionable(Select),
  argTypes: {
    onUpdate: { action: 'onUpdate' },
  },
};

export const Single = {
  args: {
    isMultiple: false,
    options: [
      { 
        label: 'Always – I like my outfits to be co-ordinated',
        value: '1',
      },
      { 
        label: 'Sometimes – it depends on what I\'m buying',
        value: '2',
      },
      { 
        label: 'Rarely – I buy what I like without considering my pre-existing items',
        value: '3',
      },
      { 
        label: 'Never – I prefer to experiment with different styles',
        value: '4',
      },
    ],
    title: 'When you buy new clothes, do you think about how they will fit with your existing items?',
    value: '1',
  },
};

export const WithImage = {
  args: {
    options: [
      {
        image: getAssetUrl('images/preview/option-picker/img1.png'),
        value: 'I love them - the bolder, the better',
        label: 'I love them - the bolder, the better',
      },
      { 
        image: getAssetUrl('images/preview/option-picker/img2.png'),
        value: 'I stick with stripes, plaid, or other classic patterns',
        label: 'I stick with stripes, plaid, or other classic patterns',
      },
      {
        image: getAssetUrl('images/preview/option-picker/img3.png'),
        value: 'I enjoy unique and quirky prints',
        label: 'I enjoy unique and quirky prints',
      },
      {
        image: getAssetUrl('images/preview/option-picker/img4.png'),
        value: 'I prefer solid colors or minimal patterns',
        label: 'I prefer solid colors or minimal patterns',
      },
    ],
    value: 'I stick with stripes, plaid, or other classic patterns',
    title: 'How do you feel about the patterns?',
  },
};

// @ts-ignore
WithImage.storyName = 'single + images';

export const SingleWithIcons = {
  args: {
    isMultiple: false,
    options: [
      {
        value: 'Fast fashion',
        label: 'Fast fashion',
        icons: [
          getAssetUrl('images/preview/option-picker/1.png'),
          getAssetUrl('images/preview/option-picker/2.png'),
          getAssetUrl('images/preview/option-picker/3.png'),
          getAssetUrl('images/preview/option-picker/4.png'),
        ],
      },
      { 
        value: 'Premium',
        label: 'Premium',
        icons: [
          getAssetUrl('images/preview/option-picker/5.png'),
          getAssetUrl('images/preview/option-picker/6.png'),
          getAssetUrl('images/preview/option-picker/7.png'),
          getAssetUrl('images/preview/option-picker/8.png'),
        ],
      },
      {
        value: 'Luxury labels',
        label: 'Luxury labels',
        icons: [
          getAssetUrl('images/preview/option-picker/9.png'),
          getAssetUrl('images/preview/option-picker/10.png'),
          getAssetUrl('images/preview/option-picker/11.png'),
          getAssetUrl('images/preview/option-picker/12.png'),
        ],
      },
      {
        value: 'A mix of fast fashion and designer brands',
        label: 'A mix of fast fashion and designer brands',
      },
    ],
    value: 'Premium',
    title: 'Question?',
  },
};

// @ts-ignore
SingleWithIcons.storyName = 'single + icons';

export const SingleWithIconsAndImages = {
  args: {
    isMultiple: false,
    options: [
      {
        value: 'Fast fashion',
        label: 'Fast fashion',
        image: getAssetUrl('images/preview/option-picker/img1.png'),
        icons: [
          getAssetUrl('images/preview/option-picker/1.png'),
          getAssetUrl('images/preview/option-picker/2.png'),
          getAssetUrl('images/preview/option-picker/3.png'),
          getAssetUrl('images/preview/option-picker/4.png'),
        ],
      },
      { 
        value: 'Premium',
        label: 'Premium',
        image: getAssetUrl('images/preview/option-picker/img2.png'),
        icons: [
          getAssetUrl('images/preview/option-picker/5.png'),
          getAssetUrl('images/preview/option-picker/6.png'),
          getAssetUrl('images/preview/option-picker/7.png'),
          getAssetUrl('images/preview/option-picker/8.png'),
        ],
      },
      {
        value: 'Luxury labels',
        label: 'Luxury labels',
        image: getAssetUrl('images/preview/option-picker/img3.png'),
        icons: [
          getAssetUrl('images/preview/option-picker/9.png'),
          getAssetUrl('images/preview/option-picker/10.png'),
          getAssetUrl('images/preview/option-picker/11.png'),
          getAssetUrl('images/preview/option-picker/12.png'),
        ],
      },
      {
        value: 'A mix of fast fashion and designer brands', 
        image: getAssetUrl('images/preview/option-picker/img4.png'),
        label: 'A mix of fast fashion and designer brands',
      },
    ],
    value: 'Premium',
    title: 'Question?',
  },
};

// @ts-ignore
SingleWithIconsAndImages.storyName = 'single + images + icons';

export const Multiple = {
  args: {
    isMultiple: true,
    options: [
      { label: 'Standard', value: 'Standard' },
      { label: 'Plus size', value: 'Plus size' },
    ],
    title: 'What size do you usually\nshop for?',
    value: 'Standard',
  },
};

export const MultipleWithImage = {
  args: {
    isMultiple: true,
    options: [
      {
        image: getAssetUrl('images/preview/option-picker/img1.png'),
        value: 'I love them - the bolder, the better',
        label: 'I love them - the bolder, the better',
      },
      { 
        image: getAssetUrl('images/preview/option-picker/img2.png'),
        value: 'I stick with stripes, plaid, or other classic patterns',
        label: 'I stick with stripes, plaid, or other classic patterns',
      },
      {
        image: getAssetUrl('images/preview/option-picker/img3.png'),
        value: 'I enjoy unique and quirky prints',
        label: 'I enjoy unique and quirky prints',
      },
      {
        image: getAssetUrl('images/preview/option-picker/img4.png'),
        value: 'I prefer solid colors or minimal patterns',
        label: 'I prefer solid colors or minimal patterns',
      },
    ],
    value: 'I stick with stripes, plaid, or other classic patterns',
    title: 'How do you feel about the patterns?',
  },
};

// @ts-ignore
MultipleWithImage.storyName = 'multiple + images';

export const MultipleWithIcons = {
  args: {
    isMultiple: true,
    options: [
      {
        value: 'Fast fashion',
        label: 'Fast fashion',
        icons: [
          getAssetUrl('images/preview/option-picker/1.png'),
          getAssetUrl('images/preview/option-picker/2.png'),
          getAssetUrl('images/preview/option-picker/3.png'),
          getAssetUrl('images/preview/option-picker/4.png'),
        ],
      },
      { 
        value: 'Premium',
        label: 'Premium',
        icons: [
          getAssetUrl('images/preview/option-picker/5.png'),
          getAssetUrl('images/preview/option-picker/6.png'),
          getAssetUrl('images/preview/option-picker/7.png'),
          getAssetUrl('images/preview/option-picker/8.png'),
        ],
      },
      {
        value: 'Luxury labels',
        label: 'Luxury labels',
        icons: [
          getAssetUrl('images/preview/option-picker/9.png'),
          getAssetUrl('images/preview/option-picker/10.png'),
          getAssetUrl('images/preview/option-picker/11.png'),
          getAssetUrl('images/preview/option-picker/12.png'),
        ],
      },
      {
        value: 'A mix of fast fashion and designer brands',
        label: 'A mix of fast fashion and designer brands',
      },
    ],
    value: 'Premium',
    title: 'What\'s your main style goal?',
  },
};

// @ts-ignore
MultipleWithIcons.storyName = 'multiple + icons';

export const MultipleWithImagesAndIcons = {
  args: {
    isMultiple: true,
    options: [
      {
        value: 'Fast fashion',
        label: 'Fast fashion',
        image: getAssetUrl('images/preview/option-picker/img1.png'),
        icons: [
          getAssetUrl('images/preview/option-picker/1.png'),
          getAssetUrl('images/preview/option-picker/2.png'),
          getAssetUrl('images/preview/option-picker/3.png'),
          getAssetUrl('images/preview/option-picker/4.png'),
        ],
      },
      { 
        value: 'Premium',
        label: 'Premium',
        image: getAssetUrl('images/preview/option-picker/img2.png'),
        icons: [
          getAssetUrl('images/preview/option-picker/5.png'),
          getAssetUrl('images/preview/option-picker/6.png'),
          getAssetUrl('images/preview/option-picker/7.png'),
          getAssetUrl('images/preview/option-picker/8.png'),
        ],
      },
      {
        value: 'Luxury labels',
        label: 'Luxury labels',
        image: getAssetUrl('images/preview/option-picker/img3.png'),
        icons: [
          getAssetUrl('images/preview/option-picker/9.png'),
          getAssetUrl('images/preview/option-picker/10.png'),
          getAssetUrl('images/preview/option-picker/11.png'),
          getAssetUrl('images/preview/option-picker/12.png'),
        ],
      },
      {
        value: 'A mix of fast fashion and designer brands', 
        image: getAssetUrl('images/preview/option-picker/img4.png'),
        label: 'A mix of fast fashion and designer brands',
      },
    ],
    value: 'Premium',
    title: 'What\'s your main style goal?',
  },
};

// @ts-ignore
MultipleWithImagesAndIcons.storyName = 'multiple + images + icons';
