import {React, useState, useCallback} from "react";
import PropTypes from "prop-types";

import { Link, Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../redux/actions/user";
import { getIsLoggedIn } from "../redux/selectors/auth";

function FormLogin() {

    const dispatch = useDispatch();
    const loggedIn = useSelector(getIsLoggedIn);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailHandleChange = useCallback((event) => {
        setEmail(event.target.value);
    }, []);

    const passwordHandleChange = useCallback((event) => {
        setPassword(event.target.value);
    }, []);

    const submitHandleLogin = useCallback((event) => {
        event.preventDefault();
        dispatch(authenticate(email, password));
    }, [dispatch, email, password]);

    if(loggedIn) {
        return ( <Navigate to="/map" /> )
    } return (
            <div className="enter-form">
                <div className="enter-form__container">
                    <h3 className="enter-form__title">Войти</h3>
                    <form className="enter-form__content" onSubmit={submitHandleLogin}>
                        <div className="enter-form__content__inputs">
                            <label htmlFor="email" className="input__wrap">
                                <div className="input__title">Email</div>
                                <input data-testid="email" value={email} onChange={emailHandleChange} type="email" name="email" className="input__field" placeholder="mail@mail.ru" required></input>
                            </label>
                            <label htmlFor="password" className="input__wrap">
                                <div className="input__title">Пароль</div>
                                <input value={password} onChange={passwordHandleChange} type="password" name="password" className="input__field" placeholder="*************" data-testid="password" required></input>
                            </label>
                        </div>
                        <button className="enter-form__content__link">Забыли пароль?</button>
                        <button className="button-submit" id="button-submit" data-testid="submit" type="submit">Войти</button>
                        <div className="enter-form__content__text">
                            Новый пользователь?
                            &nbsp;
                            <Link to="/reg">
                                <button className="enter-form__content__text__link">Регистрация</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )

};

FormLogin.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
}

export default FormLogin;