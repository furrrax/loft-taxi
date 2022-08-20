import React from "react";
import Header from "../components/header";
import ProfilePage from "./page_profile";
import MapPage from "./page_map";

const InnerPage = () => (
    <section className="inner">
        <div className="container">
            <Header />
            <ProfilePage />
        </div>
    </section> 
);

export default InnerPage;