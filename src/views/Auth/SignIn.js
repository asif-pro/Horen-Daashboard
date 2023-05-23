import React from "react";
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { register, profile, gauthRegister, updateUserType} from "Services/userServices";
// Chakra imports
import {
  Box,
  Flex,
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

function SignIn() {
  const history = useHistory()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  // Chakra color mode
  const { isOpen, onOpen, onClose } = useDisclosure()
  const titleColor = useColorModeValue("gray.700", "yellow.200");
  const textColor = useColorModeValue("gray.500", "white");
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [errorMsg, setErrorMsg] = React.useState(false)
  const [userType, setUserType] = React.useState('')

  const handleUserType = (e) => {
    if(e.target.value ==='individual'){
      localStorage.setItem('userType', e.target.value)
      // history.push('/admin/user/dashboard')
      if(localStorage.getItem('orderDetails')){
        history.push('/auth/checkout')
      }
      if(!localStorage.getItem('orderDetails')){
        history.push('/admin/user/dashboard')
      }
    }
    if(e.target.value ==='corporate'){
      const userId = localStorage.getItem('userId')
      localStorage.setItem('userType', e.target.value)
      updateUserType(userId, e.target.value)
      // history.push('/admin/user/dashboard')
      if(localStorage.getItem('orderDetails')){
        history.push('/auth/checkout')
      }
      if(!localStorage.getItem('orderDetails')){
        history.push('/admin/user/dashboard')
      }
    }

    onClose()
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const goSignUp = ()=> {
    history.push('/auth/signup')
  }
  const login = async (e) => {
    e.preventDefault()
    const result = await signin(email, password)
    if(result && (email.trim()!="" || password.trim()!="")){
      localStorage.setItem('accessToken', result.accessToken)
      localStorage.setItem('userType', result.type)
      localStorage.setItem('userId', result.id)
      setErrorMsg(false)
      initialRef.current.value=""
      finalRef.current.value=""
      if(localStorage.getItem('orderDetails')){
        history.push('/auth/checkout')
      }
      if(!localStorage.getItem('orderDetails')){
        history.push('/admin/user/dashboard')
      }
      
    }
    else{
      setErrorMsg(true)
    }
    
  }


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
              Welcome Back
            </Heading>
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
              Enter your email and password to sign in
            </Text>
            { errorMsg && <Stack spacing={3}>
              <Alert status='error'>
                <AlertIcon/>
                wrong user credentials
              </Alert>
            </Stack>}
            <FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Email
              </FormLabel>
              <Input
                borderRadius='15px'
                mb='24px'
                fontSize='sm'
                type='text'
                placeholder='Your email adress'
                size='lg'
                onChange={handleEmail}
                ref={initialRef}
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Password
              </FormLabel>
              <Input
                borderRadius='15px'
                mb='36px'
                fontSize='sm'
                type='password'
                placeholder='Your password'
                size='lg'
                onChange={handlePassword}
                ref={finalRef}
              />
              <FormControl display='flex' alignItems='center'>
                <Switch id='remember-login' colorScheme='yellow' me='10px' />
                <FormLabel
                  htmlFor='remember-login'
                  mb='0'
                  ms='1'
                  fontWeight='normal'>
                  Remember me
                </FormLabel>
              </FormControl>
              <Button 
                onClick={login}
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
                SIGN IN
              </Button>
      
              <div>
        <GoogleOAuthProvider clientId="195127431392-am7f136teict4g6hn03qi09qpnre74at.apps.googleusercontent.com">
        {/* <GoogleOAuthProvider clientId="817453303535-urc0dcloheraap8nt91abpmcdigi74ec.apps.googleusercontent.com"> */}
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const token = credentialResponse.credential;
              const decode = jwt_decode(token);
              if (decode.email_verified) {
                try{
                  gauthRegister({
                      name:decode.name,
                      email:decode.email,
                      profilePic:decode.picture
                      }).then((response)=>{
                        if(response.message=='User already exists'){
                          if(response.userInfo.type=='individual'){
                            localStorage.setItem('userType', response.userInfo.type)
                            localStorage.setItem('userId', response.userInfo._id)
                            localStorage.setItem('accessToken', response.accessToken)
                            // history.push('/admin/user/dashboard')
                            if(localStorage.getItem('orderDetails')){
                              history.push('/auth/checkout')
                            }
                            if(!localStorage.getItem('orderDetails')){
                              history.push('/admin/user/dashboard')
                            }
                          }
                          if(response.userInfo.type=='corporate'){
                            localStorage.setItem('userType', response.userInfo.type)
                            localStorage.setItem('userId', response.userInfo._id)
                            localStorage.setItem('accessToken', response.accessToken)
                            // history.push('/admin/user/dashboard')
                            if(localStorage.getItem('orderDetails')){
                              history.push('/auth/checkout')
                            }
                            if(!localStorage.getItem('orderDetails')){
                              history.push('/admin/user/dashboard')
                            }
                            
                          }
                        }
                        if(response.message=='User Created Successfully'){
                            localStorage.setItem('userId', response.userId)
                            localStorage.setItem('accessToken', response.accessToken)
                            onOpen()
                          }
                        //   if(response.type=='corporate'){
                        //     localStorage.setItem('userType', response.type)
                        //     localStorage.setItem('userId', response.userId)
                        //     localStorage.setItem('accessToken', response.accessToken)
                        // // history.push('/auth/signin') send to corporate dashboard
                        //   }
                      })
                      setErrorMsg(false)
                  
                }
                catch(err){
                  console.log(err)
              
            }
          }
              // do login in with data
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            // width={width}
            // border={width}
            // type={'icon'}
          />
        </GoogleOAuthProvider>
            </div>
              
            </FormControl>
            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Don't have an account?
                <Link color={titleColor} as='span' ms='5px' fontWeight='bold' onClick={goSignUp}>
                  Sign Up
                </Link>
              </Text>
            </Flex>
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
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Account Type -</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight='bold' mb='1rem'>
              Choose your desire account type
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' value={'individual'} mr={3} onClick={handleUserType}>
              Individual
            </Button>
            <Button colorScheme='yellow' value={'corporate'} mr={3} onClick={handleUserType}>
              Corporate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
    
  );
}

export default SignIn;
