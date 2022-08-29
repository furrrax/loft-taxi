import React from "react";
import logo from '../img/loft-taxi-logo.svg';
import PropTypes from "prop-types";
import { AuthContext } from "../AuthContext";

function PageLogin(props) {

    const {setPage} = props;
    const {logIn} = useContext(AuthContext);



    return (
        <section className="main">
            <h1>Страница входа</h1>
            <div className="container">
                <img className="main__bg" alt="фон"/>
                <div className="main__sidebar">
                    <div className="main__sidebar__logo">
                        <img src={logo} className="main__sidebar__logo__pic" alt="logo" />
                        <span className="main__sidebar__logo__text">loft<span className="main__sidebar__logo__text--yellow">taxi</span></span>
                    </div>
                </div>
                <div className="enter-form">
                    <h3 className="enter-form__title">Войти</h3>
                    <form className="enter-form__content" onSubmit={logIn(email, password)}>
                        <div className="enter-form__content__inputs">
                            <div className="input__wrap">
                                <label htmlFor="email" className="input__title">Email</label>
                                <input id="email" type="email" name="email" className="input__field" placeholder="mail@mail.ru"></input>
                            </div>
                            <div className="input__wrap">
                                <label htmlFor="password" className="input__title">Password</label>
                                <input id="password" type="password" name="password" className="input__field" placeholder="*************"></input>
                            </div>
                        </div>
                        <button className="enter-form__content__link">Забыли пароль?</button>
                        <button onClick={() => setPage('pageMap')} className="button-submit" type="submit">Войти</button>
                        <button onClick={() => setPage('pageReg')} className="enter-form__content__link">Новый пользователь? <span className="enter-form__content__link--yellow">Регистрация</span></button>
                    </form>
                </div>
            </div>
        </section>
    )
};

PageLogin.propTypes = {
    pageMap: PropTypes.string,
    pageReg: PropTypes.string,
}

/* class PageLogin extends React.Component {

    static propTypes = {
        pageMap: PropTypes.string,
        pageReg: PropTypes.string,
    }

	render() {
        const {setPage} = this.props;

		return (
			<section className="main">
				<h1>Страница входа</h1>
				<div className="container">
					<img className="main__bg" alt="фон"/>
					<div className="main__sidebar">
						<div className="main__sidebar__logo">
							<img src={logo} className="main__sidebar__logo__pic" alt="logo" />
							<span className="main__sidebar__logo__text">loft<span className="main__sidebar__logo__text--yellow">taxi</span></span>
						</div>
					</div>
					<div className="enter-form">
                        <h3 className="enter-form__title">Войти</h3>
                        <form className="enter-form__content" onSubmit={this.checkInputs}>
                            <div className="enter-form__content__inputs">
                                <div className="input__wrap">
                                    <label htmlFor="email" className="input__title">Email</label>
                                    <input id="email" type="email" name="email" className="input__field" placeholder="mail@mail.ru"></input>
                                </div>
                                <div className="input__wrap">
                                    <label htmlFor="password" className="input__title">Password</label>
                                    <input id="password" type="password" name="password" className="input__field" placeholder="*************"></input>
                                </div>
                            </div>
                            <button className="enter-form__content__link">Забыли пароль?</button>
                            <button onClick={() => setPage('pageMap')} className="button-submit" type="submit">Войти</button>
                            <button onClick={() => setPage('pageReg')} className="enter-form__content__link">Новый пользователь? <span className="enter-form__content__link--yellow">Регистрация</span></button>
                        </form>
                    </div>
				</div>
			</section>
		);
	}
} */

export default PageLogin;