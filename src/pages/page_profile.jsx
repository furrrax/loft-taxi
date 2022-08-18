import React from "react";
import Header from "../components/header";
import InteractiveMap from "../components/map";

const ProfilePage = () => (
    <section className="profile">
        <h1>Страница Профиль</h1>
        <div className="container">
            <Header />
            <InteractiveMap />
        </div>
    </section>
);

export default ProfilePage;