import { getIconUrl } from '@/utils/handleAssets';
import { replaceLineBreakers } from '@/utils/jsx';


type ListIcon = 'app' | 'shirt' | 'wear' | 'comment' | 'bag';

type ListItem = {
  icon: ListIcon;
  text: string;
};

export type ListProps = {
  title?: string;
  items: ListItem[];
};

export function ListComponent({ title, items }: ListProps) {
  return (
    <div class="px-4 py-9 bg-white rounded-lg">
      <div class="text-center text-2xl font-bold">
        { title && replaceLineBreakers(title) }
      </div>
      <div>
        { items.map((item) => (
          <div class="flex my-5 gap-x-4 items-center" key={item.text}>
            <img src={getIconUrl(item.icon)} />
            <div class="leading-normal">
              { item.text }
            </div>
          </div>
        )) }
      </div>
    </div>
  );
}
