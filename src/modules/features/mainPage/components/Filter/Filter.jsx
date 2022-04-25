import {memo} from "react";
import {Input, ElementWithLabel, Button, CheckboxList} from "../../../../../common/components";
import {statusesList} from "../../constants/statusesList";
import styles from './Filter.module.css';

export const Filter = memo(({fields, setFields, onSelectStatuses, onSubmit}) => {
  const {dateStart = '', dateEnd = '', statuses = [], ofSum = '', toSum = ''} = fields;
  return (
    <div className={styles._}>
      <ElementWithLabel label="Дата оформления">
        <div className={styles.input_group}>
            <Input
            className={styles.input}
            placeholder="dd.mm.yyyy"
            filter="c"
            name="dateStart"
            value={dateStart}
            onChange={setFields}
          />
          <Input
            className={styles.input}
            placeholder="dd.mm.yyyy"
            filter="по"
            name="dateEnd"
            value={dateEnd}
            onChange={setFields}
          />
        </div>
    </ElementWithLabel>
    <ElementWithLabel label="Статус заказа">
    <CheckboxList
        defaultValue="Любой"
        items={statusesList}
        handleSelect={(values) => onSelectStatuses(values)}
        selected={statuses}
      />
    </ElementWithLabel>
    <ElementWithLabel label="Сумма заказа">
    <div className={styles.input_group}>
        <Input
        className={styles.input}
        placeholder="Р"
        filter="от"
        name="ofSum"
        value={ofSum}
        onChange={setFields}
      />
      <Input
        className={styles.input}
        placeholder="Р"
        filter="до"
        name="toSum"
        value={toSum}
        onChange={setFields}
      />
    </div>
    </ElementWithLabel>
      <Button size="large" color="secondary" className={styles.button} onClick={onSubmit}>Применить</Button>
    </div>
  )
});
