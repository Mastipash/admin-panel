import cn from "classnames";
import styles from "./ArrowIcon.module.css";
import {Icon} from "../Icon/Icon";

export const ArrowIcon = ({select, className, color}) => {
  return (
    <span className={cn(styles._, {
      [styles.select]: select,
    }, className)}>
      <Icon type="arrow-down" color={color} />
    </span>
  );
};

