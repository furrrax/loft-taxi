import { AUTHENTICATE, logIn, REGISTER } from "../actions/user";
import { serverLogIn, serverReg } from '../api';

const setLocalStorageTrue = () => {localStorage.setItem('authorized', true)}
const setLocalStorageFalse = () => {localStorage.setItem('authorized', false)}

export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === AUTHENTICATE) {

        const {email, password} = action.payload;
        const success = await serverLogIn(email, password)

        if(success){
            setLocalStorageTrue();
            store.dispatch(logIn())
        } else {
            setLocalStorageFalse();
        }
    } else {
        next(action);
    }
};

export const regMiddleware = (store) => (next) => async (action) => {
    if (action.type === REGISTER) {
        const {email, name, surname, password} = action.payload;
        const success = await serverReg(email, name, surname, password)

        if(success){
            setLocalStorageTrue();
            store.dispatch(logIn())
        } else {
            setLocalStorageFalse();
        }
    } else {
        next(action);
    }
};