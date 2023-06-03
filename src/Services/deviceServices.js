import axios from "axios";
import { getEmployeeById } from "./employeeServices";
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
export async function updateDevicePseudoName(ru_id,deviceData) {
 const deviceAllInfo = await fetch(url+'device/'+ru_id).then((response) => response.json());
 deviceAllInfo[0].pseudoname = deviceData
 const result =  await axios({
  method: 'PUT',
  url: `${url}device/${ru_id}`,
  data: deviceAllInfo[0]
})
return result;


// if(!deviceAllInfo[0].pseudoname){
//     deviceAllInfo[0].pseudoname = deviceData
//     const result =  await axios({
//     method: 'PUT',
//     url: `${url}device/${ru_id}`,
//     data: deviceAllInfo[0]
//     })
//     return result;
//  }
//  if(deviceAllInfo[0].pseudoname){
//     if(deviceAllInfo[0].pseudoname != deviceData){
//         deviceAllInfo[0].pseudoname = deviceData
//         const result =  await axios({
//         method: 'PUT',
//         url: `${url}device/${ru_id}`,
//         data: deviceAllInfo[0]
//         })
//         return result;
//     }
//  }
}
export async function getDevicesByCompanyId(company_id) {
     return await fetch(url+'device/company_id/'+company_id).then((response) => response.json());
    
}
export async function assignEmployeeToDevice(employeeData,ru_id) {
    const deviceAllInfo = await fetch(url+'device/'+ru_id).then((response) => response.json());
    deviceAllInfo[0].employee = employeeData
    
    const result =  await axios({
     method: 'PUT',
     url: `${url}device/${ru_id}`,
     data: deviceAllInfo[0]
   })
   return result;
   }