import React from "react";
import InteractiveMap from "../components/map";
import PopupOrder from "../components/popup/PopupOrder";
import PopupOrderSuccess from "../components/popup/PopupOrderSuccess";

const MapPage = () => (
        <div className="map">
            <InteractiveMap />
            <PopupOrder />
            <PopupOrderSuccess />
        </div>
);

export default MapPage;