import { useSignal } from '@preact/signals';
import { list } from './data';
import {
  ListComponent,
  ChartComponent,
  MoneyBackComponent,
  ReviewsComponent,
  PlanPickerComponent,
  ProgressBarComponent,
  LoaderComponent,
  LoaderSetComponent,
  RatingComponent,
} from './tasks';

const components = [
  'List',
  'Chart',
  'MoneyBack',
  'Reviews',
  'PlanPicker',
  'ProgressBar',
  'Loader',
  'LoaderSet',
  'Rating',
];

export function App() {
  const selectedComponent = useSignal('List');

  return (
    <main class="h-screen touch-pan-y overflow-x-hidden m-auto px-5 pt-10 pr-40 flex justify-center">
      <div class='flex gap-20 px-10 w-full items-center justify-center'>
        <div class='flex flex-col gap-2 mb-10 pt-10'>
          { components.map(component => (
            <span
              key={component}
              class={'cursor-pointer hover:opacity-100 ' + (component === selectedComponent.value ? 'font-bold opacity-100' : 'opacity-70')}
              onClick={() => {
                selectedComponent.value = component;
              }}
            >
              { component }
            </span>
          )) }
        </div>

        <div class='max-w-sm w-full'>
          { selectedComponent.value === 'List' && <ListComponent title={list.title} items={list.items as any} /> }
          { selectedComponent.value === 'Chart' && <ChartComponent /> }
          { selectedComponent.value === 'MoneyBack' && <MoneyBackComponent /> }
          { selectedComponent.value === 'Reviews' && <ReviewsComponent /> }
          { selectedComponent.value === 'PlanPicker' && <PlanPickerComponent /> }
          { selectedComponent.value === 'ProgressBar' && <ProgressBarComponent /> }
          { selectedComponent.value === 'Loader' && <LoaderComponent /> }
          { selectedComponent.value === 'LoaderSet' && <LoaderSetComponent /> }
          { selectedComponent.value === 'Rating' && <RatingComponent /> }
        </div>
      </div>
    </main>
  );
}
