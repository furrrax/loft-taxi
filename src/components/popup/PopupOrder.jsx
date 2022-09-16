import {React, useState, useEffect, useCallback} from "react";
//import cross from "../../img/icon-cross.svg";
//import arrow from "../../img/icon-arrow.svg";
import picCar1 from "../../img/option-car01.png";
import picCar2 from "../../img/option-car02.png";
import picCar3 from "../../img/option-car03.png";

import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { useDispatch, useSelector } from "react-redux";
import { getAddressList, updateCoords } from "../../redux/actions/map";
import { selectAddressList1, selectAddressList2, selectCoord1, selectCoord2 } from "../../redux/selectors/map";

function PopupOrder() {

    const dispatch = useDispatch();
    const [address1, setAddressFrom] = useState('');
    const [address2, setAddressTo] = useState('');

    let getAddresses1 = useSelector(selectAddressList1);
    let getAddresses2 = useSelector(selectAddressList2);
    let getCoords1 = useSelector(selectCoord1);
    let getCoords2 = useSelector(selectCoord2);

    /* useEffect(() => {
        console.log('popup MAP updated');
        dispatch(getAddressList());

        dispatch(updateCoords());

        console.log('address list 1 from store: ' + getAddresses1);
        console.log('address list 2 from store: ' + getAddresses2);

        console.log('coords1 from store: ' + getCoords1);
        console.log('coords2 from store: ' + getCoords2);
    },[dispatch, getAddresses1, getAddresses2, getCoords1, getCoords2]); */

    const addressFromHandle = useCallback((event) => {
        setAddressFrom(event.target.value);
    }, []);

    const addressToHandle = useCallback((event) => {
        setAddressTo(event.target.value);
    }, []);

    const submitHandleOrderForm = useCallback((event) => {
        event.preventDefault();

        dispatch(getAddressList());

        dispatch(updateCoords(address1, address2));
        
        console.log(address1, address2)

        console.log('address list 1 from store: ' + getAddresses1);
        console.log('address list 2 from store: ' + getAddresses2);

        console.log('coords1 from store: ' + getCoords1);
        console.log('coords2 from store: ' + getCoords2);
    }, [dispatch, getAddresses1, getAddresses2, getCoords1, getCoords2, address1, address2]);
    
    return(
        <form className="popup popup__order popup--map" onSubmit={submitHandleOrderForm}>
            <div className="popup__address">
                <div className="popup__address__input popup__address__input--start">
                    {/* <input type="text" className="popup__address__input__field" placeholder="ул. Жуковского, 5"></input> */}
                    <Select
                            variant="standard"
                            value={address1}
                            onChange={addressFromHandle}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            className="popup__address__input__field"
                        >
                        <MenuItem value="">
                            
                        </MenuItem>
                        <MenuItem value={`Пулково (LED)`}>Пулково (LED)</MenuItem>
                        <MenuItem value={`Эрмитаж`}>Эрмитаж</MenuItem>
                        <MenuItem value={`Кинотеатр Аврора`}>Кинотеатр Аврора</MenuItem>
                        <MenuItem value={`Мариинский театр`}>Мариинский театр</MenuItem>
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
                            value={address2}
                            onChange={addressToHandle}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            className="popup__address__input__field"
                        >
                            <MenuItem value="">
                            
                            </MenuItem>
                            <MenuItem value={`Пулково (LED)`}>Пулково (LED)</MenuItem>
                            <MenuItem value={`Эрмитаж`}>Эрмитаж</MenuItem>
                            <MenuItem value={`Кинотеатр Аврора`}>Кинотеатр Аврора</MenuItem>
                            <MenuItem value={`Мариинский театр`}>Мариинский театр</MenuItem>
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