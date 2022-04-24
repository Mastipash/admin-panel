import styles from './ButtonGroupColumn.module.css';

export const ButtonGroupColumn = ({ 
    children,
    ...props
 }) => {
    //  const {color, icon} = props
    return (
        <div className={styles._}>
            {children}
        </div>
    );
};