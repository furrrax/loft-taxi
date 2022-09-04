import {React, useContext} from "react";
import logo from '../img/loft-taxi-logo-inner.svg';
import MapInner from "../components/MapInner";
import PopupOrder from "../components/popup/PopupOrder";
import PopupOrderSuccess from "../components/popup/PopupOrderSuccess";
import PropTypes from "prop-types";
import { AuthContext } from "../AuthContext";

import { Link, Navigate } from "react-router-dom";

function PageMap () {

    const {logOut, isLoggedIn} = useContext(AuthContext);

    const LogOff = () => {
        logOut();
    };

    return (
        <>
            {isLoggedIn ? (
                <section className="inner__map">
                    <div className="container">
                        <header className="header">
                            <div className="header__logo">
                                <img src={logo} className="header__logo__pic" alt="logo" />
                            </div>
                            <nav className="header__nav">
                                <ul className="header__nav__list">
                                    <li className="header__nav__item">
                                        <Link to="/map">
                                            <button className="header__nav__item__link">Карта</button>
                                        </Link>
                                    </li>
                                    <li className="header__nav__item">
                                        <Link to="/profile">
                                            <button className="header__nav__item__link">Профиль</button>
                                        </Link>
                                    </li>
                                    <li className="header__nav__item">
                                        <button onClick={LogOff} className="header__nav__item__link">Выход</button>
                                    </li>
                                </ul>
                            </nav>
                        </header>
                        <div className="content">
                            <MapInner />
                            <PopupOrder />
                            <PopupOrderSuccess />
                        </div>
                    </div>
                </section>
            ) : (
                <Navigate to="/" />
            )}
        </>
    );
}

PageMap.propTypes = {
    pageMap: PropTypes.string,
    pageProfile: PropTypes.string,
    pageLogin: PropTypes.string
}

export default PageMap;