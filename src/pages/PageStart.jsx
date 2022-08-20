import React from "react";
import logo from '../img/loft-taxi-logo.svg';
import LoginForm from "../components/popup/LoginForm";
import RegForm from "../components/popup/RegForm";

const LOGINFORMS = {
	register: RegForm,
	login: LoginForm,
};

class StartPage extends React.Component {
	constructor() {
		super();
		this.state = { page: "login" };
	}

	setLoginForm = (loginPage) => {
		this.setState({ page: loginPage });
	};

	render() {
		const {page} = this.state;
		const CurrentPage = LOGINFORMS[page];

		return (
			<section className="main">
				<h1>Страница входа/Регистрации</h1>
				<div className="container">
					<img src className="main__bg" alt="фон"/>
					<div className="main__sidebar">
						<div className="main__sidebar__logo">
							<img src={logo} className="main__sidebar__logo__pic" alt="logo" />
							<span className="main__sidebar__logo__text">loft<span className="main__sidebar__logo__text--yellow">taxi</span></span>
						</div>
					</div>
					<CurrentPage setLoginForm={this.setLoginForm}/>
				</div>
			</section>
		);
	}
}

/* class StartPage extends React.Component {
    state = { currentPage: "login" };

    setForm = (form) => {
        this.setState({ currentPage: form });
    };

    render() {
        return (
            <section className="main">
				<h1>Страница входа/Регистрации</h1>
				<div className="container">
					<img src className="main__bg" alt="фон"/>
					<div className="main__sidebar">
						<div className="main__sidebar__logo">
							<img src={logo} className="main__sidebar__logo__pic" alt="logo" />
							<span className="main__sidebar__logo__text">loft<span className="main__sidebar__logo__text--yellow">taxi</span></span>
						</div>
					</div>
					{FORMS[this.state.currentPage]}
					<button onClick={() => {this.setForm("login");}} >
						на форму логина
					</button>
					<button onClick={() => {this.setForm("register");}} >
						на форму реги
					</button>
				</div>
			</section>
        );
    }
} */

/* const StartPage = () => (
	<section className="main">
		<h1>Страница входа/Регистрации</h1>
		<div className="container">
			<img src className="main__bg" alt="фон"/>
			<div className="main__sidebar">
				<div className="main__sidebar__logo">
					<img src={logo} className="main__sidebar__logo__pic" alt="logo" />
					<span className="main__sidebar__logo__text">loft<span className="main__sidebar__logo__text--yellow">taxi</span></span>
				</div>
			</div>
			<LoginForm />
			<RegForm />
		</div>
	</section>
); */


{/* <RegCheck isLoggedIn={true} />

function RegCheck(props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return <LoginForm />;
	}
	return <RegForm />;
} */}

export default StartPage;