import {React, useContext} from "react";
import logo from '../img/loft-taxi-logo-inner.svg';
import MapInner from "../components/MapInner";
import PopupOrder from "../components/popup/PopupOrder";
import PopupOrderSuccess from "../components/popup/PopupOrderSuccess";
import PropTypes from "prop-types";
import { AuthContext } from "../AuthContext";

import { Link, Navigate } from "react-router-dom";

function PageMap (props) {

    //const {setPage} = props;
    const {logOut, isLoggedIn} = useContext(AuthContext);

    const LogOff = () => {
        //let navigate = useNavigate();
        logOut();
        //setPage('pageLogin');
        /* if(!isLoggedIn) {
            navigate("/", { replace: true });
        } */
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
                                            <button /* onClick={() => setPage('pageMap')} */ className="header__nav__item__link">Карта</button>
                                        </Link>
                                    </li>
                                    <li className="header__nav__item">
                                        <Link to="/profile">
                                            <button /* onClick={() => setPage('pageProfile')} */ className="header__nav__item__link">Профиль</button>
                                        </Link>
                                    </li>
                                    <li className="header__nav__item">
                                        {/* <button onClick={() => setPage('pageLogin')} className="header__nav__item__link">Выход</button> */}
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

/* class MapPage extends React.Component {

    static propTypes = {
        pageMap: PropTypes.string,
        pageProfile: PropTypes.string,
        pageLogin: PropTypes.string
    }
    
    render() {
        const {setPage} = this.props;

        return (
            <section className="inner__map">
            <div className="container">
                <header className="header">
                    <div className="header__logo">
                        <img src={logo} className="header__logo__pic" alt="logo" />
                        <div className="header__logo__text">loft<span className="header__logo__text--yellow">taxi</span></div>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__nav__list">
                            <li className="header__nav__item header__nav__item">
                                <button onClick={() => setPage('pageMap')} className="header__nav__item__link">Карта</button>
                            </li>
                            <li className="header__nav__item header__nav__item">
                                <button onClick={() => setPage('pageProfile')} className="header__nav__item__link">Профиль</button>
                            </li>
                            <li className="header__nav__item header__nav__item">
                                <button onClick={() => setPage('pageLogin')} className="header__nav__item__link">Выход</button>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div className="map">
                    <h1>Страница с картой</h1>
                    <MapInner />
                    <PopupOrder />
                    <PopupOrderSuccess />
                </div>
            </div>
        </section>
        );
    }
}

export default MapPage; */