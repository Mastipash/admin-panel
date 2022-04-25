import styles from "./OrderFormHeader.module.css";
import cn from "classnames";
import { ReactComponent as DeleteIcon } from "../../../../../../../common/icons/x-medium.svg";

export const OrderFormHeader = ({number, onClose}) => {
  return (
    <div className={styles.header}>
      <h1 className={cn('headline', styles.title)}>
        Заказ #{number}
      </h1>
      <DeleteIcon
        style={{
          width: '20px',
          height: '20px',
          cursor: 'pointer'
        }}
        stroke="#BAD8F5"
        onClick={onClose}
      />
    </div>
  )
}
