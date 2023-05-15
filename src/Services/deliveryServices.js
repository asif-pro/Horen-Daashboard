const url = process.env.REACT_APP_SALES_URL;

export async function getAccessToken() {
    return await fetch(url+'delivery/accessToken').then((response) => response.json());
  }

export async function createOrder(order) {

    const pathaoTokenObject = await getAccessToken();
    const pathaoToken = pathaoTokenObject.pathaoToken.access_token;
    const orderDetails = {
        store_id: 97219,
        merchant_order_id: order._id,
        sender_name: "",
        sender_phone: "",
        recipient_name: "Asif",
        recipient_phone: order.phonenumber,
        recipient_address: order.shippingAddress.fullAddress,
        recipient_city: order.shippingAddress.city.id,
        recipient_zone: order.shippingAddress.zone.zone_id,
        recipient_area: order.shippingAddress.area.area_id,
        delivery_type: "48",
        item_type: "2",
        special_instruction: "",
        item_quantity: order.quantity,
        item_weight: 1,
        amount_to_collect: 0,
        item_description: "",
      };
    return await fetch(url+'delivery/order', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({orderDetails, pathaoToken}),
            credentials: "same-origin",
        
          }).then((response) => {
            console.log(response);
          });
}