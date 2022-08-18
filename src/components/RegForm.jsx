import React from "react";

import InputEmail from "../components/InputEmail";
import InputName from "./InputName";
import InputPassword from "../components/InputPassword";
import ButtonSubmitReg from "../components/ButtonSubmitReg";

const RegForm = () => (
	<div className="enter-form">
		<h3 className="enter-form__title">Войти</h3>
		<form className="enter-form__content">
			<div className="enter-form__content__inputs">
				<InputEmail />
				<InputName />
				<InputPassword />
			</div>
			<a href="" className="enter-form__content__link">Забыли пароль?</a>
			<ButtonSubmitReg />
			<a href="" className="enter-form__content__link">Уже зарегистрированы? <span className="enter-form__content__link--yellow">Войти</span></a>
		</form> 
	</div>
);

export default RegForm;