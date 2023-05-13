const url = 'http://localhost:4000/';

export async function getAccessToken() {
    return await fetch(url+'delivery/accessToken').then((response) => response.json());
  //  const access_token = axios.get(url+'delivery/accessToken')
  //  console.log(access_token)
  //  return access_token
  }

export async function createOrder(order) {

    const pathaoTokenObject = await getAccessToken();
    const pathaoToken = pathaoTokenObject.pathaoToken.access_token;
//zone, area, address, city
    const orderDetails = {
        store_id: 97219,
        merchant_order_id: order._id,
        sender_name: "",
        sender_phone: "",
        recipient_name: "Asif",
        recipient_phone: order.phonenumber,
        recipient_address: order.shippingAddress,
        recipient_city: order.shippingAddress.split(',').reverse()[0],
        recipient_zone: order.shippingAddress.split(',')[0],
        recipient_area: order.shippingAddress.split(',')[1],
        delivery_type: "48",
        item_type: "2",
        special_instruction: "",
        item_quantity: order.quantity,
        item_weight: 1,
        amount_to_collect: 0,
        item_description: "",
      };
    console.log(orderDetails);
    return await fetch(url+'delivery/order', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({orderDetails, pathaoToken}),
            credentials: "same-origin",
        
          }).then((response) => {
            console.log(response);
            // response.json()
          });
}