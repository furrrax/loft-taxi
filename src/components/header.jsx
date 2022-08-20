import React from "react";
import logo from '../img/loft-taxi-logo.svg';

const Header = () => (
    <header className="header">
        <div className="header__logo">
            <img src={logo} className="header__logo__pic" alt="logo" />
            <div className="header__logo__text">loft<span className="header__logo__text--yellow">taxi</span></div>
        </div>
        <nav className="header__nav">
            <MainMenu />
        </nav>
    </header>
);

const menuItems = [
    {text: "Карта", id: 0 },
    {text: "Профиль", id: 1 },
    {text: "Выйти", id: 2 }
];

const MainMenu = () => (
    <ul className="header__nav__list">
        {menuItems.map(menuItem => (
            <li key={menuItem.id} className={"header__nav__item header__nav__item_" + menuItem.id}>
                <a href className="header__nav__item__link">{menuItem.text}</a>
            </li>
        ))}
    </ul>
);

export default Header;