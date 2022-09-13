import React from "react";

import Button from '@mui/material/Button';

function PopupProfileSuccess() {

    return(
        <div className="popup popup__profile-success popup--profile">
            <div className="popup__wraper">
                <h3 className="popup__title">Профиль</h3>
                <span className="popup__subtitle">
                    Платёжные данные обновлены. Теперь вы можете заказывать такси.
                </span>
                <Button variant="contained" className="button-submit" type="submit">Перейти на карту</Button>
            </div>
        </div>
    )
}

export default PopupProfileSuccess;