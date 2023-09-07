/* eslint-disable max-lines-per-function */
import { MultipleWithIcons } from './stories/ListOptionPicker.stories';
import { asActionable } from './stories/decorators';
import { Select } from './tasks/select';


const Component = asActionable(Select);

export function App() {
  return (
    <main class={'h-screen touch-pan-y overflow-x-hidden m-auto sm:px-5 py-10 flex justify-center'}>
      <div class={'flex flex-col gap-12 sm:px-10 w-full items-center'}>
        <div class={'max-w-sm w-full px-4 py-9 bg-white rounded-lg'}>
          <Component {...MultipleWithIcons.args} />
        </div>
      </div>
    </main>
  );
}
