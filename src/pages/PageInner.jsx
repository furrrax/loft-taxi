import React from "react";
import logo from '../img/loft-taxi-logo.svg';
import PageProfile from "./PageProfile";
import PageMap from "./PageMap";
//import Header from "../components/Header";

const PAGES = {
    map: <PageMap />,
    profile: <PageProfile />,
};


class InnerPage extends React.Component {
    state = { currentPage: "map" };

    navigateTo = (page) => {
        this.setState({ currentPage: page });
    };

    render() {
        const {setStartPage} = this.props;

        return (
            <section className="inner">
                <div className="container">
                    <header className="header">
                        <div className="header__logo">
                            <img src={logo} className="header__logo__pic" alt="logo" />
                            <div className="header__logo__text">loft<span className="header__logo__text--yellow">taxi</span></div>
                        </div>
                        <nav className="header__nav">
                            <ul className="header__nav__list">
                                <li className="header__nav__item header__nav__item">
                                    <button onClick={() => {this.navigateTo("map");}} className="header__nav__item__link">Карта</button>
                                </li>
                                <li className="header__nav__item header__nav__item">
                                    <button onClick={() => {this.navigateTo("profile");}} className="header__nav__item__link">Профиль</button>
                                </li>
                                <li className="header__nav__item header__nav__item">
                                    <button onClick={() => setStartPage('pagestart')} className="header__nav__item__link">Выход</button>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    {PAGES[this.state.currentPage]}
                </div>
            </section>
        );
    }
}

export default InnerPage;