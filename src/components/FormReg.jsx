import {React, useState, useCallback} from "react";
import PropTypes from "prop-types";

import { Link, Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/user";
import { getIsLoggedIn } from "../redux/selectors/auth";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
                            <div htmlFor="email" className="input__wrap">
                                {/* <div className="input__title">Email</div> */}
                                <TextField variant="standard" label="Email" value={email} onChange={emailHandleChange} type="email" name="email" className="input__field" placeholder="mail@mail.ru" required></TextField>
                            </div>
                            <div htmlFor="name" className="input__wrap">
                                {/* <div className="input__title">Как вас зовут?</div> */}
                                <TextField variant="standard" label="Как вас зовут?" value={name} onChange={nameHandleChange} type="text" name="name" className="input__field" placeholder="Кирилл" required></TextField>
                            </div>
                            <div htmlFor="surname" className="input__wrap">
                                {/* <div className="input__title">Ваша фамилия</div> */}
                                <TextField variant="standard" label="Ваша фамилия" value={surname} onChange={surnameHandleChange} type="text" name="surname" className="input__field" placeholder="Иванов" required></TextField>
                            </div>
                            <div htmlFor="password" className="input__wrap">
                                {/* <div className="input__title">Придумайте пароль*</div> */}
                                <TextField variant="standard" label="Придумайте пароль*" value={password} onChange={passwordHandleChange} type="password" name="password" className="input__field" placeholder="*************" required></TextField>
                            </div>
                        </div>
                        <button className="enter-form__content__link">Забыли пароль?</button>
                        <Button variant="contained" className="button-submit" type="submit">Зарегистрироваться</Button>
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