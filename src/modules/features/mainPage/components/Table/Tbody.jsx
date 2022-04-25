import {memo} from "react";
import {Tr, Td} from "./";
import {Checkbox} from "../../../../../common/components/Checkbox/Checkbox";
import {dateFormat, moneyFormat} from "../../helpers";
import {Status} from "../Status/Status";
import styles from "./Table.module.css";;

export const Tbody = memo(({orders, onSelect, onEdit}) => {
  return (
    <tbody>
      {orders && orders.map((order) => {
        const {id, name, status, count, sum, creationDate, select} = order;
        return (
          <Tr key={id}>
            <Td>
            <Checkbox
              className={styles.checkbox}
              onChange={(e) => onSelect(id, e.target.checked)}
              checked={!!select}
            />
            </Td>
            <Td onClick={() => onEdit(order)}>{id}</Td>
            <Td onClick={() => onEdit(order)}>{dateFormat(creationDate)}</Td>
            <Td onClick={() => onEdit(order)}><Status name={status} value={status}/></Td>
            <Td onClick={() => onEdit(order)}>{count || '—'}</Td>
            <Td onClick={() => onEdit(order)}>{moneyFormat(sum)}</Td>
            <Td onClick={() => onEdit(order)}>{name}</Td>
          </Tr>
        )
      })}
    </tbody>
  )
});
