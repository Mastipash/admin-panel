import cn from "classnames";

import styles from "./Button.module.css";

export const Button = ({
  children,
  className,
  color,
  icon: Icon,
  size,
  onlyIcon,
  ...props
}) => {
  const buttonClass = cn(styles._, className, {
    [styles[`${color}`]]: true,
    [styles[`${size}`]]: true,
    [styles.onlyIcon]: !children && Icon,
  });

  return (
    <button className={buttonClass} {...props}>
      {Icon && <Icon className={styles.icon} />}
      {children && <span className={styles.text}>{children}</span>}
    </button>
  );
};