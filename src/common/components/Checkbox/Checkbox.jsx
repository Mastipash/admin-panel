//import {ReactComponent as IconCheckmark} from '../../icons/checkmark.svg';
import cn from "classnames";
import styles from "./Checkbox.module.css";

export const Checkbox = ({ 
    className,
    label,
    checked,
    onChange,
    ...props
}) => {

  return (
    //   <div className={cn(styles._, className)}>
    //   <input className={styles.item} type="checkbox" checked={checked} onChange={onChange} {...props} />
    //   <label className={styles.label}>
    //       <IconCheckmark className={styles.icon}/>
    //   </label>
    // </div>
    <label className={cn(styles._, className)}>
      <input type="checkbox" className={styles.checkbox} {...props} />
      {label && <p className={styles.label}>{label}</p>}
    </label>
  );
};