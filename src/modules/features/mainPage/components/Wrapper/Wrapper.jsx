import styles from "./Wrapper.module.css";
import cn from "classnames";

export const Wrapper = ({className, children}) => {
  return (
    <div className={cn(styles._, className)}>
      {children}
    </div>
  );
};
