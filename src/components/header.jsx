import React from "react";
import logo from '../img/loft-taxi-logo.svg';

const Header = () => (
    <header className="header">
        <div className="header__logo">
            <img src={logo} className="header__logo__pic" alt="logo" />
            <div className="header__logo__text">loft<span className="header__logo__text--yellow">taxi</span></div>
        </div>
        <nav className="header__nav">
            <ul className="header__nav__list">
                <li className="header__nav__item"><a href className="header__nav__item__link">Карта</a></li>
                <li className="header__nav__item"><a href className="header__nav__item__link">Профиль</a></li>
                <li className="header__nav__item"><a href className="header__nav__item__link">Выйти</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;