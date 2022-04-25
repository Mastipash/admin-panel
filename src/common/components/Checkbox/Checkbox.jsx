import styles from './Checkbox.module.css';
import cn from "classnames";

export const Checkbox = ({className, label, ...props}) => {
  return (
    <label className={cn(styles._, className)}>
      <input type="checkbox" className={styles.checkbox} {...props} />
      {label && <p className={styles.label}>{label}</p>}
    </label>
  );
};