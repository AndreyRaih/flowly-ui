export type ListItemIcon = 'app' | 'shirt' | 'wear' | 'comment' | 'bag';

export type ListItemProps = {
  icon: {
    color: string;
    type: ListIcon;
  };
  text: string;
};

export type ListProps = {
  title?: string;
  items: ListItem[];
};
