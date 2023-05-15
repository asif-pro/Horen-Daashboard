
import { Flex } from "@chakra-ui/react";
import React from "react";
// import Authors from "./components/Authors";
// import Projects from "./components/Projects";
// import Projects from "views/Dashboard/Tables/components/Projects";
import OrdersTable from "views/Dashboard/Tables/components/OrdersTable";
import { dashboardTableData } from "variables/general";
import { getOrder, updateDeliveryStatus } from "Services/oderServices";
import { getAccessToken, createOrder } from "Services/deliveryServices";

const Orders = () => {
  const [orders, setOrders ] = React.useState([]);

  async function  updateStatus (id){
    const orderToChange = orders.filter((order)=>{
      return order._id === id;
    })[0]
    
    if(orderToChange.deliveryStatus ==='pending') 
    {
      orderToChange.deliveryStatus = 'requested-for-delivery';
      await updateDeliveryStatus(id,orderToChange)
        .then((res)=>{
          const allOrders = orders.filter((order)=>{
            return order._id!==id;
          });
    
          setOrders([...allOrders,orderToChange].sort((a,b)=>new Date(b.timeStamp)-new Date(a.timeStamp)))
          return res;
        }).then((res)=>{
          createOrder(res.data)
        })
  
    
    }
    console.log(orders)
   
  }

  React.useEffect(()=>{


    getOrder().then((res)=>{
      return res.sort((a,b)=>new Date(b.timeStamp)-new Date(a.timeStamp))
    }).then((res)=>{
      setOrders(res);
    })

    
  },[])


  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }} >
      <OrdersTable
        title={"Orders Table"}
        captions={["Order ID", "Customer ID", "Order Date", "Quantity","Amount", "Payment Status", "Customer Phone", "Shipping Address", "Delivery Status", "",]}
        data={orders}
        updateStatus={updateStatus}
      />
    </Flex>
  )
}

export default Orders