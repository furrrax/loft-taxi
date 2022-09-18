import {React, useEffect} from "react";
import '../css/InnerLayout.css'
import '../css/Header.css'
import '../css/Map.css'

import PopupOrderProfile from '../components/popup/PopupOrderProfile';
import PropTypes from "prop-types";

import MapLayout from "./layouts/mapLayout";

import { Navigate, Outlet } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getIsLoggedIn } from "../redux/selectors/auth";

import { checkCardState } from "../redux/selectors/card";
import { getCard } from "../redux/actions/card";


function PageMap () {

    const dispatch = useDispatch();
    const loggedIn = useSelector(getIsLoggedIn);
    const cardState = useSelector(checkCardState);

    useEffect(() => {
        dispatch(getCard());
    },[dispatch]);

    if(!loggedIn) {
        return ( <Navigate to="/login" /> )
    } else {
        if(!cardState) {
            return (
                MapLayout(<PopupOrderProfile />)
            )
        } else {
            return (
                MapLayout(<Outlet />)
            )
        }
    } 

}

PageMap.propTypes = {
    pageMap: PropTypes.string,
    pageProfile: PropTypes.string,
    pageLogin: PropTypes.string
}

export default PageMap;