import {memo, useCallback, useEffect, useMemo, useState} from "react";
import {ElementWithLabel, Button, Input} from "../../../../../common/components";
import {Wrapper} from '../'
import { ReactComponent as IconCheckmark } from "../../../../../common/icons/checkmark.svg";
import {OrderFormHeader} from './components/OrderFormHeader/OrderFormHeader';
import { OrderFormTable } from './components/OrderFormTable/OrderFormTable';
import {dateFormat, moneyFormat} from "../../helpers";

import styles from './OrderForm.module.css';
import cn from "classnames";

export const OrderForm = memo(({isOpen, onClose, order, onSubmit}) => {

  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  useEffect(() => {
    setData(order || {});
    setError('');
    return () => setData({});
  }, [order]);

  const {id = '', name = '', status = '', creationDate = '', confirmCode = '', products = [], loyalty} = data;
  const sum = useMemo(() => products.reduce((sum, {price}) => sum+price, 0), [products]);

  const handleSubmit = useCallback(() => {
    if (confirmCode !== verificationCode) {
      setError('Неправильный код');
    } else {
      onSubmit(data);
    }
  }, [onSubmit, verificationCode, confirmCode, data]);

  const handleChange = useCallback((value, key) => {
    setData({
      ...data,
      [key]: value,
    })
  }, [data])

  if (!id) {
    return null;
  }
  return (
    <div className={cn(styles._, {
      [styles.opened]: isOpen,
      [styles.hidden]: !isOpen,
    })}>
      <OrderFormHeader number={id} onClose={onClose} />
      <Wrapper>
        <form className={styles.form}>
          <ElementWithLabel
            label="Дата и время заказа">
            <Input
            className={styles.input}
            value={dateFormat(creationDate)}
            disabled
            />
          </ElementWithLabel>
          <ElementWithLabel
            label="ФИО Покупателя">
            <Input className={styles.input}
            value={name}
            onChange={(e) => handleChange(e.target.value, 'name')}
            disabled
          />
          </ElementWithLabel>
          {products && products.length > 0 && (
            <>
              <OrderFormTable products={products} />      
                            <div className={cn(styles.footer, styles.sum)}>
                            <p>Итоговая сумма: {moneyFormat(sum)}</p>
                          </div>
                          </>
          )}

          <ElementWithLabel
            label="Уровень лояльности">
            <Input
            className={styles.input}
            value={loyalty}
            disabled
          />
          </ElementWithLabel>
          <ElementWithLabel
              label="Статус">
              <Input 
              className={styles.input}
              value={status}
              disabled
            />
            </ElementWithLabel>
          <ElementWithLabel
            label="Код подтверждения">
            <Input className={styles.input}
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          </ElementWithLabel>
        </form>
      </Wrapper>
      <div className={styles.footer}>
        {error && <p className={styles.error}>{error}</p>}
        <Button color="primary" size="large" icon={IconCheckmark} onClick={handleSubmit}>Сохранить</Button>
      </div>
    </div>
  );
});
