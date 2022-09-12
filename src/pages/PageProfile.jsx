import { React, useCallback } from "react";
import logo from '../img/loft-taxi-logo-inner.svg';
import MapInner from "../components/MapInner";
import PopupProfile from "../components/popup/PopupProfile";
import PopupProfileSuccess from "../components/popup/PopupProfileSuccess";
import PropTypes from "prop-types";

import { Routes, Route, Link, Navigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/actions/user";
import { getIsLoggedIn } from "../redux/selectors/auth";

function PageProfile () {

    const dispatch = useDispatch();
    const loggedIn = useSelector(getIsLoggedIn);

    const logOff = useCallback(() => {
        dispatch(logOut());
    },[dispatch]);

    if(!loggedIn) {
        return ( <Navigate to="/login" /> )
    } return (
            <section className="inner__profile">
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
                                <li className="header__nav__item header__nav__item">
                                    <button onClick={logOff} className="header__nav__item__link">Выход</button>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <div className="content">
                        <MapInner />
                        <Routes>
                            <Route path="profile-form" element={<PopupProfile />} exact></Route>
                            <Route path="profile-success" element={<PopupProfileSuccess />} ></Route>
                            <Route path="/" element={<PopupProfile />}></Route>
                        </Routes>
                    </div>
                </div>
            </section>
        )

}

PageProfile.propTypes = {
    pageMap: PropTypes.string,
    pageProfile: PropTypes.string,
    pageLogin: PropTypes.string
}

export default PageProfile;