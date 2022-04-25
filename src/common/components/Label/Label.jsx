import styles from './Label.module.css';

export const Label = ({      
    children,
    className,
    label,
    ...props 
}) => {
    return (
        <label className={styles._}>
        {children}
        </label>
    );
};