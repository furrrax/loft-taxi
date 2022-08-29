import React from "react";
import logo from '../img/loft-taxi-logo.svg';
import PropTypes from "prop-types";

class PageReg extends React.Component {

    static propTypes = {
        pageMap: PropTypes.string,
        pageLogin: PropTypes.string,
    }

	render() {
        const {setPage} = this.props;

		return (
			<section className="main">
				<h1>Страница регистрации</h1>
				<div className="container">
					<img className="main__bg" alt="фон"/>
					<div className="main__sidebar">
						<div className="main__sidebar__logo">
							<img src={logo} className="main__sidebar__logo__pic" alt="logo" />
							<span className="main__sidebar__logo__text">loft<span className="main__sidebar__logo__text--yellow">taxi</span></span>
						</div>
					</div>
					<div className="enter-form">
                        <h3 className="enter-form__title">Регистрация</h3>
                        <form className="enter-form__content">
                            <div className="enter-form__content__inputs">
                                <div className="input__wrap">
                                    <div className="input__title">Email</div>
                                    <input type="email" className="input__field" placeholder="mail@mail.ru"></input>
                                </div>
                                <div className="input__wrap">
                                    <div className="input__title">Как вас зовут?</div>
                                    <input type="text" className="input__field" placeholder="Петр Александрович"></input>
                                </div>
                                <div className="input__wrap">
                                    <div className="input__title">Email</div>
                                    <input type="password" className="input__field" placeholder="*************"></input>
                                </div>
                            </div>
                            <button className="enter-form__content__link">Забыли пароль?</button>
                            <button onClick={() => setPage('pageMap')} className="button-submit" type="submit">Зарегистрироваться</button>
                            <button onClick={() => setPage('pageLogin')} className="enter-form__content__link">Уже зарегистрированы? <span className="enter-form__content__link--yellow">Войти</span></button>
                        </form> 
                    </div>
				</div>
			</section>
		);
	}
}

export default PageReg;