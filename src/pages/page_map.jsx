import React from "react";
import Header from "../components/header";
import InteractiveMap from "../components/map";
import PopupOrder from "../components/popup/PopupOrder";
import PopupSuccessOrder from "../components/popup/PopupSuccessOrder";

const MapPage = () => (
    <section className="profile">
        <h1>Страница с картой</h1>
        <div className="container">
            <Header />
            <InteractiveMap />
            <PopupOrder />
            <PopupSuccessOrder />
        </div>
    </section>
);

export default MapPage;