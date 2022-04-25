import {ArrowIcon} from "../ArrowIcon/ArowIcon";
import styles from "./Table.module.css";
import cn from "classnames";

export const Th = ({children, onClick, select, isAscending, ...props}) => {
  return (
    <th className={cn(styles.item, {
      [styles.thead_select]: select,
    })} onClick={onClick} {...props}>
      <div className={cn(styles.th, {
        [styles.item_pointer]: onClick,
      })}>
        {children}
        {onClick && <ArrowIcon className={styles.icon} select={isAscending} color="#fff" />}
      </div>
    </th>
  );
};
