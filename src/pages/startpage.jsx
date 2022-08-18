import React from "react";
import logo from '../img/loft-taxi-logo.svg';
import LoginForm from "../components/LoginForm";
import RegForm from "../components/RegForm";


const StartPage = () => (
	<section className="main">
		<div className="wrapper">
			<img className="main__bg" />
			<div className="main__sidebar">
				<div className="main__sidebar__logo">
					<img src={logo} className="main__sidebar__logo__pic" />
					<span className="main__sidebar__logo__text">loft<span className="main__sidebar__logo__text--yellow">taxi</span></span>
				</div>
			</div>
			<RegCheck isLoggedIn={true} />
		</div>
	</section>
);


function RegCheck(props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return <LoginForm />;
	}
	return <RegForm />;
}

export default StartPage;