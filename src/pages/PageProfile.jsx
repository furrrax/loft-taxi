import React from "react";
import MapInner from "../components/MapInner";
import PopupProfile from "../components/popup/PopupProfile";
import PopupProfileSuccess from "../components/popup/PopupProfileSuccess";

const ProfilePage = () => (
        <div className="profile">
            <h1>Страница Профиля</h1>
            <MapInner />
            <PopupProfile />
            <PopupProfileSuccess />
        </div>
);

export default ProfilePage;