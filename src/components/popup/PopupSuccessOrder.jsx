import React from "react";

const PopupSuccessOrder = () => (
    <div className="popup popup__success-order">
        <h3 className="popup__title">Заказ размещен</h3>
        <span className="popup__subtitle">
            Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
        </span>
        <button className="button-submit" type="submit">Сделать новый заказ</button>
    </div>
);

export default PopupSuccessOrder;