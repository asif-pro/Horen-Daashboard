import React from 'react';
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { register, profile, gauthRegister, updateUserType} from "Services/userServices";
import { ChevronDownIcon } from '@chakra-ui/icons'
// Chakra imports

import {
  Box,
  Grid,
  Flex,
  Select,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
  Stack,
  AlertIcon,
  Alert,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
// Assets
import signInImage from "assets/img/signInImage.png";
import { signin } from "Services/userServices";
import { getCities, getZones, getAreas } from "Services/oderServices";
import CheckoutConfirmation from './CheckoutConfirmation';

const Checkout = () => {
    const titleColor = useColorModeValue("gray.700", "yellow.200");
    const textColor = useColorModeValue("gray.500", "white");

    const [orderInfo, setOrderInfo] = React.useState({})

//setting the user id in the object
    React.useEffect(() => {
       const user_id = localStorage.getItem('userId');
      //  if(localStorage.getItem('orderDetails')){
        const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));
        if(orderDetails){
          orderDetails.user_id = user_id ;
          setOrderInfo(orderDetails);
        }
       
      //  }
    //    console.log(orderDetails)
      }, [])

  return (
//     <Flex position='relative' mb='40px'>
//     <Flex
//       h={{ sm: "initial", md: "75vh", lg: "85vh" }}
//       w='100%'
//       maxW='1044px'
//       mx='auto'
//       justifyContent='space-between'
//       mb='30px'
//       pt={{ sm: "100px", md: "0px" }}>
//       <Flex
//         alignItems='center'
//         justifyContent='start'
//         style={{ userSelect: "none" }}
//         w={{ base: "100%", md: "50%", lg: "42%" }}>
//         <Flex
//           direction='column'
//           w='100%'
//           background='transparent'
//           p='48px'
//           mt={{ md: "150px", lg: "80px" }}>
//           <Heading color={titleColor} fontSize='32px' mb='10px'>
//             Checkout
//           </Heading>
//           <Text
//             mb='36px'
//             ms='4px'
//             color={textColor}
//             fontWeight='bold'
//             fontSize='14px'>
//             Checkout confirmation
//           </Text>
//           <FormControl>
//           <Text
//             mb='36px'
//             ms='4px'
//             color={textColor}
//             fontWeight='bold'
//             fontSize='14px'>
//             Product Information
//           </Text>
//             <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
//               Quantity
//             </FormLabel>
//             <Input
//             value={orderInfo.quantity}
//               borderRadius='15px'
//               mb='24px'
//               fontSize='sm'
//               type='number'
//               size='lg'
//             />
//             <Text
//             mb='36px'
//             ms='4px'
//             color={textColor}
//             fontWeight='bold'
//             fontSize='14px'>
//             Delivery Information
//           </Text>
//           <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
//               Phone Number
//             </FormLabel>
//             <Input
//             value={orderInfo.phonenumber}
//               borderRadius='15px'
//               mb='24px'
//               fontSize='sm'
//               type='number'
//               size='lg'
//             />
//             <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
//               Deliver Address
//             </FormLabel>
//            <Textarea
//             value={'${orderInfo.city.city}
//                 ${orderInfo.zone.zone_name}
//                 ${orderInfo.area.area_name}
//                 ${orderInfo.address}'
//                 Cit:{orderInfo.city.city}}
//               borderRadius='15px'
//               mb='24px'
//               fontSize='sm'
//               type='text'
//               size='lg'
//             />
//             <Button 
//               fontSize='15px'
//               type='submit'
//               bg='yellow.400'
//               w='100%'
//               h='45'
//               mb='20px'
//               color='white'
//               mt='20px'
//               _hover={{
//                 bg: "yellow.500",
//               }}
//               _active={{
//                 bg: "yellow.500",
//               }}>
//               Pay {orderInfo.price} &#x9F3; BDT
//             </Button>
            
//           </FormControl>
         
//         </Flex>
//       </Flex>
//       <Box
//         display={{ base: "none", md: "block" }}
//         overflowX='hidden'
//         h='100%'
//         w='40vw'
//         position='absolute'
//         right='0px'>
//         <Box
//           bgImage={signInImage}
//           w='100%'
//           h='100%'
//           bgSize='cover'
//           bgPosition='50%'
//           position='absolute'
//           borderBottomLeftRadius='20px'></Box>
//       </Box>
//     </Flex>
//   </Flex>
<Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap='22px'>
        <CheckoutConfirmation
          title={"Order Confirmation"}
          orderDetails={orderInfo}
        />
      </Grid>
  )
}

export default Checkout