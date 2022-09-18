import {React, useState, useCallback, useEffect, useRef} from "react";
import logo from "../../img/loft-taxi-logo-clear.svg";
import cardPic1 from "../../img/card-pic1.svg";
import cardPic2 from "../../img/card-pic2.svg";

import { useNavigate } from "react-router-dom";

import { updateCard } from "../../redux/actions/card";
import { useDispatch, useSelector } from "react-redux";
import { getCard } from "../../redux/actions/card";
import { checkCardState } from "../../redux/selectors/card";

import { selectCardNumber, selectCardDate } from "../../redux/selectors/card";

import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

function PopupProfile() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let getCardNumber = useSelector(selectCardNumber).cardNumber;
    let getCardDate = useSelector(selectCardDate).cardDate;

    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');

    const cardState = useSelector(checkCardState);

    useEffect(() => {
        dispatch(getCard());
    },[dispatch]);

    const cardNameHandleChange = useCallback((event) => {
        setCardName(event.target.value);
    }, []);

    const cardNumberHandleChange = useCallback((event) => {
        setCardNumber(event.target.value);

        const value = event.target.value.trim();
        if (value.length === 19) return;

        const numFilter = value.replace(/[^\d\s]/g, "");
        const regEx = /\d{1,4}/g;

        setCardNumber(numFilter && numFilter.substring(0, 19).match(regEx).join(" "));
    }, []);

    const expiryDateHandleChange = useCallback((event) => {
        setExpiryDate(event.target.value);
        
        const value = event.target.value.trim();
        if (value.length === 4) return;

        const numFilter = value.replace(/[^\d\s]/g, "");
        const regEx = /\d{1,2}/g;

        setExpiryDate(numFilter && numFilter.substring(0, 4).match(regEx).join("/"));
    }, []);

    const cvcHandleChange = useCallback((event) => {
        setCvc(event.target.value);
    }, []);

    const submitHandleCard = useCallback((event) => {
        event.preventDefault();
        dispatch(updateCard(cardNumber, expiryDate, cardName, cvc));
        if(cardState) {
            navigate('/profile/profile-success');
        }
    }, [dispatch, navigate, cardState, cardNumber, expiryDate, cardName, cvc]);

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
                                    <Input required value={cardName} onChange={cardNameHandleChange} type="text" name="cardName" className="input__field" placeholder="Loft" ></Input>
                                </div>
                            </div>
                            <div className="popup__content__row">
                                <div className="popup__content__row__input input__wrap">
                                    <div className="input__title">Номер карты</div>
                                    <Input className="input__field input__field--card" type="text" value={cardNumber} onChange={cardNumberHandleChange} placeholder="5545 2300 3432 4521" name="cardNumber"/>
                                </div>
                            </div>
                            <div className="popup__content__row popup__content__row--2x">
                                <div className="popup__content__row__input input__wrap">
                                    <div className="input__title">MM/YY</div>
                                    <Input className="input__field" type="text" value={expiryDate} onChange={expiryDateHandleChange} placeholder="05/08" name="expiryDate" required />
                                </div>
                                <div className="popup__content__row__input input__wrap">
                                    <div className="input__title">CVC</div>
                                    <Input required value={cvc} onChange={cvcHandleChange} type="number" name="cvc" className="input__field" maxLength={3} placeholder="667" ></Input>
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
                    <Button variant="contained" className="button-submit" type="submit">Сохранить</Button>
                </form>
            </div>
        </div>
    )
}

export default PopupProfile;