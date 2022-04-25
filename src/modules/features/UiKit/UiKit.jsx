import {ButtonGroup, InputForm, SearchBar, DropdownBlock, Wrapper} from './';
import {Button, Checkbox, InputWithLabel} from '../../../common/components';
import {ReactComponent as IconMoon} from '../../../common/icons/moon.svg';
import {ReactComponent as IconSun} from '../../../common/icons/sun.svg';

export const Components =({ children }) => {
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
            <DropdownBlock>
              <span className="text">Выберите тему</span>
              <Button size="medium" color="secondary" icon={IconSun}>
                Светлая
              </Button>
              <Button size="medium" color="primary" icon={IconMoon}>
                Тёмная
              </Button>
            </DropdownBlock>
          </div>
        </div>
      </Wrapper>
    </div>
    );
};