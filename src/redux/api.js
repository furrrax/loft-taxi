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

export const serverCardUpdate = async (cardNumber, expiryDate, cardName, cvc) => {
    return fetch(
        `https://loft-taxi.glitch.me/card`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "cardNumber": cardNumber,
                "expiryDate": expiryDate,
                "cardName": cardName,
                "cvc": cvc
            }),
        }
        ).then(responce => responce.json()).then(data => data.success);
};

export const serverCardGetData = async (data) => {
    return fetch(`https://loft-taxi.glitch.me/card?token=${data}`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(responce => responce.json());
};