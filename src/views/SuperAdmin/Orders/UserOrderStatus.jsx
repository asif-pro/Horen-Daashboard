import { Flex } from '@chakra-ui/react'
import {  getOrdersByUserId } from 'Services/oderServices'
import React from 'react'
import UserOrdersTable from 'views/Dashboard/Tables/components/UserOrdersTable'

const UserOrderStatus = () => {
    const [orders, setOrders] = React.useState([])
    const userId = localStorage.getItem('userId')

    React.useEffect(()=>{
    
        getOrdersByUserId(userId).then((res)=>{
          return res
        }).then((order)=>{
          console.log(order)
          setOrders(order)
        })
    
      },[])

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }} >
      <UserOrdersTable
        title={"Orders "}
        captions={["Order ID", "Order Date", "Quantity","Amount", "Payment Status", "Shipping Address", "Delivery Status"]}
        data={orders}
        
      />
    </Flex>
  )
}

export default UserOrderStatus