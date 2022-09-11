import {React, useCallback} from "react";
import logo from '../img/loft-taxi-logo-inner.svg';
import MapInner from "../components/MapInner";
import PopupOrder from "../components/popup/PopupOrder";
import PopupOrderSuccess from "../components/popup/PopupOrderSuccess";
import PropTypes from "prop-types";

import { Routes, Route, Link, Navigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/actions/user";
import { getIsLoggedIn } from "../redux/selectors/auth";

function PageMap () {

    const dispatch = useDispatch();
    const loggedIn = useSelector(getIsLoggedIn);

    const logOff = useCallback(() => {
        dispatch(logOut());
    },[dispatch]);

    if(loggedIn) {
        return (
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
                                    <button onClick={logOff} className="header__nav__item__link">Выход</button>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <div className="content">
                        <MapInner />
                        <Routes>
                            <Route path="/order/*" element={<PopupOrder />} exact></Route>
                            <Route path="/order-success/*" element={<PopupOrderSuccess />}></Route>
                            <Route path="*" element={<PopupOrder />}></Route>
                        </Routes>
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <Navigate to="/login" />
        )
    }

}

PageMap.propTypes = {
    pageMap: PropTypes.string,
    pageProfile: PropTypes.string,
    pageLogin: PropTypes.string
}

export default PageMap;