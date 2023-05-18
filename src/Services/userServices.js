// const url = process.env.REACT_APP_USERS_URL;
const url = 'http://localhost:4007/'

export async function getUser(id) {

    return fetch(url+'profile').then((response) => response.json());
}
export async function gauthRegister(user) {
    try {
        const registerUrl = `${url}google/register`;
        const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
            credentials: "include",
        }
        const response = await fetch(registerUrl, options);
        const data = await response.json()
        // console.log('from service',data);
            return data;
    } catch (error) {
        console.log(error);
    }
    
}
export async function register(user) {
    try {
        const registerUrl = `${url}register`;
        const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
            credentials: "include",
        }
        const response = await fetch(registerUrl, options);
        const data = await response.json()
        console.log(data);
            return data;
    } catch (error) {
        console.log(error);
    }
    
}
export async function signin(email, password) {
    try {
        const data = {email,password};
        const loginUrl = `${url}login`;
        const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: "include",
        }
        // console.log('loginUrl, data', loginUrl, data)
        const response = await fetch(loginUrl, options);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}