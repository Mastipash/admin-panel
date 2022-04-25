import styles from './Table.module.css';
import cn from "classnames";

export const Table = ({className, children}) => {
  return (
    <table className={cn(styles._, className)}>
      {children}
    </table>
  );
}