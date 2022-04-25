import { Label } from '../Label/Label';
import styles from './ElementWithLabel.module.css';

export const ElementWithLabel = ({
     children,
     className,
     label,
     ...props
    }) => {
        // const {value, defaultValue, disabled, incorrect, search} = props;
    return (
    <div className={styles._}>
        <Label>
            {label}
        </Label>
        {children}
        </div>
    );
};