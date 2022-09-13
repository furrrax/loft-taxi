import React from "react";

import Button from '@mui/material/Button';

function PopupOrderSuccess() {
    
    return(
        <div className="popup popup__order-success popup--map">
            <div className="popup__wraper">
                <h3 className="popup__title">Заказ размещен</h3>
                <span className="popup__subtitle">
                    Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
                </span>
                <Button variant="contained" className="button-submit" type="submit">Сделать новый заказ</Button>
            </div>
        </div>
    )
}

export default PopupOrderSuccess;