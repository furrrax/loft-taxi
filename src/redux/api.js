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