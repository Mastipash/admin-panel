import {Icon} from "../Icon/Icon";
import {getColorIcon, getTypeIcon} from "../../helpers";
import cn from "classnames";
import styles from "./Status.module.css";

export const Status = ({name, value}) => {
  return (
    <div className={styles._}>
      <Icon type={getTypeIcon(value)} color={getColorIcon(value)} />
      <p className={cn(styles.name, {
        [styles.name_done]: value === 'Выполнен',
        [styles.name_disabled]: value === 'Выполнен' || value === 'Отменен' ,
      })}>{name}</p>
    </div>
  );
};