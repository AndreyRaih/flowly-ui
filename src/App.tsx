import { ListComponent, ChartComponent, MoneyBackComponent, ReviewsComponent, PlanPickerComponent } from "./tasks";

export function App() {
  return (
    <main className="h-screen bg-gradient-to-b from-white to-gray-100 touch-pan-y overflow-x-hidden flex-column items-center justify-center">
      <ListComponent />
      <ChartComponent />
      <MoneyBackComponent />
      <ReviewsComponent />
      <PlanPickerComponent />
    </main>
  );
}
