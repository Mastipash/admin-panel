import { Wrapper, InputForm, SearchBar } from './modules/features/UiKit/'
import { InputWithLabel } from './common/components/InputWithLabel/InputWithLabel'
import { ReactComponent as IconMoon } from './common/icons/moon.svg'
import { ReactComponent as IconSun } from './common/icons/sun.svg'
import { Checkbox } from './common/components/Checkbox/Checkbox'
// import { Radio } from './common/components/Radio/Radio';
// import { Checkbox } from './common/components/Checkbox/Checkbox';
import { ButtonGroup } from './modules/features/UiKit/components/ButtonGroup/ButtonGroup'
import { Button } from './common/components/Button/Button'
import '../src/common/css/reset.css'
import '../src/common/css/common.css'
import './css/button.css'
import './css/checkbox-radio.css'
import './css/dropdown.css'
import { DropdownBlock } from './modules/features/UiKit/components/DropdownBlock/DropdownBlock'

function App() {
  return (
    <div className="components">
      <Wrapper>
        <InputForm />
      </Wrapper>
      <Wrapper>
        <SearchBar />
      </Wrapper>
      <Wrapper>
        <div className="item-group">
          <Checkbox />
          <Checkbox checked />
          {/* <div className="checkbox">
            <input className="checkbox__item" type="checkbox" id="checkbox-1" />
            <label className="checkbox__label" htmlFor="checkbox-1"></label>
          </div>
          <div className="checkbox">
            <input
              defaultChecked
              className="checkbox__item"
              type="checkbox"
              id="checkbox-2"
            />
            <label className="checkbox__label" htmlFor="checkbox-2"></label>
          </div> */}
        </div>
        <div className="item-group">
          {/* <div className="radio">
            <input
              className="radio__item"
              type="radio"
              name="radio-button"
              id="radio-1"
            />
            <label className="radio__label" htmlFor="radio-1"></label>
          </div>
          <div className="radio">
            <input
              className="radio__item"
              defaultChecked
              type="radio"
              name="radio-button"
              id="radio-2"
            />
            <label className="radio__label" htmlFor="radio-2"></label>
          </div> */}
        </div>
      </Wrapper>
      <Wrapper>
        <ButtonGroup />
      </Wrapper>
      <Wrapper>
        <div className="dropdown-group">
          <div className="dropdown-group__row">
            <div className="dropdown-block dropdown-block-list">
              <div className="checkbox dropdown-block__checkbox">
                <input
                  className="checkbox__item"
                  type="checkbox"
                  id="new-check"
                />
                <label className="checkbox__label" htmlFor="new-check">
                  Новый
                </label>
              </div>
              <div className="checkbox dropdown-block__checkbox">
                <input
                  className="checkbox__item"
                  type="checkbox"
                  id="calc-check"
                />
                <label className="checkbox__label" htmlFor="calc-check">
                  Расчет
                </label>
              </div>
              <div className="checkbox dropdown-block__checkbox">
                <input
                  className="checkbox__item"
                  type="checkbox"
                  id="confirmed-check"
                  defaultChecked
                />
                <label className="checkbox__label" htmlFor="confirmed-check">
                  Подтвержден
                </label>
              </div>
              <div className="checkbox dropdown-block__checkbox">
                <input
                  className="checkbox__item"
                  type="checkbox"
                  id="postponed-check"
                />
                <label className="checkbox__label" htmlFor="postponed-check">
                  Отложен
                </label>
              </div>
              <div className="checkbox dropdown-block__checkbox">
                <input
                  className="checkbox__item"
                  type="checkbox"
                  id="completed-check"
                />
                <label className="checkbox__label" htmlFor="completed-check">
                  Выполнен
                </label>
              </div>
              <div className="checkbox dropdown-block__checkbox">
                <input
                  className="checkbox__item"
                  type="checkbox"
                  id="canceled-check"
                />
                <label className="checkbox__label" htmlFor="canceled-check">
                  Отменен
                </label>
              </div>
            </div>
            <div className="dropdown-block dropdown-block-list">
              <div className="radio dropdown-block__radio">
                <input
                  className="radio__item-none"
                  type="radio"
                  name="radio-btn"
                  id="new-radio"
                />
                <label className="radio__label-none" htmlFor="new-radio">
                  Новый
                </label>
              </div>
              <div className="radio dropdown-block__radio">
                <input
                  className="radio__item-none"
                  type="radio"
                  name="radio-btn"
                  id="calc-radio"
                />
                <label className="radio__label-none" htmlFor="calc-radio">
                  Расчет
                </label>
              </div>
              <div className="radio dropdown-block__radio">
                <input
                  className="radio__item-none"
                  type="radio"
                  name="radio-btn"
                  id="confirmed-radio"
                  defaultChecked
                />
                <label className="radio__label-none" htmlFor="confirmed-radio">
                  Подтвержден
                </label>
              </div>
              <div className="radio dropdown-block__radio">
                <input
                  className="radio__item-none"
                  type="radio"
                  name="radio-btn"
                  id="postponed-radio"
                />
                <label className="radio__label-none" htmlFor="postponed-radio">
                  Отложен
                </label>
              </div>
              <div className="radio dropdown-block__radio">
                <input
                  className="radio__item-none"
                  type="radio"
                  name="radio-btn"
                  id="completed-radio"
                />
                <label className="radio__label-none" htmlFor="completed-radio">
                  Выполнен
                </label>
              </div>
              <div className="radio dropdown-block__radio">
                <input
                  className="radio__item-none"
                  type="radio"
                  name="radio-btn"
                  id="canceled-radio"
                />
                <label className="radio__label-none" htmlFor="canceled-radio">
                  Отменен
                </label>
              </div>
            </div>
          </div>
          <div className="dropdown-group__row">
            <DropdownBlock>
              <InputWithLabel
                label="Номер страницы"
                placeholder="Введите номер"
              />
            </DropdownBlock>
            <DropdownBlock>
              <span className="text">Удалить n записей?</span>
              <Button size="medium" color="secondary">
                Удалить
              </Button>
              <Button size="medium" color="primary">
                Отмена
              </Button>
            </DropdownBlock>
            {/* <button className="button button_color_secondary button_size_medium button_full-width dropdown-block__button">
                <span className="button__text">Удалить</span>
              </button>
              <button className="button button_color_primary button_size_medium button_full-width dropdown-block__button">
                <span className="button__text">Отмена</span>
              </button> */}

            <DropdownBlock>
              <span className="text">Выберите тему</span>
              <Button size="medium" color="secondary" icon={IconSun}>
                Светлая
              </Button>
              <Button size="medium" color="primary" icon={IconMoon}>
                Тёмная
              </Button>
            </DropdownBlock>
            {/* <button className="button button_color_secondary button_size_medium button_full-width dropdown-block__button">
                <svg
                  className="button__icon"
                  viewBox="0 0 16 16"
                  stroke="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="4" stroke="none" />
                  <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
                  <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
                  <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
                  <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
                  <path
                    d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"
                    stroke="none"
                  />
                  <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" />
                  <path
                    d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z"
                    stroke="none"
                  />
                  <path
                    d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z"
                    stroke="none"
                  />
                </svg>
                <span className="button__text">Светлая</span>
              </button>
              <button className="button button_color_primary button_size_medium button_full-width dropdown-block__button">
                <svg
                  className="button__icon"
                  viewBox="0 0 16 16"
                  stroke="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                    stroke="none"
                  />
                </svg>
                <span className="button__text">Темная</span>
              </button> */}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default App
