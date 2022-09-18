import {React, useState, useEffect, useCallback} from "react";
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
    }, [selectAddresses]);

    const submitHandleOrderForm = useCallback((event) => {
        event.preventDefault();
        dispatch(updateCoords(address1, address2));
    }, [dispatch, address1, address2]);

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
                <MenuItem className="menu__item__1" key={index} data-index={index} value={address}>{address}</MenuItem>
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
                <MenuItem className="menu__item__2" key={index} data-index={index} value={address}>{address}</MenuItem>
            ))}
        </Select>
    );

    const options = ['Стандарт', 'Премиум', 'Бизнесс'];
    const cost = ['150', '250', '300'];
    const cars = [picCar1, picCar2, picCar3];
    const [active, setActive] = useState('');
    
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
                    {options.map((option, index) => (
                        <li 
                            key={index}
                            className={`popup__option__list__item ${active === option && 'active'}`}
                            onClick={() => setActive(option)}
                        >
                            <span className="popup__option__list__item__title">{option}</span>
                            <span className="popup__option__list__item__cost">
                                <span className="popup__option__list__item__cost__title">Стоимость</span>
                                <span className="popup__option__list__item__cost__price">{cost[index]}</span>
                            </span>
                            <div className="popup__option__list__item__img">
                                <img src={cars[index]} className="popup__option__list__item__pic" alt="" />
                            </div>
                        </li>
                    ))}
                </ul>
                <Button variant="contained" className="button-submit" type="submit">Заказать</Button>
            </div>
        </form>
    ) 
}

export default PopupOrder;