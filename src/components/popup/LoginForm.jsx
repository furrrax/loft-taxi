import React from "react";

class LoginForm extends React.Component {

	render() {
		const {setStartPage} = this.props;
		const {setLoginForm} = this.props;

		return (
			<div className="enter-form">
				<h3 className="enter-form__title">Войти</h3>
				<form className="enter-form__content">
					<div className="enter-form__content__inputs">
						<div className="input__wrap">
							<div className="input__title">Email</div>
							<input type="email" className="input__field" placeholder="mail@mail.ru"></input>
						</div>
						<div className="input__wrap">
							<div className="input__title">Email</div>
							<input type="password" className="input__field" placeholder="*************"></input>
						</div>
					</div>
					<button className="enter-form__content__link">Забыли пароль?</button>
					<button onClick={() => setStartPage('pageinner')} className="button-submit" type="submit">Войти</button>

					<button onClick={() => setLoginForm('register')} className="enter-form__content__link">Новый пользователь? <span className="enter-form__content__link--yellow">Регистрация</span></button>
				</form>
			</div>
		)
	}
}

export default LoginForm;