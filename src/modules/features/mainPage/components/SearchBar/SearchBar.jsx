import {memo, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFieldOrderOrFio, searchActions} from "../../store/search";
import { Button, Input } from "../../../../../common/components";
import {ReactComponent as IconFilter} from '../../../../../common/icons/filter.svg';
// import cn from 'classnames';
import styles from './SearchBar.module.css';

export const SearchBar = memo(({onFilter, onClearFilter}) => {
    const dispatch = useDispatch();
    const valueOrderOrFio = useSelector((state) => getFieldOrderOrFio(state));
  
    const handleSetOrderOrFioSearch = useCallback((value) => {
      dispatch(searchActions.setNumberOrFio(value));
    }, [dispatch]);
  
    const handleClear = useCallback(() => dispatch(searchActions.setNumberOrFio('')), [dispatch]);
  
    return (
        <div className={styles._}>
            <Input
            className={styles.input} 
            placeholder="Номер заказа или ФИО"
            search
            value={valueOrderOrFio}
            onChange={handleSetOrderOrFioSearch}
            onClear={handleClear}
             />
            <Button size="large" color="primary" icon={IconFilter}  onClick={onFilter}>Фильтры</Button>
            <Button size="large" color="secondary" onClick={onClearFilter}>Сбросить фильтры</Button>
        </div>
    );
});