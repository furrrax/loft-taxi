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
        ).then(res => res.json());
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
        ).then(res => res.json());
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
    return await fetch(`https://loft-taxi.glitch.me/card?token=${data}`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(responce => responce.json());
};

export const serverGetAddressList = async () => {
    return await fetch(`https://loft-taxi.glitch.me/addressList`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(responce => responce.json());
};

export const serverGetCoordinates = async (payload) => {
    return await fetch(
        `https://loft-taxi.glitch.me/route?address1=${payload.address1}&address2=${payload.address2}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }
    ).then(responce => responce.json())
}