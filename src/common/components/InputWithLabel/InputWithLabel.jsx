import { Label } from '../Label/Label';
import { Input } from '../Input/Input';
import styles from './InputWithLabel.module.css';

export const InputWithLabel = ({
     children,
     className,
     label,
     ...props
    }) => {
        const {value, defaultValue, disabled, incorrect, search} = props;
    return (
    <div className={styles._}>
        <Label>
            {label}
        </Label>
        <Input
            value={value}
            defaultValue={defaultValue}
            disabled={disabled}
            incorrect={incorrect}
            search={search}
            {...props}
        />
        </div>
    );
};