import { Button } from '../../../../../../common/components/Button/Button'
import styles from './ButtonGroupSection.module.css';

export const ButtonGroupSection = ({ 
    children,
    ...props
 }) => {
     const {color, size, icon} = props
    return (
        <div className={styles._}>
            <Button 
                color={color}
                size={size}
                icon={icon}
                {...props}
            >Text here</Button>
            <Button 
                color={color}
                size={size}
                icon={icon}
                {...props}
            >Text here</Button>
            <Button 
                color={color}
                size={size}
                icon={icon}
                {...props}
            ></Button>
        </div>
    );
};