import {React, useState, useCallback, useEffect} from "react";
import logo from "../../img/loft-taxi-logo-clear.svg";
import cardPic1 from "../../img/card-pic1.svg";
import cardPic2 from "../../img/card-pic2.svg";

import { updateCard } from "../../redux/actions/card";
import { useDispatch, useSelector } from "react-redux";
import { getCard } from "../../redux/actions/card";

import { selectCardNumber, selectCardDate } from "../../redux/selectors/card";

function PopupProfile() {

    const dispatch = useDispatch();
    let getCardNumber = useSelector(selectCardNumber).cardNumber;
    let getCardDate = useSelector(selectCardDate).cardDate;

    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');

    useEffect(() => {
        dispatch(getCard());
    },[dispatch]);

    const cardNameHandleChange = useCallback((event) => {
        setCardName(event.target.value);
    }, []);

    const cardNumberHandleChange = useCallback((event) => {
        setCardNumber(event.target.value);
    }, []);

    const expiryDateHandleChange = useCallback((event) => {
        setExpiryDate(event.target.value);
    }, []);

    const cvcHandleChange = useCallback((event) => {
        setCvc(event.target.value);
    }, []);

    const submitHandleCard = useCallback((event) => {
        event.preventDefault();
        dispatch(updateCard(cardNumber, expiryDate, cardName, cvc));
    }, [dispatch, cardNumber, expiryDate, cardName, cvc]);

    return(
        <div className="popup popup__profile popup--profile">
            <div className="popup__wraper">
                <h3 className="popup__title">Профиль</h3>
                <span className="popup__subtitle">
                    Введите платежные данные
                </span>
                <form onSubmit={submitHandleCard}>
                    <div className="popup__content">
                        <div className="popup__content__col">
                            <div className="popup__content__row">
                                <div className="popup__content__row__input input__wrap">
                                    <div className="input__title">Имя владельца</div>
                                    <input value={cardName} onChange={cardNameHandleChange} type="text" name="cardName" className="input__field" placeholder="Loft"></input>
                                </div>
                            </div>
                            <div className="popup__content__row">
                                <div className="popup__content__row__input input__wrap">
                                    <div className="input__title">Номер карты</div>
                                    <input value={cardNumber} onChange={cardNumberHandleChange} type="text" name="cardNumber" className="input__field" placeholder="5545  2300  3432  4521" maxLength={19}></input>
                                </div>
                            </div>
                            <div className="popup__content__row popup__content__row--2x">
                                <div className="popup__content__row__input input__wrap">
                                    <div className="input__title">MM/YY</div>
                                    <input value={expiryDate} onChange={expiryDateHandleChange} type="text" name="expiryDate" className="input__field" placeholder="05/08"></input>
                                </div>
                                <div className="popup__content__row__input input__wrap">
                                    <div className="input__title">CVC</div>
                                    <input value={cvc} onChange={cvcHandleChange} type="text" name="cvc" className="input__field" maxLength={3} placeholder="667"></input>
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
                                                <div className="card__row__date__text">{getCardDate}</div>
                                            </div>
                                        </div>
                                        <div className="card__row">
                                            <div className="card__row__number">
                                                {getCardNumber}
                                            </div>
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