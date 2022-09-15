import {React, useState, useEffect} from "react";
//import cross from "../../img/icon-cross.svg";
//import arrow from "../../img/icon-arrow.svg";
import picCar1 from "../../img/option-car01.png";
import picCar2 from "../../img/option-car02.png";
import picCar3 from "../../img/option-car03.png";

import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { useDispatch, useSelector } from "react-redux";
import { getAddressList } from "../../redux/actions/map";
import { selectAddressList1, selectAddressList2 } from "../../redux/selectors/map";

function PopupOrder() {

    const dispatch = useDispatch();
    const [addressFrom, setAddressFrom] = useState('');
    let getAddresses1 = useSelector(selectAddressList1);
    let getAddresses2 = useSelector(selectAddressList2);

    useEffect(() => {
        //console.log('popup MAP updated');
        dispatch(getAddressList());

        console.log('address list 1 from store: ' + getAddresses1);
        console.log('address list 2 from store: ' + getAddresses2);
    },[dispatch, getAddresses1, getAddresses2]);

    const addressFromHandle = (event) => {
        setAddressFrom(event.target.value);
    };

    const [addressTo, setAddressTo] = useState('');

    const addressToHandle = (event) => {
        setAddressTo(event.target.value);
    };
    
    return(
        <form className="popup popup__order popup--map">
            <div className="popup__address">
                <div className="popup__address__input popup__address__input--start">
                    {/* <input type="text" className="popup__address__input__field" placeholder="ул. Жуковского, 5"></input> */}
                    <Select
                            variant="standard"
                            value={addressFrom}
                            onChange={addressFromHandle}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            className="popup__address__input__field"
                        >
                        <MenuItem value="">
                            <p>ул. Жуковского, 5</p>
                        </MenuItem>
                        <MenuItem value={1}>ул. Зеленая, 3</MenuItem>
                        <MenuItem value={2}>пр-т Ленина, 10</MenuItem>
                        <MenuItem value={3}>ул. Артема, 220</MenuItem>
                    </Select>
                    {/* <div className="popup__address__input__btns">
                        <button className="popup__address__input__btns__cross">
                            <img src={cross} className="popup__address__input__btns__cross__pic" alt="button cross" />
                        </button>
                        <button className="popup__address__input__btns__arrow">
                            <img src={arrow} className="popup__address__input__btns__arrow__pic" alt="button arrow" />
                        </button>
                    </div> */}
                </div>
                <div className="popup__address__input popup__address__input--end">
                    {/* <input type="text" className="popup__address__input__field" placeholder="ул. Заславского, 3"></input> */}
                    <Select
                            variant="standard"
                            value={addressTo}
                            onChange={addressToHandle}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            className="popup__address__input__field"
                        >
                        <MenuItem value="">
                            <p>ул. Жуковского, 5</p>
                        </MenuItem>
                        <MenuItem value={1}>ул. Зеленая, 3</MenuItem>
                        <MenuItem value={2}>пр-т Ленина, 10</MenuItem>
                        <MenuItem value={3}>ул. Артема, 220</MenuItem>
                    </Select>
                    {/* <div className="popup__address__input__btns">
                        <button className="popup__address__input__btns__cross">
                            <img src={cross} className="popup__address__input__btns__cross__pic" alt="button cross" />
                        </button>
                        <button className="popup__address__input__btns__arrow">
                            <img src={arrow} className="popup__address__input__btns__arrow__pic" alt="button arrow" />
                        </button>
                    </div> */}
                </div>
            </div>
            <div className="popup__option">
                <ul className="popup__option__list">
                    <li className="popup__option__list__item">
                        <span className="popup__option__list__item__title">Стандарт</span>
                        <span className="popup__option__list__item__cost">
                            <span className="popup__option__list__item__cost__title">Стоимость</span>
                            <span className="popup__option__list__item__cost__price">150 ₽</span>
                        </span>
                        <div className="popup__option__list__item__img">
                            <img src={picCar1} className="popup__option__list__item__pic" alt="" />
                        </div>
                    </li>
                    <li className="popup__option__list__item">
                        <span className="popup__option__list__item__title">Премиум</span>
                        <span className="popup__option__list__item__cost">
                            <span className="popup__option__list__item__cost__title">Стоимость</span>
                            <span className="popup__option__list__item__cost__price">250 ₽</span>
                        </span>
                        <div className="popup__option__list__item__img">
                            <img src={picCar2} className="popup__option__list__item__pic" alt="" />
                        </div>
                    </li>
                    <li className="popup__option__list__item">
                        <span className="popup__option__list__item__title">Бизнесс</span>
                        <span className="popup__option__list__item__cost">
                            <span className="popup__option__list__item__cost__title">Стоимость</span>
                            <span className="popup__option__list__item__cost__price">300 ₽</span>
                        </span>
                        <div className="popup__option__list__item__img">
                            <img src={picCar3} className="popup__option__list__item__pic" alt="" />
                        </div>
                    </li>
                </ul>
                <Button variant="contained" className="button-submit" type="submit">Заказать</Button>
            </div>
        </form>
    ) 
}

export default PopupOrder;