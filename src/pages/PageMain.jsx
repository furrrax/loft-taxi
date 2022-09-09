import React from "react";
import logo from '../img/loft-taxi-logo.svg';
import FormLogin from "../components/FormLogin";
import FormReg from "../components/FormReg";

import { Routes, Route, Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../redux/actions/user";
import { getIsLoggedIn } from "../redux/selectors/auth";
import { useEffect } from "react";

function PageMain() {

    const dispatch = useDispatch();
    const loggedIn = useSelector(getIsLoggedIn);
    let localstorageStatus = localStorage.getItem('authorized');

    useEffect(() => {
        if(localstorageStatus === 'true') {
            dispatch(logIn());
        } else if(localstorageStatus === 'false' || localstorageStatus === undefined || localstorageStatus === null) {
            dispatch(logOut());
        }
    },[dispatch, localstorageStatus]);

    return (
        <>  
            {loggedIn ? (
                <Navigate to="/map" />
            ) : (
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
            )}
        </>
    )
};

export default PageMain;