
// const url = process.env.REACT_APP_EMPLOYEE_URL;
const url = process.env.REACT_APP_EMPLOYEES_URL;

export async function getAllEmployees() {
    return fetch(url+'employee').then((response) => response.json());
}
  
export async function addEmployee(employee) {
    // console.log(employee)
    return await fetch(url+'employee', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
        credentials: "same-origin",

    }).then((response) => {
        console.log(response);
        return response.json()
    });
}
