import React from "react";
import MapInner from "../components/MapInner";
import PopupOrder from "../components/popup/PopupOrder";
import PopupOrderSuccess from "../components/popup/PopupOrderSuccess";

const MapPage = () => (
        <div className="map">
            <h1>Страница с картой</h1>
            <MapInner />
            <PopupOrder />
            <PopupOrderSuccess />
        </div>
);

export default MapPage;