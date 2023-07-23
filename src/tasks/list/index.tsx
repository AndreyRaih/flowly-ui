import { handleAssetsAsUrl } from '@/utils/handleAssets';
import styles from './styles.module.css';
import { ItemProps, ListProps } from './type';

function Item(props: ItemProps) {
  return (
    <div className={styles.item}>
      <div
        className={styles.icon}
        style={{ backgroundColor: props.icon.color }}
      >
        <img
          src={handleAssetsAsUrl(`assets/icons/${props.icon.type}.svg`)}
          alt=""
        />
      </div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}

export function ListComponent(props: ListProps) {
  return (
    <div className={styles.container}>
      {props.title && <div className={styles.title}>{props.title}</div>}
      <ul className={styles.list}>
        {props.items.map((item) => (
          <Item key={item.text} {...item} />
        ))}
      </ul>
    </div>
  );
}
