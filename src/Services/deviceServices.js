
// const url = process.env.REACT_APP_DEVICES_URL;
const url = 'https://device-service.fly.dev/'

export async function getAllDevices() {

    return fetch(url+'device').then((response) => response.json());
}
export async function getDevicesByUserId(user_id) {

    return await fetch(url+'device/user_id/'+user_id).then((response) => response.json());
    
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