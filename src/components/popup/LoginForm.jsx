import React from "react";

import InputEmail from "../InputEmail";
import InputPassword from "../InputPassword";
import ButtonSubmit from "../ButtonSubmit";

const LoginForm = () => (
	<div className="enter-form">
		<h3 className="enter-form__title">Войти</h3>
		<form className="enter-form__content">
			<div className="enter-form__content__inputs">
				<InputEmail />
				<InputPassword />
			</div>
			<a href className="enter-form__content__link">Забыли пароль?</a>
			<ButtonSubmit />
			<a href className="enter-form__content__link">Новый пользователь? <span className="enter-form__content__link--yellow">Регистрация</span></a>
		</form>
	</div>
);

export default LoginForm;