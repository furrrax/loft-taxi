import React from "react";

const PopupProfileSuccess= () => (
    <div className="popup popup__profile-success">
        <h3 className="popup__title">Профиль</h3>
        <span className="popup__subtitle">
            Платёжные данные обновлены. Теперь вы можете заказывать такси.
        </span>
        <button className="button-submit" type="submit">Перейти на карту</button>
    </div>
);

export default PopupProfileSuccess;