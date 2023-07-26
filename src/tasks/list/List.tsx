import { replaceLineBreakers } from '@/utils/jsx';
import { ListItem, ListItemShape } from './ListItem';
import { useBgColors } from './useBgColors';


export type ListProps = {
  title?: string;
  items: ListItemShape[];
};

export function ListComponent({ title, items }: ListProps) {
  const getBgColor = useBgColors();

  return (
    <div class="">
      <div class="text-center text-2xl font-bold">
        { title && replaceLineBreakers(title) }
      </div>
      <div>
        { items.map((item) => {
          const icon = typeof item.icon === 'string' ? { code: item.icon } : item.icon;
          icon.bg = icon.bg || getBgColor();

          return (
            <ListItem 
              key={item.text}
              text={item.text}
              icon={icon}
            />
          );
        }) }
      </div>
    </div>
  );
}
