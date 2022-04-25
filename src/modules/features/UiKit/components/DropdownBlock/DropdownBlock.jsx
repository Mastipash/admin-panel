import styles from './DropdownBlock.module.css';

export const DropdownBlock = ({ 
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