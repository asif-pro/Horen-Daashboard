import axios from "axios";

// const url = 'https://6885-113-11-37-34.ngrok-free.app/';
// const url = 'https://3c49-113-11-37-34.ngrok-free.app/';
const url = process.env.REACT_APP_SALES_URL;

export async function getAccessToken() {
  return await fetch(`${url}delivery/accessToken`).then(
    (response) => response.json()
  );
}
export async function getOrder() {
  return await fetch(url+'order').then((response) => response.json());
//  const orders = axios.get(url+'order')
//  console.log(orders)
//  return orders
}
export async function getCities() {
  return await fetch(url+'delivery/cities').then((response) => response.json());
}
export async function getAreas(zone_id) {
  try {
    const pathaoTokenObject = await getAccessToken();
    const pathaoToken = pathaoTokenObject.pathaoToken.access_token;
    //console.log({ zone_id, pathaoToken });

    return await fetch(`${url}delivery/areas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ zone_id, pathaoToken }),
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        return data;
      });
  } catch (error) {
    console.log(error);
  }
}
export async function getZones(city_id) {
  try {
    const pathaoTokenObject = await getAccessToken();

    const pathaoToken = pathaoTokenObject.pathaoToken.access_token;

    return await fetch(`${url}delivery/zones`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${pathaoToken}`,
      },
      body: JSON.stringify({ city_id, pathaoToken }),
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        return data;
      });
  } catch (error) {
    console.log(error);
  }
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
// console.log(changedOrder)
 const result =  await axios({
  method: 'put',
  url: `${url}order/${id}`,
  data: changedOrder
})
return result;
}
export async function createOrder(order) {
  
  return await fetch(url+'order', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
    credentials: "same-origin",

}).then((response) => response.json())
.catch((error) => console.log(error));
} 
export async function getOrdersByUserId(id) {
  return await fetch(url+'order/user_id/'+id).then((response) => response.json());
//  const orders = axios.get(url+'order')
//  console.log(orders)
//  return orders
}

