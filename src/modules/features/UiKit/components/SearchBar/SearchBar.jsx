import { Input } from '../../../../../common/components/Input/Input';
import styles from './SearchBar.module.css';

export const SearchBar = ({ children }) => {
    return (
        <div className={styles._}>
            <Input search placeholder="Номер заказа или ФИО"/>
            <Input search defaultValue="576433" />
        </div>
    );
};