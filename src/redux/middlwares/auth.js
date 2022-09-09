import { AUTHENTICATE, logIn, REGISTER } from "../actions/user";
import { serverLogIn, serverReg } from '../api'

export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === AUTHENTICATE) {
        console.log('init login')
        const {email, password} = action.payload;
        const success = await serverLogIn(email, password)

        console.log('success status: ' + success)

        if(success){
            console.log('login success')
            store.dispatch(logIn())
        } else {
            console.log('login data send, but responce is failed')
        }
    } else {
        console.log('login fail')
        console.log('action type is: ' + action.type)
        next(action);
    }
};

export const regMiddleware = (store) => (next) => async (action) => {
    if (action.type === REGISTER) {
        console.log('init register')
        const {email, name, surname, password} = action.payload;
        const success = await serverReg(email, name, surname, password)

        console.log('success status: ' + success)

        if(success){
            console.log('register success')
            store.dispatch(logIn())
        } else {
            console.log('reg data send, but responce is failed')
        }
    } else {
        console.log('register fail')
        console.log('action type is: ' + action.type)
        next(action);
    }
};