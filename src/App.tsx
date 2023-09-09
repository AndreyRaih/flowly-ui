/* eslint-disable max-lines-per-function */
import { Single } from './stories/option-picker/ListImageLayout.stories';
import { asActionable } from './stories/decorators';
import { PictureSelectLayout } from './tasks/picture-select-layout';


const Component = asActionable(PictureSelectLayout);

export function App() {
  return (
    <main class={'h-screen touch-pan-y overflow-x-hidden m-auto sm:px-5 py-10 flex justify-center'}>
      <div class={'flex flex-col gap-12 sm:px-10 w-full items-center'}>
        <div class={'max-w-sm w-full px-4 py-9 bg-white rounded-lg'}>
          <Component {...Single.args} />
        </div>
      </div>
    </main>
  );
}
