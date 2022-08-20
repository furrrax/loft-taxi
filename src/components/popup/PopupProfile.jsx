import React from "react";
import logo from "../../img/loft-taxi-logo.svg";

const PopupProfile = () => (
    <div className="popup popup__profile">
        <h3 className="popup__title">Профиль</h3>
        <span className="popup__subtitle">
            Введите платежные данные
        </span>
        <div className="popup__content">
            <div className="popup__content__col">
                <div className="popup__content__row">
                    <div className="popup__content__row __input input__wrap">
                        <div className="input__title">Имя владельца</div>
                        <input type="text" className="input__field" placeholder="Loft"></input>
                    </div>
                </div>
                <div className="popup__content__row">
                    <div className="popup__content__row __input input__wrap">
                        <div className="input__title">Номер карты</div>
                        <input type="text" className="input__field" placeholder="5545  2300  3432  4521"></input>
                    </div>
                </div>
                <div className="popup__content__row">
                    <div className="popup__content__row __input input__wrap">
                        <div className="input__title">MM/YY</div>
                        <input type="text" className="input__field" placeholder="05/08"></input>
                    </div>
                    <div className="popup__content__row __input input__wrap">
                        <div className="input__title">CVC</div>
                        <input type="text" className="input__field" placeholder="667"></input>
                    </div>
                </div>
            </div>
            <div className="popup__content__col">
                <div className="popup__content__row">
                    <div className="popup__content__card card">
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
                            <div className="card__row__card-number">5545 2300 3432 4521</div>
                        </div>
                        <div className="card__row">
                            <div className="card__row__img">
                                <img src="../../img/card-pic1.svg" className="card__row__pic" alt="" />
                            </div>
                            <div className="card__row__img">
                            <img src="../../img/card-pic2.svg" className="card__row__pic" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button className="button-submit" type="submit">Сохранить</button>
    </div>
);

export default PopupProfile;