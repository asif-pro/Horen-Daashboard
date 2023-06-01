// Chakra imports
import { Button, Flex, Icon, Link, Text, useColorModeValue } from "@chakra-ui/react";
import axios from 'axios';
import { createOrder } from "Services/oderServices";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";
import { useHistory } from "react-router-dom";

const CheckoutConfirmation = ({
  title,
  orderDetails
}) => {
  const history =  useHistory()
  const textColor = useColorModeValue("gray.700", "white");

  const placeOrder = async ()=>{
   const { _id } = await createOrder(orderDetails);
    try {
      axios
      .get(`https://order-service.fly.dev/payment/${_id}/${orderDetails.price}`, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      })
      .then((res) => {
        // setLoadingPayment(false);
        document.location = res.data.url
        // Linking.openURL(res.data.url);
      }).then((result)=>{
        localStorage.removeItem('orderDetails')
        localStorage.removeItem('deliverCharge');
        history.push('/admin/user/dashboard')
      })
  } catch (error) {
    console.error(error);
  }
    //route to dashboard
  }
  const goBack = ()=>{
    history.push('/auth/order')
    localStorage.removeItem('orderDetails');
    localStorage.removeItem('deliverCharge');
  }
  
  return (
    <Card p='16px' my={{ sm: "24px", xl: "250px" }} ml={'500px'}>
      <CardHeader p='12px 5px' mb='12px'>
        <Text fontSize='lg' color={textColor} fontWeight='bold' >
          {title}
        </Text>
      </CardHeader>
      <CardBody px='5px'>
        <Flex direction='column'>
          {/* <Text fontSize='md' color='gray.500' fontWeight='400' mb='30px'>
            Description
          </Text> */}
          <Flex align='center' mb='18px'>
            <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
              Number of Device:{" "}
            </Text>
            <Text fontSize='md' color='gray.500' fontWeight='400'>
              {orderDetails.quantity}
            </Text>
          </Flex>
          <Flex align='center' mb='18px'>
            <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
              Total Price:{" "}
            </Text>
            <Text fontSize='md' color='gray.500' fontWeight='400'>
              {orderDetails.price} &#x9F3;
            </Text>
          </Flex>
          <Flex align='center' mb='18px'>
            <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
              Phone Number:{" "}
            </Text>
            <Text fontSize='md' color='gray.500' fontWeight='400'>
              {orderDetails.phonenumber}
            </Text>
          </Flex>
          <Flex align='center' mb='18px'>
            <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
              Delivery Address:{" "}
            </Text>
            { orderDetails && (
                          <Text fontSize='md' color='gray.500' fontWeight='400'>
                          City: {orderDetails?.shippingAddress?.city?.city}, Zone: {orderDetails?.shippingAddress?.zone?.zone_name}, Area: {orderDetails?.shippingAddress?.area?.area_name}
                          <br/>{orderDetails?.shippingAddress?.fullAddress}
                        </Text>
            )

            }

          </Flex>
          <Flex align='center' mb='18px'>
            <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
              Delivery Charge:{" "}
            </Text>
            <Text fontSize='md' color='gray.500' fontWeight='400'>
              {localStorage.getItem('deliveryCharge')}
            </Text>
          </Flex>
          <Flex align='center' mb='18px'>
          <Button onClick={placeOrder}
                fontSize='15px'
                type='submit'
                bg='yellow.400'
                w='100%'
                h='45'
                mb='20px'
                color='white'
                mr={'20px'}
                mt='20px'
                _hover={{
                  bg: "yellow.500",
                }}
                _active={{
                  bg: "yellow.500",
                }}>
                Pay {orderDetails.price} &#x9F3; BDT
              </Button>
              <Button 
                onClick={goBack}
                fontSize='15px'
                type='submit'
                bg='gray.700'
                w='100%'
                h='45'
                mb='20px'
                color='white'
                ml={'20px'}
                mt='20px'
                _hover={{
                  bg: "yellow.500",
                }}
                _active={{
                  bg: "yellow.500",
                }}>
                Cancel
              </Button>
          
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default CheckoutConfirmation;


