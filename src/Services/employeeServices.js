
import axios from "axios";
// const url = process.env.REACT_APP_EMPLOYEE_URL;
// const url = process.env.REACT_APP_EMPLOYEES_URL;
const url = 'https://employee-service.fly.dev/';

export async function getAllEmployeesByCompany(company_id) {
    // console.log(company_id) 
    return fetch(url+'employee/'+company_id).then((response) => response.json());
//     axios
//   .get("https://finalspaceapi.com/api/v0/character/?limit=2")
//   .then(function (response) {
//     console.log(response);
//   });
}
  
export async function addEmployee(employee) {
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

export async function getEmployeeById(employee_id) {
    // console.log(employee_id) 
    return fetch(url+'employee/'+employee_id).then((response) => response.json());
//     axios
//   .get("https://finalspaceapi.com/api/v0/character/?limit=2")
//   .then(function (response) {
//     console.log(response);
//   });
}
