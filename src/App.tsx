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

export function App() {
  return (
    <main className="h-screen touch-pan-y overflow-x-hidden flex flex-column items-center justify-center m-auto px-5">
      <ListComponent />
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
