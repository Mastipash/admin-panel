import cn from "classnames";

import { ReactComponent as DeleteIcon } from "../../icons/x-medium.svg";
import { ReactComponent as DisabledIcon } from "../../icons/locked.svg";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

import styles from "./Input.module.css";

export const Input = ({
  children,
  className,
  defaultValue,
  disabled,
  incorrect,
  onClear,
  search,
  filter,
  value,
  onChange,
  ...props
}) => {
  const inputClass = cn(styles._, className, {
    [styles.incorrect]: incorrect,
    [styles.disabled]: disabled,
    [styles.search]: search,
    [styles.filter]: filter
  });

  return (
    <div className={inputClass}>
      {search && <SearchIcon className={styles.icon} />}
      {filter && <span>{filter}</span>}
      <input
        className={styles.field}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
      {(value || defaultValue) && !disabled && (
        <button onClick={onClear} className={styles.button}>
          <DeleteIcon  className={styles.icon}/>
        </button>
      )}
      { disabled && (
        <button className={styles.button}>
          <DisabledIcon className={styles.icon}/>
        </button>
      )}
    </div>
  );
};
