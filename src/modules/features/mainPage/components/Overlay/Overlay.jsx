import styles from './Overlay.module.css';
import cn from "classnames";

export const Overlay = ({show = false, ...props}) => {
  return (
    <div className={cn(styles._, {
  [styles.hidden]: !show,
})} {...props}/>
  );
};
