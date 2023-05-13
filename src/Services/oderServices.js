import axios from "axios";

const url = 'http://localhost:4000/';

export async function getOrder() {
  return await fetch(url+'order').then((response) => response.json());
 
}

export async function updateDeliveryStatus(id,changedOrder) {
//  return await fetch(url+'order/'+id, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//      body: JSON.stringify(changedOrder),
//     credentials: "same-origin",

//   }).then((response) => {
//     console.log(response);
//     // response.json()
//   });
console.log(changedOrder)
 const result =  await axios({
  method: 'put',
  url: `${url}order/${id}`,
  data: changedOrder
})
return result;
}

