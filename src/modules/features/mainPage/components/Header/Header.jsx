import styles from './Header.module.css';
import cn from 'classnames';

export const Header = ({className}) => {
  return (
    <header className={cn(styles._, className)}>
      <h1 className={styles.title}>Список заказов</h1>
    </header>
  );
};