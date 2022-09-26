import { React, useCallback } from "react";
import PropTypes from "prop-types";

import { Link, Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { registrate } from "../redux/actions/user";
import { getIsLoggedIn, getErrorReg } from "../redux/selectors/auth";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {useForm} from 'react-hook-form';

function FormReg() {

    const dispatch = useDispatch();
    const loggedIn = useSelector(getIsLoggedIn);
    const getError = useSelector(getErrorReg);
    
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const submitHandleReg = useCallback((data) => {
        dispatch(registrate(data.email, data.name, data.surname, data.password));
        reset();
    }, [dispatch, reset]);

    if(loggedIn) {
        return ( <Navigate to="map" /> )
    } return (
            <div className="enter-form" data-testid='form-reg'>
                <div className="enter-form__container">
                    <h3 className="enter-form__title">Регистрация</h3>
                    <form className="enter-form__content" onSubmit={handleSubmit(submitHandleReg)}>
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
                            <div htmlFor="name" className="input__wrap">
                                <TextField
                                    variant="standard"
                                    label="Как вас зовут?"
                                    className="input__field" 
                                    {...register('name', {
                                        required: "Поле обязательно к заполнению",
                                    })}
                                >
                                </TextField>
                                {errors?.name && <div className="error__field">{errors?.name?.message}</div>}
                            </div>
                            <div htmlFor="surname" className="input__wrap">
                                <TextField 
                                    variant="standard"
                                    label="Ваша фамилия"
                                    className="input__field"
                                    placeholder="Иванов"
                                    {...register('surname', {
                                        required: "Поле обязательно к заполнению",
                                    })}
                                    >
                                </TextField>
                                {errors?.surname && <div className="error__field">{errors?.surname?.message}</div>}
                            </div>
                            <div htmlFor="password" className="input__wrap">
                                <TextField
                                    variant="standard"
                                    label="Придумайте пароль*"
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