import { getAssetUrl } from '@/utils/handleAssets';


export type MoneyBackProps = {
  title: string;
  text: string;
}

export function MoneyBackComponent({ title, text }: MoneyBackProps) {
  return (
    <div class={'flex flex-col gap-4 items-center'}>
      <div class="relative z-10">
        <img src={getAssetUrl('images/money-back.png')} alt="Money back guarantee" class={'h-[116px]'} />
      </div>
      <div class={'flex flex-col gap-3 px-8 pb-4 pt-[4.5rem] mt-[-75px] bg-orange-100/50 rounded-md'}>
        <div class={'text-xl text-center font-medium'}>
          { title }
        </div>
        <div class={'text-sm text-center'}>
          { text }
        </div>
      </div>
    </div>
  );
}
