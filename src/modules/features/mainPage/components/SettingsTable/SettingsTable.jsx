import {SearchBar,Filter} from '../../components';
import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {initialState, searchActions} from "../../store/search";

import styles from "./SettingsTable.module.css";

export const SettingsTable = () => {
  const [isDisplayFilter, setIsDisplayFilter] = useState(false);
  const [filters, setFilters] = useState({...initialState.filters});
  const dispatch = useDispatch();
  const handleChangeDisplayFilter = useCallback(() => {
    setIsDisplayFilter(!isDisplayFilter);
  }, [isDisplayFilter, setIsDisplayFilter]);

  const handleClearFilter = useCallback(() => {
    dispatch(searchActions.clearFilters());
    setFilters({...initialState.filters});
  }, [dispatch, setFilters]);

  const handleSetFiledFilter = useCallback((e) => {
    const {name, value} = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  }, [setFilters, filters]);

  const handleSubmit = useCallback(() => {
    dispatch(searchActions.setFilters(filters));
  }, [dispatch, filters]);

  const handleSelectStatuses = useCallback((values) => setFilters({
      ...filters,
      statuses: values,
    }), [setFilters, filters]);

  return (
    <div className={styles._}>
      <SearchBar onFilter={handleChangeDisplayFilter} onClearFilter={handleClearFilter} />
      {isDisplayFilter && (
        <Filter
          fields={filters}
          setFields={handleSetFiledFilter}
          onSubmit={handleSubmit}
          onSelectStatuses={handleSelectStatuses}
        />
      )}
    </div>
  );
};
