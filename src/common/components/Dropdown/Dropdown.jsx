import styles from './Dropdown.module.css';
import cn from "classnames";

export const Dropdown = ({className, children}) => {
  return (
    <div className={cn(styles._, className)}>
      {children}
    </div>
  );
};
