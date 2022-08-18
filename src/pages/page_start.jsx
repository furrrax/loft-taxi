import React from "react";
import logo from '../img/loft-taxi-logo.svg';
import LoginForm from "../components/popup/LoginForm";
import RegForm from "../components/popup/RegForm";


const StartPage = () => (
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
		</div>
	</section>
);

{/* <RegCheck isLoggedIn={true} />

function RegCheck(props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return <LoginForm />;
	}
	return <RegForm />;
} */}

export default StartPage;