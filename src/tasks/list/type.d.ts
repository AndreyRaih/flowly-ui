export type ListIcon = 'app' | 'shirt' | 'wear' | 'comment' | 'bag';

export type ItemProps = {
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
