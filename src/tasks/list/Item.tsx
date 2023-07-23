import { handleAssetsAsUrl } from '@/utils/handleAssets';
import styles from './styles.module.css';
import { ListItemProps } from './type';

export function ItemComponent(props: ListItemProps) {
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
