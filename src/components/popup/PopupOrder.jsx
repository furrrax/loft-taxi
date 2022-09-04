import {React} from "react";
import cross from "../../img/icon-cross.svg";
import arrow from "../../img/icon-arrow.svg";
import picCar1 from "../../img/option-car01.png";
import picCar2 from "../../img/option-car02.png";
import picCar3 from "../../img/option-car03.png";

function PopupOrder() {

    return(
        <form className="popup popup__order popup--map">
            <div className="popup__address">
                <div className="popup__address__input popup__address__input--start">
                    <input type="text" className="popup__address__input__field" placeholder="ул. Жуковского, 5"></input>
                    <div className="popup__address__input__btns">
                        <button className="popup__address__input__btns__cross">
                            <img src={cross} className="popup__address__input__btns__cross__pic" alt="button cross" />
                        </button>
                        <button className="popup__address__input__btns__arrow">
                            <img src={arrow} className="popup__address__input__btns__arrow__pic" alt="button arrow" />
                        </button>
                    </div>
                </div>
                <div className="popup__address__input popup__address__input--end">
                    <input type="text" className="popup__address__input__field" placeholder="ул. Заславского, 3"></input>
                    <div className="popup__address__input__btns">
                        <button className="popup__address__input__btns__cross">
                            <img src={cross} className="popup__address__input__btns__cross__pic" alt="button cross" />
                        </button>
                        <button className="popup__address__input__btns__arrow">
                            <img src={arrow} className="popup__address__input__btns__arrow__pic" alt="button arrow" />
                        </button>
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
                        <div className="popup__option__list__item__img">
                            <img src={picCar1} className="popup__option__list__item__pic" alt="" />
                        </div>
                    </li>
                    <li className="popup__option__list__item">
                        <span className="popup__option__list__item__title">Премиум</span>
                        <span className="popup__option__list__item__cost">
                            <span className="popup__option__list__item__cost__title">Стоимость</span>
                            <span className="popup__option__list__item__cost__price">250 ₽</span>
                        </span>
                        <div className="popup__option__list__item__img">
                            <img src={picCar2} className="popup__option__list__item__pic" alt="" />
                        </div>
                    </li>
                    <li className="popup__option__list__item">
                        <span className="popup__option__list__item__title">Бизнесс</span>
                        <span className="popup__option__list__item__cost">
                            <span className="popup__option__list__item__cost__title">Стоимость</span>
                            <span className="popup__option__list__item__cost__price">300 ₽</span>
                        </span>
                        <div className="popup__option__list__item__img">
                            <img src={picCar3} className="popup__option__list__item__pic" alt="" />
                        </div>
                    </li>
                </ul>
                <button className="button-submit" type="submit">Заказать</button>
            </div>
        </form>
    ) 
}

export default PopupOrder;