import cn from "classnames";
import styles from "./Table.module.css";

export const Tr = ({className, type = 'body', children, ...props}) => {
  return (
    <tr className={cn({
      [styles.tr]: type === 'body',
      [styles.header]: type === 'head',
    } ,className)} {...props}>
      {children}
    </tr>
  );
};