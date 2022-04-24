import { ButtonGroupColumn } from './ButtonGroupColumn/ButtonGroupColumn';
import { ButtonGroupSection } from './ButtonGroupSection/ButtonGroupSection'; 
import {ReactComponent as IconBin} from '../../../../../common/icons/bin.svg';
import styles from './ButtonGroup.module.css';

export const ButtonGroup = ({children}) => {
    return (
        <div className={styles._}>
        <ButtonGroupColumn>
            <ButtonGroupSection size="large"  color="primary" icon={IconBin} />
            <ButtonGroupSection size="medium"  color="primary" icon={IconBin} />
        </ButtonGroupColumn>
        <ButtonGroupColumn>
            <ButtonGroupSection  size="large"   color="secondary" icon={IconBin} />
            <ButtonGroupSection size="medium"   color="secondary" icon={IconBin} />
        </ButtonGroupColumn>
        <ButtonGroupColumn>
            <ButtonGroupSection  size="large"   color="tertiary" icon={IconBin} />
        </ButtonGroupColumn>
        </div>
    //     <div className="button-group__column">
    //     <div className="button-group__section">
    //       <button className="button button_color_primary button_size_large button-section__button">
    //         <svg
    //           className="button__icon"
    //           viewBox="0 0 16 16"
    //           fill="none"
    //           stroke="#FFF"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
    //             fill="none"
    //             strokeLinecap="round"
    //           />
    //           <path
    //             d="M6.5 6V12M9.5 6V12"
    //             fill="none"
    //             strokeLinecap="round"
    //           />
    //         </svg>
    //         <span className="button__text">Text here</span>
    //       </button>
    //       <button className="button button_color_primary button_size_large button-section__button">
    //         <span className="button__text">Text here</span>
    //       </button>
    //       <button className="button button_color_primary button_size_large-icon button-section__button">
    //         <svg
    //           className="button__icon"
    //           viewBox="0 0 16 16"
    //           fill="none"
    //           stroke="#FFF"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
    //             fill="none"
    //             strokeLinecap="round"
    //           />
    //           <path
    //             d="M6.5 6V12M9.5 6V12"
    //             fill="none"
    //             strokeLinecap="round"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //     <div className="button-group__section">
    //       <button className="button button_color_primary button_size_medium button-section__button">
    //         <svg
    //           className="button__icon"
    //           viewBox="0 0 16 16"
    //           fill="none"
    //           stroke="#FFF"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
    //             fill="none"
    //             strokeLinecap="round"
    //           />
    //           <path
    //             d="M6.5 6V12M9.5 6V12"
    //             fill="none"
    //             strokeLinecap="round"
    //           />
    //         </svg>
    //         <span className="button__text">Text here</span>
    //       </button>
    //       <button className="button button_color_primary button_size_medium button-section__button">
    //         <span className="button__text">Text here</span>
    //       </button>
    //       <button className="button button_color_primary button_size_medium-icon button-section__button">
    //         <svg
    //           className="button__icon"
    //           viewBox="0 0 16 16"
    //           fill="none"
    //           stroke="#FFF"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
    //             fill="none"
    //             strokeLinecap="round"
    //           />
    //           <path
    //             d="M6.5 6V12M9.5 6V12"
    //             fill="none"
    //             strokeLinecap="round"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    //   <div className="button-group__column">
    //     <div className="button-group__section">
    //       <button className="button button_color_secondary button_size_large button-section__button">
    //         <svg
    //           className="button__icon"
    //           viewBox="0 0 16 16"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
    //             fill="none"
    //             strokeLinecap="round"
    //           />
    //           <path
    //             d="M6.5 6V12M9.5 6V12"
    //             fill="none"
    //             strokeLinecap="round"
    //           />
    //         </svg>
    //         <span className="button__text">Text here</span>
    //       </button>
    //       <button className="button button_color_secondary button_size_large button-section__button">
    //         <span className="button__text">Text here</span>
    //       </button>
    //       <button className="button button_color_secondary button_size_large-icon button-section__button">
    //         <svg
    //           className="button__icon"
    //           viewBox="0 0 16 16"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
    //             fill="none"
    //             strokeLinecap="round"
    //           />
    //           <path
    //             d="M6.5 6V12M9.5 6V12"
    //             fill="none"
    //             strokeLinecap="round"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //     <div className="button-group__section">
    //       <button className="button button_color_secondary button_size_medium button-section__button">
    //         <svg
    //           className="button__icon"
    //           viewBox="0 0 16 16"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
    //             fill="none"
    //             strokeLinecap="round"
    //           />
    //           <path
    //             d="M6.5 6V12M9.5 6V12"
    //             fill="none"
    //             strokeLinecap="round"
    //           />
    //         </svg>
    //         <span className="button__text">Text here</span>
    //       </button>
    //       <button className="button button_color_secondary button_size_medium button-section__button">
    //         <span className="button__text">Text here</span>
    //       </button>
    //       <button className="button button_color_secondary button_size_medium-icon button-section__button">
    //         <svg
    //           className="button__icon"
    //           viewBox="0 0 16 16"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
    //             fill="none"
    //             strokeLinecap="round"
    //           />
    //           <path
    //             d="M6.5 6V12M9.5 6V12"
    //             fill="none"
    //             strokeLinecap="round"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    //   <div className="button-group__column">
    //     <div className="button-group__section">
    //       <button className="button button_color_tertiary button_size_large button-section__button">
    //         <svg
    //           className="button__icon"
    //           viewBox="0 0 16 16"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
    //             fill="none"
    //             strokeLinecap="round"
    //           />
    //           <path
    //             d="M6.5 6V12M9.5 6V12"
    //             fill="none"
    //             strokeLinecap="round"
    //           />
    //         </svg>
    //         <span className="button__text">Text here</span>
    //       </button>
    //       <button className="button button_color_tertiary button_size_large button-section__button">
    //         <span className="button__text">Text here</span>
    //       </button>
    //       <button className="button button_color_tertiary button_size_large-icon button-section__button">
    //         <svg
    //           className="button__icon"
    //           viewBox="0 0 16 16"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
    //             fill="none"
    //             strokeLinecap="round"
    //           />
    //           <path
    //             d="M6.5 6V12M9.5 6V12"
    //             fill="none"
    //             strokeLinecap="round"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    );
};
