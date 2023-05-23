import React from "react";
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { register, profile, gauthRegister, updateUserType} from "Services/userServices";
import { ChevronDownIcon } from '@chakra-ui/icons'
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
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

function SignIn() {
  const history = useHistory()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  // Chakra color mode
  const { isOpen, onOpen, onClose } = useDisclosure()
  const titleColor = useColorModeValue("gray.700", "yellow.200");
  const textColor = useColorModeValue("gray.500", "white");
  const [errorMsg, setErrorMsg] = React.useState(false)
  const [totalAmount, setTotalAmount] = React.useState(0)
  const [quantity, setQuantity] = React.useState(0)
  const [cities, setCities] = React.useState([])
  const [selectedCity, setSelectedCity] = React.useState({})
  const [zones, setZones] = React.useState([])
  const [selectedZone, setSelectedZone] = React.useState('')
  const [areas, setAreas] = React.useState([])
  const [selectedArea, setSelectedArea] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [address, setAddress] = React.useState('')
  const unitPrice = 6000;
  const [requiredFields, setRequiredFields] = React.useState(false)



  const handleQuantiy = (e) => {
    setQuantity(e.target.value)
  }
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }
  const handleCity = (e) => {

    setSelectedCity({
        city : cities.filter((city)=>{
            return city.id == e.target.value;
        })[0].city,
        id : e.target.value
    })
    // setSelectedCity(e.target.value)
    getZones(e.target.value).then((res)=>{
        setZones(res.zones)
    })
  }
  const handleZone = (e) => {
    setSelectedZone({
        zone_id : e.target.value,
        zone_name : zones.filter((zone)=>{
            return zone.zone_id == e.target.value;
        })[0].zone_name,
    })
    getAreas(e.target.value).then((res)=>{
        setAreas(res.areas)
    })
  }
  const handleArea = (e) => {
    setSelectedArea({
        area_id : e.target.value,
        area_name : areas.filter((area)=>{
            return area.area_id == e.target.value;
        })[0].area_name,
    })
  }
  const handleAddress = (e) => {
    setAddress(e.target.value)
  }
  const handleSubmit = () => {
    // console.log('Quantity:', quantity, 'Price:', totalAmount, 'Phone Number:', phone, 'City:', city, 'Zone:', selectedZone, 'Area:' , selectedArea, 'Full Address:', address )
    const orderDetails = {
        "quantity":quantity,
        "price":totalAmount,
        "phonenumber":phone,
        "shippingAddress":{
            "city":selectedCity,
            "zone":selectedZone,
            "area":selectedArea,
            "fullAddress":address
        }
    }
    localStorage.setItem('orderDetails',JSON.stringify(orderDetails))

    if (localStorage.getItem('accessToken'))
    {
        history.push('/auth/checkout')
    }
    if (!localStorage.getItem('accessToken')){
        history.push('/auth/signin')
    }
  }

  const handleCancel =()=> {
    if(! localStorage.getItem('accessToken')){
        history.push('/auth/signin')
    }
    if( localStorage.getItem('accessToken')){
        history.push('/admin/user/dashboard')
        //will redirect to landing page when deployed
    }
    
  }

  const validateForm = () => {
    if ( quantity > 0 && selectedZone !== "" && phone !== "" && selectedCity !== "" && selectedArea !== "" ) {
      return true;
    } else {
      return false;
    }
  };



  React.useEffect(() => {
    getCities().then((res)=>{
        // console.log(res)
        setCities(res.cities)
    })
  }, [])
//   React.useEffect(() => {
//     console.log(zones)
//   }, [zones])

  React.useEffect(() => {
    setTotalAmount(unitPrice*quantity)
  }, [quantity])

  React.useEffect(() => {
    if (validateForm()) setRequiredFields(true);
    if (! validateForm()) setRequiredFields(false);
  }, [quantity, selectedZone, selectedCity, selectedArea, phone]);

//   React.useEffect(() => {
//     if(selectedCity==='Dhaka'){ setZones(zoneA)}
//     if(selectedCity==='Chittagong'){ setZones(zoneB)}
//   }, [selectedCity])

//   React.useEffect(() => {
//     if(selectedZone==='a'){ setAreas(areaA)}
//   }, [selectedZone])


  


  return (
    <Flex position='relative' mb='40px'>
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        justifyContent='space-between'
        mb='30px'
        pt={{ sm: "100px", md: "0px" }}>
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}>
          <Flex
            direction='column'
            w='100%'
            background='transparent'
            p='48px'
            mt={{ md: "150px", lg: "80px" }}>
            <Heading color={titleColor} fontSize='32px' mb='10px'>
              Checkout
            </Heading>
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
              Fiilup the form below
            </Text>
            {/* { errorMsg && <Stack spacing={3}>
              <Alert status='error'>
                <AlertIcon/>
                wrong user credentials
              </Alert>
            </Stack>} */}
            <FormControl>
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
              Product Information
            </Text>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Quantity
              </FormLabel>
              <Input
                onChange={handleQuantiy}
                borderRadius='15px'
                mb='24px'
                fontSize='sm'
                type='number'
                placeholder='Number of Devices'
                size='lg'
                ref={initialRef}
              />
              <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
              Delivery Information
            </Text>
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Phone Number
              </FormLabel>
              <Input
                onChange={handlePhone}
                borderRadius='15px'
                mb='24px'
                fontSize='sm'
                type='number'
                placeholder='Phone Number'
                size='lg'
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Deliver Address
              </FormLabel>
              {cities && <Select placeholder='City'  ms='4px'mb='5px' onChange={handleCity}>
              {cities.map((city) => {
              return (
                
                <option key={city.id} name={city.city} label={city.city} value={city.id}>{city.city}</option>
              );
            })}
             </Select>}
              {zones && <Select placeholder='Zone'  ms='4px' mb={'5px'} onChange={handleZone}>
              {zones.map((zone) => {
              return (
                
                <option key={zone.zone_id} value={zone.zone_id}>{zone.zone_name}</option>
              );
            })}
             </Select>}
             {areas && <Select placeholder='Area'  ms='4px' mb={'5px'} onChange={handleArea}>
             {areas.map((area) => {
              return (
                <option key={area.area_id} value={area.area_id}>{area.area_name}</option>
              );
            })}
             </Select>}
             <Input
                onChange={handleAddress}
                borderRadius='15px'
                mb='24px'
                fontSize='sm'
                type='text'
                placeholder='Additional Info. (Ex: Road no, House no, Flat no )'
                size='lg'
                ref={initialRef}
              />
            {/* <Grid>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Cities
                </MenuButton>
                <MenuList>
                    <MenuItem>Dhaka</MenuItem>
                    <MenuItem>Chittagong</MenuItem>
                </MenuList>
            </Menu>
            </Grid> */}
              {/* <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Password
              </FormLabel>
              <Input
                borderRadius='15px'
                mb='36px'
                fontSize='sm'
                type='password'
                placeholder='Your password'
                size='lg'
                
                ref={finalRef}
              /> */}
              {/* <FormControl display='flex' alignItems='center'>
                <Switch id='remember-login' colorScheme='yellow' me='10px' />
                <FormLabel
                  htmlFor='remember-login'
                  mb='0'
                  ms='1'
                  fontWeight='normal'>
                  Remember me
                </FormLabel>
              </FormControl> */}
              <Button 
                // onClick={onOpen}
                onClick={handleSubmit}
                disabled={!requiredFields}
                fontSize='15px'
                type='submit'
                bg='yellow.400'
                w='100%'
                h='45'
                mb='20px'
                color='white'
                mt='20px'
                _hover={{
                  bg: "yellow.500",
                }}
                _active={{
                  bg: "yellow.500",
                }}>
                Pay {totalAmount} &#x9F3; BDT
              </Button>
              <Button 
                onClick={handleCancel}
                fontSize='15px'
                bg='gray.700'
                w='100%'
                h='45'
                mb='20px'
                color='white'
                mt='20px'
                _hover={{
                  bg: "yellow.500",
                }}
                _active={{
                  bg: "yellow.500",
                }}>
                Cancel
              </Button>
              
            </FormControl>
            {/* <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Don't have an account?
                <Link color={titleColor} as='span' ms='5px' fontWeight='bold' >
                  Sign Up
                </Link>
              </Text>
            </Flex> */}
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX='hidden'
          h='100%'
          w='40vw'
          position='absolute'
          right='0px'>
          <Box
            bgImage={signInImage}
            w='100%'
            h='100%'
            bgSize='cover'
            bgPosition='50%'
            position='absolute'
            borderBottomLeftRadius='20px'></Box>
        </Box>
      </Flex>
      {/* <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
         
          <ModalBody>
          <Card p='16px' my={{ sm: "24px", xl: "250px" }} >
      <CardHeader p='12px 5px' mb='12px'>
        <Text fontSize='lg' color={textColor} fontWeight='bold'>
          title
        </Text>
      </CardHeader>
      <CardBody px='5px'>
        <Flex direction='column'>
          <Text fontSize='md' color='gray.500' fontWeight='400' mb='30px'>
            Description
          </Text>
          <Flex align='center' mb='18px'>
            <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
              Number of Device:{" "}
            </Text>
            <Text fontSize='md' color='gray.500' fontWeight='400'>
              quantity
            </Text>
          </Flex>
          <Flex align='center' mb='18px'>
            <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
              Total Price:{" "}
            </Text>
            <Text fontSize='md' color='gray.500' fontWeight='400'>
              price &#x9F3;
            </Text>
          </Flex>
          <Flex align='center' mb='18px'>
            <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
              Phone Number:{" "}
            </Text>
            <Text fontSize='md' color='gray.500' fontWeight='400'>
              number
            </Text>
          </Flex>
          <Flex align='center' mb='18px'>
            <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
              Delivery Address:{" "}
            </Text>
            address

          </Flex>
          <Flex align='center' mb='18px'>
          <Button 
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
                Pay price &#x9F3; BDT
              </Button>
              <Button 
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
          </ModalBody>

       
        </ModalContent>
      </Modal> */}
    </Flex>
    
  );
}

export default SignIn;


// import React from 'react'
// import './Order.scss'

// const Order = () => {
//   return (
//     <div className='body'><div className='header'>
//     <h3>Checkout</h3>
// </div>

// <div className='main'>
    
//     <section class="checkout-form">
//         <div className='form' action="#!" method="get">
//             <h6>Contact information</h6>
//             <div class="form-control">
//                 <label for="checkout-email">E-mail</label>
//                 <div>
//                     <span class="fa fa-envelope"></span>
//                     <input type="email" id="checkout-email" name="checkout-email" placeholder="Enter your email..."/>
//                 </div>
//             </div>
//             <div class="form-control">
//                 <label for="checkout-phone">Phone</label>
//                 <div>
//                     <span class="fa fa-phone"></span>
//                     <input type="tel" name="checkout-phone" id="checkout-phone" placeholder="Enter you phone..."/>
//                 </div>
//             </div>
//             <br/>
//             <h6>Shipping address</h6>
//             <div class="form-control">
//                 <label for="checkout-name">Full name</label>
//                 <div>
//                     <span class="fa fa-user-circle"></span>
//                     <input type="text" id="checkout-name" name="checkout-name" placeholder="Enter you name..."/>
//                 </div>
//             </div>
//             <div class="form-control">
//                 <label for="checkout-address">Address</label>
//                 <div>
//                     <span class="fa fa-home"></span>
//                     <input type="text" name="checkout-address" id="checkout-address" placeholder="Your address..."/>
//                 </div>
//             </div>
//             <div class="form-control">
//                 <label for="checkout-city">City</label>
//                 <div>
//                     <span class="fa fa-building"></span>
//                     <input type="text" name="checkout-city" id="checkout-city" placeholder="Your city..."/>
//                 </div>
//             </div>
//             <div class="form-group">
//                 <div class="form-control">
//                     <label for="checkout-country">Country</label>
//                     <div>
//                         <span class="fa fa-globe"></span>
//                         <input type="text" name="checkout-country" id="checkout-country" placeholder="Your country..." list="country-list"/>
//                         <datalist id="country-list">
//                             <option value="India"></option>
//                             <option value="USA"></option>
//                             <option value="Russia"></option>
//                             <option value="Japan"></option>
//                             <option value="Egypt"></option>
//                         </datalist>
//                     </div>
//                 </div>
//                 <div class="form-control">
//                     <label for="checkout-postal">Postal code</label>
//                     <div>
//                         <span class="fa fa-archive"></span>
//                         <input type="numeric" name="checkout-postal" id="checkout-postal" placeholder="Your postal code..."/>
//         </div>
//                 </div>
//             </div>
//             <div class="form-control checkbox-control">
//                 <input type="checkbox" name="checkout-checkbox" id="checkout-checkbox"/>
//                 <label for="checkout-checkbox">Save this information for next time</label>
//             </div>
//             <div class="form-control-btn">
//                 <button>Continue</button>
//             </div>
//         </div>
//     </section>

//     <section class="checkout-details">
//         <div class="checkout-details-inner">
//             <div class="checkout-lists">
//                 <div class="card">
//                     <div class="card-image"><img src="https://rvs-checkout-page.onrender.com/photo1.png" alt=""/></div>
//                     <div class="card-details">
//                         <div class="card-name">Vintage Backbag</div>
//                         <div class="card-price">$54.99 <span>$94.99</span></div>
//                         <div class="card-wheel">
//                             <button>-</button>
//                             <span>1</span>
//                             <button>+</button>
//                         </div>
//                     </div>
//                 </div>
//                 {/* <div class="card">
//                     <div class="card-image"><img src="https://rvs-checkout-page.onrender.com/photo2.png" alt=""/></div>
//                     <div class="card-details">
//                         <div class="card-name">Levi Shoes</div>
//                         <div class="card-price">$74.99 <span>$124.99</span></div>
//                         <div class="card-wheel">
//                             <button>-</button>
//                             <span>1</span>
//                             <button>+</button>
//                         </div>
//                     </div>
//                 </div> */}
//             </div>
//             <div class="checkout-shipping">
//                 <h6>Shipping</h6>
//                 <p>$19</p>
//             </div>
//             <div class="checkout-total">
//                 <h6>Total</h6>
//                 <p>$148.98</p>
//             </div>
//         </div>
//     </section>

// </div>
//     </div>
//   )
// }

// export default Order