import styles from './styles.module.css';
import { ItemComponent } from './Item';
import { ListProps } from './type';

export function ListComponent(props: ListProps) {
  return (
    <div className={styles.container}>
      {props.title && <div className={styles.title}>{props.title}</div>}
      <ul className={styles.list}>
        {props.items.map((item) => (
          <ItemComponent key={item.text} {...item} />
        ))}
      </ul>
    </div>
  );
}
