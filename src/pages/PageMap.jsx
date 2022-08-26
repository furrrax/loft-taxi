import React from "react";
import logo from '../img/loft-taxi-logo.svg';
import MapInner from "../components/MapInner";
import PopupOrder from "../components/popup/PopupOrder";
import PopupOrderSuccess from "../components/popup/PopupOrderSuccess";
import PropTypes from "prop-types";

class MapPage extends React.Component {

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

export default MapPage;