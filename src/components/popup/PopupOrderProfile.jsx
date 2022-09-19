import React from "react";
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';

function PopupOrderProfile() {
    
    return(
        <div className="popup popup__order-to-profile popup--map">
            <div className="popup__wraper">
                <h3 className="popup__title">Заполните платежные данные</h3>
                <span className="popup__subtitle">
                Укажите информацию о банковской карте, чтобы сделать заказ.
                </span>
                <Link to="/profile">
                    <Button variant="contained" className="button-submit" type="submit">Перейти в профиль</Button>
                </Link>
            </div>
        </div>
    )
}

export default PopupOrderProfile;