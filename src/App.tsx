import { useSignal } from '@preact/signals';
import { list, planPicker } from './data';
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
  'PlanPicker',
  'Chart',
  'MoneyBack',
  'Reviews',
  'ProgressBar',
  'Loader',
  'LoaderSet',
  'Rating',
];

const implementedComponents = ['List', 'PlanPicker'];

export function App() {
  const selectedComponent = useSignal('PlanPicker');

  return (
    <main class="h-screen touch-pan-y overflow-x-hidden m-auto sm:px-5 py-10 flex justify-center">
      <div class='flex flex-col gap-12 sm:px-10 w-full items-center'>
        <select
          value={selectedComponent}
          class='p-3 rounded-md outline-none font-mono appearance-none text-center text-lg'
          onChange={(e: any) => {
            selectedComponent.value = e.target.value;
          }}
        >
          <option value="">-- Select your component --</option>
          { components.map(component => (
            <option
              key={component}
              value={component}
              selected={component === selectedComponent.value}
              disabled={!implementedComponents.includes(component)}
            >
              { component }
            </option>
          )) }
        </select>

        <div class='max-w-sm w-full px-4 py-9 bg-white rounded-lg'>
          { selectedComponent.value === 'List' && <ListComponent title={list.title} items={list.items as any} /> }
          { selectedComponent.value === 'Chart' && <ChartComponent /> }
          { selectedComponent.value === 'MoneyBack' && <MoneyBackComponent /> }
          { selectedComponent.value === 'Reviews' && <ReviewsComponent /> }
          { selectedComponent.value === 'PlanPicker' && <PlanPickerComponent {...planPicker} /> }
          { selectedComponent.value === 'ProgressBar' && <ProgressBarComponent /> }
          { selectedComponent.value === 'Loader' && <LoaderComponent /> }
          { selectedComponent.value === 'LoaderSet' && <LoaderSetComponent /> }
          { selectedComponent.value === 'Rating' && <RatingComponent /> }
        </div>
      </div>
    </main>
  );
}
