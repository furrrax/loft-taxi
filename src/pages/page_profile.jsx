import React from "react";
import InteractiveMap from "../components/map";
import PopupProfile from "../components/popup/PopupProfile";
import PopupProfileSuccess from "../components/popup/PopupProfileSuccess";

const ProfilePage = () => (
        <div className="profile">
            <InteractiveMap />
            <PopupProfile />
            <PopupProfileSuccess />
        </div>
);

export default ProfilePage;