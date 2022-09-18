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
import { selectAddressList } from "../../redux/selectors/map";

function PopupOrder() {

    const dispatch = useDispatch();
    const selectAddresses = useSelector(selectAddressList);
    const [address1, setAddressFrom] = useState('');
    const [address2, setAddressTo] = useState('');
    const [addressList1, setAddressList1] = useState(selectAddresses);
    const [addressList2, setAddressList2] = useState(selectAddresses);

    //const addressListConst = ['Пулково (LED)','Эрмитаж','Кинотеатр Аврора','Мариинский театр'];
    //const addressListConst = selectAddresses;



    useEffect(() => {
        dispatch(getAddressList());
    },[]);   

    useEffect(() => {
        setAddressList1(selectAddresses)
        setAddressList2(selectAddresses)
    },[selectAddresses])

    const address1Handle = useCallback((event) => {
        setAddressFrom(event.target.value);
        setAddressList2(selectAddresses.filter(value => value !== event.target.value))
    }, [selectAddresses]);

    const address2Handle = useCallback((event) => {
        setAddressTo(event.target.value);
        setAddressList1(selectAddresses.filter(value => value !== event.target.value))
        console.log('address2' + event.target.value)
    }, [selectAddresses]);

    const submitHandleOrderForm = useCallback((event) => {
        event.preventDefault();
        dispatch(updateCoords(address1, address2));
    }, [dispatch, address1, address2]);

    const handleClickTab = useCallback((event) => {
        console.log('value ' + event.target.value)
        console.log('data-index ' + event.target.getAttribute('data-index'))

        event.target.classList.add("active");
    }, []);

    const AddressList1 = () => (
        <Select 
            variant="standard"
            value={address1}
            onChange={address1Handle}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            className="popup__address__input__field popup__address__input__field--1"
        >
            <MenuItem value="" disabled selected>Откуда</MenuItem>
            {addressList1.map((address, index) => (
                <MenuItem /* onClick={handleClickMenuItem} */ className="menu__item__1" key={index} data-index={index} value={address}>{address}</MenuItem>
            ))}
        </Select>
    );

    const AddressList2 = () => (
        <Select 
            variant="standard"
            value={address2}
            onChange={address2Handle}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            className="popup__address__input__field popup__address__input__field--2"
        >
            <MenuItem value="" disabled selected>Куда</MenuItem>
            {addressList2.map((address, index) => (
                <MenuItem /* onClick={handleClickMenuItem} */ className="menu__item__2" key={index} data-index={index} value={address}>{address}</MenuItem>
            ))}
        </Select>
    );
    
    return(
        <form className="popup popup__order popup--map" onSubmit={submitHandleOrderForm}>
            <div className="popup__address">
                <div className="popup__address__input popup__address__input--start">
                    <AddressList1 />
                </div>
                <div className="popup__address__input popup__address__input--end">
                    <AddressList2 />
                </div>
            </div>
            <div className="popup__option">
                <ul className="popup__option__list">
                    <li className="popup__option__list__item" data-index="1" value="1" onClick={handleClickTab}>
                        <span className="popup__option__list__item__title">Стандарт</span>
                        <span className="popup__option__list__item__cost">
                            <span className="popup__option__list__item__cost__title">Стоимость</span>
                            <span className="popup__option__list__item__cost__price">150 ₽</span>
                        </span>
                        <div className="popup__option__list__item__img">
                            <img src={picCar1} className="popup__option__list__item__pic" alt="" />
                        </div>
                    </li>
                    <li className="popup__option__list__item" data-index="2" value="2" onClick={handleClickTab}>
                        <span className="popup__option__list__item__title">Премиум</span>
                        <span className="popup__option__list__item__cost">
                            <span className="popup__option__list__item__cost__title">Стоимость</span>
                            <span className="popup__option__list__item__cost__price">250 ₽</span>
                        </span>
                        <div className="popup__option__list__item__img">
                            <img src={picCar2} className="popup__option__list__item__pic" alt="" />
                        </div>
                    </li>
                    <li className="popup__option__list__item" data-index="3" value="3" onClick={handleClickTab}>
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