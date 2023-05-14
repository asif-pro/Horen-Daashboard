const url = 'http://localhost:4000/';

export async function getAllDevices() {
    return await fetch(url+'device').then((response) => response);
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