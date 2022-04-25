import {Header, SettingsTable, OrderTable, OrderForm, Footer} from './components';
import cn from 'classnames';
import styles from './MainPage.module.css';

export const MainPage = ({className}) => {
    return (
    <div className={cn(styles._,className)}>
        <Header />
        <SettingsTable />
        <OrderTable />
        <Footer />
        <OrderForm /> 
    </div>
  );
};