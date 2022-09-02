import {React, useContext} from "react";
import logo from '../img/loft-taxi-logo-inner.svg';
import MapInner from "../components/MapInner";
import PopupProfile from "../components/popup/PopupProfile";
import PopupProfileSuccess from "../components/popup/PopupProfileSuccess";
import PropTypes from "prop-types";
import { AuthContext } from "../AuthContext";

function PageProfile (props) {

    const {setPage} = props;
    const {logOut} = useContext(AuthContext);
    const logOff = () => {
        logOut();
        setPage('pageLogin');
    };

    return (
        <section className="inner__profile">
            <div className="container">
                <header className="header">
                    <div className="header__logo">
                        <img src={logo} className="header__logo__pic" alt="logo" />
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
                                <button onClick={logOff} className="header__nav__item__link">Выход</button>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div className="content">
                    <MapInner />
                    <PopupProfile />
                    <PopupProfileSuccess />
                </div>
            </div>
        </section>
    );
}

PageProfile.propTypes = {
    pageMap: PropTypes.string,
    pageProfile: PropTypes.string,
    pageLogin: PropTypes.string
}

export default PageProfile;

/* class ProfilePage extends React.Component {

    static propTypes = {
        pageMap: PropTypes.string,
        pageProfile: PropTypes.string,
        pageLogin: PropTypes.string
    }

    render() {
        const {setPage} = this.props;

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
                    <div className="profile">
                        <h1>Страница Профиля</h1>
                        <div class="profile__map-wrapper">
                            <MapInner />
                        </div>
                        <PopupProfile />
                        <PopupProfileSuccess />
                    </div>
                </div>
            </section>
        );
    }
}

export default ProfilePage; */