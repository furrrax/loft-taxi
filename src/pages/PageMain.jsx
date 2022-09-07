import React from "react";
import logo from '../img/loft-taxi-logo.svg';
import FormLogin from "../components/FormLogin";
import FormReg from "../components/FormReg";

import { Routes, Route } from "react-router-dom";

function PageMain() {

    return (
        <>  
            <section className="main">
                <div className="container">
                    <div className="main__sidebar">
                        <div className="main__sidebar__logo">
                            <img src={logo} className="main__sidebar__logo__pic" alt="logo" />
                        </div>
                    </div>
                        <div className="main__content">
                            <Routes>
                                <Route path="/login" element={<FormLogin />} exact></Route>
                                <Route path="/reg" element={<FormReg />}></Route>
                                <Route path="*" element={<FormLogin />}></Route>
                            </Routes>
                        </div>
                    </div>
                </section>
        </>
    )
};

export default PageMain;