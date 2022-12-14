import {React, useCallback, useEffect} from "react";
import PropTypes from "prop-types";
import logo from "../../img/loft-taxi-logo-clear.svg";
import cardPic1 from "../../img/card-pic1.svg";
import cardPic2 from "../../img/card-pic2.svg";

import { useNavigate } from "react-router-dom";

import { updateCard } from "../../redux/actions/card";
import { useDispatch, useSelector } from "react-redux";
import { getCard } from "../../redux/actions/card";
import { checkCardState } from "../../redux/selectors/card";

import { selectCardNumber, selectCardDate } from "../../redux/selectors/card";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {useForm} from 'react-hook-form';

function PopupProfile() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let getCardNumber = useSelector(selectCardNumber).cardNumber;
    let getCardDate = useSelector(selectCardDate).cardDate;

    const cardState = useSelector(checkCardState);

    useEffect(() => {
        dispatch(getCard());
    },[dispatch]);

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onChange"
    });

    const cardFilter = (value) => {
        const valueData = value.trim();
        const numFilter = valueData.replace(/[^\d\s]/g, "");
        const regEx = /\d{1,4}/g;

        return numFilter && numFilter.substring(0, 19).match(regEx).join(" ");
    }

    const dateFilter = (value) => {
        const valueData = value.trim();
        const numFilter = valueData.replace(/[^\d\s]/g, "");
        const regEx = /\d{1,2}/g;

        return numFilter && numFilter.substring(0, 4).match(regEx).join("/");
    }

    const cvcFilter = (value) => {
        const valueData = value.trim();
        const numFilter = valueData.replace(/[^\d\s]/g, "");
        const regEx = /\d{1,3}/g;

        return numFilter && numFilter.substring(0, 3).match(regEx).join("/");
    }

    const submitHandleCard = useCallback((data) => {
        dispatch(updateCard(data.cardNumber, data.expiryDate, data.cardName, data.cvc));
        reset();
        if(cardState) {
            navigate('/profile/profile-success');
        }
    }, [dispatch, reset, navigate, cardState]);

    return(
        <div className="popup popup__profile popup--profile" data-testid='form-profile'>
            <div className="popup__wraper">
                <h3 className="popup__title">??????????????</h3>
                <span className="popup__subtitle">
                    ?????????????? ?????????????????? ????????????
                </span>
                <form onSubmit={handleSubmit(submitHandleCard)}>
                    <div className="popup__content">
                        <div className="popup__content__col">
                            <div className="popup__content__row">
                                <div className="popup__content__row__input input__wrap">
                                    <div className="input__title">?????? ??????????????????</div>
                                    <TextField
                                        data-testid='form-profile-name'
                                        variant="standard"
                                        type="text"
                                        className="input__field"
                                        placeholder="????????"
                                        {...register('cardName', {
                                            required: "???????? ?????????????????????? ?? ????????????????????",
                                        })}
                                        >
                                    </TextField>
                                    {errors?.cardName && <div className="error__field">{errors?.cardName?.message}</div>}
                                </div>
                            </div>
                            <div className="popup__content__row">
                                <div className="popup__content__row__input input__wrap">
                                    <div className="input__title">?????????? ??????????</div>
                                    <TextField
                                        data-testid='form-profile-card'
                                        variant="standard"
                                        className="input__field input__field--card"
                                        type="tel"
                                        imput-mode="numeric"
                                        placeholder="5545 2300 3432 4521"
                                        name="cardNumber"
                                        {...register('cardNumber', {
                                            required: "???????? ?????????????????????? ?? ????????????????????",
                                            minLength: {
                                                value: 19,
                                                message: "?????????????? ?????????? ??????????????????"
                                            }
                                        })}
                                        onChange={(event) => {
                                            const {value} = event.target;
                                            event.target.value = cardFilter(value);
                                        }}
                                        >
                                    </TextField>
                                    {errors?.cardNumber && <div className="error__field">{errors?.cardNumber?.message}</div>}
                                </div>
                            </div>
                            <div className="popup__content__row popup__content__row--2x">
                                <div className="popup__content__row__input input__wrap">
                                    <div className="input__title">MM/YY</div>
                                    <TextField
                                        data-testid='form-profile-expiry'
                                        variant="standard"
                                        className="input__field"
                                        type="text"
                                        placeholder="05/08"
                                        name="expiryDate"
                                        {...register('expiryDate', {
                                            required: "???????? ?????????????????????? ?? ????????????????????",
                                            minLength: {
                                                value: 4,
                                                message: "?????????????? ???????? ??????????????????"
                                            }
                                        })}
                                        onChange={(event) => {
                                            const {value} = event.target;
                                            event.target.value = dateFilter(value);
                                        }}
                                        >
                                    </TextField>
                                    {errors?.expiryDate && <div className="error__field">{errors?.expiryDate?.message}</div>}
                                </div>
                                <div className="popup__content__row__input input__wrap">
                                    <div className="input__title">CVC</div>
                                    <TextField
                                        data-testid='form-profile-cvc'
                                        variant="standard"
                                        type="tel"
                                        name="cvc"
                                        className="input__field"
                                        placeholder="667"
                                        {...register('cvc', {
                                            required: "???????? ?????????????????????? ?? ????????????????????",
                                            minLength: {
                                                value: 3,
                                                message: "?????????????? ?????????? ??????????????????"
                                            }
                                        })}
                                        onChange={(event) => {
                                            const {value} = event.target;
                                            event.target.value = cvcFilter(value);
                                        }}
                                        >
                                    </TextField>
                                    {errors?.cvc && <div className="error__field">{errors?.cvc?.message}</div>}
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
                    <Button data-testid='form-profile-submit' variant="contained" className="button-submit" type="submit">??????????????????</Button>
                </form>
            </div>
        </div>
    )
}

PopupProfile.propTypes = {
    cardName: PropTypes.string,
    cardNumber: PropTypes.number,
    expiryDate: PropTypes.number,
    cvc: PropTypes.number
}

export default PopupProfile;