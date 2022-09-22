import {React, useCallback} from "react";
import PropTypes from "prop-types";

import { Link, Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../redux/actions/user";
import { getIsLoggedIn, getErrorAuth } from "../redux/selectors/auth";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {useForm} from 'react-hook-form';

function FormLogin() {

    const dispatch = useDispatch();
    const loggedIn = useSelector(getIsLoggedIn);
    const getError = useSelector(getErrorAuth);

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

    const submitHandleLogin = useCallback((data) => {
        dispatch(authenticate(data.email, data.password));
        reset();
    }, [dispatch, reset]);

    if(loggedIn) {
        return ( <Navigate to="map" /> )
    } return (
            <div className="enter-form">
                <div className="enter-form__container">
                    <h3 className="enter-form__title">Войти</h3>
                    <form className="enter-form__content" onSubmit={handleSubmit(submitHandleLogin)}>
                        <div className="enter-form__content__inputs">
                            <div htmlFor="email" className="input__wrap">
                                <TextField
                                    variant="standard"
                                    label="Email"
                                    type="email"
                                    className="input__field"
                                    placeholder="mail@mail.ru"
                                    {...register('email', {
                                        required: "Поле обязательно к заполнению",
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: "Введите валидный email"
                                        }
                                    })}
                                    >
                                </TextField>
                                {errors?.email && <div className="error__field">{errors?.email?.message}</div>}
                            </div>
                            <div htmlFor="password" className="input__wrap">
                                <TextField
                                    variant="standard"
                                    label="Введите пароль*"
                                    className="input__field"
                                    type="password"
                                    placeholder="*************"
                                    {...register('password', {
                                        required: "Поле обязательно к заполнению",
                                        minLength: {
                                            value: 8,
                                            message: "Должно быть минимум 8 символов"
                                        }
                                    })}
                                    >
                                </TextField>
                                {errors?.password && <div className="error__field">{errors?.password?.message}</div>}
                                <div className="error__field error__field--server">{getError}</div>
                            </div>
                        </div>
                        <button className="enter-form__content__link">Забыли пароль?</button>
                        <Button variant="contained" className="button-submit" id="button-submit" data-testid="submit" type="submit">Войти</Button>
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