import {ReactComponent as IconCircle } from '../../icons/dot.svg';
import styles from './Radio.module.css';

export const Radio = ({
    className,
    ...props
}) => {
    return (
        <label>
            <input type="radio" className={styles.item} {...props} />
            <span>
                <IconCircle width="1rem" height="1rem" color="#FFF" />
            </span>
        </label>
    )
}