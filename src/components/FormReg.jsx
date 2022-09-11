import {React, useState, useCallback} from "react";
import PropTypes from "prop-types";

import { Link, Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/user";
import { getIsLoggedIn } from "../redux/selectors/auth";

function FormReg() {

    const dispatch = useDispatch();
    const loggedIn = useSelector(getIsLoggedIn);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');

    const emailHandleChange = useCallback((event) => {
        setEmail(event.target.value);
    }, []);

    const nameHandleChange = useCallback((event) => {
        setName(event.target.value);
    }, []);

    const surnameHandleChange = useCallback((event) => {
        setSurname(event.target.value);
    }, []);

    const passwordHandleChange = useCallback((event) => {
        setPassword(event.target.value);
    }, []);

    const submitHandleReg = useCallback((event) => {
        event.preventDefault();
        dispatch(register(email, name, surname, password));
    }, [dispatch, email, name, surname, password]);

    if(loggedIn) {
        return ( <Navigate to="/map" /> )
    } return (
            <div className="enter-form">
                <div className="enter-form__container">
                    <h3 className="enter-form__title">Регистрация</h3>
                    <form className="enter-form__content" onSubmit={submitHandleReg}>
                        <div className="enter-form__content__inputs">
                            <label htmlFor="email" className="input__wrap">
                                <div className="input__title">Email</div>
                                <input value={email} onChange={emailHandleChange} type="email" name="email" className="input__field" placeholder="mail@mail.ru" required></input>
                            </label>
                            <label htmlFor="name" className="input__wrap">
                                <div className="input__title">Как вас зовут?</div>
                                <input value={name} onChange={nameHandleChange} type="text" name="name" className="input__field" placeholder="Кирилл" required></input>
                            </label>
                            <label htmlFor="surname" className="input__wrap">
                                <div className="input__title">Ваша фамилия</div>
                                <input value={surname} onChange={surnameHandleChange} type="text" name="surname" className="input__field" placeholder="Иванов" required></input>
                            </label>
                            <label htmlFor="password" className="input__wrap">
                                <div className="input__title">Придумайте пароль*</div>
                                <input value={password} onChange={passwordHandleChange} type="password" name="password" className="input__field" placeholder="*************" required></input>
                            </label>
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
        )

}

FormReg.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    name: PropTypes.string,
    surname: PropTypes.string
}

export default FormReg;