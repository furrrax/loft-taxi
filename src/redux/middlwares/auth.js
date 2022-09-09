import { authenticate, logIn, register } from "../actions/user";
import { serverLogIn, serverReg } from '../api'

export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === authenticate) {
        console.log('init login')
        const {email, password} = action.payload;
        const success = await serverLogIn(email, password)

        if(success){
            console.log('login success')
            store.dispatch(logIn())
        }
    } else {
        console.log('login fail')
        next(action);
    }
};

export const regMiddleware = (store) => (next) => async (action) => {
    if (action.type === register) {
        console.log('init register')
        const {email, name, surname, password} = action.payload;
        const success = await serverReg(email, name, surname, password)

        if(success){
            console.log('register success')
            store.dispatch(logIn())
        }
    } else {
        console.log('register fail')
        next(action);
    }
};