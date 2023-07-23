import {
  ChartComponent,
  MoneyBackComponent,
  ReviewsComponent,
  PlanPickerComponent,
  ProgressBarComponent,
  LoaderComponent,
  LoaderSetComponent,
  RatingComponent,
} from './tasks';

import { ListComponent, ListItemProps } from './tasks';

export function App() {
  const listItems: ListItemProps[] = [
    {
      icon: {
        type: 'app',
        color: '#FFEFD8',
      },
      text: 'Highlight your natural beauty with a personal color palette',
    },
    {
      icon: {
        type: 'shirt',
        color: '#EDE2FF',
      },
      text: 'Get inspired with outfits suggestions tailored to your color and style types',
    },
    {
      icon: {
        type: 'wear',
        color: '#FFDFE1',
      },
      text: 'Maximize your wardrobe with suggestions on how mix and match items you own',
    },
    {
      icon: {
        type: 'comment',
        color: '#E7F5D5',
      },
      text: 'Personalized tips for your color, style and body type',
    },
    {
      icon: {
        type: 'bag',
        color: '#D8EEFF',
      },
      text: 'Save money and time on shopping',
    },
  ];
  return (
    <main className="flex-column mx-auto h-screen max-w-md touch-pan-y items-center justify-center overflow-x-hidden p-4">
      <ListComponent
        title="Your personal style elevating plan"
        items={listItems}
      />
      <ChartComponent />
      <MoneyBackComponent />
      <ReviewsComponent />
      <PlanPickerComponent />
      <ProgressBarComponent />
      <LoaderComponent />
      <LoaderSetComponent />
      <RatingComponent />
    </main>
  );
}
