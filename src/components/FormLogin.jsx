import {React, useContext, useState} from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../AuthContext";

import { Link, Navigate } from "react-router-dom";

function FormLogin() {

    const {logIn, isLoggedIn} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailHandleChange = (event) => {
        setEmail(event.target.value);
    };

    const passwordHandleChange = (event) => {
        setPassword(event.target.value);
    };

    const submitHandle = (event) => {
        event.preventDefault();
        logIn(email, password);
    };

    return (
        <>  
            {isLoggedIn ? (
                <Navigate to="/map" />
            ) : (
                <div className="enter-form">
                    <div className="enter-form__container">
                        <h3 className="enter-form__title">Войти</h3>
                        <form className="enter-form__content" onSubmit={submitHandle}>
                            <div className="enter-form__content__inputs">
                                <div className="input__wrap">
                                    <label htmlFor="email" className="input__title">Email</label>
                                    <input value={email} onChange={emailHandleChange} id="email" type="email" name="email" className="input__field" placeholder="mail@mail.ru" data-testid="email" required></input>
                                </div>
                                <div className="input__wrap">
                                    <label htmlFor="password" className="input__title">Пароль</label>
                                    <input value={password} onChange={passwordHandleChange} id="password" type="password" name="password" className="input__field" placeholder="*************" data-testid="password" required></input>
                                </div>
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
            )}
        </>
    )
};

FormLogin.propTypes = {
    pageMap: PropTypes.string,
    pageReg: PropTypes.string,
}

export default FormLogin;