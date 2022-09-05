import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom"; 

function FormReg() {

    return (
        <div className="enter-form">
            <div className="enter-form__container">
                <h3 className="enter-form__title">Регистрация</h3>
                <form className="enter-form__content">
                    <div className="enter-form__content__inputs">
                        <div className="input__wrap">
                            <div className="input__title">Email</div>
                            <input type="email" className="input__field" placeholder="mail@mail.ru" required></input>
                        </div>
                        <div className="input__wrap">
                            <div className="input__title">Как вас зовут?</div>
                            <input type="text" className="input__field" placeholder="Петр Александрович" required></input>
                        </div>
                        <div className="input__wrap">
                            <div className="input__title">Придумайте пароль*</div>
                            <input type="password" className="input__field" placeholder="*************" required></input>
                        </div>
                    </div>
                    <button className="enter-form__content__link">Забыли пароль?</button>
                    <button className="button-submit" type="submit">Зарегистрироваться</button>
                    <div className="enter-form__content__text">
                        Уже зарегистрированы?
                        &nbsp;
                        <Link to="/login">
                            <button className="enter-form__content__text__link">Войти</button>
                        </Link>
                    </div>
                </form> 
            </div>
        </div>
    );
}

FormReg.propTypes = {
    pageMap: PropTypes.string,
    pageLogin: PropTypes.string,
}

export default FormReg;