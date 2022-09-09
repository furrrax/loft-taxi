/* export const serverLogIn = async (email, password) => {
    return fetch(
        `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
    ).then(res => res.json()).then(data => data.success);
}; */

/* export const serverReg = async (email, password, firstname, surname) => {
    return fetch(
        `https://loft-taxi.glitch.me/auth?email=${email}&password=${password}&name=${firstname}&surname=${surname}`
    ).then(res => res.json()).then(data => data.success);
}; */

export const serverLogIn = async (email, password) => {
    return fetch(
        `https://loft-taxi.glitch.me/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            }),
        }
        ).then(responce => responce.json()).then(data => data.success);
};

export const serverReg = async (email, name, surname, password) => {
    return fetch(
        `https://loft-taxi.glitch.me/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "name": name,
                "surname": surname,
                "password": password
            }),
        }
        ).then(responce => responce.json()).then(data => data.success);
};