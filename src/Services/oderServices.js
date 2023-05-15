import axios from "axios";

// const url = 'https://6885-113-11-37-34.ngrok-free.app/';
// const url = 'https://3c49-113-11-37-34.ngrok-free.app/';
const url = 'http://localhost:4001/';


export async function getOrder() {
  return await fetch(url+'order').then((response) => response.json());
//  const orders = axios.get(url+'order')
//  console.log(orders)
//  return orders
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

