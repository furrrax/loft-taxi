import {React, useContext, useState} from "react";
import logo from '../img/loft-taxi-logo.svg';
import PropTypes from "prop-types";
import { AuthContext } from "../AuthContext";

function PageLogin(props) {

    const {setPage} = props;
    const {logIn, isLoggedIn} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailHandleChange = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    };

    const passwordHandleChange = (event) => {
        setPassword(event.target.value);
        console.log(event.target.value);
    };

    const submitHandle = (event) => {
        event.preventDefault();
        logIn(email, password);
    };

    /* const loggingIn = () => {
        logIn();
        setPage('pageMap');
    }; */

    return (
        <>
            <section className="main">
                <div className="container">
                    <div className="main__sidebar">
                        <div className="main__sidebar__logo">
                            <img src={logo} className="main__sidebar__logo__pic" alt="logo" />
                        </div>
                    </div>
                    {isLoggedIn ? (
                        <p>
                            Вы залогинились{" "}
                            <button onClick={() => setPage('pageMap')}>
                                Перейти на карту
                            </button>
                        </p>
                    ) : (
                        <div className="main__content">
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
                                        <button /* onClick={() => setPage('pageMap')} */ className="button-submit" id="button-submit" data-testid="submit" type="submit">Войти</button>
                                        <div className="enter-form__content__text">
                                            Новый пользователь?
                                            &nbsp;
                                            <button className="enter-form__content__text__link" onClick={() => setPage('pageReg')}>Регистрация</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
};

PageLogin.propTypes = {
    pageMap: PropTypes.string,
    pageReg: PropTypes.string,
}

export default PageLogin;