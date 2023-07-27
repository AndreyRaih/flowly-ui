import { replaceLineBreakers } from '@/utils/jsx';
import { ListItem, ListItemShape } from './ListItem';


export type ListProps = {
  title?: string;
  items: ListItemShape[];
};

export function ListComponent({ title, items }: ListProps) {
  return (
    <div class="">
      <div class="text-center text-2xl font-bold">
        { title && replaceLineBreakers(title) }
      </div>
      <div>
        { items.map((item) => {
          const icon = typeof item.icon === 'string' ? { url: item.icon } : item.icon;

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
