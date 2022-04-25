import { InputWithLabel } from '../../../../../common/components/InputWithLabel/InputWithLabel';
import styles from './InputForm.module.css';

export const InputForm = ({ children }) => {
    return (
        <div className={styles._}>
        <InputWithLabel  label="Дата и время заказа" placeholder="Введите" />
        <InputWithLabel 
          label="Дата и время заказа"
          placeholder="Введите"
          defaultValue="06.12.2021"
          incorrect
        />
        <InputWithLabel 
          label="Дата и время заказа"
          placeholder="Введите"
          defaultValue="06.12.2021"
          disabled
        />
        </div>
    );
};