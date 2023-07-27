export type ListItemIcon = {
  url: string;
  bg?: string;
};

export type ListItemShape = {
  icon: ListItemIcon | ListItemIcon['url'];
  text: string;
};

export const ListItem = ({ text, icon }: {
  icon: ListItemIcon;
  text: string;
}) => {
  return (
    <div class="flex my-5 gap-x-4 items-center">
      <img src={icon.url} class={'w-10 h-10 flex-shrink-0 rounded-full'} style={{ backgroundColor: icon.bg }} />
      <div class="leading-normal">
        { text }
      </div>
    </div>
  );
};
