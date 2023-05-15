
const url = process.env.REACT_APP_DEVICES_URL;

export async function getAllDevices() {

    return fetch(url+'device').then((response) => response.json());
}

export async function postDevice(device) {
    // console.log(device)
    return await fetch(url+'device', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(device),
        credentials: "same-origin",

    }).then((response) => {
        console.log(response);
        // response.json()
    });
}