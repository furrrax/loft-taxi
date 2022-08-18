import React from "react";

const PopupOrder = () => (
    <form className="popup popup__order">
        <div className="popup__address">
            <div className="popup__address__input popup__address__input--start">
                <input type="text" className="popup__address__input__field" placeholder="ул. Жуковского, 5"></input>
                <div className="popup__address__input__btns">
                    <a href className="popup__address__input__btns__cross">
                        <img src className="popup__address__input__btns__cross__pic" alt="" />
                    </a>
                    <a href className="popup__address__input__btns__arrow">
                        <img src className="popup__address__input__btns__arrow__pic" alt="" />
                    </a>
                </div>
            </div>
            <div className="popup__address__input popup__address__input--end">
                <input type="text" className="popup__address__input__field" placeholder="ул. Заславского, 3"></input>
                <div className="popup__address__input__btns">
                    <a href className="popup__address__input__btns__cross">
                        <img src className="popup__address__input__btns__cross__pic" alt="" />
                    </a>
                    <a href className="popup__address__input__btns__arrow">
                        <img src className="popup__address__input__btns__arrow__pic" alt="" />
                    </a>
                </div>
            </div>
        </div>
        <div className="popup__option">
            <ul className="popup__option__list">
                <li className="popup__option__list__item">
                    <span className="popup__option__list__item__title">Стандарт</span>
                    <span className="popup__option__list__item__cost">
                        <span className="popup__option__list__item__cost__title">Стоимость</span>
                        <span className="popup__option__list__item__cost__price">150 ₽</span>
                    </span>
                    <div class="popup__option__list__item__img">
                        <img src className="popup__option__list__item__pic" alt="" />
                    </div>
                </li>
                <li className="popup__option__list__item">
                    <span className="popup__option__list__item__title">Стандарт</span>
                    <span className="popup__option__list__item__cost">
                        <span className="popup__option__list__item__cost__title">Стоимость</span>
                        <span className="popup__option__list__item__cost__price">250 ₽</span>
                    </span>
                    <div class="popup__option__list__item__img">
                        <img src className="popup__option__list__item__pic" alt="" />
                    </div>
                </li>
                <li className="popup__option__list__item">
                    <span className="popup__option__list__item__title">Стандарт</span>
                    <span className="popup__option__list__item__cost">
                        <span className="popup__option__list__item__cost__title">Стоимость</span>
                        <span className="popup__option__list__item__cost__price">300 ₽</span>
                    </span>
                    <div class="popup__option__list__item__img">
                        <img src className="popup__option__list__item__pic" alt="" />
                    </div>
                </li>
            </ul>
        </div>
        <button className="button-submit" type="submit">Заказать</button>
    </form>
);

export default PopupOrder;