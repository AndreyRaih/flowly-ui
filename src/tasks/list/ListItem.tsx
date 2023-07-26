import { getIconUrl } from '@/utils/handleAssets';


export type ListItemIcon = {
  code: 'app' | 'shirt' | 'wear' | 'comment' | 'bag';
  bg?: string;
};

export type ListItemShape = {
  icon: ListItemIcon | ListItemIcon['code'];
  text: string;
};

export const ListItem = ({ text, icon }: {
  icon: ListItemIcon;
  text: string;
}) => {
  const src = getIconUrl(icon.code);

  return (
    <div class="flex my-5 gap-x-4 items-center">
      <img src={src} class={'w-10 h-10 flex-shrink-0 rounded-full'} style={{ backgroundColor: icon.bg }} />
      <div class="leading-normal">
        { text }
      </div>
    </div>
  );
};
