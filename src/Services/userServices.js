const url = process.env.REACT_APP_USERS_URL;

export async function getUser(id) {

    return fetch(url+'profile').then((response) => response.json());
}

export async function register(user) {
    // console.log(device)
    return await fetch(url+'register', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(register),
        credentials: "same-origin",

    }).then((response) => {
        console.log(response);
        // response.json()
    });
}