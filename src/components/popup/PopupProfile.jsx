import React from "react";
import logo from "../../img/loft-taxi-logo-clear.svg";
import cardPic1 from "../../img/card-pic1.svg";
import cardPic2 from "../../img/card-pic2.svg";

function PopupProfile() {

    return(
        <div className="popup popup__profile popup--profile">
            <div className="popup__wraper">
                <h3 className="popup__title">Профиль</h3>
                <span className="popup__subtitle">
                    Введите платежные данные
                </span>
                <form>
                    <div className="popup__content">
                        <div className="popup__content__col">
                            <div className="popup__content__row">
                                <div className="popup__content__row__input input__wrap">
                                    <div className="input__title">Имя владельца</div>
                                    <input type="text" className="input__field" placeholder="Loft"></input>
                                </div>
                            </div>
                            <div className="popup__content__row">
                                <div className="popup__content__row__input input__wrap">
                                    <div className="input__title">Номер карты</div>
                                    <input type="text" className="input__field" placeholder="5545  2300  3432  4521" maxLength="16"></input>
                                </div>
                            </div>
                            <div className="popup__content__row popup__content__row--2x">
                                <div className="popup__content__row__input input__wrap">
                                    <div className="input__title">MM/YY</div>
                                    <input type="text" className="input__field" placeholder="05/08"></input>
                                </div>
                                <div className="popup__content__row__input input__wrap">
                                    <div className="input__title">CVC</div>
                                    <input type="text" className="input__field" placeholder="667"></input>
                                </div>
                            </div>
                        </div>
                        <div className="popup__content__col">
                            <div className="popup__content__row">
                                <div className="popup__content__card card">
                                    <div className="card__wrapper">
                                        <div className="card__row">
                                            <div className="card__row__logo">
                                                <img src={logo} className="card__row__logo__pic" alt="logo" />
                                            </div>
                                            <div className="card__row__date">
                                                <div className="card__row__date__text">05</div>
                                                /
                                                <div className="card__row__date__text">08</div>
                                            </div>
                                        </div>
                                        <div className="card__row">
                                            <ul className="card__row__number">
                                                <li className="card__row__number__item">5545</li>
                                                <li className="card__row__number__item">2300</li>
                                                <li className="card__row__number__item">3432</li>
                                                <li className="card__row__number__item">4521</li>
                                            </ul>
                                        </div>
                                        <div className="card__row">
                                            <div className="card__row__img">
                                                <img src={cardPic1} className="card__row__pic" alt="" />
                                            </div>
                                            <div className="card__row__img">
                                            <img src={cardPic2} className="card__row__pic" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="button-submit" type="submit">Сохранить</button>
                </form>
            </div>
        </div>
    )
}

export default PopupProfile;