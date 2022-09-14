import {React, useCallback} from "react";
import logo from '../../img/loft-taxi-logo-inner.svg';
import MapInner from "../../components/MapInner";

import { useDispatch } from "react-redux";
import { logOut } from "../../redux/actions/user";

import { Link, useNavigate } from "react-router-dom";

function MapLayout (component) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOff = useCallback(() => {
        dispatch(logOut());
        navigate("/login");
    },[dispatch, navigate]);

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
                    {component}
                </div>
            </div>
        </section>
    )
}

export default MapLayout;